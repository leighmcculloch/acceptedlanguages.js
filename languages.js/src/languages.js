(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'languages-util',
      'languages-user',
      'languages-page',
      'languages-relevant'
    ], factory);
  } else {
    root.languages = factory(
      root.languagesUtil,
      root.languagesUser,
      root.languagesPage,
      root.languagesRelevant
    );
  }
}(this, function (util, user, page, relevant) {
  'use strict';

  var languages = {};

  languages.accepted = user.getAcceptedLanguages();
  languages.acceptedExpanded = util.expandLanguages(languages.accepted);
  languages.alternate = page.getAlternateLanguages();
  languages.alternateExpanded = util.expandLanguages(languages.alternate);
  languages.relevant = relevant.getRelevantAlternateLanguages();

  return languages;
}));
