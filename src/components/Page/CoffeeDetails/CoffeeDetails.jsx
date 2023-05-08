import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import updateImg from "../../../assets/cups/upadteimg.png";
import useTitle from "../../../useTitle";
const CoffeeDetails = () => {
  useTitle("CoffeeDetails");
  const coffeeDetails = useLoaderData();
  const { name, chef, supplier, taste, category, details, photo } =
    coffeeDetails;
  return (
    <div
      style={{
        backgroundImage: ` url(${updateImg})`,
        backgroundRepeat: "no-repeat",
        height: "75vh",
        width: "700",
        backgroundSize: "cover",
      }}
    >
      <div className="flex items-center lg:ml-40 mt-8 mb-0">
        <BsArrowLeft className="text-3xl" />
        <Link
          to="/"
          className="btn text-3xl font-semibold header-text text-black  text-center "
        >
          Back to home
        </Link>
      </div>
      <div className="bg-[ #F5F4F1] w-[64%] min-h-full mx-auto mt-8">
        <h2 className="text-2xl header-text">Niceties</h2>
        <div className="border rounded-md min-h-full  lg:w-full ">
          <div className="grid grid-cols-3 items-center justify-evenly">
            <img className="min-h-full" src={photo} alt="" />
            <div>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  Name:
                </span>
                <span className="text-gray-500"> {name}</span>
              </p>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  Chef:
                </span>
                <span className="text-gray-500"> {chef}</span>
              </p>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  Supplier:
                </span>
                <span className="text-gray-500"> {supplier}</span>
              </p>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  taste:
                </span>
                <span className="text-gray-500"> {taste}</span>
              </p>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  category:
                </span>
                <span className="text-gray-500"> {category}</span>
              </p>
              <p>
                <span className="text-black mr-1 text-sm font-semibold">
                  details:
                </span>
                <span className="text-gray-500"> {details}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
