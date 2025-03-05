import { defineConfig, loadEnv } from "vite";
import path from "node:path";
import electron from "vite-plugin-electron/simple";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [
      react(),
      electron({
        main: {
          entry: "electron/main/main.ts",
          onstart({ startup }) {
            startup([
              ".",
              "--no-sandbox",
              "--sourcemap",
              "--remote-debugging-port=9222",
            ]);
          },
        },
        preload: {
          input: path.join(__dirname, "electron/preload/preload.ts"),
        },
        renderer: {},
      }),
      svgr(),
      tsConfigPaths(),
    ],
    server: {
      host: true,
      open: false,

      proxy: {
        "/api": {
          target: "https://kartomat.mbank.kg/api",
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/api/, ""),
        },
        "/cartomat": {
          target: env.VITE_CARD_MACHINE_URL,
          changeOrigin: true,
          rewrite: (p) => p.replace(/^\/cartomat/, ""),
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/shared/config/styles/vars/temp.scss";`,
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        hooks: resolve(__dirname, "./src/hooks"),
        components: resolve(__dirname, "./src/components"),
        assets: resolve(__dirname, "./src/assets"),
        layout: resolve(__dirname, "./src/layoutPages"),
        general: resolve(__dirname, "./src/general"),
        constants: resolve(__dirname, "./src/constants"),
        models: resolve(__dirname, "./src/models"),
        widgets: resolve(__dirname, "./src/widgets"),
        pages: resolve(__dirname, "./src/pages"),
        shared: resolve(__dirname, "./src/shared"),
        public: resolve(__dirname, "./src/public"),
      },
    },
  };
});
