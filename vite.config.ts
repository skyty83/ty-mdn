import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  // file:// 로 직접 열어도 동작하도록 상대 경로 빌드
  base: "./",
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "icons/*.png", "offline.html"],
      manifest: {
        name: "MDN 한국어 문서",
        short_name: "MDN 한국어",
        description:
          "MDN Web Docs 한국어판 — JavaScript와 Web APIs 문서를 오프라인에서도 볼 수 있는 PWA",
        lang: "ko",
        dir: "ltr",
        id: "./",
        start_url: "./",
        scope: "./",
        display: "standalone",
        orientation: "any",
        theme_color: "#1e1b4b",
        background_color: "#ffffff",
        icons: [
          { src: "icons/icon-192.png", sizes: "192x192", type: "image/png" },
          { src: "icons/icon-512.png", sizes: "512x512", type: "image/png" },
          {
            src: "icons/maskable-512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
          { src: "icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
        ],
      },
      workbox: {
        // 앱 셸 + 지연 로딩되는 문서 청크 + public 에셋을 모두 precache
        globPatterns: ["**/*.{js,css,html,png,svg,ico,woff2}"],
        navigateFallback: "index.html",
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // MDN 원문 외부 링크는 네트워크 우선으로 캐시
            urlPattern: ({ url }) => url.origin === "https://developer.mozilla.org",
            handler: "NetworkFirst",
            options: {
              cacheName: "mdn-external",
              expiration: { maxEntries: 100, maxAgeSeconds: 7 * 24 * 3600 },
            },
          },
        ],
      },
      devOptions: { enabled: false },
    }),
  ],
});
