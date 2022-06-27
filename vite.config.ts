import { defineConfig } from "vite";
import { resolve } from "path";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vanillaExtractPlugin(), dts()],
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      formats: ["es"],
      fileName: () => "[name].js",
    },
    rollupOptions: {
      input: resolve(__dirname, "src/index.ts"),
      preserveModules: true,
      external: (id) => {
        if (id.includes("@vanilla-extract")) {
          return true;
        }
        return false;
      },
      output: {
        globals: {
          "@vanilla-extract/sprinkles": "@vanilla-extract/sprinkles",
        },
      },
    },
  },
});
