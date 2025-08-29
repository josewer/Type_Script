const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/main.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
        include: [path.resolve(__dirname, "src")]
      },
    ],
  }, devServer: {
    static: path.resolve(__dirname, "public"),
    port: 3000,
    open: true,
    hot: true,
    liveReload: true,
    watchFiles: ["src/**/*", "public/index.html"], // 👀 vigila src y el html, pero NO bundle.js
  },
};
