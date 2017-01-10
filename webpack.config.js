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
    preLoaders: [
      //{test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader'}
    ],
    loaders: [
      {test: [/\.js$/, /\.es6$/], exclude: /(node_modules|bower_components)/, loader: 'babel-loader', query: {cacheDirectory: true, presets: ['react', 'es2015']}},
      {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  
  devtool: "eval"
}