import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "../../assets/icons/Icons";
import containerBg from "../../assets/container-bg.svg";
import SectionHeading from "../../components/ui/SectionHeading";
import { FaTrash } from "react-icons/fa6";
import { useState } from "react";
import Swal from "sweetalert2";

const Users = () => {
  const [loaderUser, setLoaderData] = useState(useLoaderData());

  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this user!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://coffee-shop-server-pink.vercel.app/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data?.deletedCount > 0) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User Deleted Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              const remaining = loaderUser.filter((user) => user?._id !== id);
              setLoaderData(remaining);
            }
          });
      }
    });
  };
  return (
    <div
      style={{ backgroundImage: `url('${containerBg}')` }}
      className="pt-12 pb-28  bg-no-repeat bg-top bg-cover object-cover "
    >
      <div className="max-w-7xl mx-auto">
        <Link className="flex flex-row items-center gap-2" to={"/"}>
          <MdOutlineKeyboardBackspace className="text-3xl text-coffee  " />
          <p
            style={{ textShadow: "2px 2px 4px black" }}
            className="text-coffee  font-rancho text-3xl font-normal "
          >
            Back to home
          </p>
        </Link>
        <div className="mt-12 py-16 px-28 bg-cream rounded-md">
          <div className="max-w-xl mx-auto">
            <SectionHeading className={"text-black text-center underline "}>
              All Users
            </SectionHeading>
          </div>
          {/* HEADING */}
          <div className=" grid grid-cols-12 text-xl font-extrabold bg-black text-white py-3 px-10 rounded-sm gap-6  mx-auto  mt-10 border-2">
            <p className="col-span-5 ">Email</p>
            <p className="col-span-4 ">Created At</p>
            <p className="col-span-3  text-right">Action</p>
          </div>
          {/* body */}
          {loaderUser?.map((user) => (
            <div
              key={user?._id}
              className=" grid last:border-b-0 grid-cols-12 text-lg font-semibold text-black  py-3 px-10 rounded-sm gap-6  mx-auto  border-b border-black-1 cursor-pointer hover:bg-black/10 transition-all duration-200 "
            >
              <p className="col-span-5 ">{user?.email}</p>
              <p className="col-span-4 ">{user?.lastLogin}</p>
              <div
                onClick={() => handleDelete(user?._id)}
                className="col-span-3  text-right"
              >
                <button className="bg-red-500 rounded-md p-2 hover:scale-110 transition-all duration-300">
                  <FaTrash className="text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Users;
