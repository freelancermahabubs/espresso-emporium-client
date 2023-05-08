import React from "react";
import logo from "../../../assets/logo1.png";
import useTitle from "../../../useTitle";
const Navbar = () => {
  useTitle("Navbar");
  return (
    <div className="bg-black flex justify-center  lg:items-center gap-3">
      <figure className="w-12 lg:my-2">
        <img src={logo} alt="logo" />
      </figure>
      <h2 className="header-text lg:my-0 my-3 text-white text-xl lg:text-5xl font-bold">
        Espresso Emporium
      </h2>
    </div>
  );
};

export default Navbar;
