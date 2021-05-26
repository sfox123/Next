self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataContext": function() { return /* binding */ DataContext; },
/* harmony export */   "Context": function() { return /* binding */ Context; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api/auth */ "./api/auth.js");
/* module decorator */ module = __webpack_require__.hmd(module);









var _jsxFileName = "D:\\Experiment\\Next\\context\\context.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_9__.createContext)();
var Context = /*#__PURE__*/function (_Component) {
  (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__.default)(Context, _Component);

  var _super = _createSuper(Context);

  function Context(props) {
    var _this;

    (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__.default)(this, Context);

    _this = _super.call(this, props);
    _this.state = {
      keySet: {},
      Steps: [],
      isSignedIn: false,
      isError: false
    };
    return _this;
  }

  (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_5__.default)(Context, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var wallSet = [{
        label: "img_1",
        path: "/img/wall_1.png"
      }, {
        label: "img_2",
        path: "/img/wall_2.png"
      }, {
        label: "img_3",
        path: "/img/wall_3.png"
      }];
      var keyData = {
        advisory: "/img/advisory.png",
        waterTank: "/img/twater.png",
        rainAnalyse: "/img/analyse.png",
        drought: "/img/drought.png",
        weatherAround: "/img/wlocation.png",
        weatherForecast: "/img/dropp.png"
      };
      this.setState({
        keySet: keyData
      });
      this.setState({
        Steps: wallSet
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var handleLogin = /*#__PURE__*/function () {
        var _ref2 = (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__.default)( /*#__PURE__*/D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(_ref) {
          var email, password, res;
          return D_Experiment_Next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  email = _ref.email, password = _ref.password;
                  console.log(email, password);
                  _context.prev = 2;
                  _context.next = 5;
                  return _api_auth__WEBPACK_IMPORTED_MODULE_10__.default.post("/signin", {
                    email: email,
                    password: password
                  });

                case 5:
                  res = _context.sent;

                  _this2.setState({
                    isSignedIn: true
                  });

                  window.location.href("/admin");
                  console.log(res.data);
                  _context.next = 15;
                  break;

                case 11:
                  _context.prev = 11;
                  _context.t0 = _context["catch"](2);

                  _this2.setState({
                    isError: true
                  });

                  console.log(_context.t0);

                case 15:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[2, 11]]);
        }));

        return function handleLogin(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      var handleError = function handleError() {
        _this2.setState({
          isError: false
        });
      };

      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {
          value: _objectSpread(_objectSpread({}, this.state), {}, {
            handleLogin: handleLogin,
            handleError: handleError
          }),
          children: this.props.children
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 7
      }, this);
    }
  }]);

  return Context;
}(react__WEBPACK_IMPORTED_MODULE_9__.Component);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJwcm9wcyIsInN0YXRlIiwia2V5U2V0IiwiU3RlcHMiLCJpc1NpZ25lZEluIiwiaXNFcnJvciIsIndhbGxTZXQiLCJsYWJlbCIsInBhdGgiLCJrZXlEYXRhIiwiYWR2aXNvcnkiLCJ3YXRlclRhbmsiLCJyYWluQW5hbHlzZSIsImRyb3VnaHQiLCJ3ZWF0aGVyQXJvdW5kIiwid2VhdGhlckZvcmVjYXN0Iiwic2V0U3RhdGUiLCJoYW5kbGVMb2dpbiIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25zb2xlIiwibG9nIiwiYXBpIiwicmVzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YSIsImhhbmRsZUVycm9yIiwiY2hpbGRyZW4iLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFTyxJQUFNQSxXQUFXLGdCQUFHQyxvREFBYSxFQUFqQztBQUVBLElBQU1DLE9BQWI7QUFBQTs7QUFBQTs7QUFDRSxtQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNqQiw4QkFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxZQUFNLEVBQUUsRUFERztBQUVYQyxXQUFLLEVBQUUsRUFGSTtBQUdYQyxnQkFBVSxFQUFFLEtBSEQ7QUFJWEMsYUFBTyxFQUFFO0FBSkUsS0FBYjtBQUZpQjtBQVFsQjs7QUFUSDtBQUFBO0FBQUEsd0NBV3NCO0FBQ2xCLFVBQU1DLE9BQU8sR0FBRyxDQUNkO0FBQ0VDLGFBQUssRUFBRSxPQURUO0FBRUVDLFlBQUksRUFBRTtBQUZSLE9BRGMsRUFLZDtBQUNFRCxhQUFLLEVBQUUsT0FEVDtBQUVFQyxZQUFJLEVBQUU7QUFGUixPQUxjLEVBU2Q7QUFDRUQsYUFBSyxFQUFFLE9BRFQ7QUFFRUMsWUFBSSxFQUFFO0FBRlIsT0FUYyxDQUFoQjtBQWNBLFVBQU1DLE9BQU8sR0FBRztBQUNkQyxnQkFBUSxFQUFFLG1CQURJO0FBRWRDLGlCQUFTLEVBQUUsaUJBRkc7QUFHZEMsbUJBQVcsRUFBRSxrQkFIQztBQUlkQyxlQUFPLEVBQUUsa0JBSks7QUFLZEMscUJBQWEsRUFBRSxvQkFMRDtBQU1kQyx1QkFBZSxFQUFFO0FBTkgsT0FBaEI7QUFRQSxXQUFLQyxRQUFMLENBQWM7QUFBRWQsY0FBTSxFQUFFTztBQUFWLE9BQWQ7QUFDQSxXQUFLTyxRQUFMLENBQWM7QUFBRWIsYUFBSyxFQUFFRztBQUFULE9BQWQ7QUFDRDtBQXBDSDtBQUFBO0FBQUEsNkJBc0NXO0FBQUE7O0FBQ1AsVUFBTVcsV0FBVztBQUFBLDBQQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyx1QkFBVCxRQUFTQSxLQUFULEVBQWdCQyxRQUFoQixRQUFnQkEsUUFBaEI7QUFDbEJDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWUgsS0FBWixFQUFtQkMsUUFBbkI7QUFEa0I7QUFBQTtBQUFBLHlCQUdFRyxvREFBQSxDQUFTLFNBQVQsRUFBb0I7QUFBRUoseUJBQUssRUFBTEEsS0FBRjtBQUFTQyw0QkFBUSxFQUFSQTtBQUFULG1CQUFwQixDQUhGOztBQUFBO0FBR1ZJLHFCQUhVOztBQUloQix3QkFBSSxDQUFDUCxRQUFMLENBQWM7QUFBRVosOEJBQVUsRUFBRTtBQUFkLG1CQUFkOztBQUNBb0Isd0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUIsUUFBckI7QUFDQU4seUJBQU8sQ0FBQ0MsR0FBUixDQUFZRSxHQUFHLENBQUNJLElBQWhCO0FBTmdCO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQVFoQix3QkFBSSxDQUFDWCxRQUFMLENBQWM7QUFBRVgsMkJBQU8sRUFBRTtBQUFYLG1CQUFkOztBQUNBZSx5QkFBTyxDQUFDQyxHQUFSOztBQVRnQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFIOztBQUFBLHdCQUFYSixXQUFXO0FBQUE7QUFBQTtBQUFBLFNBQWpCOztBQWFBLFVBQU1XLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsY0FBSSxDQUFDWixRQUFMLENBQWM7QUFBRVgsaUJBQU8sRUFBRTtBQUFYLFNBQWQ7QUFDRCxPQUZEOztBQUlBLDBCQUNFO0FBQUEsK0JBQ0UsOERBQUMsV0FBRCxDQUFhLFFBQWI7QUFDRSxlQUFLLGtDQUFPLEtBQUtKLEtBQVo7QUFBbUJnQix1QkFBVyxFQUFYQSxXQUFuQjtBQUFnQ1csdUJBQVcsRUFBWEE7QUFBaEMsWUFEUDtBQUFBLG9CQUdHLEtBQUs1QixLQUFMLENBQVc2QjtBQUhkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFTRDtBQWpFSDs7QUFBQTtBQUFBLEVBQTZCQyw0Q0FBN0IiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguM2ExZmEwOWQzYmM5YWEyYjg1OGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBhcGkgZnJvbSBcIi4uL2FwaS9hdXRoXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGtleVNldDoge30sXHJcbiAgICAgIFN0ZXBzOiBbXSxcclxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXHJcbiAgICAgIGlzRXJyb3I6IGZhbHNlLFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgY29uc3Qgd2FsbFNldCA9IFtcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcImltZ18xXCIsXHJcbiAgICAgICAgcGF0aDogXCIvaW1nL3dhbGxfMS5wbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcImltZ18yXCIsXHJcbiAgICAgICAgcGF0aDogXCIvaW1nL3dhbGxfMi5wbmdcIixcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGxhYmVsOiBcImltZ18zXCIsXHJcbiAgICAgICAgcGF0aDogXCIvaW1nL3dhbGxfMy5wbmdcIixcclxuICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBrZXlEYXRhID0ge1xyXG4gICAgICBhZHZpc29yeTogXCIvaW1nL2Fkdmlzb3J5LnBuZ1wiLFxyXG4gICAgICB3YXRlclRhbms6IFwiL2ltZy90d2F0ZXIucG5nXCIsXHJcbiAgICAgIHJhaW5BbmFseXNlOiBcIi9pbWcvYW5hbHlzZS5wbmdcIixcclxuICAgICAgZHJvdWdodDogXCIvaW1nL2Ryb3VnaHQucG5nXCIsXHJcbiAgICAgIHdlYXRoZXJBcm91bmQ6IFwiL2ltZy93bG9jYXRpb24ucG5nXCIsXHJcbiAgICAgIHdlYXRoZXJGb3JlY2FzdDogXCIvaW1nL2Ryb3BwLnBuZ1wiLFxyXG4gICAgfTtcclxuICAgIHRoaXMuc2V0U3RhdGUoeyBrZXlTZXQ6IGtleURhdGEgfSk7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgU3RlcHM6IHdhbGxTZXQgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZCB9KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVtYWlsLCBwYXNzd29yZCk7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLnBvc3QoXCIvc2lnbmluXCIsIHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc1NpZ25lZEluOiB0cnVlIH0pO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmKFwiL2FkbWluXCIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNFcnJvcjogdHJ1ZSB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Vycm9yOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgIHZhbHVlPXt7IC4uLnRoaXMuc3RhdGUsIGhhbmRsZUxvZ2luLCBoYW5kbGVFcnJvciB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==