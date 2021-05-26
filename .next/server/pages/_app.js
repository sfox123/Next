(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

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

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/context */ "./context/context.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "@material-ui/core/CssBaseline");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_styles_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/styles/theme */ "./src/styles/theme.js");
/* harmony import */ var _essentials_Nav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../essentials/Nav */ "./essentials/Nav.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);

var _jsxFileName = "D:\\Experiment\\Next\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function MyApp({
  Component,
  pageProps
}) {
  react__WEBPACK_IMPORTED_MODULE_8___default().useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_8___default().Fragment), {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Agromet GIS"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "minimum-scale=1, initial-scale=1, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Pacifico|Raleway:100,400,400i,700|Roboto:300,400,500,700&display=swap"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {
      theme: _src_styles_theme__WEBPACK_IMPORTED_MODULE_6__.default,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_context__WEBPACK_IMPORTED_MODULE_1__.Context, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_3___default()), {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_essentials_Nav__WEBPACK_IMPORTED_MODULE_7__.default, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

MyApp.propTypes = {
  Component: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().elementType.isRequired),
  pageProps: (prop_types__WEBPACK_IMPORTED_MODULE_4___default().object.isRequired)
};
/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./src/styles/theme.js":
/*!*****************************!*\
  !*** ./src/styles/theme.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material-ui/core/styles */ "@material-ui/core/styles");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const govBlue = "#0B72B9";
const govOrange = "#FFBA60";
/* harmony default export */ __webpack_exports__["default"] = ((0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__.createMuiTheme)({
  palette: {
    common: {
      blue: `${govBlue}`,
      orange: `${govOrange}`
    },
    primary: {
      main: `${govBlue}`
    },
    secondary: {
      main: `${govOrange}`
    }
  },
  typography: {
    h3: {
      fontWeight: 400,
      fontFamily: "roboto"
    }
  }
}));

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

