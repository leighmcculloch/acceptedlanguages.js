(function(window, document, undefined) {
  'use strict';

  var $ = window.languages || (window.languages = {});

  $.accepted = getAcceptedLanguages();

  $.acceptedExpanded = expandLanguages($.accepted);

  $.alternate = getAlternateLanguages();

  $.relevant = determineRelevantLanguages();

  function getAcceptedLanguages() {
    // navigator.languages:    Chrome & FF
    // navigator.language:     Safari & Others
    // navigator.userLanguage: IE & Others
    return window.navigator.languages || [window.navigator.language || window.navigator.userLanguage];
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
    var links = document.querySelector('head').querySelectorAll('link[rel="alternate"]');
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

  function determineRelevantLanguages() {
    return $.acceptedExpanded.filter(function(language) {
      return $.alternate.indexOf(language) !== -1;
    });
  }
}(window, document, undefined));
