import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Line from "./chart";
import Data from "../../src/json/csv_trinc.json";
import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";

const Trinco = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEle, setAnchorEle] = useState(null);
  const [dataSet, setDataSet] = useState([["x", "rainfall"]]);
  const [open, setOpen] = useState(false);
  const [openYear, setOpenYear] = useState(false);
  const [key, setKey] = useState(null);
  const [year, setYear] = useState(2021);
  const [index, setIndex] = useState(0);
  const years = [2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
  const months = [
    "January",
    "Febraury",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    dataSet.length = 1;
    Data.map((x, i) =>
      x.year == 2021 && x.month == 1
        ? dataSet.push([x.day, x["predicted temperature(C)"]])
        : null
    );
  }, []);
  const handleClickYear = (e) => {
    setOpenYear(true);
    setAnchorEle(e.currentTarget);
  };
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleData = (x, i) => {
    setKey(x);
    setIndex(i + 1);
    dataSet.length = 1;

    Data.map((data, index) =>
      data.year == year && data.month == i + 1
        ? dataSet.push([data.day, data["predicted temperature(C)"]])
        : null
    );
  };
  const handleDataYear = (z) => {
    setYear(z);
    dataSet.length = 1;

    Data.map((data, i) =>
      data.year == z && data.month == index + 1
        ? dataSet.push([data.day, data["predicted temperature(C)"]])
        : null
    );
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  const handleCloseYear = (e) => {
    setAnchorEle(null);
    setOpenYear(false);
  };

  return (
    <div style={{ textAlign: "end", maxWidth: "75%" }}>
      <div style={{ marginTop: "10rem" }} />
      <Box textAlign="center" justifyContent="center">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          variant="contained"
          color="primary"
          onClick={handleClick}
        >
          {key == null ? "January" : key}
        </Button>
        <Button
          aria-controls="simple-menu-year"
          aria-haspopup="true"
          style={{ marginLeft: "20px" }}
          color="primary"
          variant="contained"
          onClick={handleClickYear}
        >
          {year}
        </Button>
      </Box>

      <div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          {months.map((x, i) => (
            <MenuItem
              onClick={() => {
                handleClose();
                handleData(x, i);
              }}
            >
              {x}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <div>
        <Menu
          id="simple-menu-year"
          anchorEl={anchorEle}
          open={openYear}
          onClose={handleCloseYear}
        >
          {years.map((z, i) => (
            <MenuItem
              onClick={() => {
                handleCloseYear();
                handleDataYear(z);
              }}
            >
              {z}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Line data={dataSet} month={key} year={year} index={index} />
    </div>
  );
};

export default Trinco;
