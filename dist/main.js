/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _aws_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _aws_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _menu1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _menu2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
/* harmony import */ var _menu3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8);
/* eslint-disable no-use-before-define */






document.addEventListener('DOMContentLoaded', () => {
  _home__WEBPACK_IMPORTED_MODULE_1__["default"].addNav();
  _home__WEBPACK_IMPORTED_MODULE_1__["default"].welcome();
});

window.onload = () => {
  const nav = document.querySelector('.brand-logo');
  const home = document.querySelector('.home');
  const menu1 = document.querySelector('.menu1');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');

  nav.addEventListener('click', populatehome, { once: true });
  home.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
};

function populatehome() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  _home__WEBPACK_IMPORTED_MODULE_1__["default"].welcome();
  const nav = document.querySelector('.brand-logo');
  const menu1 = document.querySelector('.menu1');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');
  nav.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}

function populateMenu1() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  _menu1__WEBPACK_IMPORTED_MODULE_2__["default"].addMenu1();
  const home = document.querySelector('.home');
  const menu2 = document.querySelector('.menu2');
  const menu3 = document.querySelector('.menu3');
  home.addEventListener('click', populatehome, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}
function populateMenu2() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  _menu2__WEBPACK_IMPORTED_MODULE_3__["default"].addMenu1();
  const home = document.querySelector('.home');
  const menu1 = document.querySelector('.menu1');
  const menu3 = document.querySelector('.menu3');
  home.addEventListener('click', populatehome, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
  menu3.addEventListener('click', populateMenu3, { once: true });
}
function populateMenu3() {
  const content = document.querySelector('#content');
  content.removeChild(content.lastChild);
  _menu3__WEBPACK_IMPORTED_MODULE_4__["default"].addMenu1();
  const home = document.querySelector('.home');
  const menu2 = document.querySelector('.menu2');
  const menu1 = document.querySelector('.menu1');
  home.addEventListener('click', populatehome, { once: true });
  menu2.addEventListener('click', populateMenu2, { once: true });
  menu1.addEventListener('click', populateMenu1, { once: true });
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(2);
            var content = __webpack_require__(3);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  background-color: royalblue;\n}\n\n.content {\n  background-color: red;\n}\n\n.menu-container {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const landingPage = (function factory() {
  const content = document.querySelector('#content');

  function addNav() {
    const nav = document.createElement('nav');
    nav.innerHTML = `
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#" class="home">Home</a></li>
        <li><a href="#" class="menu1">Menu1</a></li>
        <li><a href="#" class="menu2">Menu2</a></li>
        <li><a href="#" class="menu3">Menu3</a></li>
      </ul>
    </div>
  `;
    content.append(nav);
  }
  function welcome() {
    const div = document.createElement('div');
    div.innerHTML = '<h1>Welcome to my Restaurant</h1>';
    content.append(div);
  }
  return { addNav, welcome };
}());

/* harmony default export */ __webpack_exports__["default"] = (landingPage);


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* eslint-disable no-use-before-define */


const dish = (function factory() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  function addMenu1() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = '';
    addBurgers();
    content.appendChild(container);
  }

  function addBurgers() {
    const image1 = new Image();
    image1.src = _pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    const row = document.createElement('div');
    row.className = 'row';
    const firstItem = document.createElement('article');

    firstItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const secondItem = document.createElement('article');
    secondItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const thirdItem = document.createElement('article');
    const row2 = document.createElement('div');
    row2.className = 'row';
    thirdItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const fourthItem = document.createElement('article');
    fourthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const sixthItem = document.createElement('article');
    sixthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_burger_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    row.appendChild(firstItem);
    row.appendChild(secondItem);
    row.appendChild(thirdItem);
    row2.appendChild(fourthItem);
    row2.appendChild(fifthItem);
    row2.appendChild(sixthItem);
    container.appendChild(row);
    container.appendChild(row2);
  }
  return { addMenu1 };
}());

/* harmony default export */ __webpack_exports__["default"] = (dish);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* eslint-disable no-use-before-define */


