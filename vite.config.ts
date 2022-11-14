import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import webExtension from "vite-plugin-web-extension";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
    },
    plugins: [
        vue(),
        webExtension({
          manifest: "src/manifest.json",
          assets: "assets",
        })
    ],
})
