import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target: "https://api.coingecko.com/api/v3",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ""),
            },
        },
    },
    resolve: {
        alias: {
            "@icons": "/src/assets/icons",
            "@images": "/src/assets/images",
            "@types": "/src/types",
        },
    },
});
