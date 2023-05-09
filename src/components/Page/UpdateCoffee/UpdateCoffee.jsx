import React from "react";
import { useLoaderData } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import updateImg from "../../../assets/cups/upadteimg.png";
import useTitle from "../../../useTitle";
const UpdateCoffee = () => {
  useTitle("UpdateCoffee");
  const loadedCoffees = useLoaderData();
  const { _id, name, chef, supplier, taste, category, details, photo } =
    loadedCoffees;
  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(updatedCoffee);
    fetch(`https://coffee-stores-sepia.vercel.app/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };
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
      <form onSubmit={handleUpdateCoffee}>
        <div className="bg-[#F4F3F0]  rounded-md mt-6 lg:w-[75%] mx-auto">
          <h1 className="text-black font-semibold header-text text-center pt-8 lg:text-5xl text-2xl">
            Update Existing Coffee Details
          </h1>
          <p className="text-center text-gray-400 mx-auto px-8 py-8 lg:w-[89%]">
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <div className="flex lg:gap-3 gap-1 px-2 lg:px-8">
            <div className="mb-6 lg:w-1/2 ">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Enter coffee name"
              />
            </div>
            <div className="lg:w-1/2 ">
              <label
                htmlFor="username-error"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >
                Chef
              </label>
              <input
                type="text"
                id="username-error"
                defaultValue={chef}
                name="chef"
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                placeholder="Enter coffee chef"
              />
            </div>
          </div>
          <div className="flex lg:gap-3 gap-1 px-2 lg:px-8">
            <div className="mb-6 lg:w-1/2">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Supplier
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Enter coffee supplier"
              />
            </div>
            <div className="lg:w-1/2">
              <label
                htmlFor="username-error"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >
                Taste
              </label>
              <input
                type="text"
                id="username-error"
                name="taste"
                defaultValue={taste}
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                placeholder="Enter coffee taste"
              />
            </div>
          </div>
          <div className="flex lg:gap-3 gap-1 px-2 lg:px-8">
            <div className="mb-6 lg:w-1/2">
              <label
                htmlFor="username-success"
                className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
              >
                Category
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                id="username-success"
                className="bg-green-50 border border-green-500 text-green-900 placeholder-green-700 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-green-100 dark:border-green-400"
                placeholder="Enter coffee category"
              />
            </div>
            <div className="lg:w-1/2">
              <label
                htmlFor="username-error"
                className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
              >
                Details
              </label>
              <input
                type="text"
                id="username-error"
                name="details"
                defaultValue={details}
                className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
                placeholder="Enter coffee details"
              />
            </div>
          </div>
          <div className="w-[94%] mx-auto">
            <label
              htmlFor="username-error"
              className="block mb-2 text-sm font-medium text-red-700 dark:text-red-500"
            >
              Photo
            </label>
            <input
              type="text"
              id="username-error"
              name="photo"
              defaultValue={photo}
              className="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-2.5 dark:bg-red-100 dark:border-red-400"
              placeholder="Enter photo URL"
            />
          </div>

          <div className="text-center mt-4 ">
            <input
              type="submit"
              className="text-gray-900 header-text cursor-pointer text-xl bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg px-5 py-2.5 text-center dark:focus:ring-[#F7BE38]/50 mr-2  mb-2"
              value="Update Coffee Details"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
