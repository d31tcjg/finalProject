import { ref, onUnmounted } from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { firebaseConfig } from "../config/firebase";
import { useAuth } from "@vueuse/firebase";

firebase.initializeApp(firebaseConfig);

export const { auth, firestore } = firebase;

export const { isAuthenticated, user } = useAuth();

const { GoogleAuthProvider } = auth;
const db = firestore();

export const signIn = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const signUp = (email, password) =>
  auth().createUserWithEmailAndPassword(email, password);

export const googlePopup = () =>
  auth().signInWithPopup(new GoogleAuthProvider());

export const signOut = () => auth().signOut();

export const authentication = () => {
  const googlePopup = () => auth().signInWithPopup(new GoogleAuthProvider());
  const signOut = () => auth().signOut();
  return { googlePopup, signOut, isAuthenticated, user };
};

export const database = () => {
  const workouts = ref([]);

  const workoutCollection = db.collection("workouts");
  const workoutQuery = workoutCollection
    .orderBy("createdAt", "desc")
    .limit(100);

  const unsubscribe = workoutQuery.onSnapshot((s) => {
    workouts.value = s.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  });

  onUnmounted(unsubscribe);

  const inputWorkout = (text) => {
    if (!isAuthenticated.value) return;
    const { uid, displayName } = user.value;
    workoutCollection.add({
      userName: displayName,
      userId: uid,
      text,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };
  return { workouts, inputWorkout };
};