const dish2 = (function factory() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  function addMenu1() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = '';
    addPizzas();
    content.appendChild(container);
  }
  function addPizzas() {
    const image1 = new Image();
    image1.src = _pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    const row = document.createElement('div');
    row.className = 'row';
    const firstItem = document.createElement('article');

    firstItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const secondItem = document.createElement('article');
    secondItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Card Title</span>
        </div>
        <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">This is a link</a>
        </div>
      </div>
    </div>
      `;

    const thirdItem = document.createElement('article');
    const row2 = document.createElement('div');
    row2.className = 'row';
    thirdItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const fourthItem = document.createElement('article');
    fourthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Card Title</span>
          </div>
          <div class="card-content">
            <p>I am a very simple card. I am good at containing small bits of information.
            I am convenient because I require little markup to use effectively.</p>
          </div>
          <div class="card-action">
            <a href="#">This is a link</a>
          </div>
        </div>
      </div>
        `;

    const sixthItem = document.createElement('article');
    sixthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Card Title</span>
      </div>
      <div class="card-content">
        <p>I am a very simple card. I am good at containing small bits of information.
        I am convenient because I require little markup to use effectively.</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>
    </div>
  </div>
    `;

    row.appendChild(firstItem);
    row.appendChild(secondItem);
    row.appendChild(thirdItem);
    row2.appendChild(fourthItem);
    row2.appendChild(fifthItem);
    row2.appendChild(sixthItem);
    container.appendChild(row);
    container.appendChild(row2);
  }
  return { addMenu1, addPizzas };
}());

/* harmony default export */ __webpack_exports__["default"] = (dish2);


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* eslint-disable no-use-before-define */


const dish3 = (function factory() {
  const content = document.querySelector('#content');
  const container = document.createElement('div');
  function addMenu1() {
    container.setAttribute('class', 'menu-container');
    container.innerHTML = '';
    addBeryanis();
    content.appendChild(container);
  }
  function addBeryanis() {
    const image1 = new Image();
    image1.src = _pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"];
    const row = document.createElement('div');
    row.className = 'row';
    const firstItem = document.createElement('article');

    firstItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Beryani</span>
        </div>
        <div class="card-content">
          <h4>Price Rs 400.</h4>
        </div>
        <div class="card-action">
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>
      `;

    const secondItem = document.createElement('article');
    secondItem.innerHTML = `
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
          <span class="card-title">Beryani</span>
        </div>
        <div class="card-content">
          <h4>Price Rs 400.</h4>
        </div>
        <div class="card-action">
          <a href="#">Order Now</a>
        </div>
      </div>
    </div>
      `;

    const thirdItem = document.createElement('article');
    const row2 = document.createElement('div');
    row2.className = 'row';
    thirdItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Beryani</span>
          </div>
          <div class="card-content">
            <h4>Price Rs 400.</h4>
          </div>
          <div class="card-action">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
        `;

    const fourthItem = document.createElement('article');
    fourthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Beryani</span>
      </div>
      <div class="card-content">
        <h4>Price Rs 400.</h4>
      </div>
      <div class="card-action">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
    `;

    const fifthItem = document.createElement('article');
    fifthItem.innerHTML = `
      <div class="col s12 m4">
        <div class="card">
          <div class="card-image">
            <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
            <span class="card-title">Beryani</span>
          </div>
          <div class="card-content">
            <h4>Price Rs 400.</h4>
          </div>
          <div class="card-action">
            <a href="#">Order Now</a>
          </div>
        </div>
      </div>
        `;

    const sixthItem = document.createElement('article');
    sixthItem.innerHTML = ` <div class="col s12 m4">
    <div class="card">
      <div class="card-image">
        <img src="${_pics_rice_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]}">
        <span class="card-title">Beryani</span>
      </div>
      <div class="card-content">
        <h4>Price Rs 400.</h4>
      </div>
      <div class="card-action">
        <a href="#">Order Now</a>
      </div>
    </div>
  </div>
    `;

    row.appendChild(firstItem);
    row.appendChild(secondItem);
    row.appendChild(thirdItem);
    row2.appendChild(fourthItem);
    row2.appendChild(fifthItem);
    row2.appendChild(sixthItem);
    container.appendChild(row);
    container.appendChild(row2);
  }
  return { addMenu1, addBeryanis };
}());

/* harmony default export */ __webpack_exports__["default"] = (dish3);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1fbfbf98a2a240140129f7a7b264982b.jpg");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "3b278cfebde8e7d8cfa630a22814d0e8.jpg");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "afcd5d7d72b808bacba2700d581a630f.jpg");

/***/ })
/******/ ]);