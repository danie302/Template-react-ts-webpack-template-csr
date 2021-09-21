/* eslint-disable @typescript-eslint/no-var-requires */
const CSSMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

/** @type {import('webpack').Configuration} */
module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].[contenthash].js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", "json"],
        alias: {
            "@api": path.resolve(__dirname, "./src/api"),
            "@pages": path.resolve(__dirname, "./src/pages"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@styles": path.resolve(__dirname, "./src/styles"),
            "@repo": path.resolve(__dirname, "./src/repositories"),
            "@templates": path.resolve(__dirname, "./src/templates"),
            "@images": path.resolve(__dirname, "./src/assets/images"),
            "@components": path.resolve(__dirname, "./src/components")
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.css|.scss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/images/[hash][ext][query]"
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                type: "asset/resource",
                generator: {
                    filename: "static/fonts/[hash][ext][query]"
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
            inject: true
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].[hash].css"
        }),
        new Dotenv(),
        new CleanWebpackPlugin(),
        new BundleAnalyzerPlugin.BundleAnalyzerPlugin({
            analyzerMode: "static",
            openAnalyzer: false
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [new CSSMinimizerPlugin(), new TerserPlugin()]
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        historyApiFallback: true,
        liveReload: true,
        compress: true,
        port: 9000,
        open: true
    }
};
