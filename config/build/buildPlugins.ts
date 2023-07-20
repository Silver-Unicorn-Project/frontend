import HtmlWebpackPlugin from "html-webpack-plugin";
import StylelintWebpackPlugin from "stylelint-webpack-plugin";
import ESLintWebpackPlugin from "eslint-webpack-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";

export function buildPlugins({paths}: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
    }),
    new StylelintWebpackPlugin({
      files: '{**/*,*}.scss',
    }),
    new ESLintWebpackPlugin({
      files: '{**/*,*}.{tsx,js,ts}',
    }),
    new webpack.ProgressPlugin(),
  ]
}