import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import webExtension from "vite-plugin-web-extension";
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        minify: false,
        outDir: path.resolve(__dirname, "dist"),
        emptyOutDir: true,
    },
    assetsInclude: [],
    plugins: [
        webExtension({
          manifest: "src/manifest.json",
          assets: "assets",
        }),
        vue(),
        vuetify({autoImport: true}),
    ],
})
