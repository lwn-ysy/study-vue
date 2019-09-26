const path = require('path');
const VueLoaderPlugin =require('vue-loader/lib/plugin')
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            "vue$": "vue/dist/vue.js" //修改vue被导入时候的包的路径
        }
    },
    plugins:[
        new VueLoaderPlugin()//vue-laoder@15版本需要注册插件
    ],
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] }, 
            { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] }, 
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] }, 
            { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, 
            { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
            { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ }, 
            { test: /\.vue$/, use: 'vue-loader' } 
        ]
    }
}