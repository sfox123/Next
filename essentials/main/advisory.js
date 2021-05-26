import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "../src/styles/MainStyles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

function Advisory({ dataSet }) {
  return (
    <div>
      <Grid item xs={3}>
        <Paper>
          <div>
            <img src="" />
            <Typography variant="h6" component="h6">
              Advisory
              {console.log(dataSet)}
            </Typography>
          </div>
        </Paper>
      </Grid>
    </div>
  );
}

export default withStyles(useStyles)(Advisory);
