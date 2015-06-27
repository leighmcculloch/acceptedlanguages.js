(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['languages-window'], factory);
  } else {
    root.languagesUser = factory(root);
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

  return {
    getAcceptedLanguages: getAcceptedLanguages
  };
}));
