var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Sky.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Sky.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
