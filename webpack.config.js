const { resolve } = require("path");
const CopyPlugin = require('copy-webpack-plugin');

const public = resolve(__dirname, "static");

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';
    
    return {
        mode: isProduction ? 'production' : 'development',
        entry: {
            bundle: "./src/client/index.tsx"
        },
        devtool: isProduction ? "source-map" : "eval-source-map",
        output: {
            filename: "[name].js",
            path: public,
            publicPath: "/",
            clean: true
        },
        resolve: {
            extensions: ['.js', '.ts', '.tsx'],
            alias: {
                '@': resolve(__dirname, 'src'),
                '@/client': resolve(__dirname, 'src/client'),
                '@/server': resolve(__dirname, 'src/server')
            }
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { 
                        from: resolve(__dirname, "src/assets/images"), 
                        to: resolve(public, "images"),
                        noErrorOnMissing: true
                    },
                    {
                        from: resolve(__dirname, "src/index.html"),
                        to: resolve(public, "index.html")
                    }
                ]
            })
        ],
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: [
                        { 
                            loader: 'ts-loader', 
                            options: { 
                                transpileOnly: true,
                                configFile: resolve(__dirname, 'tsconfig.json')
                            } 
                        }
                    ],
                    exclude: /node_modules/
                },
                {
                    test: /\.scss$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                modules: false,
                                sourceMap: !isProduction
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: !isProduction
                            }
                        }
                    ]
                },
                {
                    test: /\.css$/,
                    use: [
                        "style-loader",
                        {
                            loader: "css-loader",
                            options: {
                                sourceMap: !isProduction
                            }
                        }
                    ]
                },
                {
                    test: /\.(png|jpe?g|gif|svg|webp)$/i,
                    type: 'asset',
                    parser: {
                        dataUrlCondition: {
                            maxSize: 8 * 1024 // 8kb
                        }
                    },
                    generator: {
                        filename: 'images/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: 'fonts/[name].[hash][ext]'
                    }
                }
            ]
        },
        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                    },
                },
            },
        },
        performance: {
            hints: isProduction ? 'warning' : false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    };
};