import webpack from "webpack";

const config: webpack.Configuration = {
    module: {
        rules: [{
            test: /\.s?css$/,
            use: [
                "style-loader",
                "css-loader",
                "postcss-loader",
                "sass-loader",
            ],
        }, {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "ts-loader",
            },
        }, {
            test: /jsx?$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
            },
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
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
    },
};

export default config;
