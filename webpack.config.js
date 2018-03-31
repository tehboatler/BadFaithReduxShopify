var path = require('path');
const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: ["babel-polyfill", './src/app.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'env'],
          plugins: ['graphql-js-client-transform',"transform-object-rest-spread", "transform-class-properties" ]
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  // plugins: [
  //   // This helps ensure the builds are consistent if source hasn't changed:
  //   new webpack.optimize.OccurrenceOrderPlugin(),
  //   // Try to dedupe duplicated modules, if any:
  //   new webpack.optimize.UglifyJsPlugin({
  //     compress: {
  //       screw_ie8: true, // React doesn't support IE8
  //       warnings: false
  //     },
  //     mangle: {
  //       screw_ie8: true
  //     },
  //     output: {
  //       comments: false,
  //       screw_ie8: true
  //     }
  //   }),
  // ],
  devServer: {
    historyApiFallback: true
  }
};
