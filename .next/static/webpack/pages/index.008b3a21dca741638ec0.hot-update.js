self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./essentials/Nav.js":
/*!***************************!*\
  !*** ./essentials/Nav.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var D_Experiment_Next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "./node_modules/@material-ui/core/esm/useScrollTrigger/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "./node_modules/@material-ui/core/esm/DialogTitle/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/lab/Alert */ "./node_modules/@material-ui/lab/esm/Alert/index.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/context */ "./context/context.js");
/* module decorator */ module = __webpack_require__.hmd(module);




var _jsxFileName = "D:\\Experiment\\Next\\essentials\\Nav.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


















var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.makeStyles)(function (theme) {
  return {
    logo: {
      height: "4.5em"
    },
    toolbarMargin: {
      padding: 0
    },
    tabContainer: {
      marginLeft: "auto"
    },
    tab: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      minWidth: 10,
      marginLeft: "25px"
    },
    menu: {
      backgroundColor: theme.palette.common.blue,
      color: "white",
      flexGrow: 1
    },
    btn: {
      borderRadius: "50px",
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2)
    },
    menuItem: {
      fontFamily: "Raleway",
      fontWeight: 700,
      textTransform: "none",
      opacity: 0.7,
      "&:hover": {
        opacity: 1
      }
    },
    logoContainer: {
      padding: "0",
      "&:hover": {
        backgroundColor: "transparent"
      }
    },
    title: {
      flexGrow: 1,
      fontSize: "1rem",
      marginRight: "25px",
      marginLeft: "25px"
    },
    margin: {
      margin: theme.spacing(1)
    }
  };
});

var styles = function styles(theme) {
  return {
    root: {
      margin: 0,
      padding: theme.spacing(2)
    },
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500]
    }
  };
};

var DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__.withStyles)(styles)(function (props) {
  var children = props.children,
      classes = props.classes,
      onClose = props.onClose,
      other = (0,D_Experiment_Next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__.default)(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_6__.default, _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
      variant: "h6",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, _this), onClose ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, _this) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, _this);
});

