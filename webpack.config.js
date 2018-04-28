const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: "production",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'erapijs.js',
        library: 'erapijs'
    },
    optimization: {
        minimize: true,
        minimizer: [new UglifyJsPlugin({sourceMap: true, uglifyOptions: {}})]
    }
};