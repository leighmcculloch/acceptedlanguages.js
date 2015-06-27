(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['languages-window'], factory);
  } else {
    root.languagesPage = factory(root);
  }
}(this, function (root) {
  'use strict';

  function getAlternateLanguages() {
    var links = root.document.querySelector('head').querySelectorAll('link[rel="alternate"]');
    var hreflangs = [];
    for (var i = 0; i < links.length; i++) {
      var link = links.item(i);
      var hreflang = link.getAttribute('hreflang');
      if (hreflang) {
        hreflangs.push(hreflang);
      }
    }
    return hreflangs;
  }

  return {
    getAlternateLanguages: getAlternateLanguages
  };
}));
