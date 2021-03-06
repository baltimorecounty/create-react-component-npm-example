import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";

export default [
  {
    input: "demo/index.js",
    output: [{ file: pkg.demo, format: "cjs" }],
    external: ["react", "react-dom"],
    plugins: [
      resolve({
        extensions: [".mjs", ".js", ".jsx", ".json", ".node"]
      }),
      babel({
        exclude: "node_modules/**"
      })
    ]
  },
  // CommonJS (for Node) and ES module (for bundlers) build.
  // (We could have three entries in the configuration array
  // instead of two, but it's quicker to generate multiple
  // builds from a single configuration where possible, using
  // an array for the `output` option, where we can specify
  // `file` and `format` for each target)
  {
    input: "src/index.js",
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" }
    ],
    external: ["react", "react-dom"],
    plugins: [
      resolve({
        extensions: [".mjs", ".js", ".jsx", ".json", ".node"]
      }),
      babel({
        exclude: "node_modules/**"
      })
    ]
  }
];
