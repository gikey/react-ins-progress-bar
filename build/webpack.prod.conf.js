const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'react-ins-progress-bar.js',
        libraryTarget: 'commonjs2'
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
        }]
    },
    externals: [
        'react',
        'react-dom',
        'prop-types',
        'styled-components'
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    }
}
