var mockWindow = {};
define('languages-window', function() { return mockWindow; });

define(['languages-user'], function(user){

  describe('languages-util', function() {

    describe('.accepted', function() {

      describe('navigator defines languages', function() {
        beforeEach(function() {
          mockWindow.navigator = {
            languages: ['en-AU', 'en', 'jp']
          }
        });

        it('should return the browsers languages', function() {
          expect(user.getAcceptedLanguages()).toEqual(['en-AU', 'en', 'jp']);
        });
      });

      describe('navigator defines language', function() {
        beforeEach(function() {
          mockWindow.navigator = {
            language: 'en-AU'
          }
        });

        it('should return the browsers languages', function() {
          expect(user.getAcceptedLanguages()).toEqual(['en-AU']);
        });
      });

      describe('navigator defines userLanguage', function() {
        beforeEach(function() {
          mockWindow.navigator = {
            userLanguage: 'en-AU'
          }
        });

        it('should return the browsers languages', function() {
          expect(user.getAcceptedLanguages()).toEqual(['en-AU']);
        });
      });

    });

  });

});
