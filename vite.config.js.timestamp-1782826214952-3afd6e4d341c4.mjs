// vite.config.js
import { defineConfig } from "file:///Users/user/Documents/start%20coding/vite/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import { mkdirSync } from "fs";
import tailwindcss from "file:///Users/user/Documents/start%20coding/vite/node_modules/@tailwindcss/vite/dist/index.mjs";
import pugPlugin from "file:///Users/user/Documents/start%20coding/vite/node_modules/@macropygia/vite-plugin-pug-static/dist/index.js";
import { viteStaticCopy } from "file:///Users/user/Documents/start%20coding/vite/node_modules/vite-plugin-static-copy/dist/index.js";
var __vite_injected_original_dirname = "/Users/user/Documents/start coding/vite";
var createStructure = () => ({
  name: "create-structure",
  buildStart() {
    const dirs = [
      "src/components",
      "src/scripts",
      "src/data",
      "src/styles/components",
      "src/assets/images",
      "src/assets/fonts",
      "src/assets/icons"
    ];
    dirs.forEach((dir) => mkdirSync(dir, { recursive: true }));
  },
  writeBundle() {
    const outDirs = [
      "docs/assets/images",
      "docs/assets/fonts",
      "docs/assets/icons",
      "docs/assets/js"
    ];
    outDirs.forEach((dir) => mkdirSync(dir, { recursive: true }));
  }
});
var vite_config_default = defineConfig({
  root: "src",
  base: "./",
  plugins: [
    createStructure(),
    tailwindcss(),
    viteStaticCopy({
      targets: [
        { src: "assets/images/*", dest: "assets/images" }
      ]
    }),
    pugPlugin({
      buildLocals: {
        siteName: "site name",
        currentYear: (/* @__PURE__ */ new Date()).getFullYear()
      },
      buildOptions: {
        basedir: resolve(process.cwd(), "src"),
        pretty: true
      }
    })
  ],
  resolve: {
    alias: {
      "@": resolve(process.cwd(), "src"),
      "@components": resolve(process.cwd(), "src/components"),
      "@styles": resolve(process.cwd(), "src/styles"),
      "@assets": resolve(process.cwd(), "src/assets"),
      "@scripts": resolve(process.cwd(), "src/scripts"),
      "@fonts": resolve(process.cwd(), "src/fonts")
    }
  },
  build: {
    outDir: "../docs",
    emptyOutDir: true,
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        main: resolve(__vite_injected_original_dirname, "src/index.pug"),
        app: resolve(__vite_injected_original_dirname, "src/main.js")
      },
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name && assetInfo.name.endsWith(".css")) {
            return "assets/styles.css";
          }
          if (assetInfo.name && /\.(woff2?|ttf|otf|eot)$/.test(assetInfo.name)) {
            return "assets/fonts/[name][extname]";
          }
          if (assetInfo.name && /\.(png|jpe?g|gif|svg|webp)$/.test(assetInfo.name)) {
            return "assets/images/[name][extname]";
          }
          return "assets/[name][extname]";
        },
        chunkFileNames: "assets/js/[name].js",
        entryFileNames: "assets/js/[name].js"
      }
    }
  },
  server: {
    port: 3e3,
    host: true,
    open: true
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvdXNlci9Eb2N1bWVudHMvc3RhcnQgY29kaW5nL3ZpdGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy91c2VyL0RvY3VtZW50cy9zdGFydCBjb2Rpbmcvdml0ZS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvdXNlci9Eb2N1bWVudHMvc3RhcnQlMjBjb2Rpbmcvdml0ZS92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IG1rZGlyU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ0B0YWlsd2luZGNzcy92aXRlJ1xuaW1wb3J0IHB1Z1BsdWdpbiBmcm9tICdAbWFjcm9weWdpYS92aXRlLXBsdWdpbi1wdWctc3RhdGljJ1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSdcblxuY29uc3QgY3JlYXRlU3RydWN0dXJlID0gKCkgPT4gKHtcbiAgbmFtZTogJ2NyZWF0ZS1zdHJ1Y3R1cmUnLFxuICBidWlsZFN0YXJ0KCkge1xuICAgIGNvbnN0IGRpcnMgPSBbXG4gICAgICAnc3JjL2NvbXBvbmVudHMnLFxuICAgICAgJ3NyYy9zY3JpcHRzJyxcbiAgICAgICdzcmMvZGF0YScsXG4gICAgICAnc3JjL3N0eWxlcy9jb21wb25lbnRzJyxcbiAgICAgICdzcmMvYXNzZXRzL2ltYWdlcycsXG4gICAgICAnc3JjL2Fzc2V0cy9mb250cycsXG4gICAgICAnc3JjL2Fzc2V0cy9pY29ucycsXG4gICAgXVxuICAgIGRpcnMuZm9yRWFjaChkaXIgPT4gbWtkaXJTeW5jKGRpciwgeyByZWN1cnNpdmU6IHRydWUgfSkpXG4gIH0sXG4gIHdyaXRlQnVuZGxlKCkge1xuICAgIGNvbnN0IG91dERpcnMgPSBbXG4gICAgICAnZG9jcy9hc3NldHMvaW1hZ2VzJyxcbiAgICAgICdkb2NzL2Fzc2V0cy9mb250cycsXG4gICAgICAnZG9jcy9hc3NldHMvaWNvbnMnLFxuICAgICAgJ2RvY3MvYXNzZXRzL2pzJyxcbiAgICBdXG4gICAgb3V0RGlycy5mb3JFYWNoKGRpciA9PiBta2RpclN5bmMoZGlyLCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KSlcbiAgfVxufSlcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogJ3NyYycsXG4gIGJhc2U6ICcuLycsXG5cbiAgcGx1Z2luczogW1xuICAgIGNyZWF0ZVN0cnVjdHVyZSgpLFxuICAgIHRhaWx3aW5kY3NzKCksXG4gICAgdml0ZVN0YXRpY0NvcHkoe1xuICAgICAgdGFyZ2V0czogW1xuICAgICAgICB7IHNyYzogJ2Fzc2V0cy9pbWFnZXMvKicsIGRlc3Q6ICdhc3NldHMvaW1hZ2VzJyB9LFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBwdWdQbHVnaW4oe1xuICAgICAgYnVpbGRMb2NhbHM6IHtcbiAgICAgICAgc2l0ZU5hbWU6ICdzaXRlIG5hbWUnLFxuICAgICAgICBjdXJyZW50WWVhcjogbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLFxuICAgICAgfSxcbiAgICAgIGJ1aWxkT3B0aW9uczoge1xuICAgICAgICBiYXNlZGlyOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMnKSxcbiAgICAgICAgcHJldHR5OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KSxcbiAgXSxcblxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjJyksXG4gICAgICAnQGNvbXBvbmVudHMnOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvY29tcG9uZW50cycpLFxuICAgICAgJ0BzdHlsZXMnOiByZXNvbHZlKHByb2Nlc3MuY3dkKCksICdzcmMvc3R5bGVzJyksXG4gICAgICAnQGFzc2V0cyc6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9hc3NldHMnKSxcbiAgICAgICdAc2NyaXB0cyc6IHJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJ3NyYy9zY3JpcHRzJyksXG4gICAgICAnQGZvbnRzJzogcmVzb2x2ZShwcm9jZXNzLmN3ZCgpLCAnc3JjL2ZvbnRzJyksXG4gICAgfSxcbiAgfSxcblxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uL2RvY3MnLFxuICAgIGVtcHR5T3V0RGlyOiB0cnVlLFxuICAgIGNzc0NvZGVTcGxpdDogZmFsc2UsXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgaW5wdXQ6IHtcbiAgICAgICAgbWFpbjogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvaW5kZXgucHVnJyksXG4gICAgICAgIGFwcDogcmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMvbWFpbi5qcycpLFxuICAgICAgfSxcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xuICAgICAgICAgIGlmIChhc3NldEluZm8ubmFtZSAmJiBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLmNzcycpKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2Fzc2V0cy9zdHlsZXMuY3NzJ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoYXNzZXRJbmZvLm5hbWUgJiYgL1xcLih3b2ZmMj98dHRmfG90Znxlb3QpJC8udGVzdChhc3NldEluZm8ubmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiAnYXNzZXRzL2ZvbnRzL1tuYW1lXVtleHRuYW1lXSdcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGFzc2V0SW5mby5uYW1lICYmIC9cXC4ocG5nfGpwZT9nfGdpZnxzdmd8d2VicCkkLy50ZXN0KGFzc2V0SW5mby5uYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuICdhc3NldHMvaW1hZ2VzL1tuYW1lXVtleHRuYW1lXSdcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJ1xuICAgICAgICB9LFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0uanMnLFxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ2Fzc2V0cy9qcy9bbmFtZV0uanMnLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIHNlcnZlcjoge1xuICAgIHBvcnQ6IDMwMDAsXG4gICAgaG9zdDogdHJ1ZSxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVMsU0FBUyxvQkFBb0I7QUFDdFUsU0FBUyxlQUFlO0FBQ3hCLFNBQVMsaUJBQWlCO0FBQzFCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQUN0QixTQUFTLHNCQUFzQjtBQUwvQixJQUFNLG1DQUFtQztBQU96QyxJQUFNLGtCQUFrQixPQUFPO0FBQUEsRUFDN0IsTUFBTTtBQUFBLEVBQ04sYUFBYTtBQUNYLFVBQU0sT0FBTztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQ0EsU0FBSyxRQUFRLFNBQU8sVUFBVSxLQUFLLEVBQUUsV0FBVyxLQUFLLENBQUMsQ0FBQztBQUFBLEVBQ3pEO0FBQUEsRUFDQSxjQUFjO0FBQ1osVUFBTSxVQUFVO0FBQUEsTUFDZDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFDQSxZQUFRLFFBQVEsU0FBTyxVQUFVLEtBQUssRUFBRSxXQUFXLEtBQUssQ0FBQyxDQUFDO0FBQUEsRUFDNUQ7QUFDRjtBQUVBLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE1BQU07QUFBQSxFQUVOLFNBQVM7QUFBQSxJQUNQLGdCQUFnQjtBQUFBLElBQ2hCLFlBQVk7QUFBQSxJQUNaLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQLEVBQUUsS0FBSyxtQkFBbUIsTUFBTSxnQkFBZ0I7QUFBQSxNQUNsRDtBQUFBLElBQ0YsQ0FBQztBQUFBLElBQ0QsVUFBVTtBQUFBLE1BQ1IsYUFBYTtBQUFBLFFBQ1gsVUFBVTtBQUFBLFFBQ1YsY0FBYSxvQkFBSSxLQUFLLEdBQUUsWUFBWTtBQUFBLE1BQ3RDO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWixTQUFTLFFBQVEsUUFBUSxJQUFJLEdBQUcsS0FBSztBQUFBLFFBQ3JDLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxRQUFRLFFBQVEsSUFBSSxHQUFHLEtBQUs7QUFBQSxNQUNqQyxlQUFlLFFBQVEsUUFBUSxJQUFJLEdBQUcsZ0JBQWdCO0FBQUEsTUFDdEQsV0FBVyxRQUFRLFFBQVEsSUFBSSxHQUFHLFlBQVk7QUFBQSxNQUM5QyxXQUFXLFFBQVEsUUFBUSxJQUFJLEdBQUcsWUFBWTtBQUFBLE1BQzlDLFlBQVksUUFBUSxRQUFRLElBQUksR0FBRyxhQUFhO0FBQUEsTUFDaEQsVUFBVSxRQUFRLFFBQVEsSUFBSSxHQUFHLFdBQVc7QUFBQSxJQUM5QztBQUFBLEVBQ0Y7QUFBQSxFQUVBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLGNBQWM7QUFBQSxJQUNkLGVBQWU7QUFBQSxNQUNiLE9BQU87QUFBQSxRQUNMLE1BQU0sUUFBUSxrQ0FBVyxlQUFlO0FBQUEsUUFDeEMsS0FBSyxRQUFRLGtDQUFXLGFBQWE7QUFBQSxNQUN2QztBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sZ0JBQWdCLENBQUMsY0FBYztBQUM3QixjQUFJLFVBQVUsUUFBUSxVQUFVLEtBQUssU0FBUyxNQUFNLEdBQUc7QUFDckQsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxVQUFVLFFBQVEsMEJBQTBCLEtBQUssVUFBVSxJQUFJLEdBQUc7QUFDcEUsbUJBQU87QUFBQSxVQUNUO0FBQ0EsY0FBSSxVQUFVLFFBQVEsOEJBQThCLEtBQUssVUFBVSxJQUFJLEdBQUc7QUFDeEUsbUJBQU87QUFBQSxVQUNUO0FBQ0EsaUJBQU87QUFBQSxRQUNUO0FBQUEsUUFDQSxnQkFBZ0I7QUFBQSxRQUNoQixnQkFBZ0I7QUFBQSxNQUNsQjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFFQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUVGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
