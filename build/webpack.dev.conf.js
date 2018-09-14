const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './example/index.js',
    mode: 'development',
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'postcss-loader',
                'sass-loader'
            ]
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }, {
            test: /\.(png|gif|jpe?g|svg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'example/index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        inline: true,
        port: 3333
    }
}
