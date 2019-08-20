(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".nav-bar-container {\n  position: absolute;\n  overflow: hidden;\n}\n\n.nav-bar-container a {\n  /* background-color: darkgrey; */\n  /*  */\n  list-style: none;\n  float: left;\n  /* color: #f2f2f2; */\n  color: lightskyblue;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.nav-bar-container a:hover {\n  border-radius: 8%;\n  /* background-color: #ddd; */\n  color: #FF6347;\n}\n\n.head-img-banner {\n  width: 90em;\n}\n\n/* news card */\n\nbody::before,\nbody::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\nbody * {\n  box-sizing: inherit;\n}\np, h1 {\n  margin: 0; padding: 0;\n}\n\n body, .text-light-black {\n   color: rgba(0,0,0,0.6);\n}\n.text-black {\n  color: rgba(0,0,0,0.9);\n}\n.text-muted {\n  color: rgba(0, 0, 0, 0.3);\n}\n\n.text-uppercase {\n  font-size: 12px;\n  text-transform: uppercase;\n}\n.ff-serif {\n  font-family: 'Lora', serif;\n}\n\n.font-weight-normal {\n  font-weight: normal;\n}\n.font-weight-medium {\n  font-weight: 500;\n}\n\n.lts-1px {\n   letter-spacing: 1px;\n}\n.lts-2px {\n  letter-spacing: 2px;\n}\n\n.w-full {\n  width: 100%;\n}\n\n.text-center {\n  text-align: center;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n\n.d-block {\n  display: block;\n}\n.d-inline-block {\n  display: inline-block;\n}\n\n.p-relative {\n  position: relative;\n}\n.p-absolute {\n  position: absolute\n}\n\n.bg-white {\n  background-color: #fff;\n}\n\n.small {\n  font-size: 0.75rem;\n}\n.card-heading {\n  font-size: 1.4rem;\n  font-family: \"Montserrat\";\n  font-weight: 700;\n}\n.styled-link {\n  text-decoration: none;\n  outline: none;\n  color: #2196fe;\n  transition: all 0.25s ease-in; \n}\n.styled-link:hover,\n.styled-link:focus,\n.styled-link:active {\n  color: #536dfe;\n}\n.shadow-1 {\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.15);\n}\n.blue-hover {\n  transition: all 0.25s ease-in;\n  border-bottom: 5px solid transparent;\n}\n.blue-hover:hover {\n  transform: translateY(-5px);\n  border: none;\n  border-bottom: 5px solid #2196fe;\n}\n\n.clearfix::before,\n.clearfix::after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.float-left {\n  float: left;\n}\n\n.float-right{\n  float: right;\n}\n\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.ml-auto {\n  margin-left: auto;\n}\n.mr-auto {\n  margin-right: auto;\n}\n.mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.mx-1 {\n  margin-left: 1rem;\n  margin-right: 1rem;\n}\n.mx-2 {\n  margin-left: 2rem;\n  margin-right: 2rem;\n}\n.mx-3 {\n  margin-left: 3rem;\n  margin-right: 3rem;\n}\n\n.my-0 {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.my-1 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.my-2 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n.my-3 {\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\n\n.mt-0 {\n  margin-top: 0;\n}\n.mt-1 {\n  margin-top: 1rem;\n}\n.mt-2 {\n  margin-top: 2rem;\n}\n.mt-3 {\n  margin-top: 3rem;\n}\n\n.mb-0 {\n  margin-bottom: 0;\n}\n.mb-1 {\n  margin-bottom: 1rem;\n}\n.mb-2 {\n  margin-bottom: 2rem;\n}\n.mb-3 {\n  margin-bottom: 3rem;\n}\n\n.ml-0 {\n  margin-left: 0;\n}\n.ml-1 {\n  margin-left: 1rem;\n}\n.ml-2 {\n  margin-left: 2rem;\n}\n.ml-3 {\n  margin-left: 3rem;\n}\n\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.px-1 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.px-2 {\n  padding-left: 2rem;\n  padding-right: 2rem;\n}\n.px-3 {\n  padding-left: 3rem;\n  padding-right: 3rem;\n}\n\n.py-0 {\n  padding-top: 0;\n  padding-bottom: 0;\n}\n.py-1 {\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n}\n.py-2 {\n  padding-top: 2rem;\n  padding-bottom: 2rem;\n}\n.py-3 {\n  padding-top: 3rem;\n  padding-bottom: 3rem;\n}\n\n.pt-0 {\n  padding-top: 0;\n}\n.pt-1 {\n  padding-top: 1rem;\n}\n.pt-2 {\n  padding-top: 2rem;\n}\n.pt-3 {\n  padding-top: 3rem;\n}\n\n.card {\n  -webkit-column-break-inside: avoid;\n\t-moz-column-break-inside: avoid;\n  box-sizing: border-box;\n  height: auto;\n  margin: 1em 1em 1em 1em;\n  display: inline-block;\n  width: 300px;\n  overflow: hidden; \n  border-radius: 1px;\n}\n\n.border-bottom-coverage {\n  border-bottom: lightgrey 1px solid;\n  margin-right: 10em;\n}\n\n.wrapper {\n  -webkit-column-count: 4;\n\t-webkit-column-gap: 1px;\n\t-webkit-column-fill: auto;\n\t-moz-column-count: 4;\n\t-moz-column-gap: 1px;\n\t-moz-column-fill: auto;\n\tcolumn-count: 4;\n\tgrid-column-gap: 1px;\n\tcolumn-gap: 1px;\n\tcolumn-fill: auto;\n\n  margin-left: 3em;\n}\n\n.saveTag {\n  float: right;\n  position: absolute;\n  bottom: 0em;\n  left: 2.1em;  \n  transform: scale(0.15);\n}\n\n/* end */\n\n/* News Show */\n\n.showNews-container {\n  letter-spacing: 0.1px;\n  /* padding-left: 2em; */\n  padding-top: 6em;\n  padding-bottom: 3em;\n  margin-left: 17em;\n  margin-right: 17em;\n  box-sizing: border-box;\n  /* border: black 4px solid; */\n}\n\n.media {\n  height: auto;\n  width: 50.6em;\n}\n\n.initial-letter {\n  font-size: 35px;\n  font-weight: 700;\n  line-height: 70px;\n}\n\n.underline-newsShow {\n  border-bottom: lightslategrey 1px solid;\n  margin-left: 3em;\n  margin-right: 7em;\n  margin-top: 2em;\n}\n\n.news-content, .headline, .subhead, header {\n  margin-top: 12px;\n  margin-left: 3em;\n  margin-right: 3em;\n}\n\n.author {\n  margin-top: 12px;\n}\n\n.news-title {\n  color: black;\n  margin-left: 1.8em;\n  font-size: 25px;\n  font-weight: 900;\n}\n\n\n.btn-container {\n  margin-top: 3em;\n  margin-left: 1.6em;\n}\n\n.save-btn, .link-btn {\n  font-size: 0.9em;\n\n  color: #8D8D8D;\n  font-weight: 900;\n  padding: 14px;\n  border: none;\n  border-radius: 4%;\n  margin-left: 1.5em;\n  background-color: #F0F0F0;\n  transition-duration: 0.5s;\n}\n\n.save-btn:hover, .link-btn:hover {\n  color: white;\n  font-weight: 900;\n  padding: 14px;\n  border: none;\n  border-radius: 4%;\n  margin-left: 1.5em;\n  background-color: lightskyblue;\n  transition-duration: 0.5s;\n}\n\n.saved-btn {\n  font-size: 0.9em;\n  font-weight: 900;\n  padding: 14px;\n  border: none;\n  background-color: lightskyblue;\n  color: white;\n  border-radius: 4%;\n  margin-left: 1.5em;\n}\n\n/* end */", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\n    \"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\",\n    sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\ncode {\n  font-family: source-code-pro, Menlo, Monaco, Consolas, \"Courier New\",\n    monospace;\n}", ""]);



