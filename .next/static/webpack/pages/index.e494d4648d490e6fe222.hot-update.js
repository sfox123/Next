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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZXNzZW50aWFscy9OYXYuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibG9nbyIsImhlaWdodCIsInRvb2xiYXJNYXJnaW4iLCJwYWRkaW5nIiwidGFiQ29udGFpbmVyIiwibWFyZ2luTGVmdCIsInRhYiIsImZvbnRGYW1pbHkiLCJmb250V2VpZ2h0IiwidGV4dFRyYW5zZm9ybSIsIm1pbldpZHRoIiwibWVudSIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJibHVlIiwiY29sb3IiLCJmbGV4R3JvdyIsImJ0biIsImJvcmRlclJhZGl1cyIsInNwYWNpbmciLCJtYXJnaW5SaWdodCIsIm1lbnVJdGVtIiwib3BhY2l0eSIsImxvZ29Db250YWluZXIiLCJ0aXRsZSIsImZvbnRTaXplIiwibWFyZ2luIiwic3R5bGVzIiwicm9vdCIsImNsb3NlQnV0dG9uIiwicG9zaXRpb24iLCJyaWdodCIsInRvcCIsImdyZXkiLCJEaWFsb2dUaXRsZSIsIndpdGhTdHlsZXMiLCJwcm9wcyIsImNoaWxkcmVuIiwiY2xhc3NlcyIsIm9uQ2xvc2UiLCJvdGhlciIsIkVsZXZhdGlvblNjcm9sbCIsIndpbmRvdyIsInRyaWdnZXIiLCJ1c2VTY3JvbGxUcmlnZ2VyIiwiZGlzYWJsZUh5c3RlcmVzaXMiLCJ0aHJlc2hvbGQiLCJ0YXJnZXQiLCJ1bmRlZmluZWQiLCJSZWFjdCIsImVsZXZhdGlvbiIsIk5hdiIsInVzZUNvbnRleHQiLCJEYXRhQ29udGV4dCIsImhhbmRsZUxvZ2luIiwiaXNFcnJvciIsImhhbmRsZUVycm9yIiwiaXNTaWduZWRJbiIsInVzZVN0YXRlIiwib3BlbiIsInNldE9wZW4iLCJlbWFpbCIsInNldFVzZXJOYW1lIiwicGFzc3dvcmQiLCJzZXRQYXNzV29yZCIsImNsb3NlIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVDaGFuZ2UiLCJlIiwidHlwZSIsInZhbHVlIiwiTGluayIs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYkYsRUFjR3NDLE9BQU8sZ0JBQ04sOERBQUMsZ0VBQUQ7QUFBVSxvQkFBSUEsT0FBZDtBQUFBLHFDQUNFLDhEQUFDLDREQUFEO0FBQ0Usd0JBQVEsRUFBQyxPQURYO0FBRUUsc0JBQU0sZUFDSiw4REFBQyxpRUFBRDtBQUNFLGdDQUFXLE9BRGI7QUFFRSx1QkFBSyxFQUFDLFNBRlI7QUFHRSxzQkFBSSxFQUFDLE9BSFA7QUFJRSx5QkFBTyxFQUFFQyxXQUpYO0FBQUEseUNBTUUsOERBQUMsNkRBQUQ7QUFBVyw0QkFBUSxFQUFDO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFETSxHQWtCSixJQWhDTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBdkJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUE5QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrR0QsQ0F4SEQ7O0lBQU1MLEc7VUFDWXZELFM7OztNQURadUQsRztBQTBITiwrREFBZUEsR0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lNDk0ZDQ2NDhkNDkwZTZmZTIyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvZ286IHtcclxuICAgIGhlaWdodDogXCI0LjVlbVwiLFxyXG4gIH0sXHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIHRhYkNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiUmFsZXdheVwiLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICBtaW5XaWR0aDogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjI1cHhcIixcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmx1ZSxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGJ0bjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIG1lbnVJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlJhbGV3YXlcIixcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgb3BhY2l0eTogMC43LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjI1cHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiLFxyXG4gIH0sXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBFbGV2YXRpb25TY3JvbGwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMCxcclxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgaGFuZGxlTG9naW4sIGlzRXJyb3IsIGhhbmRsZUVycm9yLCBpc1NpZ25lZEluIH0gPVxyXG4gICAgdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzV29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBjbG9zZSA9ICgpID0+IHtcclxuICAgIHNldE9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2V0T3Blbighb3Blbik7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUudGFyZ2V0LnR5cGUgPT0gXCJ0ZXh0XCIpIHtcclxuICAgICAgc2V0VXNlck5hbWUoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0UGFzc1dvcmQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxFbGV2YXRpb25TY3JvbGw+XHJcbiAgICAgICAgPEFwcEJhciBwb3NpdGlvbj1cImZpeGVkXCIgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICA8VG9vbGJhciBkaXNhYmxlR3V0dGVycz5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGRpc2FibGVSaXBwbGVcclxuICAgICAgICAgICAgICBjb21wb25lbnQ9e0xpbmt9XHJcbiAgICAgICAgICAgICAgaHJlZj1cIi9cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5sb2dvQ29udGFpbmVyfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEFncm9tZXQgR0lTXHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzU2lnbmVkSW4gPyBcIkFkbWluXCIgOiBcIkxvZ2luXCJ9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8L0VsZXZhdGlvblNjcm9sbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgICAgPERpYWxvZyBvbkNsb3NlPXtjbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCIgb25DbG9zZT17Y2xvc2V9PlxyXG4gICAgICAgICAgQWRtaW5cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWFsb2dDb250ZW50fSBkaXZpZGVycz5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBrZXk9e1wibmFtZVwifVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVMb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgICAgICAgIWlzRXJyb3IgPyBjbG9zZSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIExvZ2luXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAge2lzRXJyb3IgPyAoXHJcbiAgICAgICAgICAgICAgICA8Q29sbGFwc2UgaW49e2lzRXJyb3J9PlxyXG4gICAgICAgICAgICAgICAgICA8QWxlcnRcclxuICAgICAgICAgICAgICAgICAgICBzZXZlcml0eT1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlRXJyb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbG9zZUljb24gZm9udFNpemU9XCJpbmhlcml0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBBY2Nlc3MgRGVuaWVkICFcclxuICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxyXG4gICAgICA8L0RpYWxvZz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==