import React, { useEffect, useState } from "react";
import keys from "../api/admin.json";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import api from "../api/auth";
import { parse } from "papaparse";
import { post } from "../src/server/controllers/apiGatewayClient";

const Admin = ({ userIn, dataSet }) => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [csvData, setCSVData] = useState([]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const link = e.target[0].value;
    const id = e.target[0].id;
    const group = e.target[2].id;
    try {
      const res = await api.post("/changeLink", { link, id, group });
      console.log(await res.data);
      setSuccess(true);
    } catch (error) {
      console.log(await error);
      alert("Server Error Please Try Again");
    }
  };

  const convertCsvToJson = (dataTransfer) => {
    Array.from(dataTransfer)
      .filter((file) => file.type === "text/csv")
      .forEach(async (file) => {
        const text = await file.text();
        // console.log(text);
        const result = parse(text, { header: true });
        // console.log(result);
        const { data } = result;
        setCSVData({ csvData: data });
      });
  };
  async function enterTemperatureRecord() {
    // const dataRecord = csvData.csvData[4];
    csvData.csvData.map(async (obj, index) => {
      const body = {
        id: String(index),
        day: obj.day,
        month: obj.month,
        predicted_temp: obj["predicted temperature(C)"],
        year: obj.year,
      }
      console.log("CSV Body: ", body)
      const response = await post("/temperature", body);
      console.log("This is the post response: ", response);
    });
    
    
  }
  useEffect(() => {
    !userIn ? router.push("/illegalEntry") : null;
  }, []);
  // console.log("STATE: ", csvData);
  return (
    <div>
      <ul>
        {success && (
          <Alert onClose={() => setSuccess(false)} severity="success">
            Successfully changed
          </Alert>
        )}
        {dataSet.map((e, i) => (
          <>
            <Grid
              style={{ textAlign: "center", marginTop: "2rem" }}
              direction="row"
              container
              spacing={0}
            >
              <div key={i} style={{ textAlign: "left", display: "grid" }}>
                <Typography style={{ marginBottom: "1rem" }} variant="h5">
                  {e.heading}
                </Typography>
                {e.linkNames.map((el, index) => (
                  <div>
                    <form onSubmit={handleSubmit}>
                      <TextField
                        id={index}
                        label={el}
                        placeholder={el}
                        multiline
                      />
                      <Button
                        style={{ marginTop: "1rem", marginLeft: "1.5rem" }}
                        id={i}
                        variant="contained"
                        color="primary"
                        type="submit"
                      >
                        change
                      </Button>
                    </form>
                  </div>
                ))}
              </div>
            </Grid>
          </>
        ))}
      </ul>
      <Grid
        style={{ textAlign: "center", marginTop: "2rem" }}
        direction="row"
        container
        spacing={0}
      >
        <div style={{ textAlign: "left", display: "grid" }}>
          <Typography style={{ marginBottom: "1rem" }} variant="h5">
            Temperature Prediction
          </Typography>
          <div>
            {/* <TextField
                        id={index}
                        label={el}
                        placeholder={el}
                        multiline
                      /> */}
            <div
              style={{
                width: "500px",
                padding: "30px",
                border: "solid 1px black",
              }}
              onDragOver={(e) => {
                e.preventDefault();
              }}
              onDrop={(e) => {
                e.preventDefault();
                console.log(e.dataTransfer.files);
                convertCsvToJson(e.dataTransfer.files);
              }}
            >
              Drag and drop csv files
            </div>
            <Button
              style={{ marginTop: "1rem", marginLeft: "1.5rem" }}
              // id={i}
              variant="contained"
              color="primary"
              type="submit"
              onClick={() => {
                enterTemperatureRecord();
              }}
            >
              Upload CSV
            </Button>
          </div>
        </div>
      </Grid>
    </div>
  );
};
Admin.getInitialProps = async ({ query }) => {
  const data = await fetch(
    "https://us-central1-express-439e0.cloudfunctions.net/app/getWeather"
  );
  const json = await data.json();
  const { token } = keys;
  const id = query.id;
  const splitID = id.split(".")[0];
  const user = token.includes(splitID);

  return {
    userIn: user,
    dataSet: json.agromet,
  };
};
export default Admin;
