(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['languages-window'], factory);
  } else {
    root.languagesUtil = factory(root);
  }
}(this, function (root) {
  'use strict';

  function getAcceptedLanguages() {
    // navigator.languages:    Chrome & FF
    // navigator.language:     Safari & Others
    // navigator.userLanguage: IE & Others
    if (root.navigator) {
      return root.navigator.languages || [root.navigator.language || root.navigator.userLanguage];
    } else {
      return [];
    }
  }

  function expandLanguages(languages) {
    var expanded = [];
    var seen = {};
    languages.forEach(function(language){
      if (seen[language]) return;
      expanded.push(language);
      seen[language] = true;
      var code = language.match(/^[a-zA-Z]+/)[0];
      if (code != language) {
        expanded.push(code);
        seen[code] = true;
      }
    });
    return expanded;
  }

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

  function getRelevantLanguages(acceptedLanguages, availableLanguages) {
    return acceptedLanguages.filter(function(language) {
      return availableLanguages.indexOf(language) !== -1;
    });
  }

  return {
    getAcceptedLanguages: getAcceptedLanguages,
    getAlternateLanguages: getAlternateLanguages,
    getRelevantLanguages: getRelevantLanguages,
    expandLanguages: expandLanguages
  };
}));
