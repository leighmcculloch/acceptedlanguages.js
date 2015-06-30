import window from 'acceptedlanguages-window';

export function getAlternateLanguages() {
  var links = window.document.querySelector('head').querySelectorAll('link[rel="alternate"]');
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
