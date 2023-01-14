"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getTweets";
exports.ids = ["pages/api/getTweets"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getTweets.ts":
/*!********************************!*\
  !*** ./pages/api/getTweets.ts ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_sanity__WEBPACK_IMPORTED_MODULE_0__, next_sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([_sanity__WEBPACK_IMPORTED_MODULE_0__, next_sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n// Next.js API route support: https://nextjs.org/docs/api-routes/introduction\n\n\nconst feedQuery = next_sanity__WEBPACK_IMPORTED_MODULE_1__.groq`\r\n*[_type == 'tweet' && !blockTweet] \r\n{\r\n  _id,\r\n  ...\r\n} | order(_createdAt desc)\r\n`;\nasync function handler(req, res) {\n    const tweets = await _sanity__WEBPACK_IMPORTED_MODULE_0__.sanityClient.fetch(feedQuery);\n    res.status(200).json({\n        tweets\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VHdlZXRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDZFQUE2RTtBQUVsQztBQUVUO0FBRWxDLE1BQU1FLFlBQVlELDZDQUFJLENBQUM7QUFZdkIsZUFBZSxlQUFlRTs7SUFNNUJFOztJQUE4QjtBQUNoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldFR3ZWV0cy50cz9jNWYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIE5leHQuanMgQVBJIHJvdXRlIHN1cHBvcnQ6IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL2FwaS1yb3V0ZXMvaW50cm9kdWN0aW9uXHJcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gJy4uLy4uL3Nhbml0eSdcclxuaW1wb3J0IHsgVHdlZXQgfSBmcm9tICcuLi8uLi90eXBpbmdzJ1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5jb25zdCBmZWVkUXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09ICd0d2VldCcgJiYgIWJsb2NrVHdlZXRdIFxyXG57XHJcbiAgX2lkLFxyXG4gIC4uLlxyXG59IHwgb3JkZXIoX2NyZWF0ZWRBdCBkZXNjKVxyXG5gXHJcblxyXG50eXBlIERhdGEgPSB7XHJcbiAgdHdlZXRzOiBUd2VldFtdXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXHJcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcclxuICByZXM6IE5leHRBcGlSZXNwb25zZTxEYXRhPlxyXG4pIHtcclxuICBjb25zdCB0d2VldHM6IFR3ZWV0W10gPSBhd2FpdCBzYW5pdHlDbGllbnQuZmV0Y2goZmVlZFF1ZXJ5KVxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbih7IHR3ZWV0cyB9KVxyXG59XHJcbiJdLCJuYW1lcyI6WyJzYW5pdHlDbGllbnQiLCJncm9xIiwiZmVlZFF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0cyIsImZldGNoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTweets.ts\n");

/***/ }),

/***/ "(api)/./sanity.js":
/*!*******************!*\
  !*** ./sanity.js ***!
  \*******************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"sanityClient\": () => (/* binding */ sanityClient)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__]);\nnext_sanity__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nconst config = {\n    projectId: \"mggbpiam\",\n    dataset: \"production\" || 0,\n    apiVersion: \"2022-11-16\",\n    useCdn: \"development\" === \"production\"\n};\nconst sanityClient = (0,next_sanity__WEBPACK_IMPORTED_MODULE_0__.createClient)(config);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zYW5pdHkuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBRW9CO0FBRWIsTUFBTUMsU0FBUztJQUN0QkMsV0FBV0MsVUFBeUM7SUFDcERHLFNBQVNILFlBQXNDLElBQUk7SUFDbkRLLFlBQVk7SUFDWkMsUUFBUU4sa0JBQXlCO0FBQ2pDLEVBQUM7QUFDTSxNQUFNTyxlQUFlVix5REFBWUEsQ0FBQ0MsUUFBTyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Nhbml0eS5qcz84NWQ0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBjcmVhdGVDbGllbnQsXHJcbn0gZnJvbSAnbmV4dC1zYW5pdHknXHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xyXG5wcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1NBTklUWV9QUk9KRUNUX0lELFxyXG5kYXRhc2V0OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCB8fCAncHJvZHVjdGlvbicgLFxyXG5hcGlWZXJzaW9uOiAnMjAyMi0xMS0xNicgLFxyXG51c2VDZG46IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicsXHJcbn1cclxuZXhwb3J0IGNvbnN0IHNhbml0eUNsaWVudCA9IGNyZWF0ZUNsaWVudChjb25maWcpIl0sIm5hbWVzIjpbImNyZWF0ZUNsaWVudCIsImNvbmZpZyIsInByb2plY3RJZCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TQU5JVFlfUFJPSkVDVF9JRCIsImRhdGFzZXQiLCJORVhUX1BVQkxJQ19TQU5JVFlfREFUQVNFVCIsImFwaVZlcnNpb24iLCJ1c2VDZG4iLCJzYW5pdHlDbGllbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./sanity.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTweets.ts"));
module.exports = __webpack_exports__;

})();