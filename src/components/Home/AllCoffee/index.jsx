/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import SectionHeading from "../../ui/SectionHeading";
import { IoEyeSharp, HiPencil, IoMdTrash } from "../../../assets/icons/Icons";
import Swal from "sweetalert2";

const AllCoffee = ({ coffeeList, setCoffeeList }) => {
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
        fetch(`https://coffee-shop-server-pink.vercel.app/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffeeList.filter(
                (coffee) => coffee._id !== id
              );
              setCoffeeList(remaining);
            }
          });
      }
    });
  };
  return (
    <div className="py-28 ">
      <div className="text-center">
        <h3 className="text-xl  text-center  text-black-1 font-normal">
          --- Sip & Savor ---
        </h3>
        <SectionHeading className={"mt-2  "}>
          Our Popular Products
        </SectionHeading>
        <Link
          style={{ textShadow: "2px  2px 4px black" }}
          className="py-4 px-6 mt-4 block w-max text-center mx-auto  border-coffee font-rancho rounded-md bg-cream2 text-2xl font-normal text-white"
          to={"/addCoffee"}
        >
          Add Coffee
        </Link>
      </div>
      <div className="mt-12  grid grid-cols-12 gap-6 bg-white max-w-7xl mx-auto">
        {coffeeList?.map((coffee) => (
          <div
            key={coffee?._id}
            className="bg-[#F5F4F1] flex flex-row items-center gap-10 col-span-6 p-7 rounded-md"
          >
            {/* left */}
            <div className="w-4/12">
              <img src={coffee?.photo} alt="" className="" />
            </div>
            {/* right */}
            <div className="w-8/12 flex flex-row gap-12 justify-between">
              <div className="font-raleway flex flex-col gap-3">
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    Name:{" "}
                  </span>
                  {coffee?.name}
                </p>
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    Chef:
                  </span>{" "}
                  {coffee?.chef}
                </p>
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    Price:
                  </span>{" "}
                  {coffee?.details} Taka
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <Link to={`/coffee/${coffee?._id}`}>
                  <div className="p-2 rounded-md bg-[#D2B48C]">
                    <IoEyeSharp className="text-white text-xl" />
                  </div>
                </Link>
                <Link to={`/updateCoffee/${coffee?._id}`}>
                  <div className="p-2 rounded-md bg-[#3C393B]">
                    <HiPencil className="text-white text-xl" />
                  </div>
                </Link>
                <div
                  onClick={() => handleDelete(coffee?._id)}
                  className="p-2 rounded-md cursor-pointer  bg-[#EA4744]"
                >
                  <IoMdTrash className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCoffee;
