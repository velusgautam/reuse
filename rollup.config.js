import { terser } from "rollup-plugin-terser";

export default {
  input: "./src/main.js",
  plugins: [terser()],
  output: {
    compact: true,
    file: "dist/main.js",
    format: "esm"
  }
};
