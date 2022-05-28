const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.common.js');
module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8001
  }
});