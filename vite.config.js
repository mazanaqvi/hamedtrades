import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function normalizeBase(value) {
  if (!value || value === "/") return "/";
  return value.endsWith("/") ? value : `${value}/`;
}

export default defineConfig({
  base: normalizeBase(process.env.VITE_BASE),
  plugins: [react()],
});
