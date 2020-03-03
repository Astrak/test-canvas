const path = require("path");
const merge = require("webpack-merge");
const dir = path.resolve(__dirname);

const mainConfig = {
    context: dir,
    mode: "development",
    output: { filename: "[name].bundle.js" },
    resolve: {
        extensions: [".webpack.js", ".web.ts", ".ts", ".tsx", ".web.js", ".js"],
    },
    module: { rules: [{ test: /\.tsx?$/, loader: "ts-loader" }] },
    devServer: { contentBase: dir, publicPath: "/dist/", open: true },
};

const appConfiguration = merge(mainConfig, { entry: { my: "./index.ts" } });

module.exports = appConfiguration;
