const webpack = require("webpack");

module.exports = {
  webpack: {
    configure: {
      resolve: {
        fallback: {
          process: require.resolve("process/browser"),
          zlib: require.resolve("browserify-zlib"),
          stream: false,
          util: require.resolve("util"),
          buffer: require.resolve("buffer"),
          assert: require.resolve("assert"),
          fs: false,
          path: false,
          os: false,
          net: false,
          tls: false,
          crypto: false,
          https: false,
          http: false,
          url: false,
        },
      },
      plugins: [
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
          process: "process/browser.js",
        }),
      ],
    },
  },
};
