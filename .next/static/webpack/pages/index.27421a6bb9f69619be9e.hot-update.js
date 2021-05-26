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

  var dataSet = _ref.dataSet,
      excelData = _ref.excelData;

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

  console.log(excelData);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSW5kZXgiLCJkYXRhU2V0IiwiZXhjZWxEYXRhIiwidXNlQ29udGV4dCIsIkRhdGFDb250ZXh0Iiwia2V5U2V0IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJvcGVuX3RhbmsiLCJzZXRPcGVuVGFuayIsInJhaW5fYW5hbHlzaXMiLCJzZXRSYWluX2FuYWx5c2lzIiwid2VhdGhlckxvY2F0aW9uIiwic2V0V2VhdGhlckxvY2F0aW9uIiwiZHJvdWdodCIsInNldERyb3VnaHQiLCJ3ZWF0aGVyRm9yZWNhc3QiLCJzZXRXZWF0aGVyRm9yZWNhc3QiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2tPcGVuIiwiZSIsInRhcmdldCIsImFsdCIsImhhbmRsZUNsb3NlIiwiY3VzdG9tR3JpZCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImFkdmlzb3J5IiwiaGVhZGluZyIsInN1YkhlYWRpbmdzIiwibGlua05hbWVzIiwibGlua3MiLCJ3YXRlclRhbmsiLCJyYWluQW5hbHlzZSIsIndlYXRoZXJBcm91bmQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsInJlcyIsImpzb24iLCJleGNlbCIsImRhdGEiLCJhZ3JvbWV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQTRCO0FBQUE7O0FBQUEsTUFBekJDLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCQyxTQUFnQixRQUFoQkEsU0FBZ0I7O0FBQUEsb0JBQ3JCQyxpREFBVSxDQUFDQyx5REFBRCxDQURXO0FBQUEsTUFDaENDLE1BRGdDLGVBQ2hDQSxNQURnQzs7QUFFeEMsTUFBTUMsT0FBTyxHQUFHQywrREFB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QUE7QUFBQTtBQUFBLEdBQXhCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWVBLCtEQUFlN0MsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNzQyMWE2YmI5ZjY5NjE5YmU5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IENhcm91c2FsIGZyb20gXCIuLi9lc3NlbnRpYWxzL2Nhcm91c2FsXCI7XHJcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2Vzc2VudGlhbHMvTmF2XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuLi9zcmMvc3R5bGVzL01haW5TdHlsZXNcIjtcclxuaW1wb3J0IHsgQWR2aXNvcnkgfSBmcm9tIFwiLi4vbWFpbi9hZHZpc29yeVwiO1xyXG5cclxuY29uc3QgSW5kZXggPSAoeyBkYXRhU2V0LCBleGNlbERhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IHsga2V5U2V0IH0gPSB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtvcGVuX3RhbmssIHNldE9wZW5UYW5rXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmFpbl9hbmFseXNpcywgc2V0UmFpbl9hbmFseXNpc10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dlYXRoZXJMb2NhdGlvbiwgc2V0V2VhdGhlckxvY2F0aW9uXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZHJvdWdodCwgc2V0RHJvdWdodF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dlYXRoZXJGb3JlY2FzdCwgc2V0V2VhdGhlckZvcmVjYXN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zb2xlLmxvZyhleGNlbERhdGEpO1xyXG4gIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQuYWx0ID09IDApIHtcclxuICAgICAgc2V0T3Blbighb3Blbik7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmFsdCA9PSAxKSB7XHJcbiAgICAgIHNldE9wZW5UYW5rKCFvcGVuX3RhbmspO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5hbHQgPT0gMikge1xyXG4gICAgICBzZXRSYWluX2FuYWx5c2lzKCFyYWluX2FuYWx5c2lzKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDMpIHtcclxuICAgICAgc2V0RHJvdWdodCghZHJvdWdodCk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmFsdCA9PSA0KSB7XHJcbiAgICAgIHNldFdlYXRoZXJMb2NhdGlvbighd2VhdGhlckxvY2F0aW9uKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDUpIHtcclxuICAgICAgc2V0V2VhdGhlckZvcmVjYXN0KCF3ZWF0aGVyRm9yZWNhc3QpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoZSkgPT4ge1xyXG4gICAgc2V0T3BlblRhbmsoZmFsc2UpO1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICBzZXRSYWluX2FuYWx5c2lzKGZhbHNlKTtcclxuICAgIHNldFdlYXRoZXJMb2NhdGlvbihmYWxzZSk7XHJcbiAgICBzZXRXZWF0aGVyRm9yZWNhc3QoZmFsc2UpO1xyXG4gICAgc2V0RHJvdWdodChmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxDYXJvdXNhbCAvPlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tR3JpZH1cclxuICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC5hZHZpc29yeS5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC5hZHZpc29yeX1cclxuICAgICAgICAgICAgYWx0PXswfVxyXG4gICAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LmFkdmlzb3J5LnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQuYWR2aXNvcnkubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC5hZHZpc29yeS5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QWR2aXNvcnlcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGFTZXQud2F0ZXJUYW5rLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LndhdGVyVGFua31cclxuICAgICAgICAgICAgYWx0PXsxfVxyXG4gICAgICAgICAgICBvcGVuPXtvcGVuX3Rhbmt9XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQud2F0ZXJUYW5rLnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQud2F0ZXJUYW5rLmxpbmtOYW1lc31cclxuICAgICAgICAgICAgbGlua3M9e2RhdGFTZXQud2F0ZXJUYW5rLmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC5yYWluQW5hbHlzZS5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC5yYWluQW5hbHlzZX1cclxuICAgICAgICAgICAgYWx0PXsyfVxyXG4gICAgICAgICAgICBvcGVuPXtyYWluX2FuYWx5c2lzfVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LnJhaW5BbmFseXNlLnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQucmFpbkFuYWx5c2UubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC5yYWluQW5hbHlzZS5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDxHcmlkXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY3VzdG9tR3JpZH1cclxuICAgICAgICAgIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgbWFyZ2luVG9wOiBcIjJyZW1cIiB9fVxyXG4gICAgICAgICAgZGlyZWN0aW9uPVwicm93XCJcclxuICAgICAgICAgIGp1c3RpZnk9XCJzcGFjZS1ldmVubHlcIlxyXG4gICAgICAgICAgY29udGFpbmVyXHJcbiAgICAgICAgICBzcGFjaW5nPXswfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC5kcm91Z2h0LmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LmRyb3VnaHR9XHJcbiAgICAgICAgICAgIGFsdD17M31cclxuICAgICAgICAgICAgb3Blbj17ZHJvdWdodH1cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC5kcm91Z2h0LnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQuZHJvdWdodC5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LmRyb3VnaHQubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LndlYXRoZXJBcm91bmQuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQud2VhdGhlckFyb3VuZH1cclxuICAgICAgICAgICAgYWx0PXs0fVxyXG4gICAgICAgICAgICBvcGVuPXt3ZWF0aGVyTG9jYXRpb259XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQud2VhdGhlckFyb3VuZC5zdWJIZWFkaW5nc31cclxuICAgICAgICAgICAgbGlua05hbWVzPXtkYXRhU2V0LndlYXRoZXJBcm91bmQubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC53ZWF0aGVyQXJvdW5kLmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC53ZWF0aGVyRm9yZWNhc3QuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQud2VhdGhlckZvcmVjYXN0fVxyXG4gICAgICAgICAgICBhbHQ9ezV9XHJcbiAgICAgICAgICAgIG9wZW49e3dlYXRoZXJGb3JlY2FzdH1cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC5hZHZpc29yeS5zdWJIZWFkaW5nc31cclxuICAgICAgICAgICAgbGlua05hbWVzPXtkYXRhU2V0LmFkdmlzb3J5LmxpbmtOYW1lc31cclxuICAgICAgICAgICAgbGlua3M9e2RhdGFTZXQuYWR2aXNvcnkubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXguZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGN0eCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgXCJodHRwczovL3VzLWNlbnRyYWwxLWV4cHJlc3MtNDM5ZTAuY2xvdWRmdW5jdGlvbnMubmV0L2FwcC9nZXRXZWF0aGVyXCJcclxuICApO1xyXG4gIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIGNvbnN0IGV4Y2VsID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vc2hlZXRzLmdvb2dsZWFwaXMuY29tL3Y0L3NwcmVhZHNoZWV0cy8xeHBtMWo1cHVsUUZMNEdQZVU4TExzcDc0VWVIeW1IeXRKRU8xb2xEQ3puMC92YWx1ZXMvRGFpbHkgUmFpbmZhbGxcIlxyXG4gICk7XHJcbiAgY29uc3QgZGF0YSA9IGV4Y2VsLmpzb24oKTtcclxuICByZXR1cm4ge1xyXG4gICAgZGF0YVNldDoganNvbi5hZ3JvbWV0LFxyXG4gICAgZXhjZWxEYXRhOiBkYXRhLFxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==