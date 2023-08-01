const path = require('path')


module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        static: path.resolve(__dirname, 'dist'),
        compress: true,
        open: true,
        port:  8564,
    },
    resolve: {
      extensions: [ ".js", ".jsx"],
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
            test: /\.(jpg|png)$/i,
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
          {
            test: /\.jsx?$/i,
            include: path.resolve(__dirname, 'src'),
            exclude:/node_modules/,
            use: {
              loader: 'babel-loader',
            },
          },
        ],
    }

}