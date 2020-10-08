const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlguin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    mode: 'development', //开发模式
    // mode: 'production' 
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle-m.js'
    },
    plugins: [htmlPlguin, new VueLoaderPlugin()],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
        }, {
            test: /\.jpg|png|gif|bmp|ttf|eot|svg|woff|woff2$/,
            use: 'url-loader?limit=1694'
        }, {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue-loader'
        }]
    }
}