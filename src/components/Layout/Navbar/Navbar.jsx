import React from "react";
import logo from "../../../assets/logo1.png";
import useTitle from "../../../useTitle";
const Navbar = () => {
  useTitle("Navbar");
  return (
    <div className="bg-black flex lg:justify-center lg:items-center gap-3">
      <figure className="w-12">
        <img src={logo} alt="logo" />
      </figure>
      <h2 className="header-text text-white lg:text-5xl font-bold">
        Espresso Emporium
      </h2>
    </div>
  );
};

export default Navbar;
