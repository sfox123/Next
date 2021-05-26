self["webpackHotUpdate_N_E"]("pages/_app",{

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
                !isError ? close : null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXNzZW50aWFscy9OYXYuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibG9nbyIsImhlaWdodCIsInRvb2xiYXJNYXJnaW4iLCJwYWRkaW5nIiwidGFiQ29udGFpbmVyIiwibWFyZ2luTGVmdCIsInRhYiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1pbldpZHRoIiwibWVudSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibHVlIiwiY29sb3IiLCJmbGV4R3JvdyIsImJ0biIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsIm1lbnVJdGVtIiwib3BhY2l0eSIsImxvZ29Db250YWluZXIiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luIiwic3R5bGVzIiwicm9vdCIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkVsZXZhdGlvblNjcm9sbCIsIndpbmRvdyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImVsZXZhdGlvbiIsIk5hdiIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImhhbmRsZUxvZ2luIiwiaXNFcnJvciIsImhhbmRsZUVycm9yIiwiaXNTaWduZWRJbiIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJlbWFpbCIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzV29yZCIsImNsb3NlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJlIiwidHlwZSIsInZhbHVlIiwiTGluayIs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkYsRUFjR3NDLE9BQU8sZ0JBQ04sOERBQUMsZ0VBQUQ7QUFBVSxvQkFBSUEsT0FBZDtBQUFBLHFDQUNFLDhEQUFDLDREQUFEO0FBQ0Usd0JBQVEsRUFBQyxPQURYO0FBRUUsc0JBQU0sZUFDSiw4REFBQyxpRUFBRDtBQUNFLGdDQUFXLE9BRGI7QUFFRSx1QkFBSyxFQUFDLFNBRlI7QUFHRSxzQkFBSSxFQUFDLE9BSFA7QUFJRSx5QkFBTyxFQUFFQyxXQUpYO0FBQUEseUNBTUUsOERBQUMsNkRBQUQ7QUFBVyw0QkFBUSxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETSxHQWtCSixJQWhDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrR0QsQ0F4SEQ7O0lBQU1MLEc7VUFDWXZELFM7OztNQURadUQsRztBQTBITiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmU0OTRkNDY0OGQ0OTBlNmZlMjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB3aXRoU3R5bGVzIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQXBwQmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIjtcclxuaW1wb3J0IFRvb2xiYXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXJcIjtcclxuaW1wb3J0IHVzZVNjcm9sbFRyaWdnZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIjtcclxuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIjtcclxuaW1wb3J0IE11aURpYWxvZ1RpdGxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIjtcclxuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcbmltcG9ydCB7IERhdGFDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgbG9nbzoge1xyXG4gICAgaGVpZ2h0OiBcIjQuNWVtXCIsXHJcbiAgfSxcclxuICB0b29sYmFyTWFyZ2luOiB7XHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gIH0sXHJcbiAgdGFiQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiBcImF1dG9cIixcclxuICB9LFxyXG4gIHRhYjoge1xyXG4gICAgZm9udEZhbWlseTogXCJSYWxld2F5XCIsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiBcIm5vbmVcIixcclxuICAgIG1pbldpZHRoOiAxMCxcclxuICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiLFxyXG4gIH0sXHJcbiAgbWVudToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibHVlLFxyXG4gICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gIH0sXHJcbiAgYnRuOiB7XHJcbiAgICBib3JkZXJSYWRpdXM6IFwiNTBweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgbWVudUl0ZW06IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiUmFsZXdheVwiLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICBvcGFjaXR5OiAwLjcsXHJcbiAgICBcIiY6aG92ZXJcIjoge1xyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ29Db250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IFwiMFwiLFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZsZXhHcm93OiAxLFxyXG4gICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgbWFyZ2luUmlnaHQ6IFwiMjVweFwiLFxyXG4gICAgbWFyZ2luTGVmdDogXCIyNXB4XCIsXHJcbiAgfSxcclxuICBtYXJnaW46IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIGNsb3NlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5ncmV5WzUwMF0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBEaWFsb2dUaXRsZSA9IHdpdGhTdHlsZXMoc3R5bGVzKSgocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCBjbGFzc2VzLCBvbkNsb3NlLCAuLi5vdGhlciB9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNdWlEaWFsb2dUaXRsZSBkaXNhYmxlVHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gey4uLm90aGVyfT5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCI+e2NoaWxkcmVufTwvVHlwb2dyYXBoeT5cclxuICAgICAge29uQ2xvc2UgPyAoXHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY2xvc2VCdXR0b259XHJcbiAgICAgICAgICBvbkNsaWNrPXtvbkNsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDbG9zZUljb24gLz5cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9NdWlEaWFsb2dUaXRsZT5cclxuICApO1xyXG59KTtcclxuXHJcbmNvbnN0IEVsZXZhdGlvblNjcm9sbCA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgY2hpbGRyZW4sIHdpbmRvdyB9ID0gcHJvcHM7XHJcblxyXG4gIGNvbnN0IHRyaWdnZXIgPSB1c2VTY3JvbGxUcmlnZ2VyKHtcclxuICAgIGRpc2FibGVIeXN0ZXJlc2lzOiB0cnVlLFxyXG4gICAgdGhyZXNob2xkOiAwLFxyXG4gICAgdGFyZ2V0OiB3aW5kb3cgPyB3aW5kb3coKSA6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwge1xyXG4gICAgZWxldmF0aW9uOiB0cmlnZ2VyID8gNCA6IDAsXHJcbiAgfSk7XHJcbn07XHJcblxyXG5jb25zdCBOYXYgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgeyBoYW5kbGVMb2dpbiwgaXNFcnJvciwgaGFuZGxlRXJyb3IsIGlzU2lnbmVkSW4gfSA9XHJcbiAgICB1c2VDb250ZXh0KERhdGFDb250ZXh0KTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW2VtYWlsLCBzZXRVc2VyTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3NXb3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IGNsb3NlID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKCFvcGVuKTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQudHlwZSA9PSBcInRleHRcIikge1xyXG4gICAgICBzZXRVc2VyTmFtZShlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRQYXNzV29yZChlLnRhcmdldC52YWx1ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEVsZXZhdGlvblNjcm9sbD5cclxuICAgICAgICA8QXBwQmFyIHBvc2l0aW9uPVwiZml4ZWRcIiBjb2xvcj1cInByaW1hcnlcIj5cclxuICAgICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgZGlzYWJsZVJpcHBsZVxyXG4gICAgICAgICAgICAgIGNvbXBvbmVudD17TGlua31cclxuICAgICAgICAgICAgICBocmVmPVwiL1wiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmxvZ29Db250YWluZXJ9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQWdyb21ldCBHSVNcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7aXNTaWduZWRJbiA/IFwiQWRtaW5cIiA6IFwiTG9naW5cIn1cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L1Rvb2xiYXI+XHJcbiAgICAgICAgPC9BcHBCYXI+XHJcbiAgICAgIDwvRWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50b29sYmFyTWFyZ2lufSAvPlxyXG4gICAgICA8RGlhbG9nIG9uQ2xvc2U9e2Nsb3NlfSBhcmlhLWxhYmVsbGVkYnk9XCJzaW1wbGUtZGlhbG9nLXRpdGxlXCIgb3Blbj17b3Blbn0+XHJcbiAgICAgICAgPERpYWxvZ1RpdGxlIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIiBvbkNsb3NlPXtjbG9zZX0+XHJcbiAgICAgICAgICBBZG1pblxyXG4gICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmRpYWxvZ0NvbnRlbnR9IGRpdmlkZXJzPlxyXG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9PlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIGtleT17XCJuYW1lXCJ9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC13aXRoLWljb24tdGV4dGZpZWxkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2lufVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJpbnB1dC13aXRoLWljb24tcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUxvZ2luKHsgZW1haWwsIHBhc3N3b3JkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAhaXNFcnJvciA/IGNsb3NlIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7aXNFcnJvciA/IChcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17aXNFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VzcyBEZW5pZWQgIVxyXG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9