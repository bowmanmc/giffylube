
module.exports = {
    context: __dirname + '/src/modules',
    entry: './app.js',
    output: {
        path: __dirname + '/src/scripts',
        filename: 'site.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};
