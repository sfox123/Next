import { createMuiTheme } from "@material-ui/core/styles";

const govBlue = "#0B72B9";
const govOrange = "#FFBA60";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${govBlue}`,
      orange: `${govOrange}`,
    },
    primary: {
      main: `${govBlue}`,
    },
    secondary: {
      main: `${govOrange}`,
    },
  },
  typography: {
    h3: {
      fontWeight: 400,
      fontFamily: "roboto",
    },
  },
});
