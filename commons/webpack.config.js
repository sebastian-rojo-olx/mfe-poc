var path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
        commons:[
            'react',
            'react-dom',
            'react-router',
            'react-router-dom'
        ]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.join(__dirname, "build", "[name]-manifest.json"),
            name: "[name]"
        })
    ]
};
