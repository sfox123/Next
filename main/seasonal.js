import { makeStyles, withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import useStyles from "../src/styles/MainStyles";
import Link from "@material-ui/core/Link";
import Image from "next/image";
import { useContext, useState } from "react";
import { DataContext } from "../context/context";
import { Dialog, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    padding: "2rem 4rem",
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

export const Seasonal = (props) => {
  const { keySet } = useContext(DataContext);
  const { title, alt, open, close, click, subHeadings } = props;
  const classes = useStyles();

  return (
    <div>
      <Link style={{ cursor: "pointer", textDecoration: "none" }} key={alt}>
        <Grid onClick={click} item xs={12} key={title}>
          <Paper className={classes.gridItem}>
            <div>
              <Image
                src={`/img/${alt}.png`}
                style={{ cursor: "pointer" }}
                className={classes.img}
                height={200}
                width={200}
                alt={alt}
              />
              <Typography
                onClick={click}
                align="center"
                variant="h6"
                component="h6"
              >
                {title}
              </Typography>
            </div>
          </Paper>
        </Grid>
      </Link>
      <Dialog onClose={close} aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={close}>
          {title}
        </DialogTitle>
        <DialogContent className={classes.dialogContent} dividers>
          {subHeadings.map((el, i) => (
            <>
              <Typography variant="h6">{el[0]}</Typography>

              {i == 0 ? (
                el.map((e, i) => console.log(e[1][0]))
              ) : (
                <Link target="_blank" href={el[2]}>
                  {el[1]}
                </Link>
              )}
            </>
          ))}
        </DialogContent>
      </Dialog>
    </div>
  );
};
