import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../Component/Banner/App";
import BoxTurning from "../Component/Boxturning/Boxturning";
import Cube from "../Component/Cube/Cube";
import Chart from "../Component/Chart/Chart";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/box-turning",
    element: <BoxTurning />,
  },
  {
    path: "/cube-turning",
    element: <Cube />,
  },
  {
    path: "/chart",
    element: <Chart />,
  },
]);

export default Routes;
