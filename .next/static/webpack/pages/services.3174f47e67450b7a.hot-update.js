"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/services",{

/***/ "./src/components/table_layout_activity_vert.js":
/*!******************************************************!*\
  !*** ./src/components/table_layout_activity_vert.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Item */ \"./src/components/Item.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst TableLayoutActivityVert = (param)=>{\n    let { items } = param;\n    _s();\n    const exampleRows = [\n        {\n            // number: '/assets/img/2c36035682c874a7940051e79e8fe906.avif', // Path relative to the 'public' folder\n            number: 1,\n            symbol: \"/assets/img/2c36035682c874a7940051e79e8fe906.avif\",\n            collection: \"Bitcoin\",\n            floor: \"45,000\",\n            volume: \"200M\",\n            owners: \"3M\",\n            support: \"24/7\"\n        },\n        {\n            number: 2,\n            symbol: \"/assets/img/bd6822389dd9dbda7a00a882b20f4f84.avif\",\n            collection: \"Ethereum\",\n            floor: \"3,000\",\n            volume: \"150M\",\n            owners: \"5M\",\n            support: \"24/7\"\n        },\n        {\n            number: 3,\n            symbol: \"/assets/img/5a430b65e24425193ee98c5129cb93e1.webp\",\n            collection: \"Litecoin\",\n            floor: \"150\",\n            volume: \"50M\",\n            owners: \"1M\",\n            support: \"Business Hours\"\n        },\n        {\n            number: 4,\n            symbol: \"/assets/img/H8jOCJuQokNqGBpkBN5wk1oZwO7LM8bNnrHCaekV2nKjnCqw6UB5oaH8XyNeBDj6bA_n1mjejzhFQUP3O1NfjFLHr3FOaeHcTOOT.avif\",\n            collection: \"Ripple\",\n            floor: \"0.8\",\n            volume: \"120M\",\n            owners: \"2M\",\n            support: \"24/5\"\n        },\n        {\n            number: 5,\n            symbol: \"/assets/img/lHexKRMpw-aoSyB1WdFBff5yfANLReFxHzt1DOj_sg7mS14yARpuvYcUtsyyx-Nkpk6WTcUPFoG53VnLJezYi8hAs0OxNZwlw6Y-dmI.avif\",\n            collection: \"Cardano\",\n            floor: \"1.2\",\n            volume: \"80M\",\n            owners: \"2.5M\",\n            support: \"24/7\"\n        },\n        {\n            number: 6,\n            symbol: \"/assets/img/ODl0M4aBjdBhEsqnH9-JgSd7Hg8CCgrZ_I6bs9vBopnB_lUYn90rr7f_rWHB1IHaUo8F6LVNQ4kk-Be1KVPUyy8NON8m_CTPE66Y.avif\",\n            collection: \"Polkadot\",\n            floor: \"25\",\n            volume: \"60M\",\n            owners: \"900K\",\n            support: \"24/7\"\n        },\n        {\n            number: 7,\n            symbol: \"/assets/img/b1c9ed2e584b4f6e418bf1ca15311844 (1).avif\",\n            collection: \"Bitcoin Cash\",\n            floor: \"500\",\n            volume: \"40M\",\n            owners: \"1.5M\",\n            support: \"Business Hours\"\n        },\n        {\n            number: 8,\n            symbol: \"/assets/img/c0b7dfed5908126d92877c00470ee72a.avif\",\n            collection: \"Solana\",\n            floor: \"40\",\n            volume: \"100M\",\n            owners: \"800K\",\n            support: \"24/7\"\n        },\n        {\n            number: 9,\n            symbol: \"/assets/img/bbaf43ee4a02d5affb7e8fc186d0bdb5.avif\",\n            collection: \"Chainlink\",\n            floor: \"20\",\n            volume: \"70M\",\n            owners: \"2M\",\n            support: \"24/7\"\n        },\n        {\n            number: 10,\n            symbol: \"/assets/img/yNi-XdGxsgQCPpqSio4o31ygAV6wURdIdInWRcFIl46UjUQ1eV7BEndGe8L661OoG-clRi7EgInLX4LPu9Jfw4fq0bnVYHqg7RFi.avif\",\n            collection: \"Chainlink\",\n            floor: \"20\",\n            volume: \"70M\",\n            owners: \"2M\",\n            support: \"24/7\"\n        }\n    ];\n    const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"breakfast\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-100 chartTextH1 h-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n            className: \"table w-full table-auto border-collapse border-slate-500\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"chartText chartTextPL0 border-b border-slate-600 pl-0 py-2 text-slate-800\",\n                                children: \"COLLECTION\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                lineNumber: 105,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"chartText border-b border-slate-600 px-4 py-2 text-slate-800\",\n                                children: \"FLOOR\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                lineNumber: 106,\n                                columnNumber: 17\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                className: \"chartText border-b border-slate-600 px-4 py-2 text-slate-800\",\n                                children: \"1 DAY CHANGE\"\n                            }, void 0, false, {\n                                fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                lineNumber: 107,\n                                columnNumber: 17\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                        lineNumber: 104,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                    children: exampleRows.map((row, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"chartText border-custo-img border-slate-700\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: row.symbol,\n                                        alt: \"Symbol\",\n                                        className: \"thumbnail_table_vert w-sm w-2 h-2\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                        lineNumber: 114,\n                                        columnNumber: 25\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                    lineNumber: 113,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"chartText border-custo border-slate-700\",\n                                    children: row.collection\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                    lineNumber: 116,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"chartText border-custo border-slate-700\",\n                                    children: row.floor\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 21\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                    className: \"chartText border-custo border-slate-700\",\n                                    children: row.volume\n                                }, void 0, false, {\n                                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                                    lineNumber: 118,\n                                    columnNumber: 21\n                                }, undefined)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                            lineNumber: 112,\n                            columnNumber: 17\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n                    lineNumber: 110,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n            lineNumber: 102,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/bryanballi/repos/Technoking/TheNutMarket/thenutexchange/src/components/table_layout_activity_vert.js\",\n        lineNumber: 101,\n        columnNumber: 5\n    }, undefined);\n};\n_s(TableLayoutActivityVert, \"k0VbiQeq+1xcTsIbKDSW7hxhzxg=\");\n_c = TableLayoutActivityVert;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableLayoutActivityVert);\nvar _c;\n$RefreshReg$(_c, \"TableLayoutActivityVert\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy90YWJsZV9sYXlvdXRfYWN0aXZpdHlfdmVydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFpQztBQUNQO0FBRTFCLE1BQU1FLDBCQUEwQjtRQUFDLEVBQUVDLEtBQUssRUFBRTs7SUFDeEMsTUFBTUMsY0FBYztRQUNsQjtZQUNGLHVHQUF1RztZQUN2R0MsUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNQO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO1FBQ0E7WUFDRU4sUUFBUTtZQUNSQyxRQUFTO1lBQ1RDLFlBQVk7WUFDWkMsT0FBTztZQUNQQyxRQUFRO1lBQ1JDLFFBQVE7WUFDUkMsU0FBUztRQUNYO0tBQ0Q7SUFDRCxNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR2IsK0NBQVFBLENBQUM7SUFDM0MscUJBRUUsOERBQUNjO1FBQUlDLFdBQVU7a0JBQ2YsNEVBQUNDO1lBQU1ELFdBQVU7OzhCQUNiLDhEQUFDRTs4QkFDRyw0RUFBQ0M7OzBDQUNHLDhEQUFDQztnQ0FBR0osV0FBVTswQ0FBNEU7Ozs7OzswQ0FDMUYsOERBQUNJO2dDQUFHSixXQUFVOzBDQUErRDs7Ozs7OzBDQUM3RSw4REFBQ0k7Z0NBQUdKLFdBQVU7MENBQStEOzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHckYsOERBQUNLOzhCQUNJaEIsWUFBWWlCLEdBQUcsQ0FBQyxDQUFDQyxLQUFLQyxzQkFDbkIsOERBQUNMOzs4Q0FDRyw4REFBQ007b0NBQUdULFdBQVU7OENBQ1YsNEVBQUNVO3dDQUFJQyxLQUFLSixJQUFJaEIsTUFBTTt3Q0FBRXFCLEtBQUk7d0NBQVNaLFdBQVU7Ozs7Ozs7Ozs7OzhDQUVqRCw4REFBQ1M7b0NBQUdULFdBQVU7OENBQTJDTyxJQUFJZixVQUFVOzs7Ozs7OENBQ3ZFLDhEQUFDaUI7b0NBQUdULFdBQVU7OENBQTJDTyxJQUFJZCxLQUFLOzs7Ozs7OENBQ2xFLDhEQUFDZ0I7b0NBQUdULFdBQVU7OENBQTJDTyxJQUFJYixNQUFNOzs7Ozs7OzJCQU45RGM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWN6QjtHQTFITXJCO0tBQUFBO0FBMkhOLCtEQUFlQSx1QkFBdUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdGFibGVfbGF5b3V0X2FjdGl2aXR5X3ZlcnQuanM/ZWIwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEl0ZW0gZnJvbSBcIi4vSXRlbVwiO1xuXG5jb25zdCBUYWJsZUxheW91dEFjdGl2aXR5VmVydCA9ICh7IGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgZXhhbXBsZVJvd3MgPSBbXG4gICAge1xuICAvLyBudW1iZXI6ICcvYXNzZXRzL2ltZy8yYzM2MDM1NjgyYzg3NGE3OTQwMDUxZTc5ZThmZTkwNi5hdmlmJywgLy8gUGF0aCByZWxhdGl2ZSB0byB0aGUgJ3B1YmxpYycgZm9sZGVyXG4gIG51bWJlcjogMSxcbiAgc3ltYm9sOiAgJy9hc3NldHMvaW1nLzJjMzYwMzU2ODJjODc0YTc5NDAwNTFlNzllOGZlOTA2LmF2aWYnLCAvLyBQYXRoIHJlbGF0aXZlIHRvIHRoZSAncHVibGljJyBmb2xkZXJcbiAgY29sbGVjdGlvbjogJ0JpdGNvaW4nLFxuICBmbG9vcjogJzQ1LDAwMCcsXG4gIHZvbHVtZTogJzIwME0nLFxuICBvd25lcnM6ICczTScsXG4gIHN1cHBvcnQ6ICcyNC83J1xuICAgIH0sXG4gICAge1xuICAgICAgbnVtYmVyOiAyLFxuICAgICAgc3ltYm9sOiAgJy9hc3NldHMvaW1nL2JkNjgyMjM4OWRkOWRiZGE3YTAwYTg4MmIyMGY0Zjg0LmF2aWYnLCAvLyBQYXRoIHJlbGF0aXZlIHRvIHRoZSAncHVibGljJyBmb2xkZXJcbiAgICAgIGNvbGxlY3Rpb246ICdFdGhlcmV1bScsXG4gICAgICBmbG9vcjogJzMsMDAwJyxcbiAgICAgIHZvbHVtZTogJzE1ME0nLFxuICAgICAgb3duZXJzOiAnNU0nLFxuICAgICAgc3VwcG9ydDogJzI0LzcnXG4gICAgfSxcbiAgICB7XG4gICAgICBudW1iZXI6IDMsXG4gICAgICBzeW1ib2w6ICAnL2Fzc2V0cy9pbWcvNWE0MzBiNjVlMjQ0MjUxOTNlZTk4YzUxMjljYjkzZTEud2VicCcsIC8vIFBhdGggcmVsYXRpdmUgdG8gdGhlICdwdWJsaWMnIGZvbGRlclxuICAgICAgY29sbGVjdGlvbjogJ0xpdGVjb2luJyxcbiAgICAgIGZsb29yOiAnMTUwJyxcbiAgICAgIHZvbHVtZTogJzUwTScsXG4gICAgICBvd25lcnM6ICcxTScsXG4gICAgICBzdXBwb3J0OiAnQnVzaW5lc3MgSG91cnMnXG4gICAgfSxcbiAgICB7XG4gICAgICBudW1iZXI6IDQsXG4gICAgICBzeW1ib2w6ICAnL2Fzc2V0cy9pbWcvSDhqT0NKdVFva05xR0Jwa0JONXdrMW9ad083TE04Yk5uckhDYWVrVjJuS2puQ3F3NlVCNW9hSDhYeU5lQkRqNmJBX24xbWplanpoRlFVUDNPMU5makZMSHIzRk9hZUhjVE9PVC5hdmlmJywgLy8gUGF0aCByZWxhdGl2ZSB0byB0aGUgJ3B1YmxpYycgZm9sZGVyXG4gICAgICBjb2xsZWN0aW9uOiAnUmlwcGxlJyxcbiAgICAgIGZsb29yOiAnMC44JyxcbiAgICAgIHZvbHVtZTogJzEyME0nLFxuICAgICAgb3duZXJzOiAnMk0nLFxuICAgICAgc3VwcG9ydDogJzI0LzUnXG4gICAgfSxcbiAgICB7XG4gICAgICBudW1iZXI6IDUsXG4gICAgICBzeW1ib2w6ICAnL2Fzc2V0cy9pbWcvbEhleEtSTXB3LWFvU3lCMVdkRkJmZjV5ZkFOTFJlRnhIenQxRE9qX3NnN21TMTR5QVJwdXZZY1V0c3l5eC1Oa3BrNldUY1VQRm9HNTNWbkxKZXpZaThoQXMwT3hOWndsdzZZLWRtSS5hdmlmJywgLy8gUGF0aCByZWxhdGl2ZSB0byB0aGUgJ3B1YmxpYycgZm9sZGVyXG4gICAgICBjb2xsZWN0aW9uOiAnQ2FyZGFubycsXG4gICAgICBmbG9vcjogJzEuMicsXG4gICAgICB2b2x1bWU6ICc4ME0nLFxuICAgICAgb3duZXJzOiAnMi41TScsXG4gICAgICBzdXBwb3J0OiAnMjQvNydcbiAgICB9LFxuICAgIHtcbiAgICAgIG51bWJlcjogNixcbiAgICAgIHN5bWJvbDogICcvYXNzZXRzL2ltZy9PRGwwTTRhQmpkQmhFc3FuSDktSmdTZDdIZzhDQ2dyWl9JNmJzOXZCb3BuQl9sVVluOTBycjdmX3JXSEIxSUhhVW84RjZMVk5RNGtrLUJlMUtWUFV5eThOT044bV9DVFBFNjZZLmF2aWYnLCAvLyBQYXRoIHJlbGF0aXZlIHRvIHRoZSAncHVibGljJyBmb2xkZXJcbiAgICAgIGNvbGxlY3Rpb246ICdQb2xrYWRvdCcsXG4gICAgICBmbG9vcjogJzI1JyxcbiAgICAgIHZvbHVtZTogJzYwTScsXG4gICAgICBvd25lcnM6ICc5MDBLJyxcbiAgICAgIHN1cHBvcnQ6ICcyNC83J1xuICAgIH0sXG4gICAge1xuICAgICAgbnVtYmVyOiA3LFxuICAgICAgc3ltYm9sOiAgJy9hc3NldHMvaW1nL2IxYzllZDJlNTg0YjRmNmU0MThiZjFjYTE1MzExODQ0ICgxKS5hdmlmJywgLy8gUGF0aCByZWxhdGl2ZSB0byB0aGUgJ3B1YmxpYycgZm9sZGVyXG4gICAgICBjb2xsZWN0aW9uOiAnQml0Y29pbiBDYXNoJyxcbiAgICAgIGZsb29yOiAnNTAwJyxcbiAgICAgIHZvbHVtZTogJzQwTScsXG4gICAgICBvd25lcnM6ICcxLjVNJyxcbiAgICAgIHN1cHBvcnQ6ICdCdXNpbmVzcyBIb3VycydcbiAgICB9LFxuICAgIHtcbiAgICAgIG51bWJlcjogOCxcbiAgICAgIHN5bWJvbDogICcvYXNzZXRzL2ltZy9jMGI3ZGZlZDU5MDgxMjZkOTI4NzdjMDA0NzBlZTcyYS5hdmlmJywgLy8gUGF0aCByZWxhdGl2ZSB0byB0aGUgJ3B1YmxpYycgZm9sZGVyXG4gICAgICBjb2xsZWN0aW9uOiAnU29sYW5hJyxcbiAgICAgIGZsb29yOiAnNDAnLFxuICAgICAgdm9sdW1lOiAnMTAwTScsXG4gICAgICBvd25lcnM6ICc4MDBLJyxcbiAgICAgIHN1cHBvcnQ6ICcyNC83J1xuICAgIH0sXG4gICAge1xuICAgICAgbnVtYmVyOiA5LFxuICAgICAgc3ltYm9sOiAgJy9hc3NldHMvaW1nL2JiYWY0M2VlNGEwMmQ1YWZmYjdlOGZjMTg2ZDBiZGI1LmF2aWYnLCAvLyBQYXRoIHJlbGF0aXZlIHRvIHRoZSAncHVibGljJyBmb2xkZXJcbiAgICAgIGNvbGxlY3Rpb246ICdDaGFpbmxpbmsnLFxuICAgICAgZmxvb3I6ICcyMCcsXG4gICAgICB2b2x1bWU6ICc3ME0nLFxuICAgICAgb3duZXJzOiAnMk0nLFxuICAgICAgc3VwcG9ydDogJzI0LzcnXG4gICAgfSxcbiAgICB7XG4gICAgICBudW1iZXI6IDEwLFxuICAgICAgc3ltYm9sOiAgJy9hc3NldHMvaW1nL3lOaS1YZEd4c2dRQ1BwcVNpbzRvMzF5Z0FWNndVUmRJZEluV1JjRklsNDZValVRMWVWN0JFbmRHZThMNjYxT29HLWNsUmk3RWdJbkxYNExQdTlKZnc0ZnEwYm5WWUhxZzdSRmkuYXZpZicsIC8vIFBhdGggcmVsYXRpdmUgdG8gdGhlICdwdWJsaWMnIGZvbGRlclxuICAgICAgY29sbGVjdGlvbjogJ0NoYWlubGluaycsXG4gICAgICBmbG9vcjogJzIwJyxcbiAgICAgIHZvbHVtZTogJzcwTScsXG4gICAgICBvd25lcnM6ICcyTScsXG4gICAgICBzdXBwb3J0OiAnMjQvNydcbiAgICB9XG4gIF07XG4gIGNvbnN0IFthY3RpdmVUYWIsIHNldEFjdGl2ZVRhYl0gPSB1c2VTdGF0ZShcImJyZWFrZmFzdFwiKTtcbiAgcmV0dXJuIChcblxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDAgY2hhcnRUZXh0SDEgaC0xMDBcIj5cbiAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdy1mdWxsIHRhYmxlLWF1dG8gYm9yZGVyLWNvbGxhcHNlIGJvcmRlci1zbGF0ZS01MDBcIj5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9XCJjaGFydFRleHQgY2hhcnRUZXh0UEwwIGJvcmRlci1iIGJvcmRlci1zbGF0ZS02MDAgcGwtMCBweS0yIHRleHQtc2xhdGUtODAwXCI+Q09MTEVDVElPTjwvdGg+XG4gICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImNoYXJ0VGV4dCBib3JkZXItYiBib3JkZXItc2xhdGUtNjAwIHB4LTQgcHktMiB0ZXh0LXNsYXRlLTgwMFwiPkZMT09SPC90aD5cbiAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPVwiY2hhcnRUZXh0IGJvcmRlci1iIGJvcmRlci1zbGF0ZS02MDAgcHgtNCBweS0yIHRleHQtc2xhdGUtODAwXCI+MSBEQVkgQ0hBTkdFPC90aD5cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtleGFtcGxlUm93cy5tYXAoKHJvdywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjaGFydFRleHQgYm9yZGVyLWN1c3RvLWltZyBib3JkZXItc2xhdGUtNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cm93LnN5bWJvbH0gYWx0PVwiU3ltYm9sXCIgY2xhc3NOYW1lPVwidGh1bWJuYWlsX3RhYmxlX3ZlcnQgdy1zbSB3LTIgaC0yXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJjaGFydFRleHQgYm9yZGVyLWN1c3RvIGJvcmRlci1zbGF0ZS03MDBcIj57cm93LmNvbGxlY3Rpb259PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNoYXJ0VGV4dCBib3JkZXItY3VzdG8gYm9yZGVyLXNsYXRlLTcwMFwiPntyb3cuZmxvb3J9PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImNoYXJ0VGV4dCBib3JkZXItY3VzdG8gYm9yZGVyLXNsYXRlLTcwMFwiPntyb3cudm9sdW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICA8L3Rib2R5PlxuICAgIDwvdGFibGU+XG48L2Rpdj5cblxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IFRhYmxlTGF5b3V0QWN0aXZpdHlWZXJ0O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiSXRlbSIsIlRhYmxlTGF5b3V0QWN0aXZpdHlWZXJ0IiwiaXRlbXMiLCJleGFtcGxlUm93cyIsIm51bWJlciIsInN5bWJvbCIsImNvbGxlY3Rpb24iLCJmbG9vciIsInZvbHVtZSIsIm93bmVycyIsInN1cHBvcnQiLCJhY3RpdmVUYWIiLCJzZXRBY3RpdmVUYWIiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWJsZSIsInRoZWFkIiwidHIiLCJ0aCIsInRib2R5IiwibWFwIiwicm93IiwiaW5kZXgiLCJ0ZCIsImltZyIsInNyYyIsImFsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/table_layout_activity_vert.js\n"));

/***/ })

});