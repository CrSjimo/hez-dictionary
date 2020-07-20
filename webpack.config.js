const path = require('path');
module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'out', 'editor', 'index'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  }
};