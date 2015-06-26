require.config({
  baseUrl: '../src',
  paths: {
      'jasmine':      ['../tests/vendor/jasmine-2.3.4/jasmine'],
      'jasmine-html': ['../tests/vendor/jasmine-2.3.4/jasmine-html'],
      'jasmine-boot': ['../tests/vendor/jasmine-2.3.4/boot'],
      '$tests':       ['../tests'],
      '$specs':       ['../tests/specs'],
      '$fixtures':    ['../tests/fixtures']
  },
  shim: {
    'jasmine-html': {
      deps: ['jasmine']
    },
    'jasmine-boot': {
      deps: ['jasmine', 'jasmine-html']
    }
  }
});

require(['jasmine-boot'], function () {
  require(['$specs/languages-util.specs'], function () {
    window.onload();
  })
});