/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/*! exports provided: fetchNews, showNews, fetchUser, fetchScrapbook, postClip, fetchAllScrapbooknewsAction, createClippedNewsTile, clearAllState, removeTile, deleteNoteReq */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchNews", function() { return fetchNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showNews", function() { return showNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUser", function() { return fetchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchScrapbook", function() { return fetchScrapbook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postClip", function() { return postClip; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllScrapbooknewsAction", function() { return fetchAllScrapbooknewsAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createClippedNewsTile", function() { return createClippedNewsTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearAllState", function() { return clearAllState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTile", function() { return removeTile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteNoteReq", function() { return deleteNoteReq; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/actions/types.js");
/* harmony import */ var _services_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api.js */ "./src/services/Api.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/types */ "./node_modules/@babel/types/lib/index.js");
/* harmony import */ var _babel_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_types__WEBPACK_IMPORTED_MODULE_2__);



function fetchNews() {
  return function (dispatch) {
    dispatch({
      type: "LOADING"
    });
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].fetchNews().then(news => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_NEWS"],
        news: news
      });
    });
  };
}
function showNews(oneNews) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["SHOW_NEWS"],
    oneNews
  };
}
function fetchUser() {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].profile().then(user => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_USER"],
        getUser: user
      });
    });
  };
}
function fetchScrapbook(id) {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].findOrCreateScrapBook(id).then(scrapbook => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCH_SCRAPBOOK"],
        scrapbookContainer: scrapbook
      });
    });
  };
}
function postClip(newsId, scrapbookContainerId) {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleAddFavorite(newsId, scrapbookContainerId).then(clippedNews => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["CLIP_NEWS"],
        allScrapbooknews: clippedNews
      });
    });
  };
}
function fetchAllScrapbooknewsAction(scrapbookId) {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleAllScrapbooknews(scrapbookId).then(allScrapbooknews => {
      const filtered = allScrapbooknews.filter(news => news.scrapbook_id === scrapbookId);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["FETCHALLSCRAPBOOKTILE"],
        allScrapbooknews: filtered
      });
    });
  };
}
function createClippedNewsTile(clippedNews) {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLIPPED_NEWS_TILE"],
      clippedNewsTile: clippedNews
    });
  };
}
function clearAllState() {
  return function (dispatch) {
    dispatch({
      type: _types__WEBPACK_IMPORTED_MODULE_0__["CLEAR_ALL_STATE"]
    });
  };
}
function removeTile(tile) {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleRemoveTile(tile).then(resp => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_TILE"],
        tileId: tile.id,
        tileNewsId: tile.news_id
      });
    });
  };
}
function deleteNoteReq(noteId) {
  return function (dispatch) {
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].handleDeleteNote(noteId).then(resp => {
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_0__["DELETE_NOTE"],
        noteId: noteId
      });
    });
  };
}

/***/ }),

/***/ "./src/actions/types.js":
/*!******************************!*\
  !*** ./src/actions/types.js ***!
  \******************************/
