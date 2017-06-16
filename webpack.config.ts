import * as HtmlPlugin from "html-webpack-plugin";
import * as path from "path";

export default {
  devtool: "sourcemap",
  entry: {
    redux: [
      "es6-promise/auto",
      "es6-object-assign/auto",
      "es6-symbol/implement",
      "./examples/redux/index.tsx",
    ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
      },
    ],
  },
  output: {
    filename: "[chunkhash].js",
    path: path.resolve("dist"),
  },
  plugins: [
    new HtmlPlugin(),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
};
