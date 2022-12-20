module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/chae/Desktop/\\u1100\\u1161\\u11BC\\u110B\\u1174/\\uC81C\\uB85C\\uCD08/[\\u1105\\u1175\\u1102\\u1172\\u110B\\u1165\\u11AF] React\\u1105\\u1169 NodeBird SNS \\u1106\\u1161\\u11AB\\u1103\\u1173\\u11AF\\u1100\\u1175/react-nodebird-practice/prepare/front/pages/_app.js\";\n// pages 공통되는것들을 처리(언더바 쓸것)-> 완전 공통\n\n\n\n // NEXT에서 제공하는 head\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  // index.js의 return부분이 Component로 들어감(_app.js가 index.js의 부모)\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\n// props 점검\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withRedux(NodeBird)); // configureStore.js의 Redux 적용//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUUwQjtBQUNTO0FBQ04sQ0FBQztBQUNnQjtBQUFBO0FBQUE7QUFFOUMsTUFBTUEsUUFBUSxHQUFHLENBQUM7RUFBRUM7QUFBVSxDQUFDLEtBQUs7RUFBRTtFQUNwQyxvQkFDRTtJQUFBLHdCQUVFLHFFQUFDLGdEQUFJO01BQUEsd0JBQ0g7UUFBTSxPQUFPLEVBQUM7TUFBTztRQUFBO1FBQUE7UUFBQTtNQUFBLGFBQVEsZUFDN0I7UUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFBdUI7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBLGFBQ2xCLGVBQ1AscUVBQUMsU0FBUztNQUFBO01BQUE7TUFBQTtJQUFBLGFBQUc7RUFBQSxnQkFFWjtBQUVQLENBQUM7O0FBRUQ7QUFDQUQsUUFBUSxDQUFDRSxTQUFTLEdBQUc7RUFDbkJELFNBQVMsRUFBRUUsaURBQVMsQ0FBQ0MsV0FBVyxDQUFDQztBQUNuQyxDQUFDO0FBRWNDLDRIQUFPLENBQUNDLFNBQVMsQ0FBQ1AsUUFBUSxDQUFDLEVBQUMsQ0FBQyIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcyDqs7XthrXrkJjripTqsoPrk6TsnYQg7LKY66asKOyWuOuNlOuwlCDsk7jqsoMpLT4g7JmE7KCEIOqzte2GtVxuXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7IC8vIE5FWFTsl5DshJwg7KCc6rO17ZWY64qUIGhlYWRcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcblxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4geyAvLyBpbmRleC5qc+ydmCByZXR1cm7rtoDrtoTsnbQgQ29tcG9uZW5066GcIOuTpOyWtOqwkChfYXBwLmpz6rCAIGluZGV4Lmpz7J2YIOu2gOuqqClcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgey8qIOuqqOuToCDtjpjsnbTsp4Dsl5Ag6rO17Ya17J24IOuplOuJtCAqL31cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIj48L21ldGE+XG4gICAgICAgIDx0aXRsZT5Ob2RlQmlyZDwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29tcG9uZW50IC8+XG4gICAgICB7LyogLy8gaW5kZXguanPsl5DshJwgcmV0dXJu7ZWcIOqwkuydtCBDb21wb25lbnTroZwg65Ok7Ja07Ji0ICovfVxuICAgIDwvPlxuICApO1xufTtcblxuLy8gcHJvcHMg7KCQ6rKAXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChOb2RlQmlyZCk7IC8vIGNvbmZpZ3VyZVN0b3JlLmpz7J2YIFJlZHV4IOyggeyaqVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return typeof key === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (typeof input !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (typeof res !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\n// 기본 State\nconst initialState = {\n  user: {\n    isLoggedIn: false,\n    user: null,\n    signUpData: {},\n    loginDate: {}\n  },\n  posts: {\n    mainPosts: []\n  }\n};\nconst loginAction = data => {\n  return {\n    type: \"LOG_IN\",\n    data\n  };\n};\nconst logoutAction = () => {\n  // 로그아웃은 데이터 필요없음\n  return {\n    type: \"LOG_OUT\"\n  };\n};\n\n// (이전상태, 액션) => 다음상태 (2개를 1개로 축소)\nconst rootReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n      console.log(\"HYDRATE\", action);\n      return _objectSpread(_objectSpread({}, state), action.payload);\n    case \"LOG_IN\":\n      // 로그인\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: true,\n          // 로그인 되면 true로 바꿔주기\n          user: action.data\n        })\n      });\n    case \"LOG_OUT\":\n      // 로그인\n      return _objectSpread(_objectSpread({}, state), {}, {\n        user: _objectSpread(_objectSpread({}, state.user), {}, {\n          isLoggedIn: false,\n          // 로그인 되면 true로 바꿔주기\n          user: null\n        })\n      });\n  }\n};\n\n// async action creator (비동기)\n// action creator\nconst changeNickname = data => {\n  // 데이터가 여러번 바뀔 수 있으니 동적으로 data로 받아오기\n  return {\n    type: \"CHANGE_NICKNAME\",\n    data\n  };\n};\n\n// 수정할 데이터만 함수에 넣으면 매번 action 생성할 필요가 없이 자동 생성\nchangeNickname(\"boogicho\");\n\n// {\n//   type: \"CHANGE_NICKNAME\",\n//   data: 'boogicho',\n// };\n\nstore.dispatch(changeNickname(\"mighty tak\"));\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbImluaXRpYWxTdGF0ZSIsInVzZXIiLCJpc0xvZ2dlZEluIiwic2lnblVwRGF0YSIsImxvZ2luRGF0ZSIsInBvc3RzIiwibWFpblBvc3RzIiwibG9naW5BY3Rpb24iLCJkYXRhIiwidHlwZSIsImxvZ291dEFjdGlvbiIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJjaGFuZ2VOaWNrbmFtZSIsInN0b3JlIiwiZGlzcGF0Y2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBNkM7O0FBRTdDO0FBQ0EsTUFBTUEsWUFBWSxHQUFHO0VBQ25CQyxJQUFJLEVBQUU7SUFDSkMsVUFBVSxFQUFFLEtBQUs7SUFDakJELElBQUksRUFBRSxJQUFJO0lBQ1ZFLFVBQVUsRUFBRSxDQUFDLENBQUM7SUFDZEMsU0FBUyxFQUFFLENBQUM7RUFDZCxDQUFDO0VBRURDLEtBQUssRUFBRTtJQUNMQyxTQUFTLEVBQUU7RUFDYjtBQUNGLENBQUM7QUFFTSxNQUFNQyxXQUFXLEdBQUlDLElBQUksSUFBSztFQUNuQyxPQUFPO0lBQ0xDLElBQUksRUFBRSxRQUFRO0lBQ2REO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFFTSxNQUFNRSxZQUFZLEdBQUcsTUFBTTtFQUNoQztFQUNBLE9BQU87SUFDTEQsSUFBSSxFQUFFO0VBQ1IsQ0FBQztBQUNILENBQUM7O0FBRUQ7QUFDQSxNQUFNRSxXQUFXLEdBQUcsQ0FBQ0MsS0FBSyxHQUFHWixZQUFZLEVBQUVhLE1BQU0sS0FBSztFQUNwRCxRQUFRQSxNQUFNLENBQUNKLElBQUk7SUFDakIsS0FBS0ssMERBQU87TUFDVkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsU0FBUyxFQUFFSCxNQUFNLENBQUM7TUFDOUIsdUNBQVlELEtBQUssR0FBS0MsTUFBTSxDQUFDSSxPQUFPO0lBQ3RDLEtBQUssUUFBUTtNQUFFO01BQ2IsdUNBQ0tMLEtBQUs7UUFDUlgsSUFBSSxrQ0FDQ1csS0FBSyxDQUFDWCxJQUFJO1VBQ2JDLFVBQVUsRUFBRSxJQUFJO1VBQUU7VUFDbEJELElBQUksRUFBRVksTUFBTSxDQUFDTDtRQUFJO01BQ2xCO0lBR0wsS0FBSyxTQUFTO01BQUU7TUFDZCx1Q0FDS0ksS0FBSztRQUNSWCxJQUFJLGtDQUNDVyxLQUFLLENBQUNYLElBQUk7VUFDYkMsVUFBVSxFQUFFLEtBQUs7VUFBRTtVQUNuQkQsSUFBSSxFQUFFO1FBQUk7TUFDWDtFQUNEO0FBRVIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsTUFBTWlCLGNBQWMsR0FBSVYsSUFBSSxJQUFLO0VBQy9CO0VBQ0EsT0FBTztJQUNMQyxJQUFJLEVBQUUsaUJBQWlCO0lBQ3ZCRDtFQUNGLENBQUM7QUFDSCxDQUFDOztBQUVEO0FBQ0FVLGNBQWMsQ0FBQyxVQUFVLENBQUM7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBQyxLQUFLLENBQUNDLFFBQVEsQ0FBQ0YsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBRTdCUCwwRUFBVyIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSFlEUkFURSB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcblxuLy8g6riw67O4IFN0YXRlXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHtcbiAgICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgICB1c2VyOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0ZToge30sXG4gIH0sXG5cbiAgcG9zdHM6IHtcbiAgICBtYWluUG9zdHM6IFtdLFxuICB9LFxufTtcblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcIkxPR19JTlwiLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuICAvLyDroZzqt7jslYTsm4PsnYAg642w7J207YSwIO2VhOyalOyXhuydjFxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiTE9HX09VVFwiLFxuICB9O1xufTtcblxuLy8gKOydtOyghOyDge2DnCwg7JWh7IWYKSA9PiDri6TsnYzsg4Htg5wgKDLqsJzrpbwgMeqwnOuhnCDstpXshowpXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhZRFJBVEU6XG4gICAgICBjb25zb2xlLmxvZyhcIkhZRFJBVEVcIiwgYWN0aW9uKTtcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCAuLi5hY3Rpb24ucGF5bG9hZCB9O1xuICAgIGNhc2UgXCJMT0dfSU5cIjogLy8g66Gc6re47J24XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgdXNlcjoge1xuICAgICAgICAgIC4uLnN0YXRlLnVzZXIsXG4gICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSwgLy8g66Gc6re47J24IOuQmOuptCB0cnVl66GcIOuwlOq/lOyjvOq4sFxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5kYXRhLFxuICAgICAgICB9LFxuICAgICAgfTtcblxuICAgIGNhc2UgXCJMT0dfT1VUXCI6IC8vIOuhnOq3uOyduFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAuLi5zdGF0ZS51c2VyLFxuICAgICAgICAgIGlzTG9nZ2VkSW46IGZhbHNlLCAvLyDroZzqt7jsnbgg65CY66m0IHRydWXroZwg67CU6r+U7KO86riwXG4gICAgICAgICAgdXNlcjogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gIH1cbn07XG5cbi8vIGFzeW5jIGFjdGlvbiBjcmVhdG9yICjruYTrj5nquLApXG4vLyBhY3Rpb24gY3JlYXRvclxuY29uc3QgY2hhbmdlTmlja25hbWUgPSAoZGF0YSkgPT4ge1xuICAvLyDrjbDsnbTthLDqsIAg7Jes65+s67KIIOuwlOuAlCDsiJgg7J6I7Jy864uIIOuPmeyggeycvOuhnCBkYXRh66GcIOuwm+yVhOyYpOq4sFxuICByZXR1cm4ge1xuICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXG4gICAgZGF0YSxcbiAgfTtcbn07XG5cbi8vIOyImOygle2VoCDrjbDsnbTthLDrp4wg7ZWo7IiY7JeQIOuEo+ycvOuptCDrp6TrsoggYWN0aW9uIOyDneyEse2VoCDtlYTsmpTqsIAg7JeG7J20IOyekOuPmSDsg53shLFcbmNoYW5nZU5pY2tuYW1lKFwiYm9vZ2ljaG9cIik7XG5cbi8vIHtcbi8vICAgdHlwZTogXCJDSEFOR0VfTklDS05BTUVcIixcbi8vICAgZGF0YTogJ2Jvb2dpY2hvJyxcbi8vIH07XG5cbnN0b3JlLmRpc3BhdGNoKGNoYW5nZU5pY2tuYW1lKFwibWlnaHR5IHRha1wiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n// Redux\n\n\n\n\nconst configureStore = () => {\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n  store.dispatch({\n    // dispatch하게 되면 type과 data가 reducer로 전달됨\n    type: \"CHANGE_NICKNAME\",\n    data: \"boogicho\"\n  });\n  return store;\n};\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJkYXRhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRW1EO0FBQ2Y7QUFDRjtBQUVsQyxNQUFNQSxjQUFjLEdBQUcsTUFBTTtFQUMzQixNQUFNQyxLQUFLLEdBQUdDLHlEQUFXLENBQUNDLGlEQUFPLENBQUM7RUFDbENGLEtBQUssQ0FBQ0csUUFBUSxDQUFDO0lBQUU7SUFDZkMsSUFBSSxFQUFFLGlCQUFpQjtJQUN2QkMsSUFBSSxFQUFFO0VBQ1IsQ0FBQyxDQUFDO0VBQ0YsT0FBT0wsS0FBSztBQUNkLENBQUM7QUFFRCxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNSLGNBQWMsRUFBRTtFQUM1Q1MsS0FBSztBQUNQLENBQUMsQ0FBQztBQUVhRixzRUFBTyIsImZpbGUiOiIuL3N0b3JlL2NvbmZpZ3VyZVN0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gUmVkdXhcblxuaW1wb3J0IHsgY3JlYXRlV3JhcHBlciB9IGZyb20gXCJuZXh0LXJlZHV4LXdyYXBwZXJcIjtcbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUocmVkdWNlcik7XG4gIHN0b3JlLmRpc3BhdGNoKHsgLy8gZGlzcGF0Y2jtlZjqsowg65CY66m0IHR5cGXqs7wgZGF0YeqwgCByZWR1Y2Vy66GcIOyghOuLrOuQqFxuICAgIHR5cGU6IFwiQ0hBTkdFX05JQ0tOQU1FXCIsXG4gICAgZGF0YTogXCJib29naWNob1wiLFxuICB9KTtcbiAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgZGVidWc6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ })

/******/ });