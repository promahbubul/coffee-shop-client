import { Link, useLoaderData, useNavigate } from "react-router-dom";
import containerBg from "../../assets/container-bg.svg";
import { MdOutlineKeyboardBackspace } from "../../assets/icons/Icons";
import SectionHeading from "../../components/ui/SectionHeading";
import InputWithLabel from "../../components/ui/InputWithLabel";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const navigate = useNavigate();
  console.log(coffee);
  const handleAddCoffee = (e) => {
    e.preventDefault();
    // console.log(e.target.name.value);
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updateCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // console.log(coffee);
    fetch(`https://coffee-shop-server-pink.vercel.app/coffee/${coffee?._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data?.modifiedCount > 0) {
          Swal.fire({
            title: "Upage!",
            text: "Coffee has been Update.",
            icon: "success",
          });
          navigate("/");
        }
      });
    // form.reset();
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
          {/* HEADING */}
          <div className="">
            <SectionHeading className={"text-[#374151] text-center"}>
              Update Existing Coffee Details
            </SectionHeading>
            <p className="mt-8 max-w-4xl mx-auto text-lg font-raleway text-black-1/70 text-center leading-loose font-normal">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>
          <form
            onSubmit={handleAddCoffee}
            className="mt-8 grid grid-cols-12 gap-6"
          >
            <InputWithLabel
              name={"name"}
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee name"}
              label={"Name"}
              defaultValue={coffee.name}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee chef"}
              label={"Chef"}
              name={"chef"}
              defaultValue={coffee.chef}
            />
            <InputWithLabel
              name={"supplier"}
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee supplier"}
              label={"Supplier"}
              defaultValue={coffee.supplier}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee taste"}
              label={"Taste"}
              name={"taste"}
              defaultValue={coffee.taste}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee category"}
              label={"Category"}
              name={"category"}
              defaultValue={coffee.category}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee details"}
              label={"Details"}
              name={"details"}
              defaultValue={coffee.details}
            />
            <InputWithLabel
              className={"col-span-12 "}
              placeholder={"Enter photo URL"}
              label={"Photo"}
              name={"photo"}
              defaultValue={coffee.photo}
            />
            <input
              type="submit"
              value="Update Coffee Details"
              className="col-span-12 py-4 rounded-md bg-[#D2B48C] border-2 border-coffee text-coffee font-rancho text-2xl font-normal cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
