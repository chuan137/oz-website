const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const NpmInstallPlugin = require('npm-install-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

const PATHS = {
  app: path.resolve(__dirname, './app'),
  build: path.resolve(__dirname, './client')
};

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const common = {
  entry: {
    app: PATHS.app,
    vendor: ['react', 'react-dom']
  },
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: PATHS.app,
        loaders: ['style', 'css']
      },
      {
        test: /\.jsx?$/,
        include: PATHS.app,
        loaders: ['babel?cacheDirectory']
      }
    ]
  }
}

if (TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devServer: {
      contentBase: PATHS.build,
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'minimal'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new NpmInstallPlugin({ save: true }),
      new CommonsChunkPlugin('vendor', 'vendor.bundle.js')
    ]
  })
}

if (TARGET === 'build') {
  module.exports = merge(common, {});
}
