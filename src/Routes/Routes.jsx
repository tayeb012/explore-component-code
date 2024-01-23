import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../Component/Banner/App";
import BoxTurning from "../Component/Boxturning/Boxturning";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "box-turning",
    element: <BoxTurning />,
  },
]);

export default Routes;
