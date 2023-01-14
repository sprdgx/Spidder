"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Tweetbox.tsx":
/*!*********************************!*\
  !*** ./components/Tweetbox.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/outline */ \"./node_modules/@heroicons/react/24/outline/esm/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_fetchTweets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetchTweets */ \"./utils/fetchTweets.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Tweetbox(param) {\n    let { setTweets  } = param;\n    var _session_user;\n    _s();\n    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const imageInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    const [imageUrlBoxIsOpen, setImageUrlBoxIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const addImagetoTweet = (e)=>{\n        var _imageInputRef_current;\n        e.preventDefault();\n        if (!((_imageInputRef_current = imageInputRef.current) === null || _imageInputRef_current === void 0 ? void 0 : _imageInputRef_current.value)) return;\n        setImage(imageInputRef.current.value);\n        imageInputRef.current.value = \"\";\n        setImageUrlBoxIsOpen(false);\n    };\n    const postTweet = async ()=>{\n        var _session_user, _session_user1;\n        const tweetInfo = {\n            text: input,\n            username: (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.name) || \"Unknown User\",\n            profileImg: (session === null || session === void 0 ? void 0 : (_session_user1 = session.user) === null || _session_user1 === void 0 ? void 0 : _session_user1.image) || \"https://links.papareact.com/gll\",\n            image: image\n        };\n        const result = await fetch(\"/api/addTweet\", {\n            body: JSON.stringify(tweetInfo),\n            method: \"POST\"\n        });\n        const json = await result.json();\n        const newTweets = await (0,_utils_fetchTweets__WEBPACK_IMPORTED_MODULE_3__.fetchTweets)();\n        setTweets(newTweets);\n        return json;\n    };\n    const handleSubmit = (e)=>{\n        e.preventDefault();\n        postTweet();\n        setInput(\"\");\n        setImage(\"\");\n        setImageUrlBoxIsOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex p-5 space-x-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                className: \"object-cover mt-4 rounded-full h-14 w-14\",\n                src: (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.image) || \"https://links.papareact.com/gll\",\n                alt: \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center flex-1 \",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"flex flex-col flex-1 lg:pl-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            value: input,\n                            onChange: (e)=>setInput(e.target.value),\n                            type: \"text\",\n                            placeholder: \" What's Happening?\",\n                            className: \"w-full h-24 text-xl bg-red-300 rounded-lg outline-none placeholder:text-xl placeholder:text-black\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex items-center \",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"flex flex-1 text-bold space-x-1 text-black \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.CameraIcon, {\n                                            onClick: ()=>setImageUrlBoxIsOpen(!imageUrlBoxIsOpen),\n                                            className: \"hidden lg:inline w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.MagnifyingGlassCircleIcon, {\n                                            className: \" w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.FaceSmileIcon, {\n                                            className: \"hidden w-5 h-5 transition-transform duration-150 ease-out cursor-pointer lg:inline hover:scale-150 \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.CalendarIcon, {\n                                            className: \"w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                            lineNumber: 73,\n                                            columnNumber: 17\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__.MapPinIcon, {\n                                            className: \"w-5 h-5 transition-transform duration-150 ease-out cursor-pointer hover:scale-150 \"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: handleSubmit,\n                                    disabled: !input || !session,\n                                    className: \"px-5 py-2 mt-2 font-bold text-black rounded-full disabled:opacity-40 bg-red-300 \",\n                                    children: \"Tweet\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                    lineNumber: 78,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        imageUrlBoxIsOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            className: \"flex px-4 py-2 mt-5 rounded-lg bg-red-300\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    ref: imageInputRef,\n                                    className: \"flex-1 p-2 text-black bg-transparent outline-none placeholder:text-black \",\n                                    type: \"text\",\n                                    placeholder: \"Enter Image URL...\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    type: \"submit\",\n                                    onClick: addImagetoTweet,\n                                    className: \"font-bold text-black\",\n                                    children: \"Add Image\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 15\n                        }, this),\n                        image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: image,\n                            alt: \"\",\n                            className: \"object-contain w-full h-40 mt-10 shadow-lg rounded-xl\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n                lineNumber: 62,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\User\\\\twitter-2\\\\components\\\\Tweetbox.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Tweetbox, \"7hBuqcsnSxwtO0o/+mz1qDwpF7o=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession\n    ];\n});\n_c = Tweetbox;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tweetbox);\nvar _c;\n$RefreshReg$(_c, \"Tweetbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O3NEQUN6Qiw4REFBQ3hDLHFFQUFZQTs0Q0FBQ3dDLFdBQVU7Ozs7OztzREFDeEIsOERBQUNyQyxtRUFBVUE7NENBQUNxQyxXQUFVOzs7Ozs7Ozs7Ozs7OENBSXhCLDhEQUFDVTtvQ0FBT0QsU0FBU1g7b0NBQWNhLFVBQVUsQ0FBQ3pDLFNBQVMsQ0FBQ0Q7b0NBQVUrQixXQUFVOzhDQUFtRjs7Ozs7Ozs7Ozs7O3dCQUs1SnhCLG1DQUNDLDhEQUFDNEI7NEJBQUtKLFdBQVU7OzhDQUNkLDhEQUFDOUI7b0NBQU0wQyxLQUFNdEM7b0NBQWdCMEIsV0FBVTtvQ0FBNEVPLE1BQUs7b0NBQU9DLGFBQVk7Ozs7Ozs4Q0FDM0ksOERBQUNFO29DQUFPSCxNQUFLO29DQUFTRSxTQUFTL0I7b0NBQWlCc0IsV0FBVTs4Q0FBdUI7Ozs7Ozs7Ozs7Ozt3QkFJcEY1Qix1QkFDQyw4REFBQzZCOzRCQUFJQyxLQUFLOUI7NEJBQU8rQixLQUFJOzRCQUFHSCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oRDtHQW5GU2pDOztRQU1rQkYsdURBQVVBOzs7S0FONUJFO0FBcUZULCtEQUFlQSxRQUFRQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHdlZXRib3gudHN4PzA4OWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IERpc3BhdGNoLCBNb3VzZUV2ZW50LCBTZXRTdGF0ZUFjdGlvbiwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBDYWxlbmRhckljb24sIEZhY2VTbWlsZUljb24sIE1hZ25pZnlpbmdHbGFzc0NpcmNsZUljb24sIE1hcFBpbkljb24sIENhbWVyYUljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L291dGxpbmUnXHJcbmltcG9ydCB7IHVzZVNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvcmVhY3QnXHJcbmltcG9ydCB7IFR3ZWV0LCBUd2VldEJvZHkgfSBmcm9tICcuLi90eXBpbmdzJ1xyXG5pbXBvcnQgeyBmZXRjaFR3ZWV0cyB9IGZyb20gJy4uL3V0aWxzL2ZldGNoVHdlZXRzJ1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgUHJvcHMge1xyXG4gIHNldFR3ZWV0czogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VHdlZXRbXT4+XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBUd2VldGJveCgge3NldFR3ZWV0c306IFByb3BzKSB7XHJcbiAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKVxyXG4gIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGU8c3RyaW5nPignJylcclxuXHJcbiAgY29uc3QgaW1hZ2VJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKVxyXG4gIFxyXG4gIGNvbnN0IHsgZGF0YTpzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKClcclxuICBjb25zdCBbaW1hZ2VVcmxCb3hJc09wZW4sIHNldEltYWdlVXJsQm94SXNPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKSBcclxuXHJcbiAgY29uc3QgYWRkSW1hZ2V0b1R3ZWV0ID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIGdsb2JhbFRoaXMuTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAoIWltYWdlSW5wdXRSZWYuY3VycmVudD8udmFsdWUpIHJldHVybjtcclxuICAgICAgc2V0SW1hZ2UoaW1hZ2VJbnB1dFJlZi5jdXJyZW50LnZhbHVlKVxyXG4gICAgICBpbWFnZUlucHV0UmVmLmN1cnJlbnQudmFsdWU9Jyc7XHJcbiAgICAgIHNldEltYWdlVXJsQm94SXNPcGVuKGZhbHNlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwb3N0VHdlZXQgPSBhc3luYyAoKSAgPT4ge1xyXG4gICAgICAgY29uc3QgdHdlZXRJbmZvOiBUd2VldEJvZHkgPSB7XHJcbiAgICAgICAgdGV4dDogaW5wdXQsXHJcbiAgICAgICAgdXNlcm5hbWU6IHNlc3Npb24/LnVzZXI/Lm5hbWUgfHwgJ1Vua25vd24gVXNlcicsXHJcbiAgICAgICAgcHJvZmlsZUltZzogc2Vzc2lvbj8udXNlcj8uaW1hZ2UgfHwgJ2h0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9nbGwnLFxyXG4gICAgICAgIGltYWdlOiBpbWFnZSxcclxuICAgICAgIH1cclxuXHJcbiAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaChgL2FwaS9hZGRUd2VldGAsIHtcclxuICAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KHR3ZWV0SW5mbyksXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICB9KVxyXG5cclxuICAgICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXN1bHQuanNvbigpOyBcclxuICAgICAgIGNvbnN0IG5ld1R3ZWV0cyA9IGF3YWl0IGZldGNoVHdlZXRzKCk7XHJcbiAgICAgICBzZXRUd2VldHMobmV3VHdlZXRzKVxyXG4gICAgICAgcmV0dXJuIGpzb24gXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gKGU6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIGdsb2JhbFRoaXMuTW91c2VFdmVudD4pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBwb3N0VHdlZXQoKVxyXG4gICAgICAgIHNldElucHV0KCcnKVxyXG4gICAgICAgIHNldEltYWdlKCcnKVxyXG4gICAgICAgIHNldEltYWdlVXJsQm94SXNPcGVuKGZhbHNlKVxyXG5cclxuICAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IHAtNSBzcGFjZS14LTInPlxyXG4gICAgICAgIDxpbWcgY2xhc3NOYW1lPSdvYmplY3QtY292ZXIgbXQtNCByb3VuZGVkLWZ1bGwgaC0xNCB3LTE0JyBzcmM9IHtzZXNzaW9uPy51c2VyPy5pbWFnZSB8fCBcImh0dHBzOi8vbGlua3MucGFwYXJlYWN0LmNvbS9nbGxcIn0gYWx0PVwiXCIgLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgZmxleC0xICc+XHJcblxyXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGZsZXgtMSBsZzpwbC0yJz5cclxuICAgICAgICAgICAgPGlucHV0IHZhbHVlPXtpbnB1dH0gb25DaGFuZ2U9eyAoZSk9PiBzZXRJbnB1dCAoZS50YXJnZXQudmFsdWUpfSB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiIFdoYXQncyBIYXBwZW5pbmc/XCIgY2xhc3NOYW1lPSd3LWZ1bGwgaC0yNCB0ZXh0LXhsIGJnLXJlZC0zMDAgcm91bmRlZC1sZyBvdXRsaW5lLW5vbmUgcGxhY2Vob2xkZXI6dGV4dC14bCBwbGFjZWhvbGRlcjp0ZXh0LWJsYWNrJy8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBpdGVtcy1jZW50ZXIgJz5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC0xIHRleHQtYm9sZCBzcGFjZS14LTEgdGV4dC1ibGFjayAnPlxyXG4gICAgICAgICAgICAgICAgPENhbWVyYUljb24gb25DbGljaz17KCkgPT4gc2V0SW1hZ2VVcmxCb3hJc09wZW4gKCAhaW1hZ2VVcmxCb3hJc09wZW4gKX0gY2xhc3NOYW1lPSdoaWRkZW4gbGc6aW5saW5lIHctNSBoLTUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGVhc2Utb3V0IGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTE1MCcgLz5cclxuICAgICAgICAgICAgICAgIDxNYWduaWZ5aW5nR2xhc3NDaXJjbGVJY29uIGNsYXNzTmFtZT0nIHctNSBoLTUgdHJhbnNpdGlvbi10cmFuc2Zvcm0gZHVyYXRpb24tMTUwIGVhc2Utb3V0IGN1cnNvci1wb2ludGVyIGhvdmVyOnNjYWxlLTE1MCAnIC8+XHJcbiAgICAgICAgICAgICAgICA8RmFjZVNtaWxlSWNvbiBjbGFzc05hbWU9J2hpZGRlbiB3LTUgaC01IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBlYXNlLW91dCBjdXJzb3ItcG9pbnRlciBsZzppbmxpbmUgaG92ZXI6c2NhbGUtMTUwICcgLz5cclxuICAgICAgICAgICAgICAgIDxDYWxlbmRhckljb24gY2xhc3NOYW1lPSd3LTUgaC01IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBlYXNlLW91dCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xNTAgJyAvPlxyXG4gICAgICAgICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPSd3LTUgaC01IHRyYW5zaXRpb24tdHJhbnNmb3JtIGR1cmF0aW9uLTE1MCBlYXNlLW91dCBjdXJzb3ItcG9pbnRlciBob3ZlcjpzY2FsZS0xNTAgJyAvPiBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVN1Ym1pdH0gZGlzYWJsZWQ9eyFpbnB1dCB8fCAhc2Vzc2lvbiB9IGNsYXNzTmFtZT0ncHgtNSBweS0yIG10LTIgZm9udC1ib2xkIHRleHQtYmxhY2sgcm91bmRlZC1mdWxsIGRpc2FibGVkOm9wYWNpdHktNDAgYmctcmVkLTMwMCAnPlxyXG4gICAgICAgICAgICAgICAgICBUd2VldCBcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aW1hZ2VVcmxCb3hJc09wZW4gJiYgKFxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nZmxleCBweC00IHB5LTIgbXQtNSByb3VuZGVkLWxnIGJnLXJlZC0zMDAnPiBcclxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9eyBpbWFnZUlucHV0UmVmIH0gY2xhc3NOYW1lPSdmbGV4LTEgcC0yIHRleHQtYmxhY2sgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOnRleHQtYmxhY2sgJyB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPSdFbnRlciBJbWFnZSBVUkwuLi4nIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgb25DbGljaz17YWRkSW1hZ2V0b1R3ZWV0fSBjbGFzc05hbWU9J2ZvbnQtYm9sZCB0ZXh0LWJsYWNrJz5BZGQgSW1hZ2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICB7aW1hZ2UgJiYgKFxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWFnZX0gYWx0PVwiXCIgY2xhc3NOYW1lPSdvYmplY3QtY29udGFpbiB3LWZ1bGwgaC00MCBtdC0xMCBzaGFkb3ctbGcgcm91bmRlZC14bCcvPlxyXG4gICAgICAgICAgICApIH1cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVHdlZXRib3giXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkNhbGVuZGFySWNvbiIsIkZhY2VTbWlsZUljb24iLCJNYWduaWZ5aW5nR2xhc3NDaXJjbGVJY29uIiwiTWFwUGluSWNvbiIsIkNhbWVyYUljb24iLCJ1c2VTZXNzaW9uIiwiZmV0Y2hUd2VldHMiLCJUd2VldGJveCIsInNldFR3ZWV0cyIsInNlc3Npb24iLCJpbnB1dCIsInNldElucHV0IiwiaW1hZ2UiLCJzZXRJbWFnZSIsImltYWdlSW5wdXRSZWYiLCJkYXRhIiwiaW1hZ2VVcmxCb3hJc09wZW4iLCJzZXRJbWFnZVVybEJveElzT3BlbiIsImFkZEltYWdldG9Ud2VldCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImN1cnJlbnQiLCJ2YWx1ZSIsInBvc3RUd2VldCIsInR3ZWV0SW5mbyIsInRleHQiLCJ1c2VybmFtZSIsInVzZXIiLCJuYW1lIiwicHJvZmlsZUltZyIsInJlc3VsdCIsImZldGNoIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJtZXRob2QiLCJqc29uIiwibmV3VHdlZXRzIiwiaGFuZGxlU3VibWl0IiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiYWx0IiwiZm9ybSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DbGljayIsImJ1dHRvbiIsImRpc2FibGVkIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tweetbox.tsx\n"));

/***/ })

});