import { Chart } from "react-google-charts";
import React from "react";

const ChartScreen = ({ dataSet }) => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <h1>Chart</h1>
      <Chart
        width={"800px"}
        height={"500px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "rainfall"],
          ["Jan", dataSet[0][0]],
          ["Feb", dataSet[0][1]],
          ["Mar", dataSet[0][2]],
          ["Apr", dataSet[0][3]],
          ["May", dataSet[0][4]],
          ["Jun", dataSet[0][5]],
          ["Jul", dataSet[0][6]],
          ["Aug", dataSet[0][7]],
          ["Sep", dataSet[0][8]],
          ["Oct", dataSet[0][9]],
          ["Nov", dataSet[0][10]],
          ["Dec", dataSet[0][11]],
        ]}
        options={{
          hAxis: {
            title: "Month",
          },
          vAxis: {
            title: "RainFall (mm)",
          },
        }}
        rootProps={{ "data-testid": "1" }}
      />
    </div>
  );
};

ChartScreen.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://us-central1-express-439e0.cloudfunctions.net/app/weatherAPI"
  );
  const json = await res.json();
  return {
    dataSet: json,
  };
};

export default ChartScreen;
