import React, { createContext, useEffect, useState } from "react";
import api from "../api/auth";
import { useRouter } from "next/router";

export const DataContext = createContext();

export function Context(props) {
  const router = useRouter();
  const [keySet, setKeySet] = useState({});
  const [Steps, setSteps] = useState([]);
  const [isError, setIsError] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
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
    setKeySet(keyData);
    setSteps(wallSet);
  }, []);

  const handleLogin = async ({ email, password }) => {
    try {
      const res = await api.post("/signin", { email, password });
      setIsSignedIn(true);
      router.push("/login");
      setOpen(false);
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div>
      <DataContext.Provider
        value={{
          keySet,
          open,
          setOpen,
          isError,
          setIsError,
          Steps,
          isSignedIn,
          handleLogin,
        }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
}
