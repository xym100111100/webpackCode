module.exports = {
    entry: "./runoob1.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        // rules: [
        //     { test: /\.css$/, use: [{ loader: "style-loader" }, { loader: "css-loader" }] }
        // ]
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
            }
          ]
    }
};