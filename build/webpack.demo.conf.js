const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './example/index.js',
	output: {
		path: path.resolve(__dirname, '../gh-pages'),
		filename: '[name].[hash].js',
	},
	mode: 'production',
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
	optimization: {
		runtimeChunk: {
		    name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				commons: {
					chunks: 'initial',
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0
				},
				vendor: { 
					test: /node_modules/,
					chunks: 'initial',
					name: 'vendor',
					priority: 10, 
					enforce: true
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: 'example/index.html',
			inject: true
		}),
		new webpack.HotModuleReplacementPlugin()
	]
}