import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    [theme.breakpoints.down("sm")]: {
      marginBottom: "2rem",
      display: "flex",
      justifyContent: "center",
      maxWidth: "100%",
    },
  },
  customGrid: {
    marginBottom: "2rem",
    textAlign: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  linkText: {
    textDecoration: "None",
    color: "black",
    marginBottom: "1rem",
    display: "inline",
  },
  paperSmall: {
    [theme.breakpoints.down("sm")]: {},
  },
  gridResponse: {
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  img: {
    opacity: 1,
    transition: "all .2s",
    "&:hover": {
      transform: "scale(0.8)",
      cursor: "pointer",
    },
  },
  typography: {
    padding: theme.spacing(2),
    backgroundColor: "pink",
    display: "flex",
    flexDirection: "column",
  },
  typeLink: {
    marginBottom: "2rem",
    color: "orangered",
  },
  dialogContent: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
}));

export default useStyles;
