const HtmlWebpackPlugin = require('html-webpack-plugin')
const htmlPlguin = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html'
})
const path = require('path')
module.exports = {
    mode: 'development', //开发模式
    // mode: 'production' 
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle-m.js'
    },
    plugins: [htmlPlguin],
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader', 'postcss-loader']
        }, {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, ]
    }
}