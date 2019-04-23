var path = require("path");
const webpack = require('webpack');

module.exports = function() {
    return {
        entry: {
            commons: [
                'react',
                'react-dom',
                'react-router',
                'react-router-dom',
                'react-conduit'
            ]
        },
        output: {
            path: path.join(__dirname,'../', "dll"),
            filename: "[name].js",
            library: "[name]",
            libraryTarget:'umd'
        },
        plugins: [
            new webpack.DllPlugin({
                path: path.join(__dirname,'../', "dll", "[name]-manifest.json"),
                name: "[name]"
            })
        ]
    };
}
