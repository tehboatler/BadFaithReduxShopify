// var path = require('path');
// const webpack = require('webpack');
// const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// module.exports = {
//   entry: './src/app.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'public'),
//     publicPath: '/'
//   },
//   watch: true,
//   module: {
//     rules: [
//       {
//         test: /\.es6$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['es2017']
//         }
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2017', 'stage-1'],
//           plugins: ['graphql-js-client-transform']
//         }
//       },
//       {
//         test: /\.css$/,
//         use: [{ loader: 'style-loader' }, { loader: 'css-loader' }]
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         use: [
//           {
//             loader: 'file-loader',
//             options: {}
//           }
//         ]
//       }
//     ]
//   },
//   plugins: [
//     new UglifyJSPlugin()
//   ],
//   devServer: {
//     historyApiFallback: true
//   }
// };

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if (process.env.NODE_ENV === 'test') {
  require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '.env.development' });
}

module.exports = env => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');

  return {
    entry: path.join(__dirname, 'public'),
    devtool: 'cheap-eval-source-map',
    output: {
      path: path.join(__dirname, 'public', 'index.html'),
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.js', '.json'],
    },
    stats: {
      colors: true,
      reasons: true,
      chunks: true,
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true,
                },
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true,
                },
              },
            ],
          }),
        },
      ],
    },
    plugins: [CSSExtract],
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true,
      publicPath: '/',
    },
  };
};