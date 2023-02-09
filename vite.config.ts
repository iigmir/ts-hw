import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pages from "vite-plugin-pages";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        pages({
            dirs: "src/views",
            extensions: ["vue", "ts", "js"],
            exclude: ["**/components/*.*"],
        })
    ],
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url))
        }
    }
});