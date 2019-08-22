import { terser } from "rollup-plugin-terser";
import { version } from "./package.json";

export default {
  input: "./src/main.js",
  output: {
    file: "dist/main.js",
    format: "esm",
    banner: "/* reuse-utility Library version: " + version + " */",
    footer: "/* follow me on Github! https://github.com/velusgautam */"
  },
  plugins: [
    terser({
      output: {
        comments: function(node, comment) {
          var type = comment.type;
          if (type == "comment2") {
            return /reuse|follow/i.test(comment.value);
          }
        }
      }
    })
  ]
};
