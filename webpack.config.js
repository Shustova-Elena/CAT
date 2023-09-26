const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

let mode = 'development'
if (process.env.NODE_ENV === 'production') {
    mode = 'production'
}

const plugins = [
    new HtmlWebpackPlugin({
        template: './public/index.html',
        filename: './index.html',
        favicon: './public/favicon.png',
    }),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
    }),
    new ESLintPlugin({
        extensions: ['js', 'jsx', 'ts', 'tsx'],
        failOnError: true,
        emitWarning: false,
      }),
]

if (process.env.SERVE) {
    plugins.push(new ReactRefreshWebpackPlugin())
}

module.exports = {
    mode,
    plugins,
    entry: './src/index.tsx',
    devtool: 'source-map',
    output: {
        filename: 'static/[name].[contenthash].js',
        path: path.resolve(__dirname, 'build'),
        assetModuleFilename: 'assets/[hash][ext][query]',
        clean: true,
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devServer: {
        port: 3000,
        hot: true,
        open: true,
    },

    module: {
        rules: [
            { test: /\.(html)$/, use: ['html-loader'] },
            {
                test: /\.(css)$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true,
                    },
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    optimization:
        process.env.NODE_ENV === 'production'
            ? {
                  moduleIds: 'deterministic',
                  splitChunks: {
                      chunks: 'all',
                  },
                  runtimeChunk: {
                      name: 'manifest',
                  },
              }
            : {},
    externals:
        process.env.NODE_ENV === 'production'
            ? {
                  react: 'React',
                  'react-dom': 'ReactDOM',
              }
            : {},
}
