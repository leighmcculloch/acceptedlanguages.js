require("src/languages.js");

describe('languages', function() {
  beforeEach(function() {
    // var script = document.createElement("script");
    // script.type = "text/javascript";
    // script.src = "src/languages.js";
    // document.getElementsByTagName('head')[0].appendChild(script);
  });

  describe('.accepted', function() {
    it('should return the same as window.navigators languages, language or userLanguag', function() {
      expect(window.languages.accepted).toEqual(
        window.navigator.languages || [window.navigator.language || window.navigator.userLanguage]
      );
    });
  });

  describe('.acceptedExpanded', function() {
    it('should return the same as window.navigators languages, language or userLanguag', function() {
      expect(window.languages.accepted).toEqual(
        window.navigator.languages || [window.navigator.language || window.navigator.userLanguage]
      );
    });
  });
});
