import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      tsconfigPath: "./tsconfig.lib.json",
      include: ["lib"],
      exclude: ["**/*.stories.ts", "**/*.test.tsx"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./lib"),
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: path.resolve(__dirname, "lib/main.ts"),
      name: "probable-invention",
      fileName: (format) => `probable-invention.${format}.js`,
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: Object.keys(peerDependencies as Record<string, string>),
      output: { globals: { react: "React", "react-dom": "ReactDOM" } },
    },
  },
});
