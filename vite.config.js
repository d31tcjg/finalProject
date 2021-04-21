import vue from "@vitejs/plugin-vue";
import ViteComponents from "vite-plugin-components";
import ViteIcons, { ViteIconsResolver } from "vite-plugin-icons";

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */

export default {
  plugins: [
    vue(),
    ViteComponents({
      customComponentResolvers: ViteIconsResolver({ componentPrefix: "" }),
    }),
    ViteIcons(),
  ],
};
