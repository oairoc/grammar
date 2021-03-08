const path = require('path')

// webpack所有的配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后的文件名
        filename: 'bundle.js'
    },
    // 指定打包时要使用到的模块
    module: {
        // 指定要加在的规则
        rules: [
            {
                // 指定规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use:'ts-loader',
                // 要排除的文件
                exclude:/node_modules/
            }
        ]
    }
}