const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.dirname(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Cloud Manager",
      filename: "index.html",
      template: "./src/index.html",
    }),
    new HtmlWebpackPlugin({
      title: "Ingresar a mi cuenta",
      filename: "login.html",
      template: "./src/login.html",
    }),
    new HtmlWebpackPlugin({
      title: "Mis Archivos",
      filename: "archivos.html",
      template: "./src/archivos.html",
    }),
    new HtmlWebpackPlugin({
      title: "Pruebas",
      filename: "tests.html",
      template: "./src/tests.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
};
