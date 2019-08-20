webpackHotUpdate("main",{

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

/***/ })

})
//# sourceMappingURL=main.ecf983c33cb09a2c689f.hot-update.js.map