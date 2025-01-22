import typescript from "@rollup/plugin-typescript";
const isDeno = process.env.BUILD === "deno";
const outputFolder = isDeno ? "./dist-deno" : "./dist";

export default {
  input: "./src/index.ts",
  external: [],
  output: {
    file: outputFolder + "/ts-morph-bootstrap.js",
    format: "es",
    interop: "compat",
  },
  plugins: [
    typescript({
      tsconfig: "tsconfig.rollup.json",
    }),
  ],
};
