(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/***/ (function(module) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/***/ (function(module) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./api/auth.js":
/*!*********************!*\
  !*** ./api/auth.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "http://us-central1-express-439e0.cloudfunctions.net/app"
}));

/***/ }),

/***/ "./context/context.js":
/*!****************************!*\
  !*** ./context/context.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataContext": function() { return /* binding */ DataContext; },
/* harmony export */   "Context": function() { return /* binding */ Context; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/auth */ "./api/auth.js");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\Experiment\\Next\\context\\context.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const DataContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
class Context extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super(props);
    this.state = {
      keySet: {},
      Steps: [],
      isSignedIn: false,
      isError: false,
      open: false
    };
  }

  componentDidMount() {
    const wallSet = [{
      label: "img_1",
      path: "/img/wall_1.png"
    }, {
      label: "img_2",
      path: "/img/wall_2.png"
    }, {
      label: "img_3",
      path: "/img/wall_3.png"
    }];
    const keyData = {
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

  render() {
    const handleLogin = async ({
      email,
      password
    }) => {
      console.log(email, password);

      try {
        const res = await _api_auth__WEBPACK_IMPORTED_MODULE_2__.default.post("/signin", {
          email,
          password
        });
        await this.setState({
          isSignedIn: true
        });
        await console.log(res.data);
        setOpen(false);
      } catch (error) {
        this.setState({
          isError: true
        });
        console.log(error);
      }
    };

    const setOpen = e => {
      this.setState({
        open: e
      });
    };

    const handleError = () => {
      this.setState({
        isError: false
      });
    };

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DataContext.Provider, {
        value: _objectSpread(_objectSpread({}, this.state), {}, {
          handleLogin,
          handleError,
          setOpen
        }),
        children: this.props.children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }, this);
  }

}

/***/ }),

/***/ "./essentials/Nav.js":
/*!***************************!*\
  !*** ./essentials/Nav.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/AppBar */ "@material-ui/core/AppBar");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "@material-ui/core/Toolbar");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/useScrollTrigger */ "@material-ui/core/useScrollTrigger");
/* harmony import */ var _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Collapse */ "@material-ui/core/Collapse");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormControl */ "@material-ui/core/FormControl");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TextField */ "@material-ui/core/TextField");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/lab/Alert */ "@material-ui/lab/Alert");
/* harmony import */ var _material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../context/context */ "./context/context.js");

var _jsxFileName = "D:\\Experiment\\Next\\essentials\\Nav.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


















const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.makeStyles)(theme => ({
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
}));

const styles = theme => ({
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
});

const DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.withStyles)(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_10___default()), _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
      variant: "h6",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 7
    }, undefined), onClose ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 9
    }, undefined) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 5
  }, undefined);
});

const ElevationScroll = props => {
  const {
    children,
    window
  } = props;
  const trigger = _material_ui_core_useScrollTrigger__WEBPACK_IMPORTED_MODULE_5___default()({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
};

const Nav = props => {
  const classes = useStyles();
  const {
    handleLogin,
    isError,
    handleError,
    isSignedIn,
    open,
    setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_16__.DataContext);
  const {
    0: email,
    1: setUserName
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
  const {
    0: password,
    1: setPassWord
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");

  const handleChange = e => {
    if (e.target.type == "text") {
      setUserName(e.target.value);
    } else {
      setPassWord(e.target.value);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ElevationScroll, {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_3___default()), {
        position: "fixed",
        color: "primary",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_4___default()), {
          disableGutters: true,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
            disableRipple: true,
            component: (_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default()),
            href: "/",
            className: classes.logoContainer,
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Typography, {
              className: classes.title,
              variant: "contained",
              color: "secondary",
              children: "Agromet GIS"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 144,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
            onClick: () => setOpen(true),
            variant: "contained",
            color: "secondary",
            className: classes.btn,
            children: isSignedIn ? "Admin" : "Login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classes.toolbarMargin
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.Dialog, {
      onClose: () => setOpen(false),
      "aria-labelledby": "simple-dialog-title",
      open: open,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogTitle, {
        id: "customized-dialog-title",
        onClose: () => setOpen(false),
        children: "Admin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.DialogContent, {
        className: classes.dialogContent,
        dividers: true,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("form", {
          onSubmit: async e => {
            e.preventDefault();
          },
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default()), {
              onChange: handleChange,
              type: "text",
              className: classes.margin,
              id: "input-with-icon-textfield",
              label: "Username"
            }, "name", false, {
              fileName: _jsxFileName,
              lineNumber: 182,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 191,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_14___default()), {
              onChange: handleChange,
              type: "password",
              className: classes.margin,
              id: "input-with-icon-password",
              label: "Password"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 193,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 192,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 13
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_13___default()), {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8___default()), {
              type: "submit",
              onClick: () => {
                handleLogin({
                  email,
                  password
                });
              },
              variant: "contained",
              color: "secondary",
              className: classes.btn,
              children: "Login"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 204,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 215,
              columnNumber: 15
            }, undefined), isError ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_12___default()), {
              in: isError,
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_lab_Alert__WEBPACK_IMPORTED_MODULE_15___default()), {
                severity: "error",
                action: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11___default()), {
                  "aria-label": "close",
                  color: "inherit",
                  size: "small",
                  onClick: handleError,
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_9___default()), {
                    fontSize: "inherit"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 227,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 221,
                  columnNumber: 23
                }, undefined),
                children: "Access Denied !"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 218,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 217,
              columnNumber: 17
            }, undefined) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 134,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./essentials/carousal.js":
/*!********************************!*\
  !*** ./essentials/carousal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/MobileStepper */ "@material-ui/core/MobileStepper");
/* harmony import */ var _material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "@material-ui/core/Button");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "@material-ui/icons/KeyboardArrowLeft");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "@material-ui/icons/KeyboardArrowRight");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-swipeable-views */ "react-swipeable-views");
/* harmony import */ var react_swipeable_views__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-swipeable-views-utils */ "react-swipeable-views-utils");
/* harmony import */ var react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _src_styles_carousal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../src/styles/carousal */ "./src/styles/carousal.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../context/context */ "./context/context.js");

var _jsxFileName = "D:\\Experiment\\Next\\essentials\\carousal.js";











const AutoPlaySwipeableViews = (0,react_swipeable_views_utils__WEBPACK_IMPORTED_MODULE_8__.autoPlay)((react_swipeable_views__WEBPACK_IMPORTED_MODULE_7___default()));

const Carousal = () => {
  const {
    Steps
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_11__.DataContext);
  const classes = (0,_src_styles_carousal__WEBPACK_IMPORTED_MODULE_9__.default)();
  const theme = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.useTheme)();
  const {
    0: activeStep,
    1: setActiveStep
  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AutoPlaySwipeableViews, {
      axis: theme.direction === "rtl" ? "x-reverse" : "x",
      index: activeStep,
      onChangeIndex: handleStepChange,
      enableMouseEvents: true,
      children: Steps.map((step, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: Math.abs(activeStep - index) <= 2 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
          layout: "responsive",
          src: step.path,
          alt: step.label,
          width: 1000,
          height: 200
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }, undefined) : null
      }, step.label, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_MobileStepper__WEBPACK_IMPORTED_MODULE_3___default()), {
      variant: "dots",
      steps: 3,
      position: "static",
      activeStep: activeStep,
      nextButton: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        size: "small",
        onClick: handleNext,
        disabled: activeStep === 2,
        children: theme.direction === "rtl" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 11
      }, undefined),
      backButton: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
        size: "small",
        onClick: handleBack,
        disabled: activeStep === 0,
        children: theme.direction === "rtl" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_6___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 15
        }, undefined) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_5___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Carousal);

/***/ }),

/***/ "./main/advisory.js":
/*!**************************!*\
  !*** ./main/advisory.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Advisory": function() { return /* binding */ Advisory; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Typography */ "@material-ui/core/Typography");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "@material-ui/core/Paper");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/styles/MainStyles */ "./src/styles/MainStyles.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "@material-ui/core/Link");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../context/context */ "./context/context.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core */ "@material-ui/core");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Close */ "@material-ui/icons/Close");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/DialogTitle */ "@material-ui/core/DialogTitle");
/* harmony import */ var _material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "@material-ui/core/IconButton");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__);

var _jsxFileName = "D:\\Experiment\\Next\\main\\advisory.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }















const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    padding: "2rem 4rem"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});

const DialogTitle = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__.withStyles)(styles)(props => {
  const {
    children,
    classes,
    onClose
  } = props,
        other = _objectWithoutProperties(props, ["children", "classes", "onClose"]);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_DialogTitle__WEBPACK_IMPORTED_MODULE_12___default()), _objectSpread(_objectSpread({
    disableTypography: true,
    className: classes.root
  }, other), {}, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
      variant: "h6",
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }, undefined), onClose ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13___default()), {
      "aria-label": "close",
      className: classes.closeButton,
      onClick: onClose,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_11___default()), {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }, undefined) : null]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 5
  }, undefined);
});
const Advisory = props => {
  const {
    keySet
  } = (0,react__WEBPACK_IMPORTED_MODULE_8__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_9__.DataContext);
  const {
    title,
    alt,
    open,
    close,
    click,
    subHeadings,
    linkNames,
    links
  } = props;
  const classes = (0,_src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_5__.default)();
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
      style: {
        cursor: "pointer"
      },
      as: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4___default()), {
        onClick: click,
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3___default()), {
          className: classes.gridItem,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_7___default()), {
              src: `/img/${alt}.png`,
              style: {
                cursor: "pointer"
              },
              className: classes.img,
              height: 200,
              width: 200,
              alt: alt
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
              onClick: click,
              align: "center",
              variant: "h6",
              component: "h6",
              children: title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 11
        }, undefined)
      }, title, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, undefined)
    }, alt, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.Dialog, {
      onClose: close,
      "aria-labelledby": "simple-dialog-title",
      open: open,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DialogTitle, {
        id: "customized-dialog-title",
        onClose: close,
        children: title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core__WEBPACK_IMPORTED_MODULE_10__.DialogContent, {
        className: classes.dialogContent,
        dividers: true,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_2___default()), {
          variant: "h6",
          component: "h6",
          gutterBottom: true,
          children: subHeadings
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          style: {
            alignSelf: "center",
            padding: "1rem"
          },
          children: linkNames.map((el, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            style: {
              marginBottom: "1rem"
            },
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6___default()), {
              target: "_blank",
              href: links[index],
              children: el
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, undefined)
          }, index, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, undefined))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./node_modules/next/dist/client/image.js":
/*!************************************************!*\
  !*** ./node_modules/next/dist/client/image.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = Image;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _head = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/head */ "../next-server/lib/head"));

var _toBase = __webpack_require__(/*! ../next-server/lib/to-base-64 */ "../next-server/lib/to-base-64");

var _imageConfig = __webpack_require__(/*! ../next-server/server/image-config */ "../next-server/server/image-config");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

if (true) {
  ;
  global.__NEXT_IMAGE_IMPORTED = true;
}

const VALID_LOADING_VALUES = ['lazy', 'eager', undefined];
const loaders = new Map([['imgix', imgixLoader], ['cloudinary', cloudinaryLoader], ['akamai', akamaiLoader], ['default', defaultLoader]]);
const VALID_LAYOUT_VALUES = ['fill', 'fixed', 'intrinsic', 'responsive', undefined];
const {
  deviceSizes: configDeviceSizes,
  imageSizes: configImageSizes,
  loader: configLoader,
  path: configPath,
  domains: configDomains
} = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","domains":["firebasestorage.googleapis.com"]} || _imageConfig.imageConfigDefault; // sort smallest to largest

const allSizes = [...configDeviceSizes, ...configImageSizes];
configDeviceSizes.sort((a, b) => a - b);
allSizes.sort((a, b) => a - b);

function getWidths(width, layout, sizes) {
  if (sizes && (layout === 'fill' || layout === 'responsive')) {
    // Find all the "vw" percent sizes used in the sizes prop
    const percentSizes = [...sizes.matchAll(/(^|\s)(1?\d?\d)vw/g)].map(m => parseInt(m[2]));

    if (percentSizes.length) {
      const smallestRatio = Math.min(...percentSizes) * 0.01;
      return {
        widths: allSizes.filter(s => s >= configDeviceSizes[0] * smallestRatio),
        kind: 'w'
      };
    }

    return {
      widths: allSizes,
      kind: 'w'
    };
  }

  if (typeof width !== 'number' || layout === 'fill' || layout === 'responsive') {
    return {
      widths: configDeviceSizes,
      kind: 'w'
    };
  }

  const widths = [...new Set( // > This means that most OLED screens that say they are 3x resolution,
  // > are actually 3x in the green color, but only 1.5x in the red and
  // > blue colors. Showing a 3x resolution image in the app vs a 2x
  // > resolution image will be visually the same, though the 3x image
  // > takes significantly more data. Even true 3x resolution screens are
  // > wasteful as the human eye cannot see that level of detail without
  // > something like a magnifying glass.
  // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
  [width, width * 2
  /*, width * 3*/
  ].map(w => allSizes.find(p => p >= w) || allSizes[allSizes.length - 1]))];
  return {
    widths,
    kind: 'x'
  };
}

