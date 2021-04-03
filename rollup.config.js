import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import typescript from "@rollup/plugin-typescript";
import svg from "rollup-plugin-svg";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    svg(),
    typescript(),
    external(),
    babel({
      exclude: "node_modules/**",
      extensions,
    }),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
