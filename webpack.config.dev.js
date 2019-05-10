const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');  
module.exports = {  //对外抛出配置信息
    entry:'./src/index.js', //指定被打包的js模块
    output:{  //配置打包后的文件相关信息
        path:path.resolve(__dirname,'dist'), //（1）打包后的文件存放路径
        filename:'index.js'  //(2)打包后的文件名称
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'Learn Webpack',
            filename:'index.html',
            template:'./index.html'
        })
    ],
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test:/\.css$/,
                loader:["style-loader","css-loader"]
            }
        ]
    },
    devServer:{
        port:8088,
        open:true
    }
   
}