function generateImgAttrs({
  src,
  unoptimized,
  layout,
  width,
  quality,
  sizes,
  loader
}) {
  if (unoptimized) {
    return {
      src,
      srcSet: undefined,
      sizes: undefined
    };
  }

  const {
    widths,
    kind
  } = getWidths(width, layout, sizes);
  const last = widths.length - 1;
  return {
    sizes: !sizes && kind === 'w' ? '100vw' : sizes,
    srcSet: widths.map((w, i) => `${loader({
      src,
      quality,
      width: w
    })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
    // It's intended to keep `src` the last attribute because React updates
    // attributes in order. If we keep `src` the first one, Safari will
    // immediately start to fetch `src`, before `sizes` and `srcSet` are even
    // updated by React. That causes multiple unnecessary requests if `srcSet`
    // and `sizes` are defined.
    // This bug cannot be reproduced in Chrome or Firefox.
    src: loader({
      src,
      quality,
      width: widths[last]
    })
  };
}

function getInt(x) {
  if (typeof x === 'number') {
    return x;
  }

  if (typeof x === 'string') {
    return parseInt(x, 10);
  }

  return undefined;
}

function defaultImageLoader(loaderProps) {
  const load = loaders.get(configLoader);

  if (load) {
    return load((0, _extends2.default)({
      root: configPath
    }, loaderProps));
  }

  throw new Error(`Unknown "loader" found in "next.config.js". Expected: ${_imageConfig.VALID_LOADERS.join(', ')}. Received: ${configLoader}`);
}

function Image(_ref) {
  let {
    src,
    sizes,
    unoptimized = false,
    priority = false,
    loading,
    className,
    quality,
    width,
    height,
    objectFit,
    objectPosition,
    loader = defaultImageLoader
  } = _ref,
      all = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["src", "sizes", "unoptimized", "priority", "loading", "className", "quality", "width", "height", "objectFit", "objectPosition", "loader"]);
  let rest = all;
  let layout = sizes ? 'responsive' : 'intrinsic';
  let unsized = false;

  if ('unsized' in rest) {
    unsized = Boolean(rest.unsized); // Remove property so it's not spread into image:

    delete rest['unsized'];
  } else if ('layout' in rest) {
    // Override default layout if the user specified one:
    if (rest.layout) layout = rest.layout; // Remove property so it's not spread into image:

    delete rest['layout'];
  }

  if (true) {
    if (!src) {
      throw new Error(`Image is missing required "src" property. Make sure you pass "src" in props to the \`next/image\` component. Received: ${JSON.stringify({
        width,
        height,
        quality
      })}`);
    }

    if (!VALID_LAYOUT_VALUES.includes(layout)) {
      throw new Error(`Image with src "${src}" has invalid "layout" property. Provided "${layout}" should be one of ${VALID_LAYOUT_VALUES.map(String).join(',')}.`);
    }

    if (!VALID_LOADING_VALUES.includes(loading)) {
      throw new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`);
    }

    if (priority && loading === 'lazy') {
      throw new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`);
    }

    if (unsized) {
      throw new Error(`Image with src "${src}" has deprecated "unsized" property, which was removed in favor of the "layout='fill'" property`);
    }
  }

  let isLazy = !priority && (loading === 'lazy' || typeof loading === 'undefined');

  if (src && src.startsWith('data:')) {
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
    unoptimized = true;
    isLazy = false;
  }

  const [setRef, isIntersected] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px',
    disabled: !isLazy
  });
  const isVisible = !isLazy || isIntersected;
  const widthInt = getInt(width);
  const heightInt = getInt(height);
  const qualityInt = getInt(quality);
  let wrapperStyle;
  let sizerStyle;
  let sizerSvg;
  let imgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    boxSizing: 'border-box',
    padding: 0,
    border: 'none',
    margin: 'auto',
    display: 'block',
    width: 0,
    height: 0,
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    objectFit,
    objectPosition
  };

  if (typeof widthInt !== 'undefined' && typeof heightInt !== 'undefined' && layout !== 'fill') {
    // <Image src="i.png" width="100" height="100" />
    const quotient = heightInt / widthInt;
    const paddingTop = isNaN(quotient) ? '100%' : `${quotient * 100}%`;

    if (layout === 'responsive') {
      // <Image src="i.png" width="100" height="100" layout="responsive" />
      wrapperStyle = {
        display: 'block',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        display: 'block',
        boxSizing: 'border-box',
        paddingTop
      };
    } else if (layout === 'intrinsic') {
      // <Image src="i.png" width="100" height="100" layout="intrinsic" />
      wrapperStyle = {
        display: 'inline-block',
        maxWidth: '100%',
        overflow: 'hidden',
        position: 'relative',
        boxSizing: 'border-box',
        margin: 0
      };
      sizerStyle = {
        boxSizing: 'border-box',
        display: 'block',
        maxWidth: '100%'
      };
      sizerSvg = `<svg width="${widthInt}" height="${heightInt}" xmlns="http://www.w3.org/2000/svg" version="1.1"/>`;
    } else if (layout === 'fixed') {
      // <Image src="i.png" width="100" height="100" layout="fixed" />
      wrapperStyle = {
        overflow: 'hidden',
        boxSizing: 'border-box',
        display: 'inline-block',
        position: 'relative',
        width: widthInt,
        height: heightInt
      };
    }
  } else if (typeof widthInt === 'undefined' && typeof heightInt === 'undefined' && layout === 'fill') {
    // <Image src="i.png" layout="fill" />
    wrapperStyle = {
      display: 'block',
      overflow: 'hidden',
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      boxSizing: 'border-box',
      margin: 0
    };
  } else {
    // <Image src="i.png" />
    if (true) {
      throw new Error(`Image with src "${src}" must use "width" and "height" properties or "layout='fill'" property.`);
    }
  }

  let imgAttributes = {
    src: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
    srcSet: undefined,
    sizes: undefined
  };

  if (isVisible) {
    imgAttributes = generateImgAttrs({
      src,
      unoptimized,
      layout,
      width: widthInt,
      quality: qualityInt,
      sizes,
      loader
    });
  }

  if (unsized) {
    wrapperStyle = undefined;
    sizerStyle = undefined;
    imgStyle = undefined;
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    style: wrapperStyle
  }, sizerStyle ? /*#__PURE__*/_react.default.createElement("div", {
    style: sizerStyle
  }, sizerSvg ? /*#__PURE__*/_react.default.createElement("img", {
    style: {
      maxWidth: '100%',
      display: 'block',
      margin: 0,
      border: 'none',
      padding: 0
    },
    alt: "",
    "aria-hidden": true,
    role: "presentation",
    src: `data:image/svg+xml;base64,${(0, _toBase.toBase64)(sizerSvg)}`
  }) : null) : null, !isVisible && /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, generateImgAttrs({
    src,
    unoptimized,
    layout,
    width: widthInt,
    quality: qualityInt,
    sizes,
    loader
  }), {
    src: src,
    decoding: "async",
    sizes: sizes,
    style: imgStyle,
    className: className
  }))), /*#__PURE__*/_react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
    decoding: "async",
    className: className,
    ref: setRef,
    style: imgStyle
  })), priority ?
  /*#__PURE__*/
  // Note how we omit the `href` attribute, as it would only be relevant
  // for browsers that do not support `imagesrcset`, and in those cases
  // it would likely cause the incorrect image to be preloaded.
  //
  // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
  _react.default.createElement(_head.default, null, /*#__PURE__*/_react.default.createElement("link", {
    key: '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
    rel: "preload",
    as: "image",
    href: imgAttributes.srcSet ? undefined : imgAttributes.src // @ts-ignore: imagesrcset is not yet in the link element type
    ,
    imagesrcset: imgAttributes.srcSet // @ts-ignore: imagesizes is not yet in the link element type
    ,
    imagesizes: imgAttributes.sizes
  })) : null);
} //BUILT IN LOADERS


function normalizeSrc(src) {
  return src[0] === '/' ? src.slice(1) : src;
}

function imgixLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://static.imgix.net/daisy.png?format=auto&fit=max&w=300
  const params = ['auto=format', 'fit=max', 'w=' + width];
  let paramsString = '';

  if (quality) {
    params.push('q=' + quality);
  }

  if (params.length) {
    paramsString = '?' + params.join('&');
  }

  return `${root}${normalizeSrc(src)}${paramsString}`;
}

function akamaiLoader({
  root,
  src,
  width
}) {
  return `${root}${normalizeSrc(src)}?imwidth=${width}`;
}

function cloudinaryLoader({
  root,
  src,
  width,
  quality
}) {
  // Demo: https://res.cloudinary.com/demo/image/upload/w_300,c_limit,q_auto/turtles.jpg
  const params = ['f_auto', 'c_limit', 'w_' + width, 'q_' + (quality || 'auto')];
  let paramsString = params.join(',') + '/';
  return `${root}${paramsString}${normalizeSrc(src)}`;
}

function defaultLoader({
  root,
  src,
  width,
  quality
}) {
  if (true) {
    const missingValues = []; // these should always be provided but make sure they are

    if (!src) missingValues.push('src');
    if (!width) missingValues.push('width');

    if (missingValues.length > 0) {
      throw new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
        src,
        width,
        quality
      })}`);
    }

    if (src.startsWith('//')) {
      throw new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`);
    }

    if (!src.startsWith('/') && configDomains) {
      let parsedSrc;

      try {
        parsedSrc = new URL(src);
      } catch (err) {
        console.error(err);
        throw new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`);
      }

      if (!configDomains.includes(parsedSrc.hostname)) {
        throw new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`);
      }
    }
  }

  return `${root}?url=${encodeURIComponent(src)}&w=${width}&q=${quality || 75}`;
}

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Grid */ "@material-ui/core/Grid");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _essentials_carousal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../essentials/carousal */ "./essentials/carousal.js");
/* harmony import */ var _essentials_Nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../essentials/Nav */ "./essentials/Nav.js");
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/context */ "./context/context.js");
/* harmony import */ var _src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/MainStyles */ "./src/styles/MainStyles.js");
/* harmony import */ var _main_advisory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../main/advisory */ "./main/advisory.js");

var _jsxFileName = "D:\\Experiment\\Next\\pages\\index.js";








const Index = ({
  dataSet,
  excelData
}) => {
  const {
    keySet
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_context__WEBPACK_IMPORTED_MODULE_5__.DataContext);
  const classes = (0,_src_styles_MainStyles__WEBPACK_IMPORTED_MODULE_6__.default)();
  const {
    0: open,
    1: setOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: open_tank,
    1: setOpenTank
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: rain_analysis,
    1: setRain_analysis
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: weatherLocation,
    1: setWeatherLocation
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: drought,
    1: setDrought
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const {
    0: weatherForecast,
    1: setWeatherForecast
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  console.log(excelData);

  const handleClickOpen = e => {
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

  const handleClose = e => {
    setOpenTank(false);
    setOpen(false);
    setRain_analysis(false);
    setWeatherLocation(false);
    setWeatherForecast(false);
    setDrought(false);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_essentials_carousal__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: classes.customGrid,
        style: {
          textAlign: "center",
          marginTop: "2rem"
        },
        direction: "row",
        justify: "space-evenly",
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default()), {
        className: classes.customGrid,
        style: {
          textAlign: "center",
          marginTop: "2rem"
        },
        direction: "row",
        justify: "space-evenly",
        container: true,
        spacing: 0,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_main_advisory__WEBPACK_IMPORTED_MODULE_7__.Advisory, {
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
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 5
  }, undefined);
};

Index.getInitialProps = async ctx => {
  const res = await fetch("https://us-central1-express-439e0.cloudfunctions.net/app/getWeather");
  const json = await res.json();
  return {
    dataSet: json.agromet
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/styles/MainStyles.js":
/*!**********************************!*\
  !*** ./src/styles/MainStyles.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%"
    }
  },
  customGrid: {
    marginBottom: "2rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center"
    }
  },
  linkText: {
    textDecoration: "None",
    color: "black",
    marginBottom: "1rem",
    display: "inline"
  },
  paperSmall: {
    [theme.breakpoints.down("sm")]: {}
  },
  gridResponse: {
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  },
  img: {
    opacity: 1,
    transition: "all .2s",
    "&:hover": {
      transform: "scale(0.8)",
      cursor: "pointer"
    }
  },
  typography: {
    padding: theme.spacing(2),
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column"
  },
  typeLink: {
    marginBottom: "2rem",
    color: "orangered"
  },
  dialogContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./src/styles/carousal.js":
/*!********************************!*\
  !*** ./src/styles/carousal.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.makeStyles)(theme => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1
  },
  header: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default
  }
}));
/* harmony default export */ __webpack_exports__["default"] = (useStyles);

/***/ }),

/***/ "./node_modules/next/image.js":
/*!************************************!*\
  !*** ./node_modules/next/image.js ***!
  \************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/image */ "./node_modules/next/dist/client/image.js")


/***/ }),

/***/ "@material-ui/core":
/*!************************************!*\
  !*** external "@material-ui/core" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core");;

/***/ }),

