import React from "react";
import logo from "../../../assets/logo1.png";
import footerImage from "../../../assets/cups/footerimg.jpg";
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdEmail, MdLocationOn } from "react-icons/md";
import useTitle from "../../../useTitle";

const Footer = () => {
  useTitle("Footer");
  return (
    <>
      <div
        className="px-20 mt-9"
        style={{
          backgroundImage: ` url(${footerImage})`,
          backgroundRepeat: "no-repeat",
          height: "75vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <img className="w-16 pt-20" src={logo} alt="" />
        <div className="grid lg:grid-cols-2">
          <div>
            <h2 className="header-text text-3xl font-semibold">
              Espresso Emporium
            </h2>
            <p className="text-gray-500 my-5">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
            <div className="flex gap-2 text-2xl">
              <AiFillFacebook />
              <AiFillTwitterSquare />
              <AiFillInstagram />
              <AiFillLinkedin />
            </div>
            <h1 className="header-text text-3xl font-semibold my-5">
              Get in Touch
            </h1>
            <div className="flex items-center gap-2">
              <div className="space-y-2">
                <BsFillTelephoneInboundFill />
                <MdEmail />
                <MdLocationOn />
              </div>
              <div className="text-gray-500">
                <p>+88 01533 333 333</p>
                <p>info@gmail.com</p>
                <p>72, Wall street, King Road, Dhaka</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="header-text mb-4 text-3xl font-semibold">
              Connect with Us
            </h2>
            <div>
              <form>
                <label htmlFor="name"></label>
                <input
                  type="text"
                  name="name"
                  id="first_name"
                  className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Name"
                  required
                />
                <label htmlFor="email"></label>
                <input
                  type="text"
                  name="email"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Email"
                  required
                />

                <label htmlFor="message"></label>
                <textarea
                  id="message"
                  rows="4"
                  className="block p-2.5 mt-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
                <button
                  type="button"
                  className="text-white bg-gradient-to-br mt-4 from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black ">
        <h1 className="text-center text-white text-xl">
          Copyright Espresso Emporium ! All Rights Reserved
        </h1>
      </div> */}
    </>
  );
};

export default Footer;
