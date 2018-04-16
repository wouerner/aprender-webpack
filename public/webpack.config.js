const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  output: {
      publicPath: 'teste/',
  },
  plugins: [
      new HtmlWebpackPlugin({
            title: "Webpack demo",
            template: './template.html',
            filename: '../application/modules/default/views/scripts/index.phtml'
          }),
    ],
};
