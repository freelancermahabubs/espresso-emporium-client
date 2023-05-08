import React, { useState } from "react";
import Banner from "../../../../assets/banner.png";
import Navbar from "../../../Layout/Navbar/Navbar";
import icon1 from "../../../../assets/icons/1.png";
import icon2 from "../../../../assets/icons/2.png";
import icon3 from "../../../../assets/icons/3.png";
import icon4 from "../../../../assets/icons/4.png";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeCard from "../../CoffeeCard/CoffeeCard";
import Reactangle1 from "../../../../assets/cups/Rectangle10.png";
import Reactangle2 from "../../../../assets/cups/Rectangle11.png";
import Reactangle3 from "../../../../assets/cups/Rectangle12.png";
import Reactangle4 from "../../../../assets/cups/Rectangle13.png";
import Reactangle5 from "../../../../assets/cups/Rectangle14.png";
import Reactangle6 from "../../../../assets/cups/Rectangle15.png";
import bg1 from "../../../../assets/cups/bg1.png";
import bg2 from "../../../../assets/cups/bg2.png";
import useTitle from "../../../../useTitle";
const Home = () => {
  useTitle("Home");
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <div>
      <div
        style={{
          backgroundImage: `linear-gradient(140deg, #181818 0%, rgba(24, 24, 24, 0.822917) 24.48%, rgba(24, 24, 24, 0) 100%), url(${Banner})`,
          backgroundRepeat: "no-repeat",
          height: "75vh",
          width: "700",
          backgroundSize: "cover",
        }}
      >
        <div className="grid lg:grid-cols-2 items-center lg:h-96">
          <div></div>
          <div className="lg:mr-4 mt-24 lg:mt-0 lg:ml-0 ml-4 ">
            <h3 className="lg:text-4xl header-text text-white">
              Would you like a Cup of Delicious Coffee?
            </h3>
            <p className="text-white ">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <Link>
              <button className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-4  h-55  bg-[#ECEAE3] lg:justify-center lg:items-center  lg:pl-16 lg:pr-7">
        <div className="lg:px-5 px-12  space-y-3 mb-4  mt-3">
          <img src={icon1} alt="icon1" />
          <h2 className="header-text font-semibold text-black text-2xl">
            Awesome Aroma
          </h2>
          <p>
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="lg:px-5 px-12 space-y-3 mb-4  mt-3">
          <img src={icon2} alt="icon2" />
          <h2 className="header-text font-semibold text-black text-2xl">
            High Quality
          </h2>
          <p>We served the coffee to you maintaining the best quality</p>
        </div>
        <div className="lg:px-5 px-12 space-y-3 mb-4  mt-3">
          <img src={icon3} alt="icon3" />
          <h2 className="header-text font-semibold text-black text-2xl">
            Pure Grades
          </h2>
          <p>
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="lg:px-5 px-12 space-y-3 mb-4 mt-3">
          <img src={icon4} alt="icon4" />
          <h2 className="header-text font-semibold text-black text-2xl">
            Proper Roasting
          </h2>
          <p>Your coffee is brewed by first roasting the green coffee beans</p>
        </div>
      </div>
      <div className="text-center my-16">
        <h4 className="">--- Sip & Savor ---</h4>
        <h2 className="header-text text-4xl font-semibold mb-4">
          Our Popular Products
        </h2>
        <Link
          className=" text-white cursor-pointer  header-text bg-gradient-to-r from-purple-500
          to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none
          text-xl focus:ring-purple-200 dark:focus:ring-purple-800 font-medium
          rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
          to="/addCoffee"
        >
          Add Coffee
        </Link>
      </div>

      <div className="grid relative lg:grid-cols-2  lg:px-12 md:grid-cols-2 my-20 gap-4">
        <img className="absolute  bottom-80 w-40  left-0 " src={bg2} alt="" />
        <img className="absolute right-0 " src={bg1} alt="bg1" />
        {coffees.map((coffee) => (
          <CoffeeCard
            key={coffee._id}
            coffee={coffee}
            setCoffees={setCoffees}
            coffees={coffees}
          />
        ))}
      </div>
      <div>
        <p className="text-center">Follow Us Now</p>
        <h1 className="header-text font-semibold text-3xl text-center">
          Follow on Instagram
        </h1>
      </div>
      <div className="grid gap-3 px-2 lg:px-32 md:grid-cols-2 my-5 lg:grid-cols-3">
        <img className="min-h-full" src={Reactangle1} alt="Reactangle1" />
        <img className="min-h-full" src={Reactangle2} alt="Reactangle2" />
        <img className="min-h-full" src={Reactangle3} alt="Reactangle3" />
        <img className="min-h-full" src={Reactangle4} alt="Reactangle4" />
        <img className="min-h-full" src={Reactangle5} alt="Reactangle5" />
        <img className="min-h-full" src={Reactangle6} alt="Reactangle6" />
      </div>
    </div>
  );
};

export default Home;
