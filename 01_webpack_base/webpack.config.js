const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),
    filename: 'index.html'
})

module.exports = {

    plugins: [
        htmlWebpackPlugin
    ]
    ,
    // 所有第三方模块的配置规则
    // webpack 只能打包js html文件 所有其他的类型文件 必须使用第三方包 第三方模块是从后往前执行
    module : {
        rules: [
            {test: /\.js|jsx$/, use: 'babel-loader'
            },  //千万不要忘记添加exclude
            {
                test: /\.css$/, use: ['style-loader','css-loader']
            }
        ]

    },

    resolve: {

        extensions : ['.js', '.jsx', '.json'], // 默认帮你补全文件的后缀名
        alias: {
            '@' :path.join(__dirname, './src')  //这样@就表示项目根目录src的这一层
        }

    }

}