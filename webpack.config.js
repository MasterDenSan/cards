const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");

const isDev = process.env.NODE_ENV === "development";
const isProd = !isDev;

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (isProd) {
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const babelOptions = (preset) => {
  const opts = {
    presets: ["@babel/preset-env"],
    plugins: ["@babel/plugin-proposal-class-properties"],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const filename = (ext) => (isDev ? `[name.${ext}]` : `[name].[hash].${ext}`);

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: {
    main: ["@babel/polyfill", "./index.jsx"],
  },
  output: {
    filename: filename("js"),
    path: path.resolve(__dirname, "dist"),
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  optimization: optimization(),
  devServer: {
    port: 3000,
    open: true,
  },
  devtool: isDev ? "eval-source-map" : false,
  plugins: [
    new ESLintPlugin({ extensions: ["js", "jsx", "ts", "tsx"] }),
    new HTMLWebpackPlugin({
      template: "../public/index.html",
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/favicon.ico"),
          to: path.resolve(__dirname, "dist"),
        },
        {
          from: path.resolve(__dirname, "src/images"),
          to: path.resolve(__dirname, "dist/images"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: filename("css"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ["file-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions(),
        },
      },
      {
        test: /\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: babelOptions("@babel/preset-react"),
        },
      },
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
      },
    ],
  },
};
