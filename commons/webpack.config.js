var path = require("path");
const webpack = require('webpack');

module.exports = {
    resolve: {
        extensions: [".js", ".jsx"]
    },
    entry: {
        commons:[
            'react',
            'react-dom',
            'react-router'
        ]
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "[name].js",
        library: "[name]"
    },
    plugins: [
        new webpack.DllPlugin({
            context: __dirname,
            path: path.join(__dirname, "build", "[name]-manifest.json"),
            name: "[name]"
        })
    ]
};
