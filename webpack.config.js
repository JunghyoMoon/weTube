const path = require("path");
const extractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV; // package.json에서 옵션에 대한 설정 가져오기
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    rules: [
      {
        // 모든 scss혹은 sass확장자를 찾는 정규식
        test: /\.(scss|sass)$/,
        use: extractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
          // loader 서순에 주의할것!(역순으로 적용됨)
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};

module.exports = config;
