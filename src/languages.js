(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(['languages-util'], factory);
  } else {
    root.languages = factory(root.languagesUtil);
  }
}(this, function (languagesUtil) {
  'use strict';

  var languages = {};

  languages.accepted = languagesUtil.getAcceptedLanguages();
  languages.acceptedExpanded = languagesUtil.expandLanguages(languages.accepted);
  languages.alternate = languagesUtil.getAlternateLanguages();
  languages.relevant = languagesUtil.determineRelevantLanguages(languages.accepted, languages.alternate);

  return Object.freeze(languages);
}));