/*! exports provided: FETCH_NEWS, SHOW_NEWS, FETCH_USER, FETCH_SCRAPBOOK, CLIP_NEWS, FETCHALLSCRAPBOOKTILE, CLIPPED_NEWS_TILE, CLEAR_ALL_STATE, REMOVE_TILE, DELETE_NOTE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS", function() { return FETCH_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_NEWS", function() { return SHOW_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_USER", function() { return FETCH_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_SCRAPBOOK", function() { return FETCH_SCRAPBOOK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIP_NEWS", function() { return CLIP_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCHALLSCRAPBOOKTILE", function() { return FETCHALLSCRAPBOOKTILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIPPED_NEWS_TILE", function() { return CLIPPED_NEWS_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_ALL_STATE", function() { return CLEAR_ALL_STATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_TILE", function() { return REMOVE_TILE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_NOTE", function() { return DELETE_NOTE; });
const FETCH_NEWS = 'FETCH_NEWS_SUCCESS';
const SHOW_NEWS = 'SHOW_NEWS';
const FETCH_USER = 'FETCH_USER';
const FETCH_SCRAPBOOK = 'FETCH_SCRAPBOOK';
const CLIP_NEWS = 'CLIP_NEWS';
const FETCHALLSCRAPBOOKTILE = 'FETCHALLSCRAPBOOKTILE';
const CLIPPED_NEWS_TILE = 'CLIPPED_NEWS_TILE';
const CLEAR_ALL_STATE = 'CLEAR_ALL_STATE';
const REMOVE_TILE = 'REMOVE_TILE';
const DELETE_NOTE = 'DELETE_NOTE';

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Navbar */ "./src/components/Navbar.js");
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Login */ "./src/components/Login.js");
/* harmony import */ var _Signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Signin */ "./src/components/Signin.js");
/* harmony import */ var _NewsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./NewsList */ "./src/components/NewsList.js");
/* harmony import */ var _NewsShow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./NewsShow */ "./src/components/NewsShow.js");
/* harmony import */ var _ClippedNewsShow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ClippedNewsShow */ "./src/components/ClippedNewsShow.js");
/* harmony import */ var _containers_scrapbooksContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../containers/scrapbooksContainer */ "./src/containers/scrapbooksContainer.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/App.js";













