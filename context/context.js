import React, { Component, createContext, useState } from "react";
import api from "../api/auth";
import Alert from "@material-ui/lab/Alert";
import axios from "axios";

export const DataContext = createContext();

export class Context extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keySet: {},
      Steps: [],
      isSignedIn: false,
      isError: false,
      open: false,
    };
  }

  componentDidMount() {
    const wallSet = [
      {
        label: "img_1",
        path: "/img/wall_1.png",
      },
      {
        label: "img_2",
        path: "/img/wall_2.png",
      },
      {
        label: "img_3",
        path: "/img/wall_3.png",
      },
    ];
    const keyData = {
      advisory: "/img/advisory.png",
      waterTank: "/img/twater.png",
      rainAnalyse: "/img/analyse.png",
      drought: "/img/drought.png",
      weatherAround: "/img/wlocation.png",
      weatherForecast: "/img/dropp.png",
    };
    this.setState({ keySet: keyData });
    this.setState({ Steps: wallSet });
  }

  render() {
    const excelData = async () => {
      try {
        await axios
          .create(
            "https://us-central1-express-439e0.cloudfunctions.net/app/apiCall"
          )
          .get("/")
          .then((res) => console.log(res.data))
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    const handleLogin = async ({ email, password }) => {
      try {
        const res = await api.post("/signin", { email, password });
        await this.setState({ isSignedIn: true });
        setOpen(false);
      } catch (error) {
        this.setState({ isError: true });
        console.log(error);
      }
    };

    const setOpen = (e) => {
      this.setState({ open: e });
    };

    const handleError = () => {
      this.setState({ isError: false });
    };

    return (
      <div>
        <DataContext.Provider
          value={{
            ...this.state,
            handleLogin,
            handleError,
            setOpen,
            excelData,
          }}
        >
          {this.props.children}
        </DataContext.Provider>
      </div>
    );
  }
}
