import React, { useEffect, useState } from "react";
import keys from "../api/admin.json";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const Admin = ({ userIn, dataSet }) => {
  const router = useRouter();
  const [input, setInput] = useState();

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
  };
  useEffect(() => {
    !userIn ? router.push("/illegalEntry") : null;
  }, []);

  return (
    <div>
      <ul>
        {dataSet.map((e, i) => (
          <>
            {
              i < 5 ? (
                <Grid
                  style={{ textAlign: "center", marginTop: "2rem" }}
                  direction="row"
                  container
                  spacing={0}
                >
                  <div style={{ textAlign: "left", display: "grid" }}>
                    <Typography style={{ marginBottom: "1rem" }} variant="h5">
                      {e.heading}
                    </Typography>
                    {e.linkNames.map((el, i) => (
                      <div>
                        <TextField
                          id="standard-textarea"
                          label={el}
                          placeholder="Confidential"
                          multiline
                          onChange={handleChange}
                        />
                        <Button
                          onClick={() => console.log("Clicked")}
                          style={{ marginTop: "1rem", marginLeft: "1.5rem" }}
                          variant="contained"
                          color="primary"
                        >
                          change
                        </Button>
                      </div>
                    ))}
                  </div>
                </Grid>
              ) : null
              // <Grid
              //   style={{ textAlign: "center", marginTop: "2rem" }}
              //   direction="row"
              //   justify="center"
              //   container
              //   spacing={0}
              // >
              //   <Typography variant="h5">{e.heading}</Typography>
              //   {Object.keys(e.subHeadings).map((e) => {
              //     <Typography variant="h6">{e}</Typography>;
              //   })}
              // </Grid>
            }
          </>
        ))}
      </ul>
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