class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.state = {
      auth: {
        user: {}
      }
    };
  }

  handleLogin(user) {
    this.setState({
      auth: {
        user
      }
    });
    localStorage.setItem('user', user.jwt);
  }

  handleLogout(user) {
    this.setState({
      auth: {
        user: {}
      }
    });
    localStorage.removeItem('user');
    this.props.clearState();
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["BrowserRouter"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Navbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
      user: this.state.auth.user,
      handleLogout: () => this.handleLogout(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/login",
      render: routeProps => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, routeProps, {
          handleLogin: user => {
            this.handleLogin(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/signin",
      render: routeProps => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Signin__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, routeProps, {
          handleLogin: user => {
            this.handleLogin(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/newslist",
      render: routeProps => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsList__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, routeProps, {
          handleLogin: user => {
            this.handleLogin(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/scrapbooks/:user_id/scrapbooknews/:news_id",
      component: _ClippedNewsShow__WEBPACK_IMPORTED_MODULE_9__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/newslist/:id",
      component: _NewsShow__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], {
      exact: true,
      path: "/scrapbooks",
      render: routeProps => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_scrapbooksContainer__WEBPACK_IMPORTED_MODULE_10__["default"], Object.assign({}, routeProps, {
          handleLogin: user => {
            this.handleLogin(user);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 61
          },
          __self: this
        }));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }))));
  }

}

const mapDispatchToProps = dispatch => {
  return {
    clearState: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_11__["clearAllState"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(null, mapDispatchToProps)(App));

/***/ }),

/***/ "./src/components/ClippedNewsCard.js":
/*!*******************************************!*\
  !*** ./src/components/ClippedNewsCard.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/ClippedNewsCard.js";




class ClippedNewsCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/');
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "center",
      key: this.props.newsCard.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "additional",
      alt: "news",
      src: this.props.newsCard.urlToImage,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "more-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "coords",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "general",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    }, this.props.newsCard.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, this.props.newsCard.category.charAt(0).toUpperCase() + this.props.newsCard.category.slice(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/scrapbooks/".concat(this.props.getUser.id, "/scrapbooknews/").concat(this.props.newsCard.id),
      className: "more",
      title: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, "View Full Coverage"))));
  }

}

const mapStateToProps = state => {
  return {
    getUser: state.getUser
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(ClippedNewsCard));

/***/ }),

/***/ "./src/components/ClippedNewsShow.js":
/*!*******************************************!*\
  !*** ./src/components/ClippedNewsShow.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api */ "./src/services/Api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assert */ "./node_modules/assert/assert.js");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/ClippedNewsShow.js";








class NewsShow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.fetchNews = id => {
      _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchOneNews(id).then(news => {
        this.props.getShowNews(news);
      });
    };

    this.getNews = () => {
      const id = this.props.match.params.news_id;

      if (Number(id)) {
        this.fetchNews(id);
      } else {
        this.props.history.push('/scrapbooks');
      }
    };

    this.getUserData = () => {
      if (this.props.getUser.length < 1) {
        this.props.getUserInfo();
      }
    };

    this.initializeScrapbook = id => {
      if (this.props.scrapbookContainer.length < 1) {
        this.props.findScrapbook(id);
      }
    };

    this.handleUnfavorite = (newsId, scrapbookContainerId) => {
      const tile = this.props.allScrapbooknews.find(news => {
        return news.news_id === newsId;
      });
      this.props.unSave(tile);
      this.props.history.push('/scrapbooks');
    };

    this.handleRenderNewNote = note => {
      const noteUl = document.getElementById('notes');
      const li = document.createElement('li');
      li.className = 'single-note-content';
      const btn = document.createElement('button');
      btn.innerText = 'x';
      btn.addEventListener('click', e => this.handleDeleteNote(e, note.id));
      li.innerText = note.content;
      li.append(btn);
      noteUl.append(li);
    };

    this.handleRenderNotes = () => {
      const scrapbooknews = this.props.allScrapbooknews.find(news => {
        return news.news_id === this.props.showNews.id;
      });

      if (scrapbooknews.notes !== undefined) {
        return scrapbooknews.notes.map(note => {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            key: note.id,
            className: "single-note-content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, note.content, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
            onClick: e => this.handleDeleteNote(e, note.id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100
            },
            __self: this
          }, "x"));
        });
      }
    };

    this.handleDeleteNote = (e, noteId) => {
      this.props.deleteNote(noteId);
      e.target.parentNode.remove();
    };

    this.getAllScrapbook = scrapbookId => {
      if (this.props.allScrapbooknews.length < 1) {
        this.props.fetchAllScrapbooknews(scrapbookId);
      }
    };

    this.colorChange = e => {
      this.setState({
        color: e.target.value
      });
    };

    this.handleSaveHighlight = (e, content) => {
      e.preventDefault();

      if (this.state.selectedSentence.length < 3) {
        alert('Highlighted sentence has to be longer than three characters.');
      } else if (!this.state.selectedSentence && !this.state.color || this.state.color === 'none') {
        alert('Please Select the sentences and color');
      } else if (!this.state.color || this.state.color === 'none') {
        alert('Please Select the color');
      } else if (!this.state.selectedSentence) {
        alert('Please Select the sentences');
      } else {
        this.handlePostHighlights(e);
      }
    };

    this.handleRenderHighlights = content => {
      const scrapbooknews = this.props.allScrapbooknews.find(news => {
        return news.news_id === this.props.showNews.id;
      });
      let myContent = content;

      if (scrapbooknews.highlights.length > 0) {
        scrapbooknews.highlights.forEach(highlight => {
          myContent = this.handleApplySpan(highlight, myContent);
        });
        let p = document.querySelector('.please');
        setTimeout(() => {
          p.innerHTML = "".concat(myContent);
        }, 300);
      } else {
        return scrapbooknews.news.content;
      }
    };

    this.state = {
      content: '',
      selectedSentence: '',
      color: '',
      joinedContent: ""
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/');
    } else {
      this.getNews();
      this.getUserData();
    }
  }

  handleNotesChange(e) {
    this.setState({
      content: e.target.value
    });
  }

  handlePostNotes(e) {
    e.preventDefault();
    const scrapbooknews = this.props.allScrapbooknews.find(news => {
      return news.news_id === this.props.showNews.id;
    });
    const bodyObj = {
      content: this.state.content,
      scrapbooknews_id: scrapbooknews.id
    };
    _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].handlePostReqNote(bodyObj).then(note => {
      this.handleRenderNewNote(note);
    });
    this.setState({
      content: ''
    });
  }

  getSelection(content) {
    this.setState({
      selectedSentence: window.getSelection().toString()
    });
  }

  handlePostHighlights(e) {
    e.preventDefault();
    const scrapbooknews = this.props.allScrapbooknews.find(news => {
      return news.news_id === this.props.showNews.id;
    });
    const bodyObj = {
      sentence: this.state.selectedSentence,
      scrapbooknews_id: scrapbooknews.id,
      color: this.state.color
    };
    _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].handlePostReqHighlight(bodyObj).then(highlighted => {
      console.log(highlighted);
    });
    this.props.history.push('/scrapbooks');
  }

  handleApplySpan(highlight, content) {
    let failCount = 0;
    let highlightSplit = highlight.sentence.split('');
    let contentSplit = content.split('');
    let start = 0;
    let last = 0;

    for (let i = 0, j = 0; i < contentSplit.length - 1; i++) {
      if (highlightSplit[j] === content[i]) {
        j++;
        start = i;
      } else {
        let j = 0;
        start = 0;
      }

      if (highlightSplit.length === j) {
        last = i + 2;
        start = last - highlightSplit.length - 2;
        let p = document.querySelector('.please');

        if (p !== null) {
          contentSplit.splice(start, 0, "<span style=\"color: red\">");
          contentSplit.splice(last, 0, '</span>');
          content = contentSplit.join('');
          return content;
        } else {
          failCount += 1;
          console.log('p finding fail count:', failCount, p);
        }
      }
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "scrapbooknews-display",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }, this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null, this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "scrapbooknews-img",
      src: this.props.showNews.urlToImage,
      alt: "news display",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleUnfavorite(this.props.showNews.id, this.props.scrapbookContainer.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211
      },
      __self: this
    }, "UnSave"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "news-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213
      },
      __self: this
    }, "Title: ", this.props.showNews.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, "Category: ", this.props.showNews.category), this.props.showNews.author === null ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, "Author: ", this.props.showNews.author), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, "Description: ", this.props.showNews.description), this.props.allScrapbooknews.find(news => {
      return news.news_id === this.props.showNews.id;
    }) !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "please",
      onMouseUp: () => this.getSelection(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220
      },
      __self: this
    }, this.handleRenderHighlights(this.props.showNews.content)) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "please",
      onMouseUp: () => this.getSelection(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224
      },
      __self: this
    }, this.props.showNews.content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229
      },
      __self: this
    }, "Published at: ", this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => window.open("".concat(this.props.showNews.url), "_blank"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230
      },
      __self: this
    }, "Link to this news"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: e => this.handleSaveHighlight(e, this.props.showNews.content),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "highlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237
      },
      __self: this
    }, "Highlight: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("select", {
      onChange: e => this.colorChange(e),
      value: this.state.color,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      value: "none",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239
      },
      __self: this
    }, "-------"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
      defaultValue: "red",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240
      },
      __self: this
    }, "Red")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Save Selected Highlight",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245
      },
      __self: this
    }, "Selected Sentence: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      style: {
        'color': "".concat(this.state.color)
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246
      },
      __self: this
    }, this.state.selectedSentence), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      className: "notes-form",
      onSubmit: e => {
        this.handlePostNotes(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }, "Notes: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256
      },
      __self: this
    }), "\u200B", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
      id: "txtArea",
      rows: "10",
      cols: "58",
      onChange: e => this.handleNotesChange(e),
      value: this.state.content,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Submit",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259
      },
      __self: this
    })), this.props.allScrapbooknews.find(news => {
      return news.news_id === this.props.showNews.id;
    }) !== undefined ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
      id: "notes",
      className: "note",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263
      },
      __self: this
    }, this.handleRenderNotes()) : null);
  }

}

