import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link, useRouteError } from "react-router-dom";
import ErrorMessage from "../../assets/icons/404.gif";
import Navbar from "../Layout/Navbar/Navbar";
import useTitle from "../../useTitle";
const ErrorPage = () => {
  useTitle("ErrorPage");
  return (
    <>
      <Navbar />
      <section className="mt-8">
        <div className="flex items-center justify-center">
          <BsArrowLeft className="text-3xl" />
          <Link
            to="/"
            className="btn text-3xl font-semibold header-text text-black  text-center "
          >
            Back to home
          </Link>
        </div>
        <div className="lg:my-8  lg:mx-80">
          <img src={ErrorMessage} alt="" />
        </div>
      </section>
    </>
  );
};

export default ErrorPage;
