import * as util from 'acceptedlanguages-util';
import * as user from 'acceptedlanguages-user';
import * as page from 'acceptedlanguages-page';

export function getRelevantAlternateLanguages() {
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
