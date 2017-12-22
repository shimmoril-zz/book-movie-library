const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './main.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader',
          "eslint-loader",
        ],
      },
      {
          test: /\.scss$/,
          use: [{
              loader: "style-loader", //creates style nodes from js strings
          }, {
              loader: "css-loader", //translates css into commonjs
          }, {
              loader: "sass-loader" //compiles sass to css
          }]
      }
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
