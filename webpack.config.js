var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
var BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: ['babel-polyfill', './src/app.js'],
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
          plugins: [
            'graphql-js-client-transform',
            'transform-object-rest-spread',
            'transform-class-properties'
          ]
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
      },
      {
  test: /\.(html)$/,
  use: {
    loader: 'html-loader',
    options: {
      attrs: [':data-src']
    }
  }
}
    ]
  },
  plugins: [
    // new HardSourceWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new UglifyJSPlugin()
    // new BundleAnalyzerPlugin()
  ],
  // devtool: 'eval',
  devServer: {
    historyApiFallback: true
  }
};
