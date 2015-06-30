import window from 'acceptedlanguages-window';

export function getAcceptedLanguages() {
  // navigator.languages:    Chrome & FF
  // navigator.language:     Safari & Others
  // navigator.userLanguage: IE & Others
  if (window.navigator) {
    return window.navigator.languages || [window.navigator.language || window.navigator.userLanguage];
  } else {
    return [];
  }
};
