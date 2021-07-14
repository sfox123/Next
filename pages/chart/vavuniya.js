import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Line from "./chart";
import Data from "../../src/json/csvjson.json";
import Box from "@material-ui/core/Box";
import { useEffect, useState } from "react";
import TableComponent from "../../src/tables/temperatureTable"
import {
  getContent,
  post,
} from "../../src/server/controllers/apiGatewayClient";

const Vavuniya = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [dataSet, setDataSet] = useState([]);
  const [open, setOpen] = useState(false);
  const [key, setKey] = useState(null);
  const [index, setIndex] = useState(null);
  const [tempData, setTempData] = useState([]);
  const [sortedData, setSortedData] = useState([])
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
    async function getRainfallData() {
      const response = await getContent("/temperature");
      const {
        data: { Items },
      } = response;
      setTempData(Items);
      formatData(Items);
    }
    getRainfallData();

    function formatData(Items) {
      console.log()
      dataSet.length = 0;
      sortDataSetInitially(Items)
      // const sortedData =  monthData.sort((a,b) => (a.day > b.day) ? 1 : (a.day < b.day) ? -1 : 0)
      // Items.length
      //   ? Items.map((x, i) => {
      //       parseInt(x.year) == 2021 && parseInt(x.month) == 1
      //         ? dataSet.push([parseInt(x.day), parseFloat(x.predicted_temp)])
      //         : null;
      //     })
      //   : null;
      dataSet.unshift(["x", "rainfall"]);
    }
  }, []);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const sortDataSetInitially = (dataArray) => {
    setSortedData({sortedData: []})
    dataSet.length = 0
    const monthData = dataArray.length ? dataArray.filter(el => parseInt(el.year) === 2021 && parseInt(el.month) === 1) : null
    const sortedMonthData = monthData.sort((a,b) => (parseInt(a.day) > parseInt(b.day) ? 1 : (parseInt(a.day) < parseInt(b.day) ? -1 : 0)))
    setSortedData(sortedMonthData)
    sortedMonthData.map((x, i) => {
      dataSet.push([parseInt(x.day), parseFloat(x.predicted_temp)])
    })
  };
  const sortDataOnChange = (dataArray, index) => {
    setSortedData({sortedData: []})
    dataSet.length = 0
    const monthData = dataArray.length ? dataArray.filter(el => parseInt(el.year) === 2021 && parseInt(el.month) === index) : null
    const sortedMonthData = monthData.sort((a,b) => (parseInt(a.day) > parseInt(b.day) ? 1 : (parseInt(a.day) < parseInt(b.day) ? -1 : 0)))
    setSortedData(sortedMonthData)
    sortedMonthData.map((x, i) => {
      dataSet.push([parseInt(x.day), parseFloat(x.predicted_temp)])
    })
  }
  const handleData = (x, i) => {
    setKey(x);
    setIndex(i);
    dataSet.length = 0;
    // tempData.map((x, i) =>
    //   parseInt(x.year) == 2021 && parseInt(x.month) == index
    //     ? dataSet.push([parseInt(x.day), parseInt(x.predicted_temp)])
    //     : null
    //   );
    sortDataOnChange(tempData, i + 1)
    dataSet.unshift(["x", "rainfall"]);
  };

  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };
  return (
    <div style={{ textAlign: "end", maxWidth: "75%" }}>
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
      <TableComponent sortedData={sortedData.length ? sortedData : null}/>
    </div>
  );
};

export default Vavuniya;
