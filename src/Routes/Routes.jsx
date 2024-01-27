import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../Component/Banner/App";
import BoxTurning from "../Component/Boxturning/Boxturning";
import Cube from "../Component/Cube/Cube";
import Chart from "../Component/Chart/Chart";
import Card from "../Component/Card/Card";
import Slider from "../Component/Slider/Slider";

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
  {
    path: "/card",
    element: <Card />,
  },
  {
    path: "/slider",
    element: <Slider />,
  },
  {
    path: "/ppt-to-pdf",
    element: <Slider />,
  },
]);

export default Routes;
