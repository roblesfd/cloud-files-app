const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    hot: true,
    open: true,
    watchFiles: ["src/**/*"],
  },
  entry: "./src/index.js",
  optimization: {
    runtimeChunk: "single",
  },
});
