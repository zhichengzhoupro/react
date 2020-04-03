const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    // Change le point d'entrée en index.js
    entry: "./src/index.js",
    // Active le sourcemap pour le debugging
    devtool: "source-map",
    resolve: {
        // Ajoute '.ts' et'.tsx' aux extensions traitées
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    output: {
        path: path.join(__dirname, "/dist"),
        filename: "index_bundle.js"
    },
    module: {
        rules: [
            // Tous les fichiers en `.ts` ou `.tsx` seront traités en utilisant `awesome-typescript-loader`
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css|.scss$/, use: [ MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({      // Instancie le plugin
            template: "./src/index.html"  // Spécifie notre template
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[chunkHash:8].css'
        })
    ]
};