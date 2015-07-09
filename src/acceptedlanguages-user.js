import * as rooter from 'acceptedlanguages-root';

export function getAcceptedLanguages() {
  // navigator.languages:    Chrome & FF
  // navigator.language:     Safari & Others
  // navigator.userLanguage: IE & Others
  var root = rooter.getRoot();
  if (root.navigator) {
    return root.navigator.languages || [root.navigator.language || root.navigator.userLanguage];
  } else {
    return [];
  }
};
