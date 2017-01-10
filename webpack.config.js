var path = require('path')

module.exports = {
  entry: {
    app: [
      'webpack-dev-server/client?http://localhost:3000/',
      './src/app.js'
    ]
  },
  output: {
    path: path.resolve(__dirname, '/'),
    filename: '/dist/bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {presets: ['es2015']}},
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  
  devtool: "eval"
}