var ElevationScroll = function ElevationScroll(props) {
  _s();

  var children = props.children,
      window = props.window;
  var trigger = (0,_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__.default)({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

_s(ElevationScroll, "EC2GbbZl9x3XKoXLVx1H89cOBi0=", false, function () {
  return [_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_10__.default];
});

_c = ElevationScroll;

var Nav = function Nav(props) {
  _s2();

  var classes = useStyles();

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_4__.DataContext),
      handleLogin = _useContext.handleLogin,
      isError = _useContext.isError,
      handleError = _useContext.handleError,
      isSignedIn = _useContext.isSignedIn;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false),
      open = _useState[0],
      setOpen = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      email = _useState2[0],
      setUserName = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      password = _useState3[0],
      setPassWord = _useState3[1];

  var close = function close() {
    setOpen(false);
  };

  var handleClick = function handleClick() {
    setOpen(!open);
  };

  var handleChange = function handleChange(e) {
    if (e.target.type == "text") {
      setUserName(e.target.value);
    } else {
      setPassWord(e.target.value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_3___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(ElevationScroll, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_11__.default, {
        position: "fixed",
        color: "primary",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_12__.default, {
          disableGutters: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
            disableRipple: true,
            component: _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_14__.default,
            href: "/",
            className: classes.logoContainer,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
              className: classes.title,
              variant: "contained",
              color: "secondary",
              children: "Agromet GIS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 150,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 144,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
            onClick: handleClick,
            variant: "contained",
            color: "secondary",
            className: classes.btn,
            children: isSignedIn ? "Admin" : "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: classes.toolbarMargin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
      onClose: close,
      "aria-labelledby": "simple-dialog-title",
      open: open,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(DialogTitle, {
        id: "customized-dialog-title",
        onClose: close,
        children: "Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
        className: classes.dialogContent,
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("form", {
          onSubmit: function onSubmit(e) {
            return e.preventDefault();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.default, {
              onChange: handleChange,
              type: "text",
              className: classes.margin,
              id: "input-with-icon-textfield",
              label: "Username"
            }, "name", false, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 186,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_16__.default, {
              onChange: handleChange,
              type: "password",
              className: classes.margin,
              id: "input-with-icon-password",
              label: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 188,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 187,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 196,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 13
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_15__.default, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__.default, {
              type: "submit",
              onClick: function onClick() {
                handleLogin({
                  email: email,
                  password: password
                });
                isSignedIn ? setOpen(false) : null;
              },
              variant: "contained",
              color: "secondary",
              className: classes.btn,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 211,
              columnNumber: 15
            }, _this), isError ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_17__.default, {
              "in": isError,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_18__.default, {
                severity: "error",
                action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__.default, {
                  "aria-label": "close",
                  color: "inherit",
                  size: "small",
                  onClick: handleError,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__.default, {
                    fontSize: "inherit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 223,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 217,
                  columnNumber: 23
                }, _this),
                children: "Access Denied !"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 214,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 213,
              columnNumber: 17
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 140,
    columnNumber: 5
  }, _this);
};

_s2(Nav, "8J0nDGFCyIjfXSJnvQUU76LeDNg=", false, function () {
  return [useStyles];
});

_c2 = Nav;
/* harmony default export */ __webpack_exports__["default"] = (Nav);

var _c, _c2;

$RefreshReg$(_c, "ElevationScroll");
$RefreshReg$(_c2, "Nav");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXNzZW50aWFscy9OYXYuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibG9nbyIsImhlaWdodCIsInRvb2xiYXJNYXJnaW4iLCJwYWRkaW5nIiwidGFiQ29udGFpbmVyIiwibWFyZ2luTGVmdCIsInRhYiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1pbldpZHRoIiwibWVudSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibHVlIiwiY29sb3IiLCJmbGV4R3JvdyIsImJ0biIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsIm1lbnVJdGVtIiwib3BhY2l0eSIsImxvZ29Db250YWluZXIiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luIiwic3R5bGVzIiwicm9vdCIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkVsZXZhdGlvblNjcm9sbCIsIndpbmRvdyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImVsZXZhdGlvbiIsIk5hdiIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImhhbmRsZUxvZ2luIiwiaXNFcnJvciIsImhhbmRsZUVycm9yIiwiaXNTaWduZWRJbiIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJlbWFpbCIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzV29yZCIsImNsb3NlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJlIiwidHlwZSIsInZhbHVlIiwiTGluayIs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ckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFhRTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLEVBY0dzQyxPQUFPLGdCQUNOLDhEQUFDLGdFQUFEO0FBQVUsb0JBQUlBLE9BQWQ7QUFBQSxxQ0FDRSw4REFBQyw0REFBRDtBQUNFLHdCQUFRLEVBQUMsT0FEWDtBQUVFLHNCQUFNLGVBQ0osOERBQUMsaUVBQUQ7QUFDRSxnQ0FBVyxPQURiO0FBRUUsdUJBQUssRUFBQyxTQUZSO0FBR0Usc0JBQUksRUFBQyxPQUhQO0FBSUUseUJBQU8sRUFBRUMsV0FKWDtBQUFBLHlDQU1FLDhEQUFDLDZEQUFEO0FBQVcsNEJBQVEsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRE0sR0FrQkosSUFoQ047QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXZCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBOUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0dELENBeEhEOztJQUFNTCxHO1VBQ1l2RCxTOzs7TUFEWnVELEc7QUEwSE4sK0RBQWVBLEdBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDA4YjNhMjFkY2E3NDE2MzhlYzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBBcHBCYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiO1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiO1xyXG5pbXBvcnQgdXNlU2Nyb2xsVHJpZ2dlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvdXNlU2Nyb2xsVHJpZ2dlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiO1xyXG5pbXBvcnQgeyBEaWFsb2csIERpYWxvZ0NvbnRlbnQgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmVcIjtcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sXCI7XHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBsb2dvOiB7XHJcbiAgICBoZWlnaHQ6IFwiNC41ZW1cIixcclxuICB9LFxyXG4gIHRvb2xiYXJNYXJnaW46IHtcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgfSxcclxuICB0YWJDb250YWluZXI6IHtcclxuICAgIG1hcmdpbkxlZnQ6IFwiYXV0b1wiLFxyXG4gIH0sXHJcbiAgdGFiOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlJhbGV3YXlcIixcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgbWluV2lkdGg6IDEwLFxyXG4gICAgbWFyZ2luTGVmdDogXCIyNXB4XCIsXHJcbiAgfSxcclxuICBtZW51OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsdWUsXHJcbiAgICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgfSxcclxuICBidG46IHtcclxuICAgIGJvcmRlclJhZGl1czogXCI1MHB4XCIsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBtZW51SXRlbToge1xyXG4gICAgZm9udEZhbWlseTogXCJSYWxld2F5XCIsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgIG9wYWNpdHk6IDAuNyxcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9nb0NvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogXCIwXCIsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZmxleEdyb3c6IDEsXHJcbiAgICBmb250U2l6ZTogXCIxcmVtXCIsXHJcbiAgICBtYXJnaW5SaWdodDogXCIyNXB4XCIsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjI1cHhcIixcclxuICB9LFxyXG4gIG1hcmdpbjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IDAsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgY2xvc2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIHRvcDogdGhlbWUuc3BhY2luZygxKSxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmdyZXlbNTAwXSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IERpYWxvZ1RpdGxlID0gd2l0aFN0eWxlcyhzdHlsZXMpKChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIGNsYXNzZXMsIG9uQ2xvc2UsIC4uLm90aGVyIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPE11aURpYWxvZ1RpdGxlIGRpc2FibGVUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSB7Li4ub3RoZXJ9PlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIj57Y2hpbGRyZW59PC9UeXBvZ3JhcGh5PlxyXG4gICAgICB7b25DbG9zZSA/IChcclxuICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jbG9zZUJ1dHRvbn1cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xvc2V9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENsb3NlSWNvbiAvPlxyXG4gICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L011aURpYWxvZ1RpdGxlPlxyXG4gICk7XHJcbn0pO1xyXG5cclxuY29uc3QgRWxldmF0aW9uU2Nyb2xsID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgd2luZG93IH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgdHJpZ2dlciA9IHVzZVNjcm9sbFRyaWdnZXIoe1xyXG4gICAgZGlzYWJsZUh5c3RlcmVzaXM6IHRydWUsXHJcbiAgICB0aHJlc2hvbGQ6IDAsXHJcbiAgICB0YXJnZXQ6IHdpbmRvdyA/IHdpbmRvdygpIDogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkcmVuLCB7XHJcbiAgICBlbGV2YXRpb246IHRyaWdnZXIgPyA0IDogMCxcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IE5hdiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCB7IGhhbmRsZUxvZ2luLCBpc0Vycm9yLCBoYW5kbGVFcnJvciwgaXNTaWduZWRJbiB9ID1cclxuICAgIHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbZW1haWwsIHNldFVzZXJOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc1dvcmRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgY2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oIW9wZW4pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50eXBlID09IFwidGV4dFwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBhc3NXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBZ3JvbWV0IEdJU1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVDbGlja31cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ0bn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtpc1NpZ25lZEluID8gXCJBZG1pblwiIDogXCJMb2dpblwifVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvVG9vbGJhcj5cclxuICAgICAgICA8L0FwcEJhcj5cclxuICAgICAgPC9FbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRvb2xiYXJNYXJnaW59IC8+XHJcbiAgICAgIDxEaWFsb2cgb25DbG9zZT17Y2xvc2V9IGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIiBvcGVuPXtvcGVufT5cclxuICAgICAgICA8RGlhbG9nVGl0bGUgaWQ9XCJjdXN0b21pemVkLWRpYWxvZy10aXRsZVwiIG9uQ2xvc2U9e2Nsb3NlfT5cclxuICAgICAgICAgIEFkbWluXHJcbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cclxuICAgICAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9e2NsYXNzZXMuZGlhbG9nQ29udGVudH0gZGl2aWRlcnM+XHJcbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IGUucHJldmVudERlZmF1bHQoKX0+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAga2V5PXtcIm5hbWVcIn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LXdpdGgtaWNvbi10ZXh0ZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW59XHJcbiAgICAgICAgICAgICAgICBpZD1cImlucHV0LXdpdGgtaWNvbi1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgaGFuZGxlTG9naW4oeyBlbWFpbCwgcGFzc3dvcmQgfSk7XHJcbiAgICAgICAgICAgICAgICAgIGlzU2lnbmVkSW4gPyBzZXRPcGVuKGZhbHNlKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge2lzRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e2lzRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICBzZXZlcml0eT1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgRGVuaWVkICFcclxuICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==