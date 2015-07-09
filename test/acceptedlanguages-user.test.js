import * as root from 'acceptedlanguages-root';
import * as user from 'acceptedlanguages-user';

var mockRoot = {};

beforeEach(function() {
  root.setRoot(mockRoot);
});

afterEach(function() {
  root.setRoot(this);
});

describe('acceptedlanguages-util', function() {

  describe('.accepted', function() {

    describe('navigator defines languages', function() {
      beforeEach(function() {
        mockRoot.navigator = {
          languages: ['en-AU', 'en', 'jp']
        }
      });

      it('should return the browsers languages', function() {
        expect(user.getAcceptedLanguages()).toEqual(['en-AU', 'en', 'jp']);
      });
    });

    describe('navigator defines language', function() {
      beforeEach(function() {
        mockRoot.navigator = {
          language: 'en-AU'
        }
      });

      it('should return the browsers languages', function() {
        expect(user.getAcceptedLanguages()).toEqual(['en-AU']);
      });
    });

    describe('navigator defines userLanguage', function() {
      beforeEach(function() {
        mockRoot.navigator = {
          userLanguage: 'en-AU'
        }
      });

      it('should return the browsers languages', function() {
        expect(user.getAcceptedLanguages()).toEqual(['en-AU']);
      });
    });

  });

});
