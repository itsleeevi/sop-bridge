"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./constants/constants.tsx":
/*!*********************************!*\
  !*** ./constants/constants.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar Constants = {\n  //-------------------------------------------------------------------------\n  // MAINNET\n  //-------------------------------------------------------------------------\n\n  /*\n    CHAIN_ID_ETH: \"0x1\",\n    CHAIN_ID_POLYGON: \"0x89\",\n    CHAIN_ID_ETH_DEC: \"1\",\n    CHAIN_ID_POLYGON_DEC: \"137\",\n    RPC_ETH: \"https://mainnet.infura.io/v3/cc1b604ac94240288bd0ee48eec2bf06\",\n    RPC_POLYGON:\n       \"https://polygon-mainnet.infura.io/v3/cc1b604ac94240288bd0ee48eec2bf06\",\n     WEBSOCKET_ADDRESS_ETH:\n       \"wss://mainnet.infura.io/ws/v3/cc1b604ac94240288bd0ee48eec2bf06\",\n     WEBSOCKET_ADDRESS_POLYGON:\n       \"wss://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/polygon/mainnet/ws\",\n     L1_CARE_ADDRESS: \"\",\n     L2_CARE_ADDRESS: \"\",\n     NETWORK: \"mainnet\",\n     VERSION: \"v1\",\n     ROOT_TUNNEL: \"\",\n     CHILD_TUNNEL: \"\",\n     SERVER_URL: \"/\", // -> \"/\" is important to add!\n  */\n  //-------------------------------------------------------------------------\n  // TESTNET\n  //-------------------------------------------------------------------------\n  CHAIN_ID_ETH: \"0x5\",\n  CHAIN_ID_POLYGON: \"0x13881\",\n  CHAIN_ID_ETH_DEC: \"5\",\n  CHAIN_ID_POLYGON_DEC: \"80001\",\n  RPC_ETH: \"https://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/eth/goerli\",\n  RPC_POLYGON: \"https://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/polygon/mumbai\",\n  WEBSOCKET_ADDRESS_ETH: \"wss://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/eth/goerli/ws\",\n  WEBSOCKET_ADDRESS_POLYGON: \"wss://speedy-nodes-nyc.moralis.io/4a6cc15939827f0d3ad58ddf/polygon/mumbai/ws\",\n  L1_CARE_ADDRESS: \"0x17421b4be0588408106fb548bb4f7cea29e237b0\",\n  L2_CARE_ADDRESS: \"\",\n  NETWORK: \"testnet\",\n  VERSION: \"mumbai\",\n  ROOT_TUNNEL: \"0x76Ff8d8aa7ae6aD8dDBf992261dddFd1AAF27810\",\n  CHILD_TUNNEL: \"0x91483D7f2d9b26445421cb3652854c56dE25E34e\",\n  SERVER_URL: \"/\" // -> \"/\" is important to add!\n\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Constants);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb25zdGFudHMvY29uc3RhbnRzLnRzeC5qcyIsIm1hcHBpbmdzIjoiOztBQUFBLElBQU1BLFNBQVMsR0FBRztBQUNoQjtBQUNBO0FBQ0E7O0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNFO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxZQUFZLEVBQUUsS0E1QkU7QUE2QmhCQyxFQUFBQSxnQkFBZ0IsRUFBRSxTQTdCRjtBQThCaEJDLEVBQUFBLGdCQUFnQixFQUFFLEdBOUJGO0FBK0JoQkMsRUFBQUEsb0JBQW9CLEVBQUUsT0EvQk47QUFnQ2hCQyxFQUFBQSxPQUFPLEVBQ0wseUVBakNjO0FBa0NoQkMsRUFBQUEsV0FBVyxFQUNULDZFQW5DYztBQW9DaEJDLEVBQUFBLHFCQUFxQixFQUNuQiwwRUFyQ2M7QUFzQ2hCQyxFQUFBQSx5QkFBeUIsRUFDdkIsOEVBdkNjO0FBd0NoQkMsRUFBQUEsZUFBZSxFQUFFLDRDQXhDRDtBQXlDaEJDLEVBQUFBLGVBQWUsRUFBRSxFQXpDRDtBQTBDaEJDLEVBQUFBLE9BQU8sRUFBRSxTQTFDTztBQTJDaEJDLEVBQUFBLE9BQU8sRUFBRSxRQTNDTztBQTRDaEJDLEVBQUFBLFdBQVcsRUFBRSw0Q0E1Q0c7QUE2Q2hCQyxFQUFBQSxZQUFZLEVBQUUsNENBN0NFO0FBOENoQkMsRUFBQUEsVUFBVSxFQUFFLEdBOUNJLENBOENDOztBQTlDRCxDQUFsQjtBQWtEQSwrREFBZWYsU0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb25zdGFudHMvY29uc3RhbnRzLnRzeD8wOTUwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENvbnN0YW50cyA9IHtcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIE1BSU5ORVRcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vKlxuICBDSEFJTl9JRF9FVEg6IFwiMHgxXCIsXG4gIENIQUlOX0lEX1BPTFlHT046IFwiMHg4OVwiLFxuICBDSEFJTl9JRF9FVEhfREVDOiBcIjFcIixcbiAgQ0hBSU5fSURfUE9MWUdPTl9ERUM6IFwiMTM3XCIsXG4gIFJQQ19FVEg6IFwiaHR0cHM6Ly9tYWlubmV0LmluZnVyYS5pby92My9jYzFiNjA0YWM5NDI0MDI4OGJkMGVlNDhlZWMyYmYwNlwiLFxuICBSUENfUE9MWUdPTjpcbiAgICAgXCJodHRwczovL3BvbHlnb24tbWFpbm5ldC5pbmZ1cmEuaW8vdjMvY2MxYjYwNGFjOTQyNDAyODhiZDBlZTQ4ZWVjMmJmMDZcIixcbiAgIFdFQlNPQ0tFVF9BRERSRVNTX0VUSDpcbiAgICAgXCJ3c3M6Ly9tYWlubmV0LmluZnVyYS5pby93cy92My9jYzFiNjA0YWM5NDI0MDI4OGJkMGVlNDhlZWMyYmYwNlwiLFxuICAgV0VCU09DS0VUX0FERFJFU1NfUE9MWUdPTjpcbiAgICAgXCJ3c3M6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vNGE2Y2MxNTkzOTgyN2YwZDNhZDU4ZGRmL3BvbHlnb24vbWFpbm5ldC93c1wiLFxuICAgTDFfQ0FSRV9BRERSRVNTOiBcIlwiLFxuICAgTDJfQ0FSRV9BRERSRVNTOiBcIlwiLFxuICAgTkVUV09SSzogXCJtYWlubmV0XCIsXG4gICBWRVJTSU9OOiBcInYxXCIsXG4gICBST09UX1RVTk5FTDogXCJcIixcbiAgIENISUxEX1RVTk5FTDogXCJcIixcbiAgIFNFUlZFUl9VUkw6IFwiL1wiLCAvLyAtPiBcIi9cIiBpcyBpbXBvcnRhbnQgdG8gYWRkIVxuKi9cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIFRFU1RORVRcbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFxuICBDSEFJTl9JRF9FVEg6IFwiMHg1XCIsXG4gIENIQUlOX0lEX1BPTFlHT046IFwiMHgxMzg4MVwiLFxuICBDSEFJTl9JRF9FVEhfREVDOiBcIjVcIixcbiAgQ0hBSU5fSURfUE9MWUdPTl9ERUM6IFwiODAwMDFcIixcbiAgUlBDX0VUSDpcbiAgICBcImh0dHBzOi8vc3BlZWR5LW5vZGVzLW55Yy5tb3JhbGlzLmlvLzRhNmNjMTU5Mzk4MjdmMGQzYWQ1OGRkZi9ldGgvZ29lcmxpXCIsXG4gIFJQQ19QT0xZR09OOlxuICAgIFwiaHR0cHM6Ly9zcGVlZHktbm9kZXMtbnljLm1vcmFsaXMuaW8vNGE2Y2MxNTkzOTgyN2YwZDNhZDU4ZGRmL3BvbHlnb24vbXVtYmFpXCIsXG4gIFdFQlNPQ0tFVF9BRERSRVNTX0VUSDpcbiAgICBcIndzczovL3NwZWVkeS1ub2Rlcy1ueWMubW9yYWxpcy5pby80YTZjYzE1OTM5ODI3ZjBkM2FkNThkZGYvZXRoL2dvZXJsaS93c1wiLFxuICBXRUJTT0NLRVRfQUREUkVTU19QT0xZR09OOlxuICAgIFwid3NzOi8vc3BlZWR5LW5vZGVzLW55Yy5tb3JhbGlzLmlvLzRhNmNjMTU5Mzk4MjdmMGQzYWQ1OGRkZi9wb2x5Z29uL211bWJhaS93c1wiLFxuICBMMV9DQVJFX0FERFJFU1M6IFwiMHgxNzQyMWI0YmUwNTg4NDA4MTA2ZmI1NDhiYjRmN2NlYTI5ZTIzN2IwXCIsXG4gIEwyX0NBUkVfQUREUkVTUzogXCJcIixcbiAgTkVUV09SSzogXCJ0ZXN0bmV0XCIsXG4gIFZFUlNJT046IFwibXVtYmFpXCIsXG4gIFJPT1RfVFVOTkVMOiBcIjB4NzZGZjhkOGFhN2FlNmFEOGREQmY5OTIyNjFkZGRGZDFBQUYyNzgxMFwiLFxuICBDSElMRF9UVU5ORUw6IFwiMHg5MTQ4M0Q3ZjJkOWIyNjQ0NTQyMWNiMzY1Mjg1NGM1NmRFMjVFMzRlXCIsXG4gIFNFUlZFUl9VUkw6IFwiL1wiLCAvLyAtPiBcIi9cIiBpcyBpbXBvcnRhbnQgdG8gYWRkIVxuIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uc3RhbnRzO1xuIl0sIm5hbWVzIjpbIkNvbnN0YW50cyIsIkNIQUlOX0lEX0VUSCIsIkNIQUlOX0lEX1BPTFlHT04iLCJDSEFJTl9JRF9FVEhfREVDIiwiQ0hBSU5fSURfUE9MWUdPTl9ERUMiLCJSUENfRVRIIiwiUlBDX1BPTFlHT04iLCJXRUJTT0NLRVRfQUREUkVTU19FVEgiLCJXRUJTT0NLRVRfQUREUkVTU19QT0xZR09OIiwiTDFfQ0FSRV9BRERSRVNTIiwiTDJfQ0FSRV9BRERSRVNTIiwiTkVUV09SSyIsIlZFUlNJT04iLCJST09UX1RVTk5FTCIsIkNISUxEX1RVTk5FTCIsIlNFUlZFUl9VUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./constants/constants.tsx\n");

/***/ })

});