const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const srcDir = '../src/';

module.exports = {
    entry: {
        popup: path.join(__dirname, srcDir + 'popup.ts'),
        background: path.join(__dirname, srcDir + 'background.ts'),
        addToLeetcodeLists: path.join(__dirname, srcDir + 'addToLeetcodeLists.ts'),
        removeFromLeetcodeLists: path.join(__dirname, srcDir + 'removeFromLeetcodeLists.ts'),
        todaysProblems: path.join(__dirname, srcDir + 'todaysProblems.ts'),
        inject: path.join(__dirname, srcDir + 'inject.ts')
    },
    output: {
        path: path.join(__dirname, '../dist/js'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                exclude: /node_modules/,
                test: /\.tsx?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            "@src": path.resolve(__dirname, "src/"),
        },
    },
    plugins: [
        new CopyPlugin({
            patterns: [{ from: '.', to: '../', context: 'public' }],
            options: {}
        }),
    ]
}