self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _essentials_carousal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../essentials/carousal */ "./essentials/carousal.js");
/* harmony import */ var _essentials_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../essentials/Nav */ "./essentials/Nav.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/context */ "./context/context.js");
/* harmony import */ var _src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/styles/MainStyles */ "./src/styles/MainStyles.js");
/* harmony import */ var _main_advisory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../main/advisory */ "./main/advisory.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Experiment\\Next\\pages\\index.js",
    _this = undefined,
    _s = $RefreshSig$();









var Index = function Index(_ref) {
  _s();

  var dataSet = _ref.dataSet;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_6__.DataContext),
      keySet = _useContext.keySet;

  var classes = (0,_src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_7__.default)();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open_tank = _useState2[0],
      setOpenTank = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      rain_analysis = _useState3[0],
      setRain_analysis = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      weatherLocation = _useState4[0],
      setWeatherLocation = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      drought = _useState5[0],
      setDrought = _useState5[1];

  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      weatherForecast = _useState6[0],
      setWeatherForecast = _useState6[1];

  var handleClickOpen = function handleClickOpen(e) {
    if (e.target.alt == 0) {
      setOpen(!open);
    } else if (e.target.alt == 1) {
      setOpenTank(!open_tank);
    } else if (e.target.alt == 2) {
      setRain_analysis(!rain_analysis);
    } else if (e.target.alt == 3) {
      setDrought(!drought);
    } else if (e.target.alt == 4) {
      setWeatherLocation(!weatherLocation);
    } else if (e.target.alt == 5) {
      setWeatherForecast(!weatherForecast);
    }
  };

  var handleClose = function handleClose(e) {
    setOpenTank(false);
    setOpen(false);
    setRain_analysis(false);
    setWeatherLocation(false);
    setWeatherForecast(false);
    setDrought(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_essentials_carousal__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        className: classes.customGrid,
        style: {
          textAlign: "center",
          marginTop: "2rem"
        },
        direction: "row",
        justify: "space-evenly",
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.advisory.heading,
          img: keySet.advisory,
          alt: 0,
          open: open,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.advisory.subHeadings,
          linkNames: dataSet.advisory.linkNames,
          links: dataSet.advisory.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.waterTank.heading,
          img: keySet.waterTank,
          alt: 1,
          open: open_tank,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.waterTank.subHeadings,
          linkNames: dataSet.waterTank.linkNames,
          links: dataSet.waterTank.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.rainAnalyse.heading,
          img: keySet.rainAnalyse,
          alt: 2,
          open: rain_analysis,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.rainAnalyse.subHeadings,
          linkNames: dataSet.rainAnalyse.linkNames,
          links: dataSet.rainAnalyse.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__.default, {
        className: classes.customGrid,
        style: {
          textAlign: "center",
          marginTop: "2rem"
        },
        direction: "row",
        justify: "space-evenly",
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.drought.heading,
          img: keySet.drought,
          alt: 3,
          open: drought,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.drought.subHeadings,
          linkNames: dataSet.drought.linkNames,
          links: dataSet.drought.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.weatherAround.heading,
          img: keySet.weatherAround,
          alt: 4,
          open: weatherLocation,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.weatherAround.subHeadings,
          linkNames: dataSet.weatherAround.linkNames,
          links: dataSet.weatherAround.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_8__.Advisory, {
          title: dataSet.weatherForecast.heading,
          img: keySet.weatherForecast,
          alt: 5,
          open: weatherForecast,
          click: handleClickOpen,
          close: handleClose,
          subHeadings: dataSet.advisory.subHeadings,
          linkNames: dataSet.advisory.linkNames,
          links: dataSet.advisory.links
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, _this);
};

_s(Index, "XUpKMMl2c1mw/X95WIszS4gAU90=", false, function () {
  return [_src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_7__.default];
});

_c = Index;

Index.getInitialProps = /*#__PURE__*/function () {
  var _ref2 = (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(ctx) {
    var res, json, excel, data;
    return D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch("https://us-central1-express-439e0.cloudfunctions.net/app/getWeather");

          case 2:
            res = _context.sent;
            _context.next = 5;
            return res.json();

          case 5:
            json = _context.sent;
            _context.next = 8;
            return fetch("https://sheets.googleapis.com/v4/spreadsheets/1xpm1j5pulQFL4GPeU8LLsp74UeHymHytJEO1olDCzn0/values/Daily Rainfall");

          case 8:
            excel = _context.sent;
            data = excel.json();
            return _context.abrupt("return", {
              dataSet: json.agromet,
              excelData: data
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhU2V0IiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwia2V5U2V0IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJvcGVuX3RhbmsiLCJzZXRPcGVuVGFuayIsInJhaW5fYW5hbHlzaXMiLCJzZXRSYWluX2FuYWx5c2lzIiwid2VhdGhlckxvY2F0aW9uIiwic2V0V2VhdGhlckxvY2F0aW9uIiwiZHJvdWdodCIsInNldERyb3VnaHQiLCJ3ZWF0aGVyRm9yZWNhc3QiLCJzZXRXZWF0aGVyRm9yZWNhc3QiLCJoYW5kbGVDbGlja09wZW4iLCJlIiwidGFyZ2V0IiwiYWx0IiwiaGFuZGxlQ2xvc2UiLCJjdXN0b21HcmlkIiwidGV4dEFsaWduIiwibWFyZ2luVG9wIiwiYWR2aXNvcnkiLCJoZWFkaW5nIiwic3ViSGVhZGluZ3MiLCJsaW5rTmFtZXMiLCJsaW5rcyIsIndhdGVyVGFuayIsInJhaW5BbmFseXNlIiwid2VhdGhlckFyb3VuZCIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsImZldGNoIiwicmVzIiwianNvbiIsImV4Y2VsIiwiZGF0YSIsImFncm9tZXQiLCJleGNlbERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBaUI7QUFBQTs7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQUEsb0JBQ1ZDLGlEQUFVLENBQUNDLHlEQUFELENBREE7QUFBQSxNQUNyQkMsTUFEcUIsZUFDckJBLE1BRHFCOztBQUU3QixNQUFNQyxPQUFPLEdBQUdDLCtEQUFTLEVBQXpCOztBQUY2QixrQkFHTEMsK0NBQVEsQ0FBQyxLQUFELENBSEg7QUFBQSxNQUd0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NTM2YTc1ODAwODg5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzYWwgZnJvbSBcIi4uL2Vzc2VudGlhbHMvY2Fyb3VzYWxcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vZXNzZW50aWFscy9OYXZcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4uL3NyYy9zdHlsZXMvTWFpblN0eWxlc1wiO1xyXG5pbXBvcnQgeyBBZHZpc29yeSB9IGZyb20gXCIuLi9tYWluL2Fkdmlzb3J5XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGRhdGFTZXQgfSkgPT4ge1xyXG4gIGNvbnN0IHsga2V5U2V0IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuX3RhbmssIHNldE9wZW5UYW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmFpbl9hbmFseXNpcywgc2V0UmFpbl9hbmFseXNpc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dlYXRoZXJMb2NhdGlvbiwgc2V0V2VhdGhlckxvY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvdWdodCwgc2V0RHJvdWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dlYXRoZXJGb3JlY2FzdCwgc2V0V2VhdGhlckZvcmVjYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5hbHQgPT0gMCkge1xyXG4gICAgICBzZXRPcGVuKCFvcGVuKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDEpIHtcclxuICAgICAgc2V0T3BlblRhbmsoIW9wZW5fdGFuayk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmFsdCA9PSAyKSB7XHJcbiAgICAgIHNldFJhaW5fYW5hbHlzaXMoIXJhaW5fYW5hbHlzaXMpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5hbHQgPT0gMykge1xyXG4gICAgICBzZXREcm91Z2h0KCFkcm91Z2h0KTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDQpIHtcclxuICAgICAgc2V0V2VhdGhlckxvY2F0aW9uKCF3ZWF0aGVyTG9jYXRpb24pO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5hbHQgPT0gNSkge1xyXG4gICAgICBzZXRXZWF0aGVyRm9yZWNhc3QoIXdlYXRoZXJGb3JlY2FzdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBzZXRPcGVuVGFuayhmYWxzZSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldFJhaW5fYW5hbHlzaXMoZmFsc2UpO1xyXG4gICAgc2V0V2VhdGhlckxvY2F0aW9uKGZhbHNlKTtcclxuICAgIHNldFdlYXRoZXJGb3JlY2FzdChmYWxzZSk7XHJcbiAgICBzZXREcm91Z2h0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcm91c2FsIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21HcmlkfVxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LmFkdmlzb3J5LmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LmFkdmlzb3J5fVxyXG4gICAgICAgICAgICBhbHQ9ezB9XHJcbiAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQuYWR2aXNvcnkuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5hZHZpc29yeS5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LmFkdmlzb3J5LmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC53YXRlclRhbmsuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQud2F0ZXJUYW5rfVxyXG4gICAgICAgICAgICBhbHQ9ezF9XHJcbiAgICAgICAgICAgIG9wZW49e29wZW5fdGFua31cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC53YXRlclRhbmsuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC53YXRlclRhbmsubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC53YXRlclRhbmsubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LnJhaW5BbmFseXNlLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LnJhaW5BbmFseXNlfVxyXG4gICAgICAgICAgICBhbHQ9ezJ9XHJcbiAgICAgICAgICAgIG9wZW49e3JhaW5fYW5hbHlzaXN9XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQucmFpbkFuYWx5c2Uuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5yYWluQW5hbHlzZS5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LnJhaW5BbmFseXNlLmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21HcmlkfVxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LmRyb3VnaHQuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQuZHJvdWdodH1cclxuICAgICAgICAgICAgYWx0PXszfVxyXG4gICAgICAgICAgICBvcGVuPXtkcm91Z2h0fVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LmRyb3VnaHQuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5kcm91Z2h0LmxpbmtOYW1lc31cclxuICAgICAgICAgICAgbGlua3M9e2RhdGFTZXQuZHJvdWdodC5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QWR2aXNvcnlcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGFTZXQud2VhdGhlckFyb3VuZC5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC53ZWF0aGVyQXJvdW5kfVxyXG4gICAgICAgICAgICBhbHQ9ezR9XHJcbiAgICAgICAgICAgIG9wZW49e3dlYXRoZXJMb2NhdGlvbn1cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC53ZWF0aGVyQXJvdW5kLnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQud2VhdGhlckFyb3VuZC5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LndlYXRoZXJBcm91bmQubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LndlYXRoZXJGb3JlY2FzdC5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC53ZWF0aGVyRm9yZWNhc3R9XHJcbiAgICAgICAgICAgIGFsdD17NX1cclxuICAgICAgICAgICAgb3Blbj17d2VhdGhlckZvcmVjYXN0fVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LmFkdmlzb3J5LnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQuYWR2aXNvcnkubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC5hZHZpc29yeS5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZXhwcmVzcy00MzllMC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBwL2dldFdlYXRoZXJcIlxyXG4gICk7XHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgY29uc3QgZXhjZWwgPSBhd2FpdCBmZXRjaChcclxuICAgIFwiaHR0cHM6Ly9zaGVldHMuZ29vZ2xlYXBpcy5jb20vdjQvc3ByZWFkc2hlZXRzLzF4cG0xajVwdWxRRkw0R1BlVThMTHNwNzRVZUh5bUh5dEpFTzFvbERDem4wL3ZhbHVlcy9EYWlseSBSYWluZmFsbFwiXHJcbiAgKTtcclxuICBjb25zdCBkYXRhID0gZXhjZWwuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhU2V0OiBqc29uLmFncm9tZXQsXHJcbiAgICBleGNlbERhdGE6IGRhdGEsXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9