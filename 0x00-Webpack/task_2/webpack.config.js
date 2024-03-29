const path = require('path');

module.exports = {
  mode: 'production',

  entry: path.resolve(__dirname, 'js/dashboard_main.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
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
