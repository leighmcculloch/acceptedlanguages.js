var mockWindow = {};
define('languages-window', function() { return mockWindow; });

define(['languages-util'], function(languagesUtil){

  describe('languages-util', function() {

    describe('.accepted', function() {

      describe('navigator defines languages', function() {
        beforeEach(function() {
          mockWindow.navigator = {
            languages: ['en-US', 'en', 'jp']
          }
        });

        it('should return the browsers languages', function() {
          expect(languagesUtil.getAcceptedLanguages()).toEqual(['en-US', 'en', 'jp']);
        });
      });

      describe('navigator defines language', function() {
        beforeEach(function() {
          mockWindow.navigator = {
            language: 'en-US'
          }
        });

        it('should return the browsers languages', function() {
          expect(languagesUtil.getAcceptedLanguages()).toEqual(['en-US']);
        });
      });

    });

  });

});
