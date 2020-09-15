const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装



module.exports = {
  mode: 'development',
  entry: {
    app: './src/app.js',
    search: './src/search.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
   // publicPath: __dirname +"/dist/"   // 域名前缀,不写使用相对路径也行
  },
 
  module: {   // 这里的规则可以被import的方式覆盖
    
    rules: [
      {
        test: /\.css$/,
        use: [ // style-loader 和css-loader的顺序不能反过来。
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader'
      }
    ]
  },
  plugins: [
  
    new HtmlWebpackPlugin({template: './index.html'})
  ]
  
}