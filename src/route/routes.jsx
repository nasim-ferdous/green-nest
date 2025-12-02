import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home";
import Plants from "../pages/Plants";
import MyProfile from "../pages/MyProfile";
import PlantDetails from "../pages/PlantDetails";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import PrivetRoute from "../provider/PrivetRoute";
import Loading from "../components/Loading";
import AboutUs from "../pages/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch("../data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/plants",
        element: <Plants></Plants>,
        loader: () => fetch("../data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/myprofile",
        element: (
          <PrivetRoute>
            <MyProfile></MyProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/plantdetail/:id",
        element: <PlantDetails></PlantDetails>,
        loader: () => fetch("../data.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
    ],
  },
]);
