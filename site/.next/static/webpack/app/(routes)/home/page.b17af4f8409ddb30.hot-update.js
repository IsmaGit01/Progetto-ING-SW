"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/home/page",{

/***/ "(app-pages-browser)/./app/(routes)/home/_components/PostList.js":
/*!***************************************************!*\
  !*** ./app/(routes)/home/_components/PostList.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_utils_GlobalApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_utils/GlobalApi */ \"(app-pages-browser)/./app/_utils/GlobalApi.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PostItem */ \"(app-pages-browser)/./app/(routes)/home/_components/PostItem.js\");\n\n\n\n\nfunction PostList(param) {\n    let { postList, updatePostList } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: postList ? postList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_PostItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    post: item,\n                    updatePostList: ()=>updatePostList()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\VSCODE\\\\Rev App\\\\site\\\\app\\\\(routes)\\\\home\\\\_components\\\\PostList.js\",\n                    lineNumber: 11,\n                    columnNumber: 11\n                }, this)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\VSCODE\\\\Rev App\\\\site\\\\app\\\\(routes)\\\\home\\\\_components\\\\PostList.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)) //Skeleton effect:\n         : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                1,\n                2,\n                3\n            ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-[200px] w-full bg-slate-200 animate-pulse my-5 rounded-lg max-w-custom mx-auto\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\VSCODE\\\\Rev App\\\\site\\\\app\\\\(routes)\\\\home\\\\_components\\\\PostList.js\",\n                    lineNumber: 17,\n                    columnNumber: 11\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\VSCODE\\\\Rev App\\\\site\\\\app\\\\(routes)\\\\home\\\\_components\\\\PostList.js\",\n            lineNumber: 14,\n            columnNumber: 6\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\VSCODE\\\\Rev App\\\\site\\\\app\\\\(routes)\\\\home\\\\_components\\\\PostList.js\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n_c = PostList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostList);\nvar _c;\n$RefreshReg$(_c, \"PostList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9ob21lL19jb21wb25lbnRzL1Bvc3RMaXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBOEM7QUFDSTtBQUNoQjtBQUVsQyxTQUFTSyxTQUFTLEtBQTBCO1FBQTFCLEVBQUNDLFFBQVEsRUFBRUMsY0FBYyxFQUFDLEdBQTFCO0lBRWhCLHFCQUNFLDhEQUFDQztrQkFDRUYsV0FBU0EsU0FBU0csR0FBRyxDQUFDLENBQUNDLE1BQUtDLHNCQUMzQiw4REFBQ0g7MEJBQ0MsNEVBQUNKLGlEQUFRQTtvQkFBQ1EsTUFBTUY7b0JBQU1ILGdCQUFnQixJQUFJQTs7Ozs7O2VBRGxDSTs7OztzQkFHVCxrQkFBa0I7eUJBQ3RCLDhEQUFDSDtzQkFFRTtnQkFBQztnQkFBRTtnQkFBRTthQUFFLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxzQkFDaEIsOERBQUNIO29CQUFJSyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBTXpCO0tBbEJTUjtBQW9CVCwrREFBZUEsUUFBUUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvaG9tZS9fY29tcG9uZW50cy9Qb3N0TGlzdC5qcz84NThmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHbG9iYWxBcGkgZnJvbSAnQC9hcHAvX3V0aWxzL0dsb2JhbEFwaSdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFBvc3RJdGVtIGZyb20gJy4vUG9zdEl0ZW0nO1xyXG5cclxuZnVuY3Rpb24gUG9zdExpc3Qoe3Bvc3RMaXN0LCB1cGRhdGVQb3N0TGlzdH0pIHtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtwb3N0TGlzdD9wb3N0TGlzdC5tYXAoKGl0ZW0saW5kZXgpPT4oXHJcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cclxuICAgICAgICAgIDxQb3N0SXRlbSBwb3N0PXtpdGVtfSB1cGRhdGVQb3N0TGlzdD17KCk9PnVwZGF0ZVBvc3RMaXN0KCl9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSkgLy9Ta2VsZXRvbiBlZmZlY3Q6XHJcbiAgICA6PGRpdj5cclxuICAgICAge1xyXG4gICAgICAgIFsxLDIsM10ubWFwKChpdGVtLGluZGV4KT0+KFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2gtWzIwMHB4XSB3LWZ1bGwgYmctc2xhdGUtMjAwIGFuaW1hdGUtcHVsc2UgbXktNSByb3VuZGVkLWxnIG1heC13LWN1c3RvbSBteC1hdXRvJz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpXHJcbiAgICAgIH08L2Rpdj59XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RMaXN0Il0sIm5hbWVzIjpbIkdsb2JhbEFwaSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJQb3N0SXRlbSIsIlBvc3RMaXN0IiwicG9zdExpc3QiLCJ1cGRhdGVQb3N0TGlzdCIsImRpdiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsInBvc3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/home/_components/PostList.js\n"));

/***/ })

});