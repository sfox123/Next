import { useEffect, useState } from "react";
import Chart from "react-google-charts";

const Line = (props) => {
  const { month, index, data, year } = props;

  return (
    <>
      <Chart
        width={"1000px"}
        height={"400px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={data}
        options={{
          hAxis: {
            title: month == null ? "January - 2021" : month + "-" + year,
          },
          vAxis: {
            title: "Temperature (C)",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </>
  );
};

export default Line;
