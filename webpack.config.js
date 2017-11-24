module.exports = {
  entry: "./src/web/main.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: "style!css"
      },{
        test: /\.js$/,
        loader: "jsx-loader"
      }
    ]
  },
  resolve:{
    extensions: ['', 'js', 'jsx']
  },
  plugin: []
}
