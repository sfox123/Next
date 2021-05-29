import React, { useState, useEffect, useContext } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Link from "@material-ui/core/Link";
import { Dialog, DialogContent } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { Typography } from "@material-ui/core";
import Collapse from "@material-ui/core/Collapse";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Alert from "@material-ui/lab/Alert";
import { DataContext } from "../context/context";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  logo: {
    height: "4.5em",
  },
  toolbarMargin: {
    marginBottom: "5rem",
    padding: 0,
  },
  tabContainer: {
    marginLeft: "auto",
  },
  tab: {
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    minWidth: 10,
    marginLeft: "25px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    flexGrow: 1,
  },
  btn: {
    borderRadius: "50px",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  menuItem: {
    fontFamily: "Raleway",
    fontWeight: 700,
    textTransform: "none",
    opacity: 0.7,
    "&:hover": {
      opacity: 1,
    },
  },
  logoContainer: {
    padding: "0",
    "&:hover": {
      backgroundColor: "transparent",
    },
  },
  title: {
    flexGrow: 1,
    fontSize: "1rem",
    marginRight: "25px",
    marginLeft: "25px",
  },
  margin: {
    margin: theme.spacing(1),
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const ElevationScroll = (props) => {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

const Nav = (props) => {
  const router = useRouter();
  const classes = useStyles();
  const { handleLogin, isError, open, setOpen, setIsError, isSignedIn } =
    useContext(DataContext);

  const [email, setUserName] = useState("");
  const [password, setPassWord] = useState("");

  const handleChange = (e) => {
    if (e.target.type == "text") {
      setUserName(e.target.value);
    } else {
      setPassWord(e.target.value);
    }
  };

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disableGutters>
            <Button
              disableRipple
              component={Link}
              href="/"
              className={classes.logoContainer}
            >
              <Typography
                className={classes.title}
                variant="contained"
                color="secondary"
              >
                Agromet GIS
              </Typography>
            </Button>
            <Button
              onClick={() => setOpen(true)}
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              {isSignedIn ? "Admin" : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
      <Dialog
        onClose={() => setOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={() => setOpen(false)}
        >
          Admin
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers>
          <form
            onSubmit={async (e) => {
              e.preventDefault();
            }}
          >
            <FormControl>
              <TextField
                onChange={handleChange}
                key={"name"}
                type="text"
                className={classes.margin}
                id="input-with-icon-textfield"
                label="Username"
              />
            </FormControl>
            <br />
            <FormControl>
              <TextField
                onChange={handleChange}
                type="password"
                className={classes.margin}
                id="input-with-icon-password"
                label="Password"
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <Button
                type="submit"
                onClick={async () => {
                  handleLogin({ email, password });
                }}
                variant="contained"
                color="secondary"
                className={classes.btn}
              >
                Login
              </Button>
              <br />
              {isError ? (
                <Collapse in={isError}>
                  <Alert
                    severity="error"
                    action={
                      <IconButton
                        aria-label="close"
                        color="inherit"
                        size="small"
                        onClick={setIsError(false)}
                      >
                        <CloseIcon fontSize="inherit" />
                      </IconButton>
                    }
                  >
                    Access Denied !
                  </Alert>
                </Collapse>
              ) : null}
            </FormControl>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default Nav;
