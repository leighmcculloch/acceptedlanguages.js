import getRoot from 'acceptedlanguages-root';

export function getAlternateLanguages() {
  var root = getRoot();
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