const mapStateToProps = state => {
  return {
    news: state.news,
    showNews: state.showNews,
    getUser: state.getUser,
    scrapbookContainer: state.scrapbookContainer,
    allScrapbooknews: state.allScrapbooknews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShowNews: oneNews => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["showNews"])(oneNews));
    },
    getUserInfo: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUser"])());
    },
    findScrapbook: id => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchScrapbook"])(id));
    },
    clipNews: (newsId, scrapbookContainerId) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["postClip"])(newsId, scrapbookContainerId));
    },
    unSave: tile => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["removeTile"])(tile));
    },
    fetchAllScrapbooknews: scrapbookId => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchAllScrapbooknewsAction"])(scrapbookId));
    },
    deleteNote: noteId => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["deleteNoteReq"])(noteId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(NewsShow));

/***/ }),

/***/ "./src/components/Login.js":
/*!*********************************!*\
  !*** ./src/components/Login.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api.js */ "./src/services/Api.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/Login.js";



class Login extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: false
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    const bodyObj = {
      user: {
        username: this.state.username,
        password: this.state.password
      }
    };
    _services_Api_js__WEBPACK_IMPORTED_MODULE_1__["default"].login(bodyObj).then(data => {
      if (data.error) {
        this.setState({
          error: true
        });
      } else {
        this.props.handleLogin(data);
        this.props.history.push('/newslist'); // this.props.history.push('/table')
      }
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Login"), this.state.error ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Invalid username or Password") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: e => {
        this.handleLogin(e);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Username: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => this.handleUsernameChange(e),
      value: this.state.username,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Password: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => this.handlePasswordChange(e),
      value: this.state.password,
      type: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "submit",
      value: "Login",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/components/Navbar.js":
/*!**********************************!*\
  !*** ./src/components/Navbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/Navbar.js";



const Navbar = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-bar-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, localStorage.getItem('user') ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    role: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "menuToggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/newslist",
    className: "nav-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/scrapbooks/",
    className: "nav-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Scrapbook")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "nav-column",
    onClick: () => {
      props.handleLogout();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, "Log out"))))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    role: "navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "menuToggle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/login",
    className: "nav-enter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Login")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/signin",
    className: "nav-enter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, "Signup")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(Navbar));

/***/ }),

/***/ "./src/components/NewsCard.js":
/*!************************************!*\
  !*** ./src/components/NewsCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/NewsCard.js";




class NewsCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      newsId: this.props.news.id,
      foundIdArr: []
    };

    this.handleSavedState = () => {
      if (this.state.newsId) {
        const found = this.props.clippedNewsTile.find(tile => {
          return tile.id == this.state.newsId;
        });
        return found;
      }
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/');
    } else {
      setTimeout(() => {
        this.handleSavedState();
      }, 3000);
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "my-2 mx-auto p-relative bg-white shadow-1 blue-hover card",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.props.news.urlToImage,
      alt: "Man with backpack",
      className: "d-block w-full",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "px-2 py-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-0 small font-weight-medium text-uppercase mb-1 text-muted lts-2px",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, this.props.news.category.charAt(0).toUpperCase() + this.props.news.category.slice(1)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      style: {
        'fontSize': '20px'
      },
      className: "ff-serif font-weight-normal text-black card-heading mt-0 mb-1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, this.props.news.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "mb-1",
      style: {
        'fontSize': '13px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, this.props.news.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "border-bottom-coverage",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/newslist/".concat(this.props.news.id),
      className: "text-uppercase d-inline-block font-weight-medium lts-2px ml-2 mb-2 text-center styled-link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "View Full Coverage", this.handleSavedState() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "saveTag",
      src: "https://cdn1.iconfinder.com/data/icons/instagram-ui-glyph/48/Sed-05-512.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }) : null));
  }

}

const mapStateToProps = state => {
  return {
    clippedNews: state.clippedNews,
    getUser: state.getUser,
    scrapbookContainer: state.scrapbookContainer,
    showNews: state.showNews,
    allScrapbooknews: state.allScrapbooknews,
    clippedNewsTile: state.clippedNewsTile
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(NewsCard));

/***/ }),

/***/ "./src/components/NewsList.js":
/*!************************************!*\
  !*** ./src/components/NewsList.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var _NewsCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NewsCard */ "./src/components/NewsCard.js");
/* harmony import */ var _header_news_img_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../header_news_img.png */ "./src/header_news_img.png");
/* harmony import */ var _header_news_img_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_news_img_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/NewsList.js";







