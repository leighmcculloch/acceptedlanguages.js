module.exports = {
  entry: {
    acceptedlanguages: './src/acceptedlanguages.js',
  },
  resolve:{
    modulesDirectories: [
      'src'
    ]
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel-loader',
    }],
  },
  output: {
    path: './dist',
    filename: '[name].js',
    library: 'acceptedlanguages',
    libraryTarget: 'umd'
  }
}
