// webpack.config.js
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const env = process.env.WEBPACK_ENV;
const path = require('path');
const libraryName = 'skrollto';
const plugins = [];
let outputFile;
let entry;
let output;

if (env === 'build') {
    plugins.push(new UglifyJsPlugin({ minimize: true }));
    outputFile = `${libraryName}.min.js`;
} else {
    outputFile = `${libraryName}.js`;
}

if (env === 'test') {
    entry = `mocha!${__dirname}/test/skrollto.spec.js`;
    output = {
        path: `${__dirname}/test`,
        filename: 'test.bundle.js',
    };
} else {
    entry = `${__dirname}/src/index.js`;
    output = {
        path: `${__dirname}/lib`,
        filename: outputFile,
        library: libraryName,
        libraryTarget: 'umd',
        umdNamedDefine: true,
    };
}

const config = {
    entry,
    // devtool: 'source-map',
    output,
    module: {
        loaders: [{
            test: /(\.jsx|\.js)$/,
            loader: 'babel-loader?cacheDirectory',
            exclude: /(node_modules|bower_components)/,
        }, {
            test: /(\.jsx|\.js)$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
        }],
    },
    resolve: {
        root: path.resolve('./src'),
        extensions: ['', '.js'],
    },
    plugins,
};

module.exports = config;