class NewsList extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      scrapbooknewsRendered: false
    };

    this.renderNews = () => {
      return this.props.news.map(news => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NewsCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
          news: news,
          key: news.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        });
      });
    };

    this.getUserData = () => {
      if (this.props.getUser.length < 1) {
        this.props.getUserInfo();
      }
    };

    this.initializeScrapbook = userid => {
      if (this.props.scrapbookContainer.length < 1) {
        this.props.findScrapbook(userid);
      }
    };

    this.getAllScrapbook = scrapbookId => {
      if (this.props.allScrapbooknews.length < 1 && this.state.scrapbooknewsRendered === false) {
        this.props.fetchAllScrapbooknews(scrapbookId);
        this.state.scrapbooknewsRendered = true;
      }
    };

    this.findClippedNews = () => {
      const newsIdArr = this.props.allScrapbooknews.map(news => {
        return news.news_id;
      });
      const allNews = this.props.news;
      const clippedNews = newsIdArr.map(id => {
        const newsObj = allNews.filter(news => news.id === id);
        return newsObj[0];
      });
      this.props.clippedNewsTileCreation(clippedNews);
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/');
    } else {
      this.getUserData();

      if (this.props.news.length < 1) {
        this.props.fetchNews();
      }

      setTimeout(() => this.findClippedNews(), 500);
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
      path: "/newslist",
      render: () => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "newslist-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "head-img-container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 71
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "head-img-banner",
          src: "http://cdn.jevelin.shufflehound.com/wp-content/uploads/sites/11/2016/11/Blog_title_image.jpg",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72
          },
          __self: this
        })), this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null, this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "underline",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }), this.props.loader ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, "Loading...") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "wrapper",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 81
          },
          __self: this
        }, this.renderNews()));
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }));
  }

}

const mapStateToProps = state => {
  return {
    news: state.news,
    loader: state.loader,
    clippedNews: state.clippedNews,
    getUser: state.getUser,
    scrapbookContainer: state.scrapbookContainer,
    showNews: state.showNews,
    allScrapbooknews: state.allScrapbooknews,
    clippedNewsTile: state.clippedNewsTile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchNews"])());
    },
    getUserInfo: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchUser"])());
    },
    findScrapbook: userid => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchScrapbook"])(userid));
    },
    fetchAllScrapbooknews: scrapbookId => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllScrapbooknewsAction"])(scrapbookId));
    },
    fetchNews: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchNews"])());
    },
    clippedNewsTileCreation: clippedNews => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["createClippedNewsTile"])(clippedNews));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(NewsList));

/***/ }),

/***/ "./src/components/NewsShow.js":
/*!************************************!*\
  !*** ./src/components/NewsShow.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/Api */ "./src/services/Api.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/NewsShow.js";






class NewsShow extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    this.fetchNews = id => {
      _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].fetchOneNews(id).then(news => {
        this.props.getShowNews(news);
      });
    };

    this.getNews = () => {
      const id = this.props.match.params.id;

      if (Number(id)) {
        this.fetchNews(id);
      } else {
        this.props.history.push('/newslist');
      }
    };

    this.getUserData = () => {
      if (this.props.getUser.length < 1) {
        this.props.getUserInfo();
      }
    };

    this.initializeScrapbook = id => {
      if (this.props.scrapbookContainer.length < 1) {
        this.props.findScrapbook(id);
      }
    };

    this.handleFavorite = (newsId, scrapbookContainerId) => {
      const check = this.props.allScrapbooknews.find(news => {
        return news.news_id === newsId;
      });

      if (!check) {
        this.props.clipNews(newsId, scrapbookContainerId);
        alert('Successfully Saved');
        this.props.history.push('/newslist');
      } else {
        alert('Already Saved');
      }
    };

    this.handleSaveBtnState = () => {
      return this.props.clippedNewsTile.filter(news => {
        return news.id === this.props.showNews.id;
      });
    };
  }

  componentDidMount() {
    if (!localStorage.getItem('user')) {
      this.props.history.push('/');
    } else {
      this.getNews();
      this.getUserData();
    }
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "showNews-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }, this.props.showNews.id ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "newspaper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("figure", {
      className: "figure",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "media",
      src: this.props.showNews.urlToImage,
      alt: "news display",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "headerobjectswrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "headline news-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, this.props.showNews.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "showNews-category",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }, this.props.showNews.category.charAt(0).toUpperCase() + this.props.showNews.category.slice(1)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collumns",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "collumn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "head",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "headline hl4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, this.props.showNews.author === null ? null : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "author",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      },
      __self: this
    }, "by ", this.props.showNews.author)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "subhead",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      },
      __self: this
    }, this.props.showNews.publishedAt ? this.props.showNews.publishedAt.split("T")[0].split("-").join(" ") : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "underline-newsShow",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89
      },
      __self: this
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "news-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "initial-letter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, this.props.showNews.content.charAt()), this.props.showNews.content.split('').slice(1))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "btn-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, this.handleSaveBtnState().length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "saved-btn",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, "Saved") : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "save-btn",
      onClick: () => this.handleFavorite(this.props.showNews.id, this.props.scrapbookContainer.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, "Save"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "link-btn",
      onClick: () => window.open("".concat(this.props.showNews.url), "_blank"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, "Link to this news"))) : null);
  }

}

const mapStateToProps = state => {
  return {
    showNews: state.showNews,
    getUser: state.getUser,
    scrapbookContainer: state.scrapbookContainer,
    allScrapbooknews: state.allScrapbooknews,
    clippedNewsTile: state.clippedNewsTile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getShowNews: oneNews => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["showNews"])(oneNews));
    },
    getUserInfo: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchUser"])());
    },
    findScrapbook: id => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["fetchScrapbook"])(id));
    },
    clipNews: (newsId, scrapbookContainerId) => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_4__["postClip"])(newsId, scrapbookContainerId));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(NewsShow));

/***/ }),

