import React, { useContext, useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Carousal from "../essentials/carousal";
import Nav from "../essentials/Nav";
import { DataContext } from "../context/context";
import useStyles from "../src/styles/MainStyles";
import { Advisory } from "../main/advisory";

const Index = ({ dataSet, excelData }) => {
  const { keySet, excelData } = useContext(DataContext);
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [open_tank, setOpenTank] = useState(false);
  const [rain_analysis, setRain_analysis] = useState(false);
  const [weatherLocation, setWeatherLocation] = useState(false);
  const [drought, setDrought] = useState(false);
  const [weatherForecast, setWeatherForecast] = useState(false);

  console.log(excelData());
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
    }
  };
  const handleClose = (e) => {
    setOpenTank(false);
    setOpen(false);
    setRain_analysis(false);
    setWeatherLocation(false);
    setWeatherForecast(false);
    setDrought(false);
  };

  return (
    <div>
      <Carousal />
      <div>
        <Grid
          className={classes.customGrid}
          style={{ textAlign: "center", marginTop: "2rem" }}
          direction="row"
          justify="space-evenly"
          container
          spacing={0}
        >
          <Advisory
            title={dataSet.advisory.heading}
            img={keySet.advisory}
            alt={0}
            open={open}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.advisory.subHeadings}
            linkNames={dataSet.advisory.linkNames}
            links={dataSet.advisory.links}
          />
          <Advisory
            title={dataSet.waterTank.heading}
            img={keySet.waterTank}
            alt={1}
            open={open_tank}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.waterTank.subHeadings}
            linkNames={dataSet.waterTank.linkNames}
            links={dataSet.waterTank.links}
          />
          <Advisory
            title={dataSet.rainAnalyse.heading}
            img={keySet.rainAnalyse}
            alt={2}
            open={rain_analysis}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.rainAnalyse.subHeadings}
            linkNames={dataSet.rainAnalyse.linkNames}
            links={dataSet.rainAnalyse.links}
          />
        </Grid>
        <Grid
          className={classes.customGrid}
          style={{ textAlign: "center", marginTop: "2rem" }}
          direction="row"
          justify="space-evenly"
          container
          spacing={0}
        >
          <Advisory
            title={dataSet.drought.heading}
            img={keySet.drought}
            alt={3}
            open={drought}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.drought.subHeadings}
            linkNames={dataSet.drought.linkNames}
            links={dataSet.drought.links}
          />
          <Advisory
            title={dataSet.weatherAround.heading}
            img={keySet.weatherAround}
            alt={4}
            open={weatherLocation}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.weatherAround.subHeadings}
            linkNames={dataSet.weatherAround.linkNames}
            links={dataSet.weatherAround.links}
          />
          <Advisory
            title={dataSet.weatherForecast.heading}
            img={keySet.weatherForecast}
            alt={5}
            open={weatherForecast}
            click={handleClickOpen}
            close={handleClose}
            subHeadings={dataSet.advisory.subHeadings}
            linkNames={dataSet.advisory.linkNames}
            links={dataSet.advisory.links}
          />
        </Grid>
      </div>
    </div>
  );
};

Index.getInitialProps = async (ctx) => {
  try {
    const res = await fetch(
      "https://us-central1-express-439e0.cloudfunctions.net/app/getWeather"
    );
    const json = await res.json();
  } catch (error) {
    console.log(error);
  }

  return {
    dataSet: json.agromet,
    excelData: data,
  };
};

export default Index;
