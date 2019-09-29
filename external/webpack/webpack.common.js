const path = require('path');
const merge = require('webpack-merge');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = merge({
    target: "web",
    entry: {
        'navigator-webpart-bundle': path.join(__dirname, '../src/webparts/navigator/NavigatorWebPart.ts'),
        'part-config-webpart-bundle': path.join(__dirname, '../src/webparts/partConfig/PartConfigWebPart.ts')
    },
    output: {
        path: path.join(__dirname, '../dist'),
        filename: '[name].js',
        libraryTarget: "umd",
        library: "[name]"
    },
    performance: {
        hints: false
    },
    externals: [
        /^@microsoft\//,
        'NavigatorWebPartStrings',
        'PartConfigWebPartStrings'],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                },
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "@microsoft/loader-load-themed-styles", // hack, loads ouif themable styles
                        options: {
                            async: true
                        }
                    },
                    'css-modules-typescript-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, // translates CSS into CommonJS
                    "sass-loader" // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    plugins: [new ForkTsCheckerWebpackPlugin({
        tslint: true
    }),
    new Visualizer()]
});