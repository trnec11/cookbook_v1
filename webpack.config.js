var fs = require('fs');

var nodeModules = {};

fs.readdirSync('node_modules')
    .filter(function (x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function (mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: {
        server: './server/app.ts',
        client: './client/index.tsx'
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name]-bundle.js',
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
        rules: [
            // All files with a '.ts'
            // extension will be handled by 'ts-loader'
            {
                // use: 'ts-loader',
                test: /\.(ts|tsx)$/,
                loader: 'awesome-typescript-loader',
            }
        ],
    },
    target: 'node',
    externals: nodeModules,
};