const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',

  entry: {
    bundle: ["./modules/header/header.js", "./modules/body/body.js", "./modules/footer/footer.js"]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[].bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8564,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
        'style-loader',
        'css-loader',
        ]
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
                bypassOnDebug: true,
                disable: true,
            }
          },
        ],
      },
    ]
  }
};
