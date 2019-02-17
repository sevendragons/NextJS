webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);





var PostLink = function PostLink(_ref) {
  var title = _ref.title,
      slug = _ref.slug;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    as: "/".concat(slug),
    href: "/post?title=".concat(title)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, title)));
};

var blog = function blog() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "My Blog"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/hireme"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    className: "jsx-767407477" + " " + "btn btn-sucess"
  }, "Hire Me")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    className: "jsx-767407477"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
    slug: "react-post",
    title: "React Post"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
    slug: "angular-post",
    title: "Angular Post"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
    slug: "react-post2",
    title: "React Post 2"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
    slug: "vue-post",
    title: "Vue Post"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostLink, {
    slug: "react-native",
    title: "React  Native"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "767407477"
  }, ".btn.jsx-767407477{font-size:17pt;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYWMyMDE4L1dNREQgLSAxMjhHYi9SZWFjdC1zb21ldGhpbmcvTmV4dEpTL3BhZ2VzL2Jsb2cuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkJrQixBQUU2QixlQUFDIiwiZmlsZSI6Ii9Vc2Vycy9tYWMyMDE4L1dNREQgLSAxMjhHYi9SZWFjdC1zb21ldGhpbmcvTmV4dEpTL3BhZ2VzL2Jsb2cuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgUG9zdExpbmsgPSAoeyB0aXRsZSwgc2x1ZyB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGxpPlxuICAgICAgPExpbmsgYXM9e2AvJHtzbHVnfWB9IGhyZWY9e2AvcG9zdD90aXRsZT0ke3RpdGxlfWB9PlxuICAgICAgICA8YT57dGl0bGV9PC9hPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gIClcbn1cblxuXG5cblxuY29uc3QgYmxvZyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHRpdGxlPVwiTXkgQmxvZ1wiPlxuICAgICAgPExpbmsgaHJlZj1cIi9oaXJlbWVcIj48YSBjbGFzc05hbWU9XCJidG4gYnRuLXN1Y2Vzc1wiPkhpcmUgTWU8L2E+PC9MaW5rPlxuICAgICAgPHVsPlxuICAgICAgICA8UG9zdExpbmsgc2x1Zz1cInJlYWN0LXBvc3RcIiB0aXRsZT1cIlJlYWN0IFBvc3RcIj48L1Bvc3RMaW5rPlxuICAgICAgICA8UG9zdExpbmsgc2x1Zz1cImFuZ3VsYXItcG9zdFwiIHRpdGxlPVwiQW5ndWxhciBQb3N0XCI+PC9Qb3N0TGluaz5cbiAgICAgICAgPFBvc3RMaW5rIHNsdWc9XCJyZWFjdC1wb3N0MlwiIHRpdGxlPVwiUmVhY3QgUG9zdCAyXCI+PC9Qb3N0TGluaz5cbiAgICAgICAgPFBvc3RMaW5rIHNsdWc9XCJ2dWUtcG9zdFwiIHRpdGxlPVwiVnVlIFBvc3RcIj48L1Bvc3RMaW5rPlxuICAgICAgICA8UG9zdExpbmsgc2x1Zz1cInJlYWN0LW5hdGl2ZVwiIHRpdGxlPVwiUmVhY3QgIE5hdGl2ZVwiPjwvUG9zdExpbms+XG4gICAgICA8L3VsPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5idG57IGZvbnQtc2l6ZTogMTdwdCB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgYmxvZ1xuIl19 */\n/*@ sourceURL=/Users/mac2018/WMDD - 128Gb/React-something/NextJS/pages/blog.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (blog);

/***/ })

})
//# sourceMappingURL=blog.js.5472e74bc82f13cecad1.hot-update.js.map