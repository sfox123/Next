import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Line from "./chart";
import Data from "../../src/json/csvjson.json";
import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";

const Vavuniya = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataSet, setDataSet] = useState([]);
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(null);
  const [index, setIndex] = useState(null);
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
    dataSet.length = 0;
    Data.map((x, i) =>
      x.year == 2021 && x.month == 1
        ? dataSet.push([x.day, x["predicted temperature(C)"]])
        : null
    );
    dataSet.unshift(["x", "rainfall"]);
  }, []);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleData = (x, i) => {
    setKey(x);
    setIndex(i);
    dataSet.length = 0;
    Data.map((x, i) =>
      x.year == 2021 && x.month == index
        ? dataSet.push([x.day, x["predicted temperature(C)"]])
        : null
    );
    dataSet.unshift(["x", "rainfall"]);
    console.log(dataSet);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <div style={{ textAlign: "end", maxWidth: "75%" }}>
      <Box textAlign="center" justifyContent="center">
        <h1>HEY I'm Vavuniya CHANGED</h1>
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
          style={{ marginLeft: "20px" }}
          color="primary"
          variant="contained"
        >
          2021
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
      <Line data={dataSet} month={key} index={index} />
    </div>
  );
};

export default Vavuniya;
