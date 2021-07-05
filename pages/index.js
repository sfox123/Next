import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carousal from "../essentials/carousal";

import { DataContext } from "../context/context";
import useStyles from "../src/styles/MainStyles";
import { Advisory } from "../main/advisory";
import { Seasonal } from "../main/seasonal";
import { Button } from "@material-ui/core";

const Index = ({ dataSet }) => {
  const { keySet } = useContext(DataContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open_tank, setOpenTank] = useState(false);
  const [rain_analysis, setRain_analysis] = useState(false);
  const [weatherLocation, setWeatherLocation] = useState(false);
  const [drought, setDrought] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(false);
  const [predicted, setPredicted] = useState(false);

  const handleClickOpen = (e) => {
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
    } else if (e.target.alt == 6) {
      setPredicted(!predicted);
    }
  };
  const handleClose = (e) => {
    setOpenTank(false);
    setOpen(false);
    setRain_analysis(false);
    setWeatherLocation(false);
    setWeatherForecast(false);
    setDrought(false);
    setPredicted(false);
  };

  return (
    <div>
      <Carousal />
      <Grid
        className={classes.customGrid}
        style={{ textAlign: "center", marginTop: "2rem" }}
        direction="row"
        justify="space-evenly"
        container
        spacing={0}
      >
        {dataSet.agromet.map((e, i) =>
          i < 4 ? (
            <Advisory
              title={e.heading}
              alt={i}
              open={
                i == 0
                  ? open
                  : i == 1
                  ? open_tank
                  : i == 2
                  ? rain_analysis
                  : i == 3
                  ? drought
                  : null
              }
              click={handleClickOpen}
              close={handleClose}
              subHeadings={e.subHeadings}
              linkNames={e.linkNames}
              links={e.links}
            />
          ) : null
        )}
      </Grid>
      <Grid
        className={classes.customGrid}
        style={{ textAlign: "center", marginTop: "2rem" }}
        direction="row"
        justify="space-around"
        container
        spacing={0}
      >
        {dataSet.agromet.map((e, i) =>
          i >= 4 ? (
            <Advisory
              title={e.heading}
              alt={i}
              open={
                i == 4 ? weatherLocation : i == 5 ? weatherForecast : predicted
              }
              click={handleClickOpen}
              close={handleClose}
              subHeadings={e.subHeadings}
              linkNames={e.linkNames}
              links={e.links}
            />
          ) : null
        )}
      </Grid>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://us-central1-express-439e0.cloudfunctions.net/app/getWeather"
  );
  const json = await res.json();

  return {
    dataSet: json,
  };
};

export default Index;
