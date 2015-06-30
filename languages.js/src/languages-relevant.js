(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([,
      'languages-util',
      'languages-user',
      'languages-page'
    ], factory);
  } else {
    root.languagesRelevant = factory(
      root.languagesUtil,
      root.languagesUser,
      root.languagesPage
    );
  }
}(this, function (util, user, page) {
  'use strict';

  function getRelevantAlternateLanguages() {
    var acceptedLanguageExpanded = util.expandLanguages(user.getAcceptedLanguages());
    var alternateLanguageExpanded = util.expandLanguages(page.getAlternateLanguages());

    var acceptedLanguages = Object.keys(acceptedLanguageExpanded);
    var alternateLanguages = Object.keys(alternateLanguageExpanded);
    var relevantLanguages = acceptedLanguages.filter(function(language) {
      return alternateLanguages.indexOf(language) !== -1;
    });

    var relevantAlternateLanguages = relevantLanguages.map(function(language) {
      return alternateLanguageExpanded[language];
    });

    var uniq = {};
    var uniqueRelevantAlternateLanguages = relevantAlternateLanguages.filter(function(language) {
      if (uniq[language]) {
        return false;
      }
      uniq[language] = true;
      return true;
    });

    return uniqueRelevantAlternateLanguages;
  };

  return {
    getRelevantAlternateLanguages: getRelevantAlternateLanguages
  };
}));
