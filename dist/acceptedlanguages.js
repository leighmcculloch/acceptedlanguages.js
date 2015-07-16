(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define(factory);
	else if(typeof exports === 'object')
		exports["acceptedlanguages"] = factory();
	else
		root["acceptedlanguages"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _acceptedlanguagesUtil = __webpack_require__(1);

	var util = _interopRequireWildcard(_acceptedlanguagesUtil);

	var _acceptedlanguagesUser = __webpack_require__(2);

	var user = _interopRequireWildcard(_acceptedlanguagesUser);

	var _acceptedlanguagesPage = __webpack_require__(4);

	var page = _interopRequireWildcard(_acceptedlanguagesPage);

	var _acceptedlanguagesRelevant = __webpack_require__(5);

	var relevant = _interopRequireWildcard(_acceptedlanguagesRelevant);

	exports['default'] = {
	  lib: {
	    util: util,
	    user: user,
	    page: page,
	    relevant: relevant
	  },
	  current: page.getCurrentLanguage(),
	  accepted: user.getAcceptedLanguages(),
	  acceptedExpanded: util.expandLanguages(user.getAcceptedLanguages()),
	  alternate: page.getAlternateLanguages(),
	  alternateExpanded: util.expandLanguages(page.getAlternateLanguages()),
	  relevant: relevant.getRelevantAlternateLanguages()
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.expandLanguages = expandLanguages;

	function expandLanguages(languages) {
	  var expanded = {};
	  languages.forEach(function (language) {
	    expanded[language] = language;
	    var code = language.match(/^[a-zA-Z]+/)[0];
	    if (code != language && !expanded[code]) {
	      expanded[code] = language;
	    }
	  });
	  return expanded;
	}

	;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getAcceptedLanguages = getAcceptedLanguages;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _acceptedlanguagesRoot = __webpack_require__(3);

	var rooter = _interopRequireWildcard(_acceptedlanguagesRoot);

	function getAcceptedLanguages() {
	  // navigator.languages:    Chrome & FF
	  // navigator.language:     Safari & Others
	  // navigator.userLanguage: IE & Others
	  var root = rooter.getRoot();
	  if (root.navigator) {
	    return root.navigator.languages || [root.navigator.language || root.navigator.userLanguage];
	  } else {
	    return [];
	  }
	}

	;

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getRoot = getRoot;
	exports.setRoot = setRoot;
	var root = window;

	function getRoot() {
	  return root;
	}

	;

	function setRoot(newRoot) {
	  root = newRoot;
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getCurrentLanguage = getCurrentLanguage;
	exports.getAlternateLanguages = getAlternateLanguages;
	exports.getHrefForLanguage = getHrefForLanguage;
	exports.getNameForLanguage = getNameForLanguage;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _acceptedlanguagesRoot = __webpack_require__(3);

	var rooter = _interopRequireWildcard(_acceptedlanguagesRoot);

	function getCurrentLanguage() {
	  var root = rooter.getRoot();
	  var html = root.document.querySelector('html');
	  return html.getAttribute('lang');
	}

	;

	function getAlternateLanguages() {
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
	}

	;

	function getHrefForLanguage(language) {
	  var root = rooter.getRoot();
	  var link = root.document.querySelector('head').querySelector('link[rel="alternate"][hreflang="' + language + '"]');
	  return link.getAttribute('href');
	}

	;

	function getNameForLanguage(language) {
	  var root = rooter.getRoot();
	  var link = root.document.querySelector('head').querySelector('link[rel="alternate"][hreflang="' + language + '"]');
	  return link.getAttribute('data-lang-name');
	}

	;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	exports.getRelevantAlternateLanguages = getRelevantAlternateLanguages;

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

	var _acceptedlanguagesUtil = __webpack_require__(1);

	var util = _interopRequireWildcard(_acceptedlanguagesUtil);

	var _acceptedlanguagesUser = __webpack_require__(2);

	var user = _interopRequireWildcard(_acceptedlanguagesUser);

	var _acceptedlanguagesPage = __webpack_require__(4);

	var page = _interopRequireWildcard(_acceptedlanguagesPage);

	function getRelevantAlternateLanguages() {
	  var acceptedLanguageExpanded = util.expandLanguages(user.getAcceptedLanguages());
	  var alternateLanguageExpanded = util.expandLanguages(page.getAlternateLanguages());

	  var acceptedLanguages = Object.keys(acceptedLanguageExpanded);
	  var alternateLanguages = Object.keys(alternateLanguageExpanded);
	  var relevantLanguages = acceptedLanguages.filter(function (language) {
	    return alternateLanguages.indexOf(language) !== -1;
	  });

	  var relevantAlternateLanguages = relevantLanguages.map(function (language) {
	    return alternateLanguageExpanded[language];
	  });

	  var uniq = {};
	  var uniqueRelevantAlternateLanguages = relevantAlternateLanguages.filter(function (language) {
	    if (uniq[language]) {
	      return false;
	    }
	    uniq[language] = true;
	    return true;
	  });

	  return uniqueRelevantAlternateLanguages;
	}

	;

/***/ }
/******/ ])
});
;