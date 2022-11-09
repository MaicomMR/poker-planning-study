module.exports = {
    entry: "./src/index.js",
    output: {
      filename: "bundle.js",
    },
    mode: "production",
    target: "node",
    externals: {
      bufferutil: "bufferutil",
      "utf-8-validate": "utf-8-validate",
    },
  };