/***/ "./src/components/Signin.js":
/*!**********************************!*\
  !*** ./src/components/Signin.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signin; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/components/Signin.js";

const USERS = 'http://localhost:3001/api/v1/users';
class Signin extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = e => {
      e.preventDefault();
      const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            name: this.state.name,
            username: this.state.username,
            password: this.state.password,
            img_url: 'https://english.metro.taipei/images/default.png'
          }
        })
      };
      fetch(USERS, reqObj).then(resp => resp.json()).then(data => console.log(data));
      this.props.history.push('/login');
    };

    this.state = {
      username: '',
      password: '',
      name: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({
      username: e.target.value
    });
  }

  handleNameChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "form-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: e => this.handleSubmit(e),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }, "Signup"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "Username: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => this.handleUsernameChange(e),
      value: this.state.username,
      type: "text",
      name: "username",
      placeholder: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, "Password: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => this.handlePasswordChange(e),
      value: this.state.password,
      type: "password",
      name: "password",
      placeholder: "password",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
      htmlFor: "username",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, "Name: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      onChange: e => this.handleNameChange(e),
      value: this.state.name,
      type: "text",
      name: "name",
      placeholder: "name",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: "sign-in-btn",
      type: "submit",
      value: "Signin",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    })));
  }

}

/***/ }),

/***/ "./src/containers/scrapbooksContainer.js":
/*!***********************************************!*\
  !*** ./src/containers/scrapbooksContainer.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_ClippedNewsCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ClippedNewsCard */ "./src/components/ClippedNewsCard.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/actions/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/containers/scrapbooksContainer.js";






class ScrapBooksContainers extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      scrapbooknewsRendered: false
    };

    this.componentDidMount = () => {
      if (!localStorage.getItem('user')) {
        this.props.history.push('/');
      } else {
        this.getUserData();

        if (this.props.news.length < 1) {
          this.props.fetchNews();
        }

        setTimeout(() => this.findClippedNews(), 500);
      }
    };

    this.getUserData = () => {
      if (this.props.getUser.length < 1) {
        this.props.getUserInfo();
      }
    };

    this.initializeScrapbook = userid => {
      if (this.props.scrapbookContainer.length < 1) {
        this.props.findScrapbook(userid);
      }
    };

    this.getAllScrapbook = scrapbookId => {
      if (this.props.allScrapbooknews.length < 1 && this.state.scrapbooknewsRendered === false) {
        this.props.fetchAllScrapbooknews(scrapbookId);
        this.state.scrapbooknewsRendered = true;
      }
    };

    this.findClippedNews = () => {
      const newsIdArr = this.props.allScrapbooknews.map(news => {
        return news.news_id;
      });
      const allNews = this.props.news;
      const clippedNews = newsIdArr.map(id => {
        const newsObj = allNews.filter(news => news.id === id);
        return newsObj[0];
      });
      this.props.clippedNewsTileCreation(clippedNews);
    };

    this.renderClippedNewsTile = () => {
      return this.props.clippedNewsTile.map(news => {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ClippedNewsCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
          newsCard: news,
          key: news.id,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        });
      });
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, this.props.getUser.id ? this.initializeScrapbook(this.props.getUser.id) : null, this.props.scrapbookContainer.id ? this.getAllScrapbook(this.props.scrapbookContainer.id) : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
      className: "title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "SCRAPBOOK CONTAINER"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "underline",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
      className: "newslist-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: this
    }, this.props.clippedNewsTile.length > 0 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: this
    }, this.renderClippedNewsTile()) : null));
  }

}

const mapStateToProps = state => {
  return {
    news: state.news,
    getUser: state.getUser,
    scrapbookContainer: state.scrapbookContainer,
    showNews: state.showNews,
    allScrapbooknews: state.allScrapbooknews,
    clippedNewsTile: state.clippedNewsTile
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserInfo: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchUser"])());
    },
    findScrapbook: userid => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchScrapbook"])(userid));
    },
    fetchAllScrapbooknews: scrapbookId => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchAllScrapbooknewsAction"])(scrapbookId));
    },
    fetchNews: () => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["fetchNews"])());
    },
    clippedNewsTileCreation: clippedNews => {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["createClippedNewsTile"])(clippedNews));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ScrapBooksContainers));

/***/ }),

/***/ "./src/header_news_img.png":
/*!*********************************!*\
  !*** ./src/header_news_img.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/header_news_img.abdc9edb.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
var _jsxFileName = "/Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/index.js";








const composeEnhancers = typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : redux__WEBPACK_IMPORTED_MODULE_3__["compose"];
const enhancer = composeEnhancers(Object(redux__WEBPACK_IMPORTED_MODULE_3__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"]));
const store = Object(redux__WEBPACK_IMPORTED_MODULE_3__["createStore"])(_reducers__WEBPACK_IMPORTED_MODULE_5__["default"], enhancer);
Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__["Provider"], {
  store: store,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_7__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
})), document.getElementById('root'));

/***/ }),

/***/ "./src/reducers/allScrapbooknews.js":
/*!******************************************!*\
  !*** ./src/reducers/allScrapbooknews.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return allScrapbooknews; });
function allScrapbooknews(state = [], action) {
  switch (action.type) {
    case 'FETCHALLSCRAPBOOKTILE':
      return action.allScrapbooknews;

    case 'CLIP_NEWS':
      return [...state, action.allScrapbooknews];

    case 'REMOVE_TILE':
      return state.filter(news => news.id !== action.tileId);

    case 'CLEAR_ALL_STATE':
      return state = [];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/clippedNewsTile.js":
/*!*****************************************!*\
  !*** ./src/reducers/clippedNewsTile.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return clippedNewsTile; });
function clippedNewsTile(state = [], action) {
  switch (action.type) {
    case 'CLIPPED_NEWS_TILE':
      return action.clippedNewsTile;

    case 'REMOVE_TILE':
      return state.filter(news => news.id !== action.tileNewsId);

    case 'CLEAR_ALL_STATE':
      return state = [];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/getUser.js":
/*!*********************************!*\
  !*** ./src/reducers/getUser.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return geUser; });
function geUser(state = [], action) {
  switch (action.type) {
    case 'FETCH_USER':
      return action.getUser.user;

    case 'CLEAR_ALL_STATE':
      return state = [];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var _news__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news */ "./src/reducers/news.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader */ "./src/reducers/loader.js");
