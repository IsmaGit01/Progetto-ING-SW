"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/layout",{

/***/ "(app-pages-browser)/./app/(routes)/_components/Header.js":
/*!********************************************!*\
  !*** ./app/(routes)/_components/Header.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _barrel_optimize_names_Menu_MenuSquare_lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=Menu,MenuSquare!=!lucide-react */ \"(app-pages-browser)/./node_modules/lucide-react/dist/esm/icons/menu.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @clerk/nextjs */ \"(app-pages-browser)/./node_modules/@clerk/clerk-react/dist/esm/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Header(param) {\n    let { toggleSideBar } = param;\n    _s();\n    const { user } = (0,_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-between md:justify-end shadow-sm bg-white items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Menu_MenuSquare_lucide_react__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                className: \"md:hidden h-7 w-7 text-slate-500 cursor-pointer\",\n                onClick: ()=>toggleSideBar()\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                lineNumber: 12,\n                columnNumber: 9\n            }, this),\n            !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                href: \"/sign-up\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    className: \"bg-blue-500  hover:bg-blue-600 shadow-sm mr-4 mt-4\",\n                    children: \"Get Started\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                lineNumber: 16,\n                columnNumber: 19\n            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mr-4 my-2 flex\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"p-2\",\n                        children: user.fullName\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                        lineNumber: 22,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.UserButton, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                        lineNumber: 23,\n                        columnNumber: 15\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ismam\\\\Desktop\\\\GitHub\\\\Progetto-ING-SW\\\\site\\\\app\\\\(routes)\\\\_components\\\\Header.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Header, \"epmVwB8A4e+5gYLUzH8FT9L4Wq4=\", false, function() {\n    return [\n        _clerk_nextjs__WEBPACK_IMPORTED_MODULE_4__.useUser\n    ];\n});\n_c = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c;\n$RefreshReg$(_c, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9fY29tcG9uZW50cy9IZWFkZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNBO0FBQ3RCO0FBQ0k7QUFDdUI7QUFHcEQsU0FBU08sT0FBTyxLQUFlO1FBQWYsRUFBQ0MsYUFBYSxFQUFDLEdBQWY7O0lBQ2QsTUFBTSxFQUFDQyxJQUFJLEVBQUMsR0FBQ0gsc0RBQU9BO0lBQ3BCLHFCQUNFLDhEQUFDSTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ1YsMkZBQUlBO2dCQUFDVSxXQUFVO2dCQUVmQyxTQUFTLElBQUlKOzs7Ozs7WUFFWixDQUFDQyxxQkFBTyw4REFBQ0wsaURBQUlBO2dCQUFDUyxNQUFLOzBCQUNyQiw0RUFBQ2IseURBQU1BO29CQUFDVyxXQUFVOzhCQUNxQjs7Ozs7Ozs7OztxQ0FHbkMsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0c7d0JBQUdILFdBQVU7a0NBQU9GLEtBQUtNLFFBQVE7Ozs7OztrQ0FDbEMsOERBQUNWLHFEQUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJekI7R0FuQlNFOztRQUNNRCxrREFBT0E7OztLQURiQztBQXFCVCwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvKHJvdXRlcykvX2NvbXBvbmVudHMvSGVhZGVyLmpzP2Y1MDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnQC9jb21wb25lbnRzL3VpL2J1dHRvbidcbmltcG9ydCB7IE1lbnUsIE1lbnVTcXVhcmUgfSBmcm9tICdsdWNpZGUtcmVhY3QnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHsgVXNlckJ1dHRvbiwgdXNlVXNlciB9IGZyb20gJ0BjbGVyay9uZXh0anMnO1xuXG5cbmZ1bmN0aW9uIEhlYWRlcih7dG9nZ2xlU2lkZUJhcn0pIHtcbiAgY29uc3Qge3VzZXJ9PXVzZVVzZXIoKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWJldHdlZW4gbWQ6anVzdGlmeS1lbmQgc2hhZG93LXNtIGJnLXdoaXRlIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxNZW51IGNsYXNzTmFtZT0nbWQ6aGlkZGVuIGgtNyB3LTdcbiAgICAgICAgIHRleHQtc2xhdGUtNTAwIGN1cnNvci1wb2ludGVyJ1xuICAgICAgICAgb25DbGljaz17KCk9PnRvZ2dsZVNpZGVCYXIoKX1cbiAgICAgICAgIC8+XG4gICAgICAgICB7IXVzZXIgPyA8TGluayBocmVmPVwiL3NpZ24tdXBcIj5cbiAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9J2JnLWJsdWUtNTAwIFxuICAgICAgICBob3ZlcjpiZy1ibHVlLTYwMCBzaGFkb3ctc20gbXItNCBtdC00Jz5cbiAgICAgICAgICAgIEdldCBTdGFydGVkPC9CdXR0b24+XG4gICAgICAgICAgICA8L0xpbms+OlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21yLTQgbXktMiBmbGV4Jz5cbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT0ncC0yJz57dXNlci5mdWxsTmFtZX08L2gyPlxuICAgICAgICAgICAgICA8VXNlckJ1dHRvbi8+XG4gICAgICAgICAgICA8L2Rpdj59XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIk1lbnUiLCJNZW51U3F1YXJlIiwiUmVhY3QiLCJMaW5rIiwiVXNlckJ1dHRvbiIsInVzZVVzZXIiLCJIZWFkZXIiLCJ0b2dnbGVTaWRlQmFyIiwidXNlciIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJocmVmIiwiaDIiLCJmdWxsTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/_components/Header.js\n"));

/***/ })

});