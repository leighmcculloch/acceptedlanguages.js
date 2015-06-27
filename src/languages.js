(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([
      'languages-util',
      'languages-user',
      'languages-page'
    ], factory);
  } else {
    root.languages = factory(
      root.languagesUtil,
      root.languagesUser,
      root.languagesPage
    );
  }
}(this, function (util, user, page) {
  'use strict';

  var languages = {};

  languages.accepted = user.getAcceptedLanguages();
  languages.acceptedExpanded = util.expandLanguages(languages.accepted);
  languages.alternate = page.getAlternateLanguages();
  languages.alternateExpanded = util.expandLanguages(languages.alternate);
  languages.relevant = util.getRelevantLanguages(languages.acceptedExpanded, languages.alternateExpanded);

  return Object.freeze(languages);
}));