/***/ "@material-ui/core/AppBar":
/*!*******************************************!*\
  !*** external "@material-ui/core/AppBar" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/AppBar");;

/***/ }),

/***/ "@material-ui/core/Button":
/*!*******************************************!*\
  !*** external "@material-ui/core/Button" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Button");;

/***/ }),

/***/ "@material-ui/core/Collapse":
/*!*********************************************!*\
  !*** external "@material-ui/core/Collapse" ***!
  \*********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Collapse");;

/***/ }),

/***/ "@material-ui/core/DialogTitle":
/*!************************************************!*\
  !*** external "@material-ui/core/DialogTitle" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/DialogTitle");;

/***/ }),

/***/ "@material-ui/core/FormControl":
/*!************************************************!*\
  !*** external "@material-ui/core/FormControl" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/FormControl");;

/***/ }),

/***/ "@material-ui/core/Grid":
/*!*****************************************!*\
  !*** external "@material-ui/core/Grid" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Grid");;

/***/ }),

/***/ "@material-ui/core/IconButton":
/*!***********************************************!*\
  !*** external "@material-ui/core/IconButton" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/IconButton");;

/***/ }),

/***/ "@material-ui/core/Link":
/*!*****************************************!*\
  !*** external "@material-ui/core/Link" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Link");;

/***/ }),

/***/ "@material-ui/core/MobileStepper":
/*!**************************************************!*\
  !*** external "@material-ui/core/MobileStepper" ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/MobileStepper");;

/***/ }),

/***/ "@material-ui/core/Paper":
/*!******************************************!*\
  !*** external "@material-ui/core/Paper" ***!
  \******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Paper");;

/***/ }),

/***/ "@material-ui/core/TextField":
/*!**********************************************!*\
  !*** external "@material-ui/core/TextField" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/TextField");;

/***/ }),

/***/ "@material-ui/core/Toolbar":
/*!********************************************!*\
  !*** external "@material-ui/core/Toolbar" ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Toolbar");;

/***/ }),

/***/ "@material-ui/core/Typography":
/*!***********************************************!*\
  !*** external "@material-ui/core/Typography" ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/Typography");;

/***/ }),

/***/ "@material-ui/core/styles":
/*!*******************************************!*\
  !*** external "@material-ui/core/styles" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/styles");;

/***/ }),

/***/ "@material-ui/core/useScrollTrigger":
/*!*****************************************************!*\
  !*** external "@material-ui/core/useScrollTrigger" ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/useScrollTrigger");;

/***/ }),

/***/ "@material-ui/icons/Close":
/*!*******************************************!*\
  !*** external "@material-ui/icons/Close" ***!
  \*******************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/Close");;

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowLeft":
/*!*******************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowLeft" ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/KeyboardArrowLeft");;

/***/ }),

/***/ "@material-ui/icons/KeyboardArrowRight":
/*!********************************************************!*\
  !*** external "@material-ui/icons/KeyboardArrowRight" ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/icons/KeyboardArrowRight");;

/***/ }),

/***/ "@material-ui/lab/Alert":
/*!*****************************************!*\
  !*** external "@material-ui/lab/Alert" ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/lab/Alert");;

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "../next-server/lib/head":
/*!****************************************************!*\
  !*** external "next/dist/next-server/lib/head.js" ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ "../next-server/lib/to-base-64":
/*!**********************************************************!*\
  !*** external "next/dist/next-server/lib/to-base-64.js" ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ "../next-server/server/image-config":
/*!***************************************************************!*\
  !*** external "next/dist/next-server/server/image-config.js" ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-swipeable-views":
/*!****************************************!*\
  !*** external "react-swipeable-views" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-swipeable-views");;

/***/ }),

