const webpack = require('webpack');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    "path": require.resolve("path-browserify"),
    "os": require.resolve("os-browserify/browser"),
    "crypto": require.resolve("crypto-browserify"),
    "buffer": require.resolve("buffer/"),
    "stream": require.resolve("stream-browserify"),
    "vm": require.resolve("vm-browserify"),
    "process": require.resolve("process/browser")
  };

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ]);

  if (config.devServer) {
    config.devServer.setupMiddlewares = (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      // Custom middleware logic (if needed)
      middlewares.unshift((req, res, next) => {
        console.log('Custom middleware');
        next();
      });

      return middlewares;
    };
  }

  return config;
};