/***/ "@material-ui/core/CssBaseline":
/*!************************************************!*\
  !*** external "@material-ui/core/CssBaseline" ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@material-ui/core/CssBaseline");;

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

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0Ly4vYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vbmV4dC8uL2NvbnRleHQvY29udGV4dC5qcyIsIndlYnBhY2s6Ly9uZXh0Ly4vZXNzZW50aWFscy9OYXYuanMiLCJ3ZWJwYWNrOi8vbmV4dC8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vbmV4dC8uL3NyYy9zdHlsZXMvdGhlbWUuanMiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL0FwcEJhclwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmVcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIiIsIndlYnBhY2s6Ly9uZXh0L2V4dGVybmFsIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIkBtYXRlcmlhbC11aS9pY29ucy9DbG9zZVwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL25leHQvZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImF4aW9zIiwiYmFzZVVSTCIsIkRhdGFDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic3RhdGUiLCJrZXlTZXQiLCJTdGVwcyIsImlzU2lnbmVkSW4iLCJpc0Vycm9yIiwib3BlbiIsImNvbXBvbmVudERpZE1vdW50Iiwid2FsbFNldCIsImxhYmVsIiwicGF0aCIsImtleURhdGEiLCJhZHZpc29yeSIsIndhdGVyVGFuayIsInJhaW5BbmFseXNlIiwiZHJvdWdodCIsIndlYXRoZXJBcm91bmQiLCJ3ZWF0aGVyRm9yZWNhc3QiLCJzZXRTdGF0ZSIsInJlbmRlciIsImhhbmRsZUxvZ2luIiwiZW1haWwiLCJwYXNzd29yZCIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJhcGkiLCJkYXRhIiwic2V0T3BlbiIsImVycm9yIiwiZSIsImhhbmRsZUVycm9yIiwiY2hpbGRyZW4iLCJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJsb2dvIiwiaGVpZ2h0IiwidG9vbGJhck1hcmdpbiIsInBhZGRpbmciLCJ0YWJDb250YWluZXIiLCJtYXJnaW5MZWZ0IiwidGFiIiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwibWluV2lkdGgiLCJtZW51IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsImJsdWUiLCJjb2xvciIsImZsZXhHcm93IiwiYnRuIiwiYm9yZGVyUmFkaXVzIiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwibWVudUl0ZW0iLCJvcGFjaXR5IiwibG9nb0NvbnRhaW5lciIsInRpdGxlIiwiZm9udFNpemUiLCJtYXJnaW4iLCJzdHlsZXMiLCJyb290IiwiY2xvc2VCdXR0b24iLCJwb3NpdGlvbiIsInJpZ2h0IiwidG9wIiwiZ3JleSIsIkRpYWxvZ1RpdGxlIiwid2l0aFN0eWxlcyIsImNsYXNzZXMiLCJvbkNsb3NlIiwib3RoZXIiLCJFbGV2YXRpb25TY3JvbGwiLCJ3aW5kb3ciLCJ0cmlnZ2VyIiwidXNlU2Nyb2xsVHJpZ2dlciIsImRpc2FibGVIeXN0ZXJlc2lzIiwidGhyZXNob2xkIiwidGFyZ2V0IiwidW5kZWZpbmVkIiwiUmVhY3QiLCJlbGV2YXRpb24iLCJOYXYiLCJ1c2VDb250ZXh0Iiwic2V0VXNlck5hbWUiLCJ1c2VTdGF0ZSIsInNldFBhc3NXb3JkIiwiaGFuZGxlQ2hhbmdlIiwidHlwZSIsInZhbHVlIiwiTGluayIsImRpYWxvZ0NvbnRlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIk15QXBwIiwicGFnZVByb3BzIiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwiVGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpc1JlcXVpcmVkIiwiZ292Qmx1ZSIsImdvdk9yYW5nZSIsImNyZWF0ZU11aVRoZW1lIiwib3JhbmdlIiwicHJpbWFyeSIsIm1haW4iLCJzZWNvbmRhcnkiLCJ0eXBvZ3JhcGh5IiwiaDMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLCtEQUFlQSxtREFBQSxDQUFhO0FBQzFCQyxTQUFPLEVB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RWhCUixXQUFTLEVBQUVRLHFFQUEyQkM7QUFGdEIsQ0FBbEI7QUFLQSwrREFBZVYsS0FBZixFOzs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUVBLE1BQU1XLE9BQU8sR0FBRyxTQUFoQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxTQUFsQjtBQUVBLCtEQUFlQyx3RUFBYyxDQUFDO0FBQzVCN0QsU0FBTyxFQUFFO0FBQ1BDLFVBQU0sRUFBRTtBQUNOQyxVQUFJLEVBQUcsR0FBRXlELE9BQVEsRUFEWDtBQUVORyxZQUFNLEVBQUcsR0FBRUYsU0FBVTtBQUZmLEtBREQ7QUFLUEcsV0FBTyxFQUFFO0FBQ1BDLFVBQUksRUFBRyxHQUFFTCxPQUFRO0FBRFYsS0FMRjtBQVFQTSxhQUFTLEVBQUU7QUFDVEQsVUFBSSxFQUFHLEdBQUVKLFNBQVU7QUFEVjtBQVJKLEdBRG1CO0FBYTVCTSxZQUFVLEVBQUU7QUFDVkMsTUFBRSxFQUFFO0FBQ0Z4RSxnQkFBVSxFQUFFLEdBRFY7QUFFRkQsZ0JBQVUsRUFBRTtBQUZWO0FBRE07QUFiZ0IsQ0FBRCxDQUE3QixFOzs7Ozs7Ozs7OztBQ0xBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHdEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLDBEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLHlEOzs7Ozs7Ozs7OztBQ0FBLHVEOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLGdFOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6IFwiaHR0cDovL3VzLWNlbnRyYWwxLWV4cHJlc3MtNDM5ZTAuY2xvdWRmdW5jdGlvbnMubmV0L2FwcFwiLFxyXG59KTtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGFwaSBmcm9tIFwiLi4vYXBpL2F1dGhcIjtcclxuaW1wb3J0IEFsZXJ0IGZyb20gXCJAbWF0ZXJpYWwtdWkvbGFiL0FsZXJ0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGF0YUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGV4dCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGtleVNldDoge30sXHJcbiAgICAgIFN0ZXBzOiBbXSxcclxuICAgICAgaXNTaWduZWRJbjogZmFsc2UsXHJcbiAgICAgIGlzRXJyb3I6IGZhbHNlLFxyXG4gICAgICBvcGVuOiBmYWxzZSxcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIGNvbnN0IHdhbGxTZXQgPSBbXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfMVwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzEucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfMlwiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzIucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBsYWJlbDogXCJpbWdfM1wiLFxyXG4gICAgICAgIHBhdGg6IFwiL2ltZy93YWxsXzMucG5nXCIsXHJcbiAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3Qga2V5RGF0YSA9IHtcclxuICAgICAgYWR2aXNvcnk6IFwiL2ltZy9hZHZpc29yeS5wbmdcIixcclxuICAgICAgd2F0ZXJUYW5rOiBcIi9pbWcvdHdhdGVyLnBuZ1wiLFxyXG4gICAgICByYWluQW5hbHlzZTogXCIvaW1nL2FuYWx5c2UucG5nXCIsXHJcbiAgICAgIGRyb3VnaHQ6IFwiL2ltZy9kcm91Z2h0LnBuZ1wiLFxyXG4gICAgICB3ZWF0aGVyQXJvdW5kOiBcIi9pbWcvd2xvY2F0aW9uLnBuZ1wiLFxyXG4gICAgICB3ZWF0aGVyRm9yZWNhc3Q6IFwiL2ltZy9kcm9wcC5wbmdcIixcclxuICAgIH07XHJcbiAgICB0aGlzLnNldFN0YXRlKHsga2V5U2V0OiBrZXlEYXRhIH0pO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IFN0ZXBzOiB3YWxsU2V0IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmQgfSkgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5wb3N0KFwiL3NpZ25pblwiLCB7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgICAgICBhd2FpdCB0aGlzLnNldFN0YXRlKHsgaXNTaWduZWRJbjogdHJ1ZSB9KTtcclxuICAgICAgICBhd2FpdCBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRXJyb3I6IHRydWUgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHNldE9wZW4gPSAoZSkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbjogZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Vycm9yOiBmYWxzZSB9KTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8RGF0YUNvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgIHZhbHVlPXt7IC4uLnRoaXMuc3RhdGUsIGhhbmRsZUxvZ2luLCBoYW5kbGVFcnJvciwgc2V0T3BlbiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRGF0YUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgd2l0aFN0eWxlcyB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IEFwcEJhciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyXCI7XHJcbmltcG9ydCBUb29sYmFyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyXCI7XHJcbmltcG9ydCB1c2VTY3JvbGxUcmlnZ2VyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5rXCI7XHJcbmltcG9ydCB7IERpYWxvZywgRGlhbG9nQ29udGVudCB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25cIjtcclxuaW1wb3J0IENsb3NlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0Nsb3NlXCI7XHJcbmltcG9ydCBNdWlEaWFsb2dUaXRsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGVcIjtcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIjtcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZVwiO1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlXCI7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIjtcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XHJcbmltcG9ydCBBbGVydCBmcm9tIFwiQG1hdGVyaWFsLXVpL2xhYi9BbGVydFwiO1xyXG5pbXBvcnQgeyBEYXRhQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0L2NvbnRleHRcIjtcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGxvZ286IHtcclxuICAgIGhlaWdodDogXCI0LjVlbVwiLFxyXG4gIH0sXHJcbiAgdG9vbGJhck1hcmdpbjoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICB9LFxyXG4gIHRhYkNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgfSxcclxuICB0YWI6IHtcclxuICAgIGZvbnRGYW1pbHk6IFwiUmFsZXdheVwiLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogXCJub25lXCIsXHJcbiAgICBtaW5XaWR0aDogMTAsXHJcbiAgICBtYXJnaW5MZWZ0OiBcIjI1cHhcIixcclxuICB9LFxyXG4gIG1lbnU6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmx1ZSxcclxuICAgIGNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICBmbGV4R3JvdzogMSxcclxuICB9LFxyXG4gIGJ0bjoge1xyXG4gICAgYm9yZGVyUmFkaXVzOiBcIjUwcHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIG1lbnVJdGVtOiB7XHJcbiAgICBmb250RmFtaWx5OiBcIlJhbGV3YXlcIixcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIHRleHRUcmFuc2Zvcm06IFwibm9uZVwiLFxyXG4gICAgb3BhY2l0eTogMC43LFxyXG4gICAgXCImOmhvdmVyXCI6IHtcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dvQ29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiBcIjBcIixcclxuICAgIFwiJjpob3ZlclwiOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgIG1hcmdpblJpZ2h0OiBcIjI1cHhcIixcclxuICAgIG1hcmdpbkxlZnQ6IFwiMjVweFwiLFxyXG4gIH0sXHJcbiAgbWFyZ2luOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxufSkpO1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpbjogMCxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBjbG9zZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgIHJpZ2h0OiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ3JleVs1MDBdLFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgRGlhbG9nVGl0bGUgPSB3aXRoU3R5bGVzKHN0eWxlcykoKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgeyBjaGlsZHJlbiwgY2xhc3Nlcywgb25DbG9zZSwgLi4ub3RoZXIgfSA9IHByb3BzO1xyXG4gIHJldHVybiAoXHJcbiAgICA8TXVpRGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IHsuLi5vdGhlcn0+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiPntjaGlsZHJlbn08L1R5cG9ncmFwaHk+XHJcbiAgICAgIHtvbkNsb3NlID8gKFxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQnV0dG9ufVxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q2xvc2VJY29uIC8+XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvTXVpRGlhbG9nVGl0bGU+XHJcbiAgKTtcclxufSk7XHJcblxyXG5jb25zdCBFbGV2YXRpb25TY3JvbGwgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCB7IGNoaWxkcmVuLCB3aW5kb3cgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCB0cmlnZ2VyID0gdXNlU2Nyb2xsVHJpZ2dlcih7XHJcbiAgICBkaXNhYmxlSHlzdGVyZXNpczogdHJ1ZSxcclxuICAgIHRocmVzaG9sZDogMCxcclxuICAgIHRhcmdldDogd2luZG93ID8gd2luZG93KCkgOiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGRyZW4sIHtcclxuICAgIGVsZXZhdGlvbjogdHJpZ2dlciA/IDQgOiAwLFxyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3QgTmF2ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IHsgaGFuZGxlTG9naW4sIGlzRXJyb3IsIGhhbmRsZUVycm9yLCBpc1NpZ25lZEluLCBvcGVuLCBzZXRPcGVuIH0gPVxyXG4gICAgdXNlQ29udGV4dChEYXRhQ29udGV4dCk7XHJcblxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0VXNlck5hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzV29yZF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGlmIChlLnRhcmdldC50eXBlID09IFwidGV4dFwiKSB7XHJcbiAgICAgIHNldFVzZXJOYW1lKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNldFBhc3NXb3JkKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8RWxldmF0aW9uU2Nyb2xsPlxyXG4gICAgICAgIDxBcHBCYXIgcG9zaXRpb249XCJmaXhlZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgPFRvb2xiYXIgZGlzYWJsZUd1dHRlcnM+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBkaXNhYmxlUmlwcGxlXHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PXtMaW5rfVxyXG4gICAgICAgICAgICAgIGhyZWY9XCIvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubG9nb0NvbnRhaW5lcn1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBZ3JvbWV0IEdJU1xyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKHRydWUpfVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnRufVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge2lzU2lnbmVkSW4gPyBcIkFkbWluXCIgOiBcIkxvZ2luXCJ9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICAgIDwvQXBwQmFyPlxyXG4gICAgICA8L0VsZXZhdGlvblNjcm9sbD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudG9vbGJhck1hcmdpbn0gLz5cclxuICAgICAgPERpYWxvZ1xyXG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cInNpbXBsZS1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgID5cclxuICAgICAgICA8RGlhbG9nVGl0bGVcclxuICAgICAgICAgIGlkPVwiY3VzdG9taXplZC1kaWFsb2ctdGl0bGVcIlxyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQWRtaW5cclxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxyXG4gICAgICAgIDxEaWFsb2dDb250ZW50IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaWFsb2dDb250ZW50fSBkaXZpZGVycz5cclxuICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZSkgPT4ge1xyXG4gICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBrZXk9e1wibmFtZVwifVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXRleHRmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpbn1cclxuICAgICAgICAgICAgICAgIGlkPVwiaW5wdXQtd2l0aC1pY29uLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgPEZvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBoYW5kbGVMb2dpbih7IGVtYWlsLCBwYXNzd29yZCB9KTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idG59XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgTG9naW5cclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICB7aXNFcnJvciA/IChcclxuICAgICAgICAgICAgICAgIDxDb2xsYXBzZSBpbj17aXNFcnJvcn0+XHJcbiAgICAgICAgICAgICAgICAgIDxBbGVydFxyXG4gICAgICAgICAgICAgICAgICAgIHNldmVyaXR5PVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVFcnJvcn1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsb3NlSWNvbiBmb250U2l6ZT1cImluaGVyaXRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEFjY2VzcyBEZW5pZWQgIVxyXG4gICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cclxuICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XHJcbiAgICAgIDwvRGlhbG9nPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2O1xyXG4iLCJpbXBvcnQgeyBDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHQvY29udGV4dFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL3N0eWxlc1wiO1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgVGhlbWUgZnJvbSBcIi4uL3NyYy9zdHlsZXMvdGhlbWVcIjtcclxuaW1wb3J0IE5hdiBmcm9tIFwiLi4vZXNzZW50aWFscy9OYXZcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanNzLXNlcnZlci1zaWRlXCIpO1xyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpO1xyXG4gICAgfVxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkFncm9tZXQgR0lTPC90aXRsZT5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5rXHJcbiAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UGFjaWZpY298UmFsZXdheToxMDAsNDAwLDQwMGksNzAwfFJvYm90bzozMDAsNDAwLDUwMCw3MDAmZGlzcGxheT1zd2FwXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXtUaGVtZX0+XHJcbiAgICAgICAgPENvbnRleHQ+XHJcbiAgICAgICAgICA8Q3NzQmFzZWxpbmUgLz5cclxuICAgICAgICAgIDxOYXYgLz5cclxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICA8L0NvbnRleHQ+XHJcbiAgICAgIDwvVGhlbWVQcm92aWRlcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNeUFwcDtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTXVpVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcblxyXG5jb25zdCBnb3ZCbHVlID0gXCIjMEI3MkI5XCI7XHJcbmNvbnN0IGdvdk9yYW5nZSA9IFwiI0ZGQkE2MFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTXVpVGhlbWUoe1xyXG4gIHBhbGV0dGU6IHtcclxuICAgIGNvbW1vbjoge1xyXG4gICAgICBibHVlOiBgJHtnb3ZCbHVlfWAsXHJcbiAgICAgIG9yYW5nZTogYCR7Z292T3JhbmdlfWAsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBtYWluOiBgJHtnb3ZCbHVlfWAsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIG1haW46IGAke2dvdk9yYW5nZX1gLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHR5cG9ncmFwaHk6IHtcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgZm9udEZhbWlseTogXCJyb2JvdG9cIixcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9BcHBCYXJcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0J1dHRvblwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0Nzc0Jhc2VsaW5lXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b25cIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmtcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvY29yZS91c2VTY3JvbGxUcmlnZ2VyXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xvc2VcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBtYXRlcmlhbC11aS9sYWIvQWxlcnRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=