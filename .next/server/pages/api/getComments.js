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
exports.id = "pages/api/getComments";
exports.ids = ["pages/api/getComments"];
exports.modules = {

/***/ "next-sanity":
/*!******************************!*\
  !*** external "next-sanity" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("next-sanity");;

/***/ }),

/***/ "(api)/./pages/api/getComments.ts":
/*!**********************************!*\
  !*** ./pages/api/getComments.ts ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_sanity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-sanity */ \"next-sanity\");\n/* harmony import */ var _sanity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../sanity */ \"(api)/./sanity.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__]);\n([next_sanity__WEBPACK_IMPORTED_MODULE_0__, _sanity__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\nconst commentQuery = next_sanity__WEBPACK_IMPORTED_MODULE_0__.groq`\r\n*[_type == 'comment' && references(*[_type=='tweet' && _id == $tweetId]._id)] \r\n{\r\n  _id,\r\n  ...\r\n} | order(_createdAt desc)\r\n`;\nasync function handler(req, res) {\n    const { tweetId  } = req.query;\n    const comments = await _sanity__WEBPACK_IMPORTED_MODULE_1__.sanityClient.fetch(commentQuery, {\n        tweetId: tweetId\n    });\n    res.status(200).json(comments);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ2tDO0FBQ1M7QUFHM0MsTUFBTUUsZUFBZUYsNkNBQUksQ0FBQztBQVUxQixlQUFlLGVBQWVHLFFBQzVCQyxHQUFtQixFQUNuQkMsR0FBMEIsRUFDMUI7O0lBR0k7O0lBRUE7O0FBSUwiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZ2V0Q29tbWVudHMudHM/MTc4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0J1xyXG5pbXBvcnQgeyBncm9xIH0gZnJvbSAnbmV4dC1zYW5pdHknXHJcbmltcG9ydCB7IHNhbml0eUNsaWVudCB9IGZyb20gJy4uLy4uL3Nhbml0eSdcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uLy4uL3R5cGluZ3MnXHJcblxyXG5jb25zdCBjb21tZW50UXVlcnkgPSBncm9xYFxyXG4qW190eXBlID09ICdjb21tZW50JyAmJiByZWZlcmVuY2VzKCpbX3R5cGU9PSd0d2VldCcgJiYgX2lkID09ICR0d2VldElkXS5faWQpXSBcclxue1xyXG4gIF9pZCxcclxuICAuLi5cclxufSB8IG9yZGVyKF9jcmVhdGVkQXQgZGVzYylcclxuYFxyXG5cclxudHlwZSBEYXRhID0gQ29tbWVudFtdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcclxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxyXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPERhdGE+XHJcbikge1xyXG4gICAgICBcclxuICAgICAgY29uc3QgeyB0d2VldElkIH0gPSByZXEucXVlcnlcclxuICAgICAgY29uc3QgY29tbWVudHM6IENvbW1lbnRbXSA9IGF3YWl0IHNhbml0eUNsaWVudC5mZXRjaChjb21tZW50UXVlcnksIHtcclxuICAgICAgICAgICB0d2VldElkOiB0d2VldElkICwgXHJcbiAgICAgIH0pXHJcblxyXG5cclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihjb21tZW50cylcclxufSJdLCJuYW1lcyI6WyJncm9xIiwic2FuaXR5Q2xpZW50IiwiY29tbWVudFF1ZXJ5IiwiaGFuZGxlciIsInJlcSIsInJlcyIsInR3ZWV0SWQiLCJxdWVyeSIsImNvbW1lbnRzIiwiZmV0Y2giLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/getComments.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getComments.ts"));
module.exports = __webpack_exports__;

})();