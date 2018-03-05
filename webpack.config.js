const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: "./src/app.js",
  output: {
    filename: "js/app.js",
    path: path.resolve(__dirname, 'public')
  },
  resolve: {
    alias: {
      handlebars: 'handlebars/dist/handlebars.runtime.min.js'
    }
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ["css-loader", 'resolve-url-loader']
        })
      },
      {
        test: /\.hbs$/,
        loader: "handlebars-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000, // Convert images < 8kb to base64 strings
            name: 'images/[hash]-[name].[ext]'
          }
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/app.css"),
  ]

}
