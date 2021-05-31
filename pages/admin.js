import React, { useEffect, useState } from "react";
import keys from "../api/admin.json";
import { useRouter } from "next/router";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Alert from "@material-ui/lab/Alert";
import api from "../api/auth";

const Admin = ({ userIn, dataSet }) => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
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
  useEffect(() => {
    !userIn ? router.push("/illegalEntry") : null;
  }, []);

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