/***/ "react-swipeable-views-utils":
/*!**********************************************!*\
  !*** external "react-swipeable-views-utils" ***!
  \**********************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-swipeable-views-utils");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovL25leHQvLi9hcGkvYXV0aC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vY29udGV4dC9jb250ZXh0LmpzIiwid2VicGFjazovL25leHQvLi9lc3NlbnRpYWxzL05hdi5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vZXNzZW50aWFscy9jYXJvdXNhbC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vbWFpbi9hZHZpc29yeS5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4uL2NsaWVudC9pbWFnZS50c3giLCJ3ZWJwYWNrOi8vbmV4dC8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovL25leHQvLi4vY2xpZW50L3VzZS1pbnRlcnNlY3Rpb24udHN4Iiwid2VicGFjazovL25leHQvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vc3JjL3N0eWxlcy9NYWluU3R5bGVzLmpzIiwid2VicGFjazovL25leHQvLi9zcmMvc3R5bGVzL2Nhcm91c2FsLmpzIiwid2VicGFjazovL25leHQvLi9ub2RlX21vZHVsZXMvbmV4dC9pbWFnZS5qcyIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZVwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9HcmlkXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2JpbGVTdGVwcGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHlcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3VzZVNjcm9sbFRyaWdnZXJcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0XCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdG8tYmFzZS02NC5qc1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJyZWFjdC1zd2lwZWFibGUtdmlld3NcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzLXV0aWxzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVSTCIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJrZXlTZXQiLCJTdGVwcyIsImlzU2lnbmVkSW4iLCJpc0Vycm9yIiwib3BlbiIsImNvbXBvbmVudERpZE1vdW50Iiwid2FsbFNldCIsImxhYmVsIiwicGF0aCIsImtleURhdGEiLCJhZHZpc29yeSIsIndhdGVyVGFuayIsInJhaW5BbmFseXNlIiwiZHJvdWdodCIsIndlYXRoZXJBcm91bmQiLCJ3ZWF0aGVyRm9yZWNhc3QiLCJzZXRTdGF0ZSIsInJlbmRlciIsImhhbmRsZUxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJhcGkiLCJkYXRhIiwic2V0T3BlbiIsImVycm9yIiwiZSIsImhhbmRsZUVycm9yIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiaGVpZ2h0IiwidG9vbGJhck1hcmdpbiIsInBhZGRpbmciLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibWluV2lkdGgiLCJtZW51IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsdWUiLCJjb2xvciIsImZsZXhHcm93IiwiYnRuIiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwibWVudUl0ZW0iLCJvcGFjaXR5IiwibG9nb0NvbnRhaW5lciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW4iLCJzdHlsZXMiLCJyb290IiwiY2xvc2VCdXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZ3JleSIsIkRpYWxvZ1RpdGxlIiwid2l0aFN0eWxlcyIsImNsYXNzZXMiLCJvbkNsb3NlIiwib3RoZXIiLCJFbGV2YXRpb25TY3JvbGwiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJlbGV2YXRpb24iLCJOYXYiLCJ1c2VDb250ZXh0Iiwic2V0VXNlck5hbWUiLCJ1c2VTdGF0ZSIsInNldFBhc3NXb3JkIiwiaGFuZGxlQ2hhbmdlIiwidHlwZSIsInZhbHVlIiwiTGluayIsImRpYWxvZ0NvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIkF1dG9QbGF5U3dpcGVhYmxlVmlld3MiLCJhdXRvUGxheSIsIlN3aXBlYWJsZVZpZXdzIiwiQ2Fyb3VzYWwiLCJ1c2VUaGVtZSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVN0ZXBDaGFuZ2UiLCJzdGVwIiwiZGlyZWN0aW9uIiwibWFwIiwiaW5kZXgiLCJNYXRoIiwiYWJzIiwiQWR2aXNvcnkiLCJhbHQiLCJjbG9zZSIsImNsaWNrIiwic3ViSGVhZGluZ3MiLCJsaW5rTmFtZXMiLCJsaW5rcyIsImN1cnNvciIsImdyaWRJdGVtIiwiaW1nIiwiYWxpZ25TZWxmIiwiZWwiLCJtYXJnaW5Cb3R0b20iLCJnbG9iYWwiLCJWQUxJRF9MT0FESU5HX1ZBTFVFUyIsImxvYWRlcnMiLCJWQUxJRF9MQVlPVVRfVkFMVUVTIiwiZGV2aWNlU2l6ZXMiLCJpbWFnZVNpemVzIiwibG9hZGVyIiwiZG9tYWlucyIsInByb2Nlc3MiLCJpbWFnZUNvbmZpZ0RlZmF1bHQiLCJhbGxTaXplcyIsImNvbmZpZ0RldmljZVNpemVzIiwiYSIsInNpemVzIiwibGF5b3V0IiwicGVyY2VudFNpemVzIiwibSIsInBhcnNlSW50Iiwic21hbGxlc3RSYXRpbyIsIndpZHRocyIsInMiLCJraW5kIiwid2lkdGgiLCJ3IiwicCIsInNyY1NldCIsImdldFdpZHRocyIsImxhc3QiLCJpIiwic3JjIiwibG9hZCIsIlZBTElEX0xPQURFUlMiLCJjb25maWdMb2FkZXIiLCJ1bm9wdGltaXplZCIsInByaW9yaXR5IiwiYWxsIiwicmVzdCIsInVuc2l6ZWQiLCJCb29sZWFuIiwiSlNPTiIsImxvYWRpbmciLCJpc0xhenkiLCJyb290TWFyZ2luIiwiZGlzYWJsZWQiLCJpc1Zpc2libGUiLCJ3aWR0aEludCIsImdldEludCIsImhlaWdodEludCIsInF1YWxpdHlJbnQiLCJpbWdTdHlsZSIsImxlZnQiLCJib3R0b20iLCJib3hTaXppbmciLCJib3JkZXIiLCJkaXNwbGF5IiwibWF4V2lkdGgiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJxdW90aWVudCIsInBhZGRpbmdUb3AiLCJpc05hTiIsIndyYXBwZXJTdHlsZSIsIm92ZXJmbG93Iiwic2l6ZXJTdHlsZSIsInNpemVyU3ZnIiwiaW1nQXR0cmlidXRlcyIsImdlbmVyYXRlSW1nQXR0cnMiLCJxdWFsaXR5IiwicGFyYW1zIiwicGFyYW1zU3RyaW5nIiwibm9ybWFsaXplU3JjIiwibWlzc2luZ1ZhbHVlcyIsInBhcnNlZFNyYyIsImNvbmZpZ0RvbWFpbnMiLCJob3N0bmFtZSIsImVuY29kZVVSSUNvbXBvbmVudCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJzZWxmIiwic3RhcnQiLCJEYXRlIiwic2V0VGltZW91dCIsImNiIiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJzZXRSZWYiLCJvYnNlcnZlIiwic2V0VmlzaWJsZSIsImlkbGVDYWxsYmFjayIsImNyZWF0ZU9ic2VydmVyIiwiZWxlbWVudHMiLCJvYnNlcnZlciIsIm9ic2VydmVycyIsImlkIiwib3B0aW9ucyIsImluc3RhbmNlIiwiZW50cmllcyIsImVudHJ5IiwiY2FsbGJhY2siLCJJbmRleCIsImRhdGFTZXQiLCJleGNlbERhdGEiLCJvcGVuX3RhbmsiLCJzZXRPcGVuVGFuayIsInJhaW5fYW5hbHlzaXMiLCJzZXRSYWluX2FuYWx5c2lzIiwid2VhdGhlckxvY2F0aW9uIiwic2V0V2VhdGhlckxvY2F0aW9uIiwic2V0RHJvdWdodCIsInNldFdlYXRoZXJGb3JlY2FzdCIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsb3NlIiwiY3VzdG9tR3JpZCIsInRleHRBbGlnbiIsIm1hcmdpblRvcCIsImhlYWRpbmciLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJmZXRjaCIsImpzb24iLCJhZ3JvbWV0IiwicGFwZXIiLCJ0ZXh0Iiwic2Vjb25kYXJ5IiwiYnJlYWtwb2ludHMiLCJkb3duIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImxpbmtUZXh0IiwidGV4dERlY29yYXRpb24iLCJwYXBlclNtYWxsIiwiZ3JpZFJlc3BvbnNlIiwidHJhbnNpdGlvbiIsInRyYW5zZm9ybSIsInR5cG9ncmFwaHkiLCJ0eXBlTGluayIsImhlYWRlciIsInBhZGRpbmdMZWZ0IiwiYmFja2dyb3VuZCIsImRlZmF1bHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsMEI7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUVBLCtEQUFlQSxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVBQUU7QUFEaUIsQ0FBYixDQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBRU8sTUFBTUMsV0FBVyxnQkFBR0Msb0RBQWEsRUFBakM7QUFFQSxNQUFNQyxPQUFOLFNBQXNCQyw0Q0FBdEIsQ0FBZ0M7QUFDckNDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsWUFBTSxFQUFFLEVBREc7QUFFWEMsV0FBSyxFQUFFLEVBRkk7QUFHWEMsZ0JBQVUsRUFBRSxLQUhEO0FBSVhDLGFBQU8sRUFBRSxLQUpFO0FBS1hDLFVBQUksRUFBRTtBQUxLLEtBQWI7QUFPRDs7QUFFREMsbUJBQWlCLEdBQUc7QUFDbEIsVUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRUMsV0FBSyxFQUFFLE9BRFQ7QUFFRUMsVUFBSSxFQUFFO0FBRlIsS0FEYyxFQUtkO0FBQ0VELFdBQUssRUFBRSxPQURUO0FBRUVDLFVB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TUFBSSxFQUFFO0FBQ0pxSCxZQUFRLEVBQUUsTUFETjtBQUVKakksWUFBUSxFQUFFO0FBRk4sR0FEaUM7QUFLdkN1TixRQUFNLEVBQUU7QUFDTkMsZUFBVyxFQUFFMU8sS0FBSyxDQUFDcUIsT0FBTixDQUFjLENBQWQsQ0FEUDtBQUVOUixtQkFBZSxFQUFFYixLQUFLLENBQUNjLE9BQU4sQ0FBYzZOLFVBQWQsQ0FBeUJDO0FBRnBDO0FBTCtCLENBQVosQ0FBRCxDQUE1QjtBQVdBLCtEQUFlOU8sU0FBZixFOzs7Ozs7Ozs7O0FDYkEsMkdBQStDOzs7Ozs7Ozs7Ozs7QUNBL0MsK0M7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsd0Q7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsMkQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkQ7Ozs7Ozs7Ozs7O0FDQUEscUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsZ0U7Ozs7Ozs7Ozs7O0FDQUEsc0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsbUU7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEscUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQ7Ozs7Ozs7Ozs7O0FDQUEseUQ7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7IiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJmdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZTsiLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL3VzLWNlbnRyYWwxLWV4cHJlc3MtNDM5ZTAuY2xvdWRmdW5jdGlvbnMubmV0L2FwcFwiLFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpL2F1dGhcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGtleVNldDoge30sXHJcbiAgICAgIFN0ZXBzOiBbXSxcclxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXHJcbiAgICAgIGlzRXJyb3I6IGZhbHNlLFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHdhbGxTZXQgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfMVwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzEucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfMlwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzIucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfM1wiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzMucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3Qga2V5RGF0YSA9IHtcclxuICAgICAgYWR2aXNvcnk6IFwiL2ltZy9hZHZpc29yeS5wbmdcIixcclxuICAgICAgd2F0ZXJUYW5rOiBcIi9pbWcvdHdhdGVyLnBuZ1wiLFxyXG4gICAgICByYWluQW5hbHlzZTogXCIvaW1nL2FuYWx5c2UucG5nXCIsXHJcbiAgICAgIGRyb3VnaHQ6IFwiL2ltZy9kcm91Z2h0LnBuZ1wiLFxyXG4gICAgICB3ZWF0aGVyQXJvdW5kOiBcIi9pbWcvd2xvY2F0aW9uLnBuZ1wiLFxyXG4gICAgICB3ZWF0aGVyRm9yZWNhc3Q6IFwiL2ltZy9kcm9wcC5wbmdcIixcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5U2V0OiBrZXlEYXRhIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFN0ZXBzOiB3YWxsU2V0IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5wb3N0KFwiL3NpZ25pblwiLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgaXNTaWduZWRJbjogdHJ1ZSB9KTtcclxuICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXJyb3I6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldE9wZW4gPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Vycm9yOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgIHZhbHVlPXt7IC4uLnRoaXMuc3RhdGUsIGhhbmRsZUxvZ2luLCBoYW5kbGVFcnJvciwgc2V0T3BlbiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvZ286IHtcclxuICAgIGhlaWdodDogXCI0LjVlbVwiLFxyXG4gIH0sXHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIHRhYkNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiUmFsZXdheVwiLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICBtaW5XaWR0aDogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjI1cHhcIixcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmx1ZSxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGJ0bjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIG1lbnVJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlJhbGV3YXlcIixcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgb3BhY2l0eTogMC43LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjI1cHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiLFxyXG4gIH0sXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBFbGV2YXRpb25TY3JvbGwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMCxcclxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgaGFuZGxlTG9naW4sIGlzRXJyb3IsIGhhbmRsZUVycm9yLCBpc1NpZ25lZEluLCBvcGVuLCBzZXRPcGVuIH0gPVxyXG4gICAgdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzV29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50eXBlID09IFwidGV4dFwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBhc3NXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBZ3JvbWV0IEdJU1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzU2lnbmVkSW4gPyBcIkFkbWluXCIgOiBcIkxvZ2luXCJ9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8L0VsZXZhdGlvblNjcm9sbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRtaW5cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWFsb2dDb250ZW50fSBkaXZpZGVycz5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBrZXk9e1wibmFtZVwifVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVMb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7aXNFcnJvciA/IChcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17aXNFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VzcyBEZW5pZWQgIVxyXG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBNb2JpbGVTdGVwcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Nb2JpbGVTdGVwcGVyXCI7XHJcbmltcG9ydCBCdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0XCI7XHJcbmltcG9ydCBTd2lwZWFibGVWaWV3cyBmcm9tIFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzXCI7XHJcbmltcG9ydCB7IGF1dG9QbGF5IH0gZnJvbSBcInJlYWN0LXN3aXBlYWJsZS12aWV3cy11dGlsc1wiO1xyXG5pbXBvcnQgdXNlU3R5bGVzIGZyb20gXCIuLi9zcmMvc3R5bGVzL2Nhcm91c2FsXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcblxyXG5jb25zdCBBdXRvUGxheVN3aXBlYWJsZVZpZXdzID0gYXV0b1BsYXkoU3dpcGVhYmxlVmlld3MpO1xyXG5cclxuY29uc3QgQ2Fyb3VzYWwgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBTdGVwcyB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSB1c2VTdGF0ZSgwKTtcclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN0ZXBDaGFuZ2UgPSAoc3RlcCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcChzdGVwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPEF1dG9QbGF5U3dpcGVhYmxlVmlld3NcclxuICAgICAgICBheGlzPXt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyBcIngtcmV2ZXJzZVwiIDogXCJ4XCJ9XHJcbiAgICAgICAgaW5kZXg9e2FjdGl2ZVN0ZXB9XHJcbiAgICAgICAgb25DaGFuZ2VJbmRleD17aGFuZGxlU3RlcENoYW5nZX1cclxuICAgICAgICBlbmFibGVNb3VzZUV2ZW50c1xyXG4gICAgICA+XHJcbiAgICAgICAge1N0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtzdGVwLmxhYmVsfT5cclxuICAgICAgICAgICAge01hdGguYWJzKGFjdGl2ZVN0ZXAgLSBpbmRleCkgPD0gMiA/IChcclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtzdGVwLnBhdGh9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3N0ZXAubGFiZWx9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MTAwMH1cclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQXV0b1BsYXlTd2lwZWFibGVWaWV3cz5cclxuICAgICAgPE1vYmlsZVN0ZXBwZXJcclxuICAgICAgICB2YXJpYW50PVwiZG90c1wiXHJcbiAgICAgICAgc3RlcHM9ezN9XHJcbiAgICAgICAgcG9zaXRpb249XCJzdGF0aWNcIlxyXG4gICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XHJcbiAgICAgICAgbmV4dEJ1dHRvbj17XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e2hhbmRsZU5leHR9IGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAyfT5cclxuICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IChcclxuICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0xlZnQgLz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgICAgYmFja0J1dHRvbj17XHJcbiAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIG9uQ2xpY2s9e2hhbmRsZUJhY2t9IGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfT5cclxuICAgICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IChcclxuICAgICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd1JpZ2h0IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPEtleWJvYXJkQXJyb3dMZWZ0IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2Fyb3VzYWw7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMsIHdpdGhTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5XCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IEdyaWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0dyaWRcIjtcclxuaW1wb3J0IHVzZVN0eWxlcyBmcm9tIFwiLi4vc3JjL3N0eWxlcy9NYWluU3R5bGVzXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuaW1wb3J0IHsgRGlhbG9nLCBEaWFsb2dDb250ZW50IH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlXCI7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiO1xyXG5pbXBvcnQgTXVpRGlhbG9nVGl0bGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luOiAwLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIHBhZGRpbmc6IFwiMnJlbSA0cmVtXCIsXHJcbiAgfSxcclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgQWR2aXNvcnkgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGtleVNldCB9ID0gdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcbiAgY29uc3QgeyB0aXRsZSwgYWx0LCBvcGVuLCBjbG9zZSwgY2xpY2ssIHN1YkhlYWRpbmdzLCBsaW5rTmFtZXMsIGxpbmtzIH0gPVxyXG4gICAgcHJvcHM7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPExpbmsgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fSBrZXk9e2FsdH0gYXM9e1wiXCJ9PlxyXG4gICAgICAgIDxHcmlkIG9uQ2xpY2s9e2NsaWNrfSBpdGVtIHhzPXsxMn0ga2V5PXt0aXRsZX0+XHJcbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmdyaWRJdGVtfT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIHNyYz17YC9pbWcvJHthbHR9LnBuZ2B9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6IFwicG9pbnRlclwiIH19XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1nfVxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgICAgICAgYWx0PXthbHR9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17Y2xpY2t9XHJcbiAgICAgICAgICAgICAgICBhbGlnbj1cImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgIDwvTGluaz5cclxuICAgICAgPERpYWxvZyBvbkNsb3NlPXtjbG9zZX0gYXJpYS1sYWJlbGxlZGJ5PVwic2ltcGxlLWRpYWxvZy10aXRsZVwiIG9wZW49e29wZW59PlxyXG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImN1c3RvbWl6ZWQtZGlhbG9nLXRpdGxlXCIgb25DbG9zZT17Y2xvc2V9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvRGlhbG9nVGl0bGU+XHJcbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgY2xhc3NOYW1lPXtjbGFzc2VzLmRpYWxvZ0NvbnRlbnR9IGRpdmlkZXJzPlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDZcIiBndXR0ZXJCb3R0b20+XHJcbiAgICAgICAgICAgIHtzdWJIZWFkaW5nc31cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgYWxpZ25TZWxmOiBcImNlbnRlclwiLCBwYWRkaW5nOiBcIjFyZW1cIiB9fT5cclxuICAgICAgICAgICAge2xpbmtOYW1lcy5tYXAoKGVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj17bGlua3NbaW5kZXhdfT5cclxuICAgICAgICAgICAgICAgICAge2VsfVxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2hlYWQnXG5pbXBvcnQgeyB0b0Jhc2U2NCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0J1xuaW1wb3J0IHtcbiAgSW1hZ2VDb25maWcsXG4gIGltYWdlQ29uZmlnRGVmYXVsdCxcbiAgTG9hZGVyVmFsdWUsXG4gIFZBTElEX0xPQURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9pbWFnZS1jb25maWcnXG5pbXBvcnQgeyB1c2VJbnRlcnNlY3Rpb24gfSBmcm9tICcuL3VzZS1pbnRlcnNlY3Rpb24nXG5cbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICA7KGdsb2JhbCBhcyBhbnkpLl9fTkVYVF9JTUFHRV9JTVBPUlRFRCA9IHRydWVcbn1cblxuY29uc3QgVkFMSURfTE9BRElOR19WQUxVRVMgPSBbJ2xhenknLCAnZWFnZXInLCB1bmRlZmluZWRdIGFzIGNvbnN0XG50eXBlIExvYWRpbmdWYWx1ZSA9IHR5cGVvZiBWQUxJRF9MT0FESU5HX1ZBTFVFU1tudW1iZXJdXG5cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVyID0gKHJlc29sdmVyUHJvcHM6IEltYWdlTG9hZGVyUHJvcHMpID0+IHN0cmluZ1xuXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlclByb3BzID0ge1xuICBzcmM6IHN0cmluZ1xuICB3aWR0aDogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbn1cblxudHlwZSBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyA9IEltYWdlTG9hZGVyUHJvcHMgJiB7IHJvb3Q6IHN0cmluZyB9XG5cbmNvbnN0IGxvYWRlcnMgPSBuZXcgTWFwPFxuICBMb2FkZXJWYWx1ZSxcbiAgKHByb3BzOiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcykgPT4gc3RyaW5nXG4+KFtcbiAgWydpbWdpeCcsIGltZ2l4TG9hZGVyXSxcbiAgWydjbG91ZGluYXJ5JywgY2xvdWRpbmFyeUxvYWRlcl0sXG4gIFsnYWthbWFpJywgYWthbWFpTG9hZGVyXSxcbiAgWydkZWZhdWx0JywgZGVmYXVsdExvYWRlcl0sXG5dKVxuXG5jb25zdCBWQUxJRF9MQVlPVVRfVkFMVUVTID0gW1xuICAnZmlsbCcsXG4gICdmaXhlZCcsXG4gICdpbnRyaW5zaWMnLFxuICAncmVzcG9uc2l2ZScsXG4gIHVuZGVmaW5lZCxcbl0gYXMgY29uc3RcbnR5cGUgTGF5b3V0VmFsdWUgPSB0eXBlb2YgVkFMSURfTEFZT1VUX1ZBTFVFU1tudW1iZXJdXG5cbnR5cGUgSW1nRWxlbWVudFN0eWxlID0gTm9uTnVsbGFibGU8SlNYLkludHJpbnNpY0VsZW1lbnRzWydpbWcnXVsnc3R5bGUnXT5cblxuZXhwb3J0IHR5cGUgSW1hZ2VQcm9wcyA9IE9taXQ8XG4gIEpTWC5JbnRyaW5zaWNFbGVtZW50c1snaW1nJ10sXG4gICdzcmMnIHwgJ3NyY1NldCcgfCAncmVmJyB8ICd3aWR0aCcgfCAnaGVpZ2h0JyB8ICdsb2FkaW5nJyB8ICdzdHlsZSdcbj4gJiB7XG4gIHNyYzogc3RyaW5nXG4gIGxvYWRlcj86IEltYWdlTG9hZGVyXG4gIHF1YWxpdHk/OiBudW1iZXIgfCBzdHJpbmdcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvYWRpbmc/OiBMb2FkaW5nVmFsdWVcbiAgdW5vcHRpbWl6ZWQ/OiBib29sZWFuXG4gIG9iamVjdEZpdD86IEltZ0VsZW1lbnRTdHlsZVsnb2JqZWN0Rml0J11cbiAgb2JqZWN0UG9zaXRpb24/OiBJbWdFbGVtZW50U3R5bGVbJ29iamVjdFBvc2l0aW9uJ11cbn0gJiAoXG4gICAgfCB7XG4gICAgICAgIHdpZHRoPzogbmV2ZXJcbiAgICAgICAgaGVpZ2h0PzogbmV2ZXJcbiAgICAgICAgLyoqIEBkZXByZWNhdGVkIFVzZSBgbGF5b3V0PVwiZmlsbFwiYCBpbnN0ZWFkICovXG4gICAgICAgIHVuc2l6ZWQ6IHRydWVcbiAgICAgIH1cbiAgICB8IHsgd2lkdGg/OiBuZXZlcjsgaGVpZ2h0PzogbmV2ZXI7IGxheW91dDogJ2ZpbGwnIH1cbiAgICB8IHtcbiAgICAgICAgd2lkdGg6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBoZWlnaHQ6IG51bWJlciB8IHN0cmluZ1xuICAgICAgICBsYXlvdXQ/OiBFeGNsdWRlPExheW91dFZhbHVlLCAnZmlsbCc+XG4gICAgICB9XG4gIClcblxuY29uc3Qge1xuICBkZXZpY2VTaXplczogY29uZmlnRGV2aWNlU2l6ZXMsXG4gIGltYWdlU2l6ZXM6IGNvbmZpZ0ltYWdlU2l6ZXMsXG4gIGxvYWRlcjogY29uZmlnTG9hZGVyLFxuICBwYXRoOiBjb25maWdQYXRoLFxuICBkb21haW5zOiBjb25maWdEb21haW5zLFxufSA9XG4gICgocHJvY2Vzcy5lbnYuX19ORVhUX0lNQUdFX09QVFMgYXMgYW55KSBhcyBJbWFnZUNvbmZpZykgfHwgaW1hZ2VDb25maWdEZWZhdWx0XG4vLyBzb3J0IHNtYWxsZXN0IHRvIGxhcmdlc3RcbmNvbnN0IGFsbFNpemVzID0gWy4uLmNvbmZpZ0RldmljZVNpemVzLCAuLi5jb25maWdJbWFnZVNpemVzXVxuY29uZmlnRGV2aWNlU2l6ZXMuc29ydCgoYSwgYikgPT4gYSAtIGIpXG5hbGxTaXplcy5zb3J0KChhLCBiKSA9PiBhIC0gYilcblxuZnVuY3Rpb24gZ2V0V2lkdGhzKFxuICB3aWR0aDogbnVtYmVyIHwgdW5kZWZpbmVkLFxuICBsYXlvdXQ6IExheW91dFZhbHVlLFxuICBzaXplczogc3RyaW5nIHwgdW5kZWZpbmVkXG4pOiB7IHdpZHRoczogbnVtYmVyW107IGtpbmQ6ICd3JyB8ICd4JyB9IHtcbiAgaWYgKHNpemVzICYmIChsYXlvdXQgPT09ICdmaWxsJyB8fCBsYXlvdXQgPT09ICdyZXNwb25zaXZlJykpIHtcbiAgICAvLyBGaW5kIGFsbCB0aGUgXCJ2d1wiIHBlcmNlbnQgc2l6ZXMgdXNlZCBpbiB0aGUgc2l6ZXMgcHJvcFxuICAgIGNvbnN0IHBlcmNlbnRTaXplcyA9IFsuLi5zaXplcy5tYXRjaEFsbCgvKF58XFxzKSgxP1xcZD9cXGQpdncvZyldLm1hcCgobSkgPT5cbiAgICAgIHBhcnNlSW50KG1bMl0pXG4gICAgKVxuICAgIGlmIChwZXJjZW50U2l6ZXMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBzbWFsbGVzdFJhdGlvID0gTWF0aC5taW4oLi4ucGVyY2VudFNpemVzKSAqIDAuMDFcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoczogYWxsU2l6ZXMuZmlsdGVyKFxuICAgICAgICAgIChzKSA9PiBzID49IGNvbmZpZ0RldmljZVNpemVzWzBdICogc21hbGxlc3RSYXRpb1xuICAgICAgICApLFxuICAgICAgICBraW5kOiAndycsXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7IHdpZHRoczogYWxsU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cbiAgaWYgKFxuICAgIHR5cGVvZiB3aWR0aCAhPT0gJ251bWJlcicgfHxcbiAgICBsYXlvdXQgPT09ICdmaWxsJyB8fFxuICAgIGxheW91dCA9PT0gJ3Jlc3BvbnNpdmUnXG4gICkge1xuICAgIHJldHVybiB7IHdpZHRoczogY29uZmlnRGV2aWNlU2l6ZXMsIGtpbmQ6ICd3JyB9XG4gIH1cblxuICBjb25zdCB3aWR0aHMgPSBbXG4gICAgLi4ubmV3IFNldChcbiAgICAgIC8vID4gVGhpcyBtZWFucyB0aGF0IG1vc3QgT0xFRCBzY3JlZW5zIHRoYXQgc2F5IHRoZXkgYXJlIDN4IHJlc29sdXRpb24sXG4gICAgICAvLyA+IGFyZSBhY3R1YWxseSAzeCBpbiB0aGUgZ3JlZW4gY29sb3IsIGJ1dCBvbmx5IDEuNXggaW4gdGhlIHJlZCBhbmRcbiAgICAgIC8vID4gYmx1ZSBjb2xvcnMuIFNob3dpbmcgYSAzeCByZXNvbHV0aW9uIGltYWdlIGluIHRoZSBhcHAgdnMgYSAyeFxuICAgICAgLy8gPiByZXNvbHV0aW9uIGltYWdlIHdpbGwgYmUgdmlzdWFsbHkgdGhlIHNhbWUsIHRob3VnaCB0aGUgM3ggaW1hZ2VcbiAgICAgIC8vID4gdGFrZXMgc2lnbmlmaWNhbnRseSBtb3JlIGRhdGEuIEV2ZW4gdHJ1ZSAzeCByZXNvbHV0aW9uIHNjcmVlbnMgYXJlXG4gICAgICAvLyA+IHdhc3RlZnVsIGFzIHRoZSBodW1hbiBleWUgY2Fubm90IHNlZSB0aGF0IGxldmVsIG9mIGRldGFpbCB3aXRob3V0XG4gICAgICAvLyA+IHNvbWV0aGluZyBsaWtlIGEgbWFnbmlmeWluZyBnbGFzcy5cbiAgICAgIC8vIGh0dHBzOi8vYmxvZy50d2l0dGVyLmNvbS9lbmdpbmVlcmluZy9lbl91cy90b3BpY3MvaW5mcmFzdHJ1Y3R1cmUvMjAxOS9jYXBwaW5nLWltYWdlLWZpZGVsaXR5LW9uLXVsdHJhLWhpZ2gtcmVzb2x1dGlvbi1kZXZpY2VzLmh0bWxcbiAgICAgIFt3aWR0aCwgd2lkdGggKiAyIC8qLCB3aWR0aCAqIDMqL10ubWFwKFxuICAgICAgICAodykgPT4gYWxsU2l6ZXMuZmluZCgocCkgPT4gcCA+PSB3KSB8fCBhbGxTaXplc1thbGxTaXplcy5sZW5ndGggLSAxXVxuICAgICAgKVxuICAgICksXG4gIF1cbiAgcmV0dXJuIHsgd2lkdGhzLCBraW5kOiAneCcgfVxufVxuXG50eXBlIEdlbkltZ0F0dHJzRGF0YSA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgdW5vcHRpbWl6ZWQ6IGJvb2xlYW5cbiAgbGF5b3V0OiBMYXlvdXRWYWx1ZVxuICBsb2FkZXI6IEltYWdlTG9hZGVyXG4gIHdpZHRoPzogbnVtYmVyXG4gIHF1YWxpdHk/OiBudW1iZXJcbiAgc2l6ZXM/OiBzdHJpbmdcbn1cblxudHlwZSBHZW5JbWdBdHRyc1Jlc3VsdCA9IHtcbiAgc3JjOiBzdHJpbmdcbiAgc3JjU2V0OiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgc2l6ZXM6IHN0cmluZyB8IHVuZGVmaW5lZFxufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZUltZ0F0dHJzKHtcbiAgc3JjLFxuICB1bm9wdGltaXplZCxcbiAgbGF5b3V0LFxuICB3aWR0aCxcbiAgcXVhbGl0eSxcbiAgc2l6ZXMsXG4gIGxvYWRlcixcbn06IEdlbkltZ0F0dHJzRGF0YSk6IEdlbkltZ0F0dHJzUmVzdWx0IHtcbiAgaWYgKHVub3B0aW1pemVkKSB7XG4gICAgcmV0dXJuIHsgc3JjLCBzcmNTZXQ6IHVuZGVmaW5lZCwgc2l6ZXM6IHVuZGVmaW5lZCB9XG4gIH1cblxuICBjb25zdCB7IHdpZHRocywga2luZCB9ID0gZ2V0V2lkdGhzKHdpZHRoLCBsYXlvdXQsIHNpemVzKVxuICBjb25zdCBsYXN0ID0gd2lkdGhzLmxlbmd0aCAtIDFcblxuICByZXR1cm4ge1xuICAgIHNpemVzOiAhc2l6ZXMgJiYga2luZCA9PT0gJ3cnID8gJzEwMHZ3JyA6IHNpemVzLFxuICAgIHNyY1NldDogd2lkdGhzXG4gICAgICAubWFwKFxuICAgICAgICAodywgaSkgPT5cbiAgICAgICAgICBgJHtsb2FkZXIoeyBzcmMsIHF1YWxpdHksIHdpZHRoOiB3IH0pfSAke1xuICAgICAgICAgICAga2luZCA9PT0gJ3cnID8gdyA6IGkgKyAxXG4gICAgICAgICAgfSR7a2luZH1gXG4gICAgICApXG4gICAgICAuam9pbignLCAnKSxcblxuICAgIC8vIEl0J3MgaW50ZW5kZWQgdG8ga2VlcCBgc3JjYCB0aGUgbGFzdCBhdHRyaWJ1dGUgYmVjYXVzZSBSZWFjdCB1cGRhdGVzXG4gICAgLy8gYXR0cmlidXRlcyBpbiBvcmRlci4gSWYgd2Uga2VlcCBgc3JjYCB0aGUgZmlyc3Qgb25lLCBTYWZhcmkgd2lsbFxuICAgIC8vIGltbWVkaWF0ZWx5IHN0YXJ0IHRvIGZldGNoIGBzcmNgLCBiZWZvcmUgYHNpemVzYCBhbmQgYHNyY1NldGAgYXJlIGV2ZW5cbiAgICAvLyB1cGRhdGVkIGJ5IFJlYWN0LiBUaGF0IGNhdXNlcyBtdWx0aXBsZSB1bm5lY2Vzc2FyeSByZXF1ZXN0cyBpZiBgc3JjU2V0YFxuICAgIC8vIGFuZCBgc2l6ZXNgIGFyZSBkZWZpbmVkLlxuICAgIC8vIFRoaXMgYnVnIGNhbm5vdCBiZSByZXByb2R1Y2VkIGluIENocm9tZSBvciBGaXJlZm94LlxuICAgIHNyYzogbG9hZGVyKHsgc3JjLCBxdWFsaXR5LCB3aWR0aDogd2lkdGhzW2xhc3RdIH0pLFxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEludCh4OiB1bmtub3duKTogbnVtYmVyIHwgdW5kZWZpbmVkIHtcbiAgaWYgKHR5cGVvZiB4ID09PSAnbnVtYmVyJykge1xuICAgIHJldHVybiB4XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwYXJzZUludCh4LCAxMClcbiAgfVxuICByZXR1cm4gdW5kZWZpbmVkXG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRJbWFnZUxvYWRlcihsb2FkZXJQcm9wczogSW1hZ2VMb2FkZXJQcm9wcykge1xuICBjb25zdCBsb2FkID0gbG9hZGVycy5nZXQoY29uZmlnTG9hZGVyKVxuICBpZiAobG9hZCkge1xuICAgIHJldHVybiBsb2FkKHsgcm9vdDogY29uZmlnUGF0aCwgLi4ubG9hZGVyUHJvcHMgfSlcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgYFVua25vd24gXCJsb2FkZXJcIiBmb3VuZCBpbiBcIm5leHQuY29uZmlnLmpzXCIuIEV4cGVjdGVkOiAke1ZBTElEX0xPQURFUlMuam9pbihcbiAgICAgICcsICdcbiAgICApfS4gUmVjZWl2ZWQ6ICR7Y29uZmlnTG9hZGVyfWBcbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7XG4gIHNyYyxcbiAgc2l6ZXMsXG4gIHVub3B0aW1pemVkID0gZmFsc2UsXG4gIHByaW9yaXR5ID0gZmFsc2UsXG4gIGxvYWRpbmcsXG4gIGNsYXNzTmFtZSxcbiAgcXVhbGl0eSxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgb2JqZWN0Rml0LFxuICBvYmplY3RQb3NpdGlvbixcbiAgbG9hZGVyID0gZGVmYXVsdEltYWdlTG9hZGVyLFxuICAuLi5hbGxcbn06IEltYWdlUHJvcHMpIHtcbiAgbGV0IHJlc3Q6IFBhcnRpYWw8SW1hZ2VQcm9wcz4gPSBhbGxcbiAgbGV0IGxheW91dDogTm9uTnVsbGFibGU8TGF5b3V0VmFsdWU+ID0gc2l6ZXMgPyAncmVzcG9uc2l2ZScgOiAnaW50cmluc2ljJ1xuICBsZXQgdW5zaXplZCA9IGZhbHNlXG4gIGlmICgndW5zaXplZCcgaW4gcmVzdCkge1xuICAgIHVuc2l6ZWQgPSBCb29sZWFuKHJlc3QudW5zaXplZClcbiAgICAvLyBSZW1vdmUgcHJvcGVydHkgc28gaXQncyBub3Qgc3ByZWFkIGludG8gaW1hZ2U6XG4gICAgZGVsZXRlIHJlc3RbJ3Vuc2l6ZWQnXVxuICB9IGVsc2UgaWYgKCdsYXlvdXQnIGluIHJlc3QpIHtcbiAgICAvLyBPdmVycmlkZSBkZWZhdWx0IGxheW91dCBpZiB0aGUgdXNlciBzcGVjaWZpZWQgb25lOlxuICAgIGlmIChyZXN0LmxheW91dCkgbGF5b3V0ID0gcmVzdC5sYXlvdXRcblxuICAgIC8vIFJlbW92ZSBwcm9wZXJ0eSBzbyBpdCdzIG5vdCBzcHJlYWQgaW50byBpbWFnZTpcbiAgICBkZWxldGUgcmVzdFsnbGF5b3V0J11cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKCFzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIGlzIG1pc3NpbmcgcmVxdWlyZWQgXCJzcmNcIiBwcm9wZXJ0eS4gTWFrZSBzdXJlIHlvdSBwYXNzIFwic3JjXCIgaW4gcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHdpZHRoLCBoZWlnaHQsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG4gICAgaWYgKCFWQUxJRF9MQVlPVVRfVkFMVUVTLmluY2x1ZGVzKGxheW91dCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsYXlvdXRcIiBwcm9wZXJ0eS4gUHJvdmlkZWQgXCIke2xheW91dH1cIiBzaG91bGQgYmUgb25lIG9mICR7VkFMSURfTEFZT1VUX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmICghVkFMSURfTE9BRElOR19WQUxVRVMuaW5jbHVkZXMobG9hZGluZykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGludmFsaWQgXCJsb2FkaW5nXCIgcHJvcGVydHkuIFByb3ZpZGVkIFwiJHtsb2FkaW5nfVwiIHNob3VsZCBiZSBvbmUgb2YgJHtWQUxJRF9MT0FESU5HX1ZBTFVFUy5tYXAoXG4gICAgICAgICAgU3RyaW5nXG4gICAgICAgICkuam9pbignLCcpfS5gXG4gICAgICApXG4gICAgfVxuICAgIGlmIChwcmlvcml0eSAmJiBsb2FkaW5nID09PSAnbGF6eScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEltYWdlIHdpdGggc3JjIFwiJHtzcmN9XCIgaGFzIGJvdGggXCJwcmlvcml0eVwiIGFuZCBcImxvYWRpbmc9J2xhenknXCIgcHJvcGVydGllcy4gT25seSBvbmUgc2hvdWxkIGJlIHVzZWQuYFxuICAgICAgKVxuICAgIH1cbiAgICBpZiAodW5zaXplZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW1hZ2Ugd2l0aCBzcmMgXCIke3NyY31cIiBoYXMgZGVwcmVjYXRlZCBcInVuc2l6ZWRcIiBwcm9wZXJ0eSwgd2hpY2ggd2FzIHJlbW92ZWQgaW4gZmF2b3Igb2YgdGhlIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5YFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGxldCBpc0xhenkgPVxuICAgICFwcmlvcml0eSAmJiAobG9hZGluZyA9PT0gJ2xhenknIHx8IHR5cGVvZiBsb2FkaW5nID09PSAndW5kZWZpbmVkJylcbiAgaWYgKHNyYyAmJiBzcmMuc3RhcnRzV2l0aCgnZGF0YTonKSkge1xuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0hUVFAvQmFzaWNzX29mX0hUVFAvRGF0YV9VUklzXG4gICAgdW5vcHRpbWl6ZWQgPSB0cnVlXG4gICAgaXNMYXp5ID0gZmFsc2VcbiAgfVxuXG4gIGNvbnN0IFtzZXRSZWYsIGlzSW50ZXJzZWN0ZWRdID0gdXNlSW50ZXJzZWN0aW9uPEhUTUxJbWFnZUVsZW1lbnQ+KHtcbiAgICByb290TWFyZ2luOiAnMjAwcHgnLFxuICAgIGRpc2FibGVkOiAhaXNMYXp5LFxuICB9KVxuICBjb25zdCBpc1Zpc2libGUgPSAhaXNMYXp5IHx8IGlzSW50ZXJzZWN0ZWRcblxuICBjb25zdCB3aWR0aEludCA9IGdldEludCh3aWR0aClcbiAgY29uc3QgaGVpZ2h0SW50ID0gZ2V0SW50KGhlaWdodClcbiAgY29uc3QgcXVhbGl0eUludCA9IGdldEludChxdWFsaXR5KVxuXG4gIGxldCB3cmFwcGVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3R5bGU6IEpTWC5JbnRyaW5zaWNFbGVtZW50c1snZGl2J11bJ3N0eWxlJ10gfCB1bmRlZmluZWRcbiAgbGV0IHNpemVyU3ZnOiBzdHJpbmcgfCB1bmRlZmluZWRcbiAgbGV0IGltZ1N0eWxlOiBJbWdFbGVtZW50U3R5bGUgfCB1bmRlZmluZWQgPSB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgdG9wOiAwLFxuICAgIGxlZnQ6IDAsXG4gICAgYm90dG9tOiAwLFxuICAgIHJpZ2h0OiAwLFxuXG4gICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgcGFkZGluZzogMCxcbiAgICBib3JkZXI6ICdub25lJyxcbiAgICBtYXJnaW46ICdhdXRvJyxcblxuICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgd2lkdGg6IDAsXG4gICAgaGVpZ2h0OiAwLFxuICAgIG1pbldpZHRoOiAnMTAwJScsXG4gICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICBtaW5IZWlnaHQ6ICcxMDAlJyxcbiAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcblxuICAgIG9iamVjdEZpdCxcbiAgICBvYmplY3RQb3NpdGlvbixcbiAgfVxuICBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgIT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ICE9PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiAvPlxuICAgIGNvbnN0IHF1b3RpZW50ID0gaGVpZ2h0SW50IC8gd2lkdGhJbnRcbiAgICBjb25zdCBwYWRkaW5nVG9wID0gaXNOYU4ocXVvdGllbnQpID8gJzEwMCUnIDogYCR7cXVvdGllbnQgKiAxMDB9JWBcbiAgICBpZiAobGF5b3V0ID09PSAncmVzcG9uc2l2ZScpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwicmVzcG9uc2l2ZVwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG5cbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIG1hcmdpbjogMCxcbiAgICAgIH1cbiAgICAgIHNpemVyU3R5bGUgPSB7IGRpc3BsYXk6ICdibG9jaycsIGJveFNpemluZzogJ2JvcmRlci1ib3gnLCBwYWRkaW5nVG9wIH1cbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ludHJpbnNpYycpIHtcbiAgICAgIC8vIDxJbWFnZSBzcmM9XCJpLnBuZ1wiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgbGF5b3V0PVwiaW50cmluc2ljXCIgLz5cbiAgICAgIHdyYXBwZXJTdHlsZSA9IHtcbiAgICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgICBtYXJnaW46IDAsXG4gICAgICB9XG4gICAgICBzaXplclN0eWxlID0ge1xuICAgICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JyxcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgIH1cbiAgICAgIHNpemVyU3ZnID0gYDxzdmcgd2lkdGg9XCIke3dpZHRoSW50fVwiIGhlaWdodD1cIiR7aGVpZ2h0SW50fVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2ZXJzaW9uPVwiMS4xXCIvPmBcbiAgICB9IGVsc2UgaWYgKGxheW91dCA9PT0gJ2ZpeGVkJykge1xuICAgICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBsYXlvdXQ9XCJmaXhlZFwiIC8+XG4gICAgICB3cmFwcGVyU3R5bGUgPSB7XG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcbiAgICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICBoZWlnaHQ6IGhlaWdodEludCxcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIHdpZHRoSW50ID09PSAndW5kZWZpbmVkJyAmJlxuICAgIHR5cGVvZiBoZWlnaHRJbnQgPT09ICd1bmRlZmluZWQnICYmXG4gICAgbGF5b3V0ID09PSAnZmlsbCdcbiAgKSB7XG4gICAgLy8gPEltYWdlIHNyYz1cImkucG5nXCIgbGF5b3V0PVwiZmlsbFwiIC8+XG4gICAgd3JhcHBlclN0eWxlID0ge1xuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcblxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYm90dG9tOiAwLFxuICAgICAgcmlnaHQ6IDAsXG5cbiAgICAgIGJveFNpemluZzogJ2JvcmRlci1ib3gnLFxuICAgICAgbWFyZ2luOiAwLFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyA8SW1hZ2Ugc3JjPVwiaS5wbmdcIiAvPlxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBJbWFnZSB3aXRoIHNyYyBcIiR7c3JjfVwiIG11c3QgdXNlIFwid2lkdGhcIiBhbmQgXCJoZWlnaHRcIiBwcm9wZXJ0aWVzIG9yIFwibGF5b3V0PSdmaWxsJ1wiIHByb3BlcnR5LmBcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBsZXQgaW1nQXR0cmlidXRlczogR2VuSW1nQXR0cnNSZXN1bHQgPSB7XG4gICAgc3JjOlxuICAgICAgJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEFRQUJBSUFBQUFBQUFQLy8veUg1QkFFQUFBQUFMQUFBQUFBQkFBRUFBQUlCUkFBNycsXG4gICAgc3JjU2V0OiB1bmRlZmluZWQsXG4gICAgc2l6ZXM6IHVuZGVmaW5lZCxcbiAgfVxuXG4gIGlmIChpc1Zpc2libGUpIHtcbiAgICBpbWdBdHRyaWJ1dGVzID0gZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICBzcmMsXG4gICAgICB1bm9wdGltaXplZCxcbiAgICAgIGxheW91dCxcbiAgICAgIHdpZHRoOiB3aWR0aEludCxcbiAgICAgIHF1YWxpdHk6IHF1YWxpdHlJbnQsXG4gICAgICBzaXplcyxcbiAgICAgIGxvYWRlcixcbiAgICB9KVxuICB9XG5cbiAgaWYgKHVuc2l6ZWQpIHtcbiAgICB3cmFwcGVyU3R5bGUgPSB1bmRlZmluZWRcbiAgICBzaXplclN0eWxlID0gdW5kZWZpbmVkXG4gICAgaW1nU3R5bGUgPSB1bmRlZmluZWRcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3dyYXBwZXJTdHlsZX0+XG4gICAgICB7c2l6ZXJTdHlsZSA/IChcbiAgICAgICAgPGRpdiBzdHlsZT17c2l6ZXJTdHlsZX0+XG4gICAgICAgICAge3NpemVyU3ZnID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICAgICAgYXJpYS1oaWRkZW49e3RydWV9XG4gICAgICAgICAgICAgIHJvbGU9XCJwcmVzZW50YXRpb25cIlxuICAgICAgICAgICAgICBzcmM9e2BkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LCR7dG9CYXNlNjQoc2l6ZXJTdmcpfWB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAgeyFpc1Zpc2libGUgJiYgKFxuICAgICAgICA8bm9zY3JpcHQ+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgey4uLnJlc3R9XG4gICAgICAgICAgICB7Li4uZ2VuZXJhdGVJbWdBdHRycyh7XG4gICAgICAgICAgICAgIHNyYyxcbiAgICAgICAgICAgICAgdW5vcHRpbWl6ZWQsXG4gICAgICAgICAgICAgIGxheW91dCxcbiAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoSW50LFxuICAgICAgICAgICAgICBxdWFsaXR5OiBxdWFsaXR5SW50LFxuICAgICAgICAgICAgICBzaXplcyxcbiAgICAgICAgICAgICAgbG9hZGVyLFxuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICBzcmM9e3NyY31cbiAgICAgICAgICAgIGRlY29kaW5nPVwiYXN5bmNcIlxuICAgICAgICAgICAgc2l6ZXM9e3NpemVzfVxuICAgICAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9ub3NjcmlwdD5cbiAgICAgICl9XG4gICAgICA8aW1nXG4gICAgICAgIHsuLi5yZXN0fVxuICAgICAgICB7Li4uaW1nQXR0cmlidXRlc31cbiAgICAgICAgZGVjb2Rpbmc9XCJhc3luY1wiXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgICByZWY9e3NldFJlZn1cbiAgICAgICAgc3R5bGU9e2ltZ1N0eWxlfVxuICAgICAgLz5cbiAgICAgIHtwcmlvcml0eSA/IChcbiAgICAgICAgLy8gTm90ZSBob3cgd2Ugb21pdCB0aGUgYGhyZWZgIGF0dHJpYnV0ZSwgYXMgaXQgd291bGQgb25seSBiZSByZWxldmFudFxuICAgICAgICAvLyBmb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBgaW1hZ2VzcmNzZXRgLCBhbmQgaW4gdGhvc2UgY2FzZXNcbiAgICAgICAgLy8gaXQgd291bGQgbGlrZWx5IGNhdXNlIHRoZSBpbmNvcnJlY3QgaW1hZ2UgdG8gYmUgcHJlbG9hZGVkLlxuICAgICAgICAvL1xuICAgICAgICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zZW1hbnRpY3MuaHRtbCNhdHRyLWxpbmstaW1hZ2VzcmNzZXRcbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgIGtleT17XG4gICAgICAgICAgICAgICdfX25pbWctJyArXG4gICAgICAgICAgICAgIGltZ0F0dHJpYnV0ZXMuc3JjICtcbiAgICAgICAgICAgICAgaW1nQXR0cmlidXRlcy5zcmNTZXQgK1xuICAgICAgICAgICAgICBpbWdBdHRyaWJ1dGVzLnNpemVzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgIGFzPVwiaW1hZ2VcIlxuICAgICAgICAgICAgaHJlZj17aW1nQXR0cmlidXRlcy5zcmNTZXQgPyB1bmRlZmluZWQgOiBpbWdBdHRyaWJ1dGVzLnNyY31cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmU6IGltYWdlc3Jjc2V0IGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNyY3NldD17aW1nQXR0cmlidXRlcy5zcmNTZXR9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlOiBpbWFnZXNpemVzIGlzIG5vdCB5ZXQgaW4gdGhlIGxpbmsgZWxlbWVudCB0eXBlXG4gICAgICAgICAgICBpbWFnZXNpemVzPXtpbWdBdHRyaWJ1dGVzLnNpemVzfVxuICAgICAgICAgID48L2xpbms+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICkgOiBudWxsfVxuICAgIDwvZGl2PlxuICApXG59XG5cbi8vQlVJTFQgSU4gTE9BREVSU1xuXG5mdW5jdGlvbiBub3JtYWxpemVTcmMoc3JjOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc3JjWzBdID09PSAnLycgPyBzcmMuc2xpY2UoMSkgOiBzcmNcbn1cblxuZnVuY3Rpb24gaW1naXhMb2FkZXIoe1xuICByb290LFxuICBzcmMsXG4gIHdpZHRoLFxuICBxdWFsaXR5LFxufTogRGVmYXVsdEltYWdlTG9hZGVyUHJvcHMpOiBzdHJpbmcge1xuICAvLyBEZW1vOiBodHRwczovL3N0YXRpYy5pbWdpeC5uZXQvZGFpc3kucG5nP2Zvcm1hdD1hdXRvJmZpdD1tYXgmdz0zMDBcbiAgY29uc3QgcGFyYW1zID0gWydhdXRvPWZvcm1hdCcsICdmaXQ9bWF4JywgJ3c9JyArIHdpZHRoXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gJydcbiAgaWYgKHF1YWxpdHkpIHtcbiAgICBwYXJhbXMucHVzaCgncT0nICsgcXVhbGl0eSlcbiAgfVxuXG4gIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgcGFyYW1zU3RyaW5nID0gJz8nICsgcGFyYW1zLmpvaW4oJyYnKVxuICB9XG4gIHJldHVybiBgJHtyb290fSR7bm9ybWFsaXplU3JjKHNyYyl9JHtwYXJhbXNTdHJpbmd9YFxufVxuXG5mdW5jdGlvbiBha2FtYWlMb2FkZXIoeyByb290LCBzcmMsIHdpZHRoIH06IERlZmF1bHRJbWFnZUxvYWRlclByb3BzKTogc3RyaW5nIHtcbiAgcmV0dXJuIGAke3Jvb3R9JHtub3JtYWxpemVTcmMoc3JjKX0/aW13aWR0aD0ke3dpZHRofWBcbn1cblxuZnVuY3Rpb24gY2xvdWRpbmFyeUxvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIC8vIERlbW86IGh0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL2RlbW8vaW1hZ2UvdXBsb2FkL3dfMzAwLGNfbGltaXQscV9hdXRvL3R1cnRsZXMuanBnXG4gIGNvbnN0IHBhcmFtcyA9IFsnZl9hdXRvJywgJ2NfbGltaXQnLCAnd18nICsgd2lkdGgsICdxXycgKyAocXVhbGl0eSB8fCAnYXV0bycpXVxuICBsZXQgcGFyYW1zU3RyaW5nID0gcGFyYW1zLmpvaW4oJywnKSArICcvJ1xuICByZXR1cm4gYCR7cm9vdH0ke3BhcmFtc1N0cmluZ30ke25vcm1hbGl6ZVNyYyhzcmMpfWBcbn1cblxuZnVuY3Rpb24gZGVmYXVsdExvYWRlcih7XG4gIHJvb3QsXG4gIHNyYyxcbiAgd2lkdGgsXG4gIHF1YWxpdHksXG59OiBEZWZhdWx0SW1hZ2VMb2FkZXJQcm9wcyk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbWlzc2luZ1ZhbHVlcyA9IFtdXG5cbiAgICAvLyB0aGVzZSBzaG91bGQgYWx3YXlzIGJlIHByb3ZpZGVkIGJ1dCBtYWtlIHN1cmUgdGhleSBhcmVcbiAgICBpZiAoIXNyYykgbWlzc2luZ1ZhbHVlcy5wdXNoKCdzcmMnKVxuICAgIGlmICghd2lkdGgpIG1pc3NpbmdWYWx1ZXMucHVzaCgnd2lkdGgnKVxuXG4gICAgaWYgKG1pc3NpbmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgTmV4dCBJbWFnZSBPcHRpbWl6YXRpb24gcmVxdWlyZXMgJHttaXNzaW5nVmFsdWVzLmpvaW4oXG4gICAgICAgICAgJywgJ1xuICAgICAgICApfSB0byBiZSBwcm92aWRlZC4gTWFrZSBzdXJlIHlvdSBwYXNzIHRoZW0gYXMgcHJvcHMgdG8gdGhlIFxcYG5leHQvaW1hZ2VcXGAgY29tcG9uZW50LiBSZWNlaXZlZDogJHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICB7IHNyYywgd2lkdGgsIHF1YWxpdHkgfVxuICAgICAgICApfWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoJy8vJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCB0byBwYXJzZSBzcmMgXCIke3NyY31cIiBvbiBcXGBuZXh0L2ltYWdlXFxgLCBwcm90b2NvbC1yZWxhdGl2ZSBVUkwgKC8vKSBtdXN0IGJlIGNoYW5nZWQgdG8gYW4gYWJzb2x1dGUgVVJMIChodHRwOi8vIG9yIGh0dHBzOi8vKWBcbiAgICAgIClcbiAgICB9XG5cbiAgICBpZiAoIXNyYy5zdGFydHNXaXRoKCcvJykgJiYgY29uZmlnRG9tYWlucykge1xuICAgICAgbGV0IHBhcnNlZFNyYzogVVJMXG4gICAgICB0cnkge1xuICAgICAgICBwYXJzZWRTcmMgPSBuZXcgVVJMKHNyYylcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBGYWlsZWQgdG8gcGFyc2Ugc3JjIFwiJHtzcmN9XCIgb24gXFxgbmV4dC9pbWFnZVxcYCwgaWYgdXNpbmcgcmVsYXRpdmUgaW1hZ2UgaXQgbXVzdCBzdGFydCB3aXRoIGEgbGVhZGluZyBzbGFzaCBcIi9cIiBvciBiZSBhbiBhYnNvbHV0ZSBVUkwgKGh0dHA6Ly8gb3IgaHR0cHM6Ly8pYFxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGlmICghY29uZmlnRG9tYWlucy5pbmNsdWRlcyhwYXJzZWRTcmMuaG9zdG5hbWUpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBzcmMgcHJvcCAoJHtzcmN9KSBvbiBcXGBuZXh0L2ltYWdlXFxgLCBob3N0bmFtZSBcIiR7cGFyc2VkU3JjLmhvc3RuYW1lfVwiIGlzIG5vdCBjb25maWd1cmVkIHVuZGVyIGltYWdlcyBpbiB5b3VyIFxcYG5leHQuY29uZmlnLmpzXFxgXFxuYCArXG4gICAgICAgICAgICBgU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbmV4dC1pbWFnZS11bmNvbmZpZ3VyZWQtaG9zdGBcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBgJHtyb290fT91cmw9JHtlbmNvZGVVUklDb21wb25lbnQoc3JjKX0mdz0ke3dpZHRofSZxPSR7cXVhbGl0eSB8fCA3NX1gXG59XG4iLCJ0eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUgPSBhbnlcbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja09wdGlvbnMgPSB7XG4gIHRpbWVvdXQ6IG51bWJlclxufVxudHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrRGVhZGxpbmUgPSB7XG4gIHJlYWRvbmx5IGRpZFRpbWVvdXQ6IGJvb2xlYW5cbiAgdGltZVJlbWFpbmluZzogKCkgPT4gbnVtYmVyXG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjazogKFxuICAgICAgY2FsbGJhY2s6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkLFxuICAgICAgb3B0cz86IFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zXG4gICAgKSA9PiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlXG4gICAgY2FuY2VsSWRsZUNhbGxiYWNrOiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpID0+IHZvaWRcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9XG4gICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoXG4gICAgY2I6IChkZWFkbGluZTogUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lKSA9PiB2b2lkXG4gICk6IE5vZGVKUy5UaW1lb3V0IHtcbiAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgY2Ioe1xuICAgICAgICBkaWRUaW1lb3V0OiBmYWxzZSxcbiAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBNYXRoLm1heCgwLCA1MCAtIChEYXRlLm5vdygpIC0gc3RhcnQpKVxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICB9LCAxKVxuICB9XG5cbmV4cG9ydCBjb25zdCBjYW5jZWxJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrKSB8fFxuICBmdW5jdGlvbiAoaWQ6IFJlcXVlc3RJZGxlQ2FsbGJhY2tIYW5kbGUpIHtcbiAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGlkKVxuICB9XG4iLCJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICByZXF1ZXN0SWRsZUNhbGxiYWNrLFxuICBjYW5jZWxJZGxlQ2FsbGJhY2ssXG59IGZyb20gJy4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrJ1xuXG50eXBlIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCA9IFBpY2s8SW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0LCAncm9vdE1hcmdpbic+XG50eXBlIFVzZUludGVyc2VjdGlvbiA9IHsgZGlzYWJsZWQ/OiBib29sZWFuIH0gJiBVc2VJbnRlcnNlY3Rpb25PYnNlcnZlckluaXRcbnR5cGUgT2JzZXJ2ZUNhbGxiYWNrID0gKGlzVmlzaWJsZTogYm9vbGVhbikgPT4gdm9pZFxudHlwZSBPYnNlcnZlciA9IHtcbiAgaWQ6IHN0cmluZ1xuICBvYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbiAgZWxlbWVudHM6IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+XG59XG5cbmNvbnN0IGhhc0ludGVyc2VjdGlvbk9ic2VydmVyID0gdHlwZW9mIEludGVyc2VjdGlvbk9ic2VydmVyICE9PSAndW5kZWZpbmVkJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlSW50ZXJzZWN0aW9uPFQgZXh0ZW5kcyBFbGVtZW50Pih7XG4gIHJvb3RNYXJnaW4sXG4gIGRpc2FibGVkLFxufTogVXNlSW50ZXJzZWN0aW9uKTogWyhlbGVtZW50OiBUIHwgbnVsbCkgPT4gdm9pZCwgYm9vbGVhbl0ge1xuICBjb25zdCBpc0Rpc2FibGVkOiBib29sZWFuID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyXG5cbiAgY29uc3QgdW5vYnNlcnZlID0gdXNlUmVmPEZ1bmN0aW9uPigpXG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IHNldFJlZiA9IHVzZUNhbGxiYWNrKFxuICAgIChlbDogVCB8IG51bGwpID0+IHtcbiAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCgpXG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVyblxuXG4gICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xuICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoXG4gICAgICAgICAgZWwsXG4gICAgICAgICAgKGlzVmlzaWJsZSkgPT4gaXNWaXNpYmxlICYmIHNldFZpc2libGUoaXNWaXNpYmxlKSxcbiAgICAgICAgICB7IHJvb3RNYXJnaW4gfVxuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBbaXNEaXNhYmxlZCwgcm9vdE1hcmdpbiwgdmlzaWJsZV1cbiAgKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgaWYgKCF2aXNpYmxlKSB7XG4gICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9IHJlcXVlc3RJZGxlQ2FsbGJhY2soKCkgPT4gc2V0VmlzaWJsZSh0cnVlKSlcbiAgICAgICAgcmV0dXJuICgpID0+IGNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICB9XG4gICAgfVxuICB9LCBbdmlzaWJsZV0pXG5cbiAgcmV0dXJuIFtzZXRSZWYsIHZpc2libGVdXG59XG5cbmZ1bmN0aW9uIG9ic2VydmUoXG4gIGVsZW1lbnQ6IEVsZW1lbnQsXG4gIGNhbGxiYWNrOiBPYnNlcnZlQ2FsbGJhY2ssXG4gIG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxuKTogKCkgPT4gdm9pZCB7XG4gIGNvbnN0IHsgaWQsIG9ic2VydmVyLCBlbGVtZW50cyB9ID0gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucylcbiAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudClcbiAgcmV0dXJuIGZ1bmN0aW9uIHVub2JzZXJ2ZSgpOiB2b2lkIHtcbiAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudClcbiAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudClcblxuICAgIC8vIERlc3Ryb3kgb2JzZXJ2ZXIgd2hlbiB0aGVyZSdzIG5vdGhpbmcgbGVmdCB0byB3YXRjaDpcbiAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICBvYnNlcnZlcnMuZGVsZXRlKGlkKVxuICAgIH1cbiAgfVxufVxuXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwPHN0cmluZywgT2JzZXJ2ZXI+KClcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnM6IFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdCk6IE9ic2VydmVyIHtcbiAgY29uc3QgaWQgPSBvcHRpb25zLnJvb3RNYXJnaW4gfHwgJydcbiAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZClcbiAgaWYgKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlXG4gIH1cblxuICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXA8RWxlbWVudCwgT2JzZXJ2ZUNhbGxiYWNrPigpXG4gIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KVxuICAgICAgY29uc3QgaXNWaXNpYmxlID0gZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwXG4gICAgICBpZiAoY2FsbGJhY2sgJiYgaXNWaXNpYmxlKSB7XG4gICAgICAgIGNhbGxiYWNrKGlzVmlzaWJsZSlcbiAgICAgIH1cbiAgICB9KVxuICB9LCBvcHRpb25zKVxuXG4gIG9ic2VydmVycy5zZXQoXG4gICAgaWQsXG4gICAgKGluc3RhbmNlID0ge1xuICAgICAgaWQsXG4gICAgICBvYnNlcnZlcixcbiAgICAgIGVsZW1lbnRzLFxuICAgIH0pXG4gIClcbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgR3JpZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiO1xyXG5pbXBvcnQgQ2Fyb3VzYWwgZnJvbSBcIi4uL2Vzc2VudGlhbHMvY2Fyb3VzYWxcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vZXNzZW50aWFscy9OYXZcIjtcclxuaW1wb3J0IHsgRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dC9jb250ZXh0XCI7XHJcbmltcG9ydCB1c2VTdHlsZXMgZnJvbSBcIi4uL3NyYy9zdHlsZXMvTWFpblN0eWxlc1wiO1xyXG5pbXBvcnQgeyBBZHZpc29yeSB9IGZyb20gXCIuLi9tYWluL2Fkdmlzb3J5XCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICh7IGRhdGFTZXQsIGV4Y2VsRGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgeyBrZXlTZXQgfSA9IHVzZUNvbnRleHQoRGF0YUNvbnRleHQpO1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW29wZW5fdGFuaywgc2V0T3BlblRhbmtdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtyYWluX2FuYWx5c2lzLCBzZXRSYWluX2FuYWx5c2lzXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2VhdGhlckxvY2F0aW9uLCBzZXRXZWF0aGVyTG9jYXRpb25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtkcm91Z2h0LCBzZXREcm91Z2h0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbd2VhdGhlckZvcmVjYXN0LCBzZXRXZWF0aGVyRm9yZWNhc3RdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnNvbGUubG9nKGV4Y2VsRGF0YSk7XHJcbiAgY29uc3QgaGFuZGxlQ2xpY2tPcGVuID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC5hbHQgPT0gMCkge1xyXG4gICAgICBzZXRPcGVuKCFvcGVuKTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDEpIHtcclxuICAgICAgc2V0T3BlblRhbmsoIW9wZW5fdGFuayk7XHJcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmFsdCA9PSAyKSB7XHJcbiAgICAgIHNldFJhaW5fYW5hbHlzaXMoIXJhaW5fYW5hbHlzaXMpO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5hbHQgPT0gMykge1xyXG4gICAgICBzZXREcm91Z2h0KCFkcm91Z2h0KTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuYWx0ID09IDQpIHtcclxuICAgICAgc2V0V2VhdGhlckxvY2F0aW9uKCF3ZWF0aGVyTG9jYXRpb24pO1xyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5hbHQgPT0gNSkge1xyXG4gICAgICBzZXRXZWF0aGVyRm9yZWNhc3QoIXdlYXRoZXJGb3JlY2FzdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZSA9IChlKSA9PiB7XHJcbiAgICBzZXRPcGVuVGFuayhmYWxzZSk7XHJcbiAgICBzZXRPcGVuKGZhbHNlKTtcclxuICAgIHNldFJhaW5fYW5hbHlzaXMoZmFsc2UpO1xyXG4gICAgc2V0V2VhdGhlckxvY2F0aW9uKGZhbHNlKTtcclxuICAgIHNldFdlYXRoZXJGb3JlY2FzdChmYWxzZSk7XHJcbiAgICBzZXREcm91Z2h0KGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPENhcm91c2FsIC8+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21HcmlkfVxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LmFkdmlzb3J5LmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LmFkdmlzb3J5fVxyXG4gICAgICAgICAgICBhbHQ9ezB9XHJcbiAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQuYWR2aXNvcnkuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5hZHZpc29yeS5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LmFkdmlzb3J5LmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxBZHZpc29yeVxyXG4gICAgICAgICAgICB0aXRsZT17ZGF0YVNldC53YXRlclRhbmsuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQud2F0ZXJUYW5rfVxyXG4gICAgICAgICAgICBhbHQ9ezF9XHJcbiAgICAgICAgICAgIG9wZW49e29wZW5fdGFua31cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC53YXRlclRhbmsuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC53YXRlclRhbmsubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC53YXRlclRhbmsubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LnJhaW5BbmFseXNlLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIGltZz17a2V5U2V0LnJhaW5BbmFseXNlfVxyXG4gICAgICAgICAgICBhbHQ9ezJ9XHJcbiAgICAgICAgICAgIG9wZW49e3JhaW5fYW5hbHlzaXN9XHJcbiAgICAgICAgICAgIGNsaWNrPXtoYW5kbGVDbGlja09wZW59XHJcbiAgICAgICAgICAgIGNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgc3ViSGVhZGluZ3M9e2RhdGFTZXQucmFpbkFuYWx5c2Uuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5yYWluQW5hbHlzZS5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LnJhaW5BbmFseXNlLmxpbmtzfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPEdyaWRcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jdXN0b21HcmlkfVxyXG4gICAgICAgICAgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCBtYXJnaW5Ub3A6IFwiMnJlbVwiIH19XHJcbiAgICAgICAgICBkaXJlY3Rpb249XCJyb3dcIlxyXG4gICAgICAgICAganVzdGlmeT1cInNwYWNlLWV2ZW5seVwiXHJcbiAgICAgICAgICBjb250YWluZXJcclxuICAgICAgICAgIHNwYWNpbmc9ezB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LmRyb3VnaHQuaGVhZGluZ31cclxuICAgICAgICAgICAgaW1nPXtrZXlTZXQuZHJvdWdodH1cclxuICAgICAgICAgICAgYWx0PXszfVxyXG4gICAgICAgICAgICBvcGVuPXtkcm91Z2h0fVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LmRyb3VnaHQuc3ViSGVhZGluZ3N9XHJcbiAgICAgICAgICAgIGxpbmtOYW1lcz17ZGF0YVNldC5kcm91Z2h0LmxpbmtOYW1lc31cclxuICAgICAgICAgICAgbGlua3M9e2RhdGFTZXQuZHJvdWdodC5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8QWR2aXNvcnlcclxuICAgICAgICAgICAgdGl0bGU9e2RhdGFTZXQud2VhdGhlckFyb3VuZC5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC53ZWF0aGVyQXJvdW5kfVxyXG4gICAgICAgICAgICBhbHQ9ezR9XHJcbiAgICAgICAgICAgIG9wZW49e3dlYXRoZXJMb2NhdGlvbn1cclxuICAgICAgICAgICAgY2xpY2s9e2hhbmRsZUNsaWNrT3Blbn1cclxuICAgICAgICAgICAgY2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICBzdWJIZWFkaW5ncz17ZGF0YVNldC53ZWF0aGVyQXJvdW5kLnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQud2VhdGhlckFyb3VuZC5saW5rTmFtZXN9XHJcbiAgICAgICAgICAgIGxpbmtzPXtkYXRhU2V0LndlYXRoZXJBcm91bmQubGlua3N9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEFkdmlzb3J5XHJcbiAgICAgICAgICAgIHRpdGxlPXtkYXRhU2V0LndlYXRoZXJGb3JlY2FzdC5oZWFkaW5nfVxyXG4gICAgICAgICAgICBpbWc9e2tleVNldC53ZWF0aGVyRm9yZWNhc3R9XHJcbiAgICAgICAgICAgIGFsdD17NX1cclxuICAgICAgICAgICAgb3Blbj17d2VhdGhlckZvcmVjYXN0fVxyXG4gICAgICAgICAgICBjbGljaz17aGFuZGxlQ2xpY2tPcGVufVxyXG4gICAgICAgICAgICBjbG9zZT17aGFuZGxlQ2xvc2V9XHJcbiAgICAgICAgICAgIHN1YkhlYWRpbmdzPXtkYXRhU2V0LmFkdmlzb3J5LnN1YkhlYWRpbmdzfVxyXG4gICAgICAgICAgICBsaW5rTmFtZXM9e2RhdGFTZXQuYWR2aXNvcnkubGlua05hbWVzfVxyXG4gICAgICAgICAgICBsaW5rcz17ZGF0YVNldC5hZHZpc29yeS5saW5rc31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICBcImh0dHBzOi8vdXMtY2VudHJhbDEtZXhwcmVzcy00MzllMC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBwL2dldFdlYXRoZXJcIlxyXG4gICk7XHJcbiAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGFTZXQ6IGpzb24uYWdyb21ldCxcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDApLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxyXG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIG1heFdpZHRoOiBcIjEwMCVcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBjdXN0b21HcmlkOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFwiMnJlbVwiLFxyXG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHtcclxuICAgICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rVGV4dDoge1xyXG4gICAgdGV4dERlY29yYXRpb246IFwiTm9uZVwiLFxyXG4gICAgY29sb3I6IFwiYmxhY2tcIixcclxuICAgIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXHJcbiAgICBkaXNwbGF5OiBcImlubGluZVwiLFxyXG4gIH0sXHJcbiAgcGFwZXJTbWFsbDoge1xyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oXCJzbVwiKV06IHt9LFxyXG4gIH0sXHJcbiAgZ3JpZFJlc3BvbnNlOiB7XHJcbiAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bihcInNtXCIpXToge1xyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWc6IHtcclxuICAgIG9wYWNpdHk6IDEsXHJcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAuMnNcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZSgwLjgpXCIsXHJcbiAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdHlwb2dyYXBoeToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCJwaW5rXCIsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgfSxcclxuICB0eXBlTGluazoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBcIjJyZW1cIixcclxuICAgIGNvbG9yOiBcIm9yYW5nZXJlZFwiLFxyXG4gIH0sXHJcbiAgZGlhbG9nQ29udGVudDoge1xyXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIixcclxuICB9LFxyXG59KSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VTdHlsZXM7XHJcbiIsImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXhXaWR0aDogXCIxMDAlXCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGhlYWRlcjoge1xyXG4gICAgcGFkZGluZ0xlZnQ6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5kZWZhdWx0LFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHVzZVN0eWxlcztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2ltYWdlJylcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ1RpdGxlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvR3JpZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTGlua1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvTW9iaWxlU3RlcHBlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dSaWdodFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvaGVhZC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi90by1iYXNlLTY0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2ltYWdlLWNvbmZpZy5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN3aXBlYWJsZS12aWV3c1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3dpcGVhYmxlLXZpZXdzLXV0aWxzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=