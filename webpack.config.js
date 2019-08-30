const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    devServer: {
      port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader?name=[name].[ext]&outputPath=img',
                    'image-webpack-loader'
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            { 
                test: /\.pug$/,
                use: ["pug-loader"]
            },
        ]
    },
    optimization: {
        minimize: false
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.pug',
            minify: {
                collapseWhitespace: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true
            },
            favicon: './src/favicon.ico'
        })
    ]
}

module.exports = (env, arg) => {
    if (arg.mode === 'dev') {}
    if (arg.mode === 'prod') {}
    return config;
}