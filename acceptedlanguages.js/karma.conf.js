module.exports = function(config) {
  config.set({
    browsers: [
      'PhantomJS'
    ],
    frameworks: [
      'jasmine'
    ],
    files: [
      'test/*.test.js'
    ],
    preprocessors: {
      'test/*.test.js': ['webpack']
    },
    webpack: {
      resolve:{
        modulesDirectories: [
          'src/'
        ]
      },
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader' }
        ]
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    plugins: [
      'karma-jasmine',
      require('karma-webpack'),
      'karma-phantomjs-launcher'
    ]
  });
};
