const webpack = require('webpack');

module.exports = {
  output: {
    pathinfo: true,
  },
  devtool: '#cheap-module-eval-source-map',
  stats: 'verbose',
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
  devServer: {
    // https: true,
    open: false,
    host: '0.0.0.0',
    port: 3001,
    disableHostCheck: true,
    historyApiFallback: true,
    hot: true,
    hotOnly: true,
    overlay: {
      warnings: false,
      errors: true,
    },
    // Enabled this for Docker on Windows so hotload works.
    // watchOptions: {
    //   poll: true,
    // },
    compress: true,
    public: 'http://0.0.0.0:3001',
    proxy: {
      '*': 'http://proxy:3000',
    },
  },
};
