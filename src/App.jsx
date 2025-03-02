import React from "react";
import {ThemeProvider } from "@mui/material";
import { Outlet, RouterProvider } from "react-router-dom";
import { router } from "./router";
import { theme } from "./theme";

const App = () => {
  return (
    <Outlet />
      // <ThemeProvider theme={theme}>
      //   <RouterProvider router={router} />
      // </ThemeProvider>
  );
};

export default App;
