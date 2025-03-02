import { createBrowserRouter } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import MainLayout from "./layouts/MainLayout";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [{ path: "/", element: <WelcomePage /> }],
  },
]);
