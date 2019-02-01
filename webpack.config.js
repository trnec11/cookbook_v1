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
    entry: './server/app.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'server.js',
    },
    resolve: {
        // Add '.ts' and '.tsx' as a resolvable extension.
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            // All files with a '.ts'
            // extension will be handled by 'ts-loader'
            {
                use: 'ts-loader',
                test: /\.ts?$/
            },
        ],
    },
    target: 'node',
    externals: nodeModules,
};