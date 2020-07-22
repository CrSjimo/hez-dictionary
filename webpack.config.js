const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'out', 'view','index'),
  watch: true,
  output: {
    path: path.join(__dirname,'out','dist'),
    publicPath: '/out/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'],
      },
    ],
  },
};