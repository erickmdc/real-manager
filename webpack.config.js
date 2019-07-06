const path = require('path');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/app/index.js',
  output: {
    path: path.join(__dirname, 'public', 'scripts'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    publicPath: '/scripts/'
  }
};

// module.exports = (env) => {
//   const isProduction = env === 'production';
//   const CSSExtract = new MiniCssExtractPlugin ('styles.css');

//   return {
//     entry: './src/index.js',
//     output: {
//       path: path.join(__dirname, 'public', 'scripts'),
//       filename: 'app.js'
//     },
//     module: {
//       rules: [{
//         use: {
//           loader: 'babel-loader'
//         },
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/
//       }, {
//         test: /\.s?css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               publicPath: 'public/'
//             }
//           },
//           {
//             loader: 'css-loader',
//             options: {
//               sourceMap: true
//             }
//           },
//           {
//             loader: 'sass-loader',
//             options: {
//               sourceMap: true
//             }
//           }
//         ]
//       }]
//     },
//     plugins: [
//       new MiniCssExtractPlugin ({
//         filename: 'syles.css', chunkFilename: 'styles.css'
//       }),
//     ],
//     devtool: isProduction ? 'nosources-source-map' : 'inline-source-map',
//     devServer: {
//       contentBase: path.join(__dirname, 'public'),
//       historyApiFallback: true,
//       publicPath: '/scripts/'
//     }
//   };
// };