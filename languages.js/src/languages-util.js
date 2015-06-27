(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else {
    root.languagesUtil = factory(root);
  }
}(this, function (root) {
  'use strict';

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

  function getRelevantLanguages(acceptedLanguages, availableLanguages) {
    return acceptedLanguages.filter(function(language) {
      return availableLanguages.indexOf(language) !== -1;
    });
  }

  return {
    expandLanguages: expandLanguages,
    getRelevantLanguages: getRelevantLanguages
  };
}));
