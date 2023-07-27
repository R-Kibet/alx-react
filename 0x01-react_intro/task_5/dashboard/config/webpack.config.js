const path = require('path')

module.exports = {
    mode: 'development',
    entry:{ 
        bundle:path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js"
    },
    devtool: 'inline-source-map',

    devServer: {
        hot: true,
        contentBase: path.resolve('./dist'),
        compress: true,
        port: 3000,
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

}