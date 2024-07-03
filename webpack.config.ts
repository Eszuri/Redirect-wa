import path from 'path';
import nodeExternals from 'webpack-node-externals';
import CopyPlugin from "copy-webpack-plugin";
const {
    NODE_ENV = 'production',
} = process.env;
module.exports = {
    entry: './src/index.ts',
    mode: NODE_ENV,
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    'ts-loader',
                ]
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/public", to: "public" },
                { from: "./src/views", to: "views" },
            ],
        }),
    ],
}