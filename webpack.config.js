const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

createConfig = (target, libraryTarget) => ({
    mode: "production",
    entry: './src/index.js',
    target,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `erapijs.${target}.${libraryTarget}.js`,
        library: 'erapijs',
        libraryTarget,
        globalObject: 'this'
    },
    optimization: {
        minimize: false,
        minimizer: [new UglifyJsPlugin({sourceMap: true, uglifyOptions: {}})]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-env']
                    }
                }
            }
        ]
    }
});

module.exports = [
    createConfig('web', 'amd'),
    createConfig('web', 'var'),
    createConfig('web', 'commonjs2'),
    createConfig('node', 'commonjs2')
];