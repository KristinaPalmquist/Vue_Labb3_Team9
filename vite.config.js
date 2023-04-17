import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";

//import { splitVendorChunkPlugin } from "vite";
//const SplitChunksPlugin = require('webpack/lib/optimize/SplitChunksPlugin');

import vue from "@vitejs/plugin-vue";

// splitVendorChunkPlugin()
// https://vitejs.dev/config/
export default defineConfig({
  base: "/Team9",
  plugins: [vue()],
  // plugins: [vue(), new SplitChunksPlugin()],
  // optimization: {
  //   splitChunks: {
  //     maxSize: 500000,
  //   },
  // },
  // build: {
  //   rollupOptions: {
  //     output: {
  //       manualChunks: () => 'everything.js'
  //     }
  //   }
  // },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "group-user": [
            // "./src/components/navBar.vue",
            "./src/components/ScreeningsToday.vue",
            "./src/components/SelectedScreenings.vue",
          ],
          "group-nav": ["./src/components/NavBar.vue"],
        },
      },
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
