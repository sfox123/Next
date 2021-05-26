import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
}));

export default useStyles;