/* harmony import */ var _showNews__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./showNews */ "./src/reducers/showNews.js");
/* harmony import */ var _getUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./getUser */ "./src/reducers/getUser.js");
/* harmony import */ var _scrapbookContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scrapbookContainer */ "./src/reducers/scrapbookContainer.js");
/* harmony import */ var _allScrapbooknews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./allScrapbooknews */ "./src/reducers/allScrapbooknews.js");
/* harmony import */ var _clippedNewsTile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./clippedNewsTile */ "./src/reducers/clippedNewsTile.js");








/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  news: _news__WEBPACK_IMPORTED_MODULE_1__["default"],
  loader: _loader__WEBPACK_IMPORTED_MODULE_2__["default"],
  showNews: _showNews__WEBPACK_IMPORTED_MODULE_3__["default"],
  getUser: _getUser__WEBPACK_IMPORTED_MODULE_4__["default"],
  scrapbookContainer: _scrapbookContainer__WEBPACK_IMPORTED_MODULE_5__["default"],
  allScrapbooknews: _allScrapbooknews__WEBPACK_IMPORTED_MODULE_6__["default"],
  clippedNewsTile: _clippedNewsTile__WEBPACK_IMPORTED_MODULE_7__["default"]
}));

/***/ }),

/***/ "./src/reducers/loader.js":
/*!********************************!*\
  !*** ./src/reducers/loader.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return loader; });
function loader(state = false, action) {
  switch (action.type) {
    case 'LOADING':
      return true;

    case 'FETCH_NEWS_SUCCESS':
      return false;

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/news.js":
/*!******************************!*\
  !*** ./src/reducers/news.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return news; });
function news(state = [], action) {
  switch (action.type) {
    case 'FETCH_NEWS_SUCCESS':
      return state.concat([...action.news]);

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/scrapbookContainer.js":
/*!********************************************!*\
  !*** ./src/reducers/scrapbookContainer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrapbookContainer; });
function scrapbookContainer(state = [], action) {
  switch (action.type) {
    case 'FETCH_SCRAPBOOK':
      return action.scrapbookContainer;

    case 'CLEAR_ALL_STATE':
      return state = [];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/reducers/showNews.js":
/*!**********************************!*\
  !*** ./src/reducers/showNews.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return showNews; });
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/types */ "./src/actions/types.js");

function showNews(state = {}, action) {
  switch (action.type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_0__["SHOW_NEWS"]:
      return action.oneNews;

    case 'CLEAR_ALL_STATE':
      return state = [];

    default:
      return state;
  }
}

/***/ }),

/***/ "./src/services/Api.js":
/*!*****************************!*\
  !*** ./src/services/Api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const API_URL = 'http://localhost:3001/';
/* harmony default export */ __webpack_exports__["default"] = ({
  login: loginData => {
    const reqObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    };
    return fetch('http://localhost:3001/api/v1/login', reqObj).then(res => res.json());
  },
  profile: () => {
    const reqObj = {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user"))
      }
    };
    return fetch('http://localhost:3001/api/v1/profile', reqObj).then(res => res.json());
  },
  fetchNews: () => {
    let reqObj = {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user"))
      }
    };
    return fetch("".concat(API_URL, "news"), reqObj).then(resp => resp.json());
  },
  fetchOneNews: id => {
    let reqObj = {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user"))
      }
    };
    return fetch("".concat(API_URL, "news/").concat(id), reqObj).then(resp => resp.json());
  },
  findOrCreateScrapBook: id => {
    let reqObj = {
      method: 'POST',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        scrapbook: {
          user_id: id
        }
      })
    };
    return fetch("".concat(API_URL, "scrapbooks"), reqObj).then(resp => resp.json());
  },
  handleAddFavorite: (newsId, scrapbookContainerId) => {
    let reqObj = {
      method: 'POST',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        scrapbooknews: {
          news_id: newsId,
          scrapbook_id: scrapbookContainerId
        }
      })
    };
    return fetch("".concat(API_URL, "scrapbooknews"), reqObj).then(resp => resp.json());
  },
  handleAllScrapbooknews: scrapbookId => {
    let reqObj = {
      method: 'GET',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user"))
      }
    };
    return fetch("".concat(API_URL, "scrapbooknews"), reqObj).then(resp => resp.json());
  },
  handleRemoveTile: tile => {
    let reqObj = {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      }
    };
    return fetch("".concat(API_URL, "scrapbooknews/").concat(tile.id), reqObj);
  },
  handlePostReqNote: bodyObj => {
    const reqObj = {
      method: 'POST',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    };
    return fetch("".concat(API_URL, "notes"), reqObj).then(res => res.json());
  },
  handleDeleteNote: noteId => {
    const reqObj = {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      }
    };
    return fetch("".concat(API_URL, "notes/").concat(noteId), reqObj);
  },
  handlePostReqHighlight: bodyObj => {
    const reqObj = {
      method: 'POST',
      headers: {
        Authorization: "Bearer ".concat(localStorage.getItem("user")),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyObj)
    };
    return fetch("".concat(API_URL, "highlights"), reqObj).then(res => res.json());
  }
});

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/jooyonwon/Development/code/projects/Scrapbook/scrapbook_frontend/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime~main",1]]]);
//# sourceMappingURL=main.chunk.js.map