import * as rooter from 'acceptedlanguages-root';

export function getCurrentLanguage() {
  var root = rooter.getRoot();
  var html = root.document.querySelector('html');
  return html.getAttribute('lang');
};

export function getAlternateLanguages() {
  var root = rooter.getRoot();
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
};

export function getHrefForLanguage(language) {
  var root = rooter.getRoot();
  var link = root.document.querySelector('head').querySelector('link[rel="alternate"][hreflang="' + language + '"]');
  return link.getAttribute('href');
};
