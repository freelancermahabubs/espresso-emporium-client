import React from "react";
import { BsEyeFill } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../../useTitle";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  useTitle("CoffeeCard");
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://espresso-emporium-server-freelancermahabubs.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="bg-[ #F5F4F1] lg:z-auto md:z-50 z-50">
      <div className="border rounded-md  ">
        <div className="grid grid-cols-3 bg-[#F5F4F1] items-center justify-center">
          <img className="h-40" src={photo} alt="" />
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
          </div>
          <div className="lg:ml-24 ml-8 space-y-4">
            <Link to={`/coffeeDetails/${_id}`}>
              <BsEyeFill className="bg-[#D2B48C] text-2xl rounded px-1" />
            </Link>
            <Link to={`/updateCoffee/${_id}`}>
              <FaRegEdit className="bg-[#3C393B] text-white mt-4 text-2xl rounded px-1" />
            </Link>
            <button onClick={() => handleDelete(_id)}>
              <MdDeleteForever className="bg-[#EA4744] text-2xl rounded px-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
