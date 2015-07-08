import getRoot from 'acceptedlanguages-root';

export function getAcceptedLanguages() {
  // navigator.languages:    Chrome & FF
  // navigator.language:     Safari & Others
  // navigator.userLanguage: IE & Others
  var root = getRoot();
  if (root.navigator) {
    return root.navigator.languages || [root.navigator.language || root.navigator.userLanguage];
  } else {
    return [];
  }
};
