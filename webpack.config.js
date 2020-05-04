const path = require("path");
const config = {
  entry: ["@babel/polyfill", "./src/index.js"],
  output: { path: path.resolve(__dirname, "build"), filename: "main.js" },
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    compress: true,
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        query: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            { plugins: ["@babel/plugin-proposal-class-properties"] },
          ],
        },
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "css-loader"],
      },
    ],
  },
};

module.exports = config;
