import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../Page/Footer/Footer";
import useTitle from "../../../useTitle";

const Main = () => {
  useTitle("Main");
  return (
    <div>
      <Navbar />
      <div className="min-h-[calc(100vh-0px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
