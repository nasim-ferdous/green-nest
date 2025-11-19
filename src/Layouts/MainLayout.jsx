import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet, useNavigation } from "react-router";
import Loading from "../components/Loading";

const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <div className="flex flex-col bg-green-100">
      <Navbar></Navbar>
      <div className="flex-1">
        {
          state==="loading"? <Loading></Loading> :<Outlet></Outlet>
        }
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
