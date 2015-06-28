module.exports = {
    context: __dirname + '/js',
    entry: './retable_test.js',
    output: {
        filename: 'app.js',
        path: __dirname + '/build'
    },
    module: {
        loaders:[
            {
                test: /\.js$/,
                exclude: [/node_modules/, /bower_components/],
                loaders: ["babel-loader"]
            }
        ]
    }
};