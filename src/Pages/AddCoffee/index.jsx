import { Link } from "react-router-dom";
import containerBg from "../../assets/container-bg.svg";
import { MdOutlineKeyboardBackspace } from "../../assets/icons/Icons";
import SectionHeading from "../../components/ui/SectionHeading";
import InputWithLabel from "../../components/ui/InputWithLabel";
import Swal from "sweetalert2";

const AddCoffee = () => {
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
    const coffee = { name, chef, supplier, taste, category, details, photo };

    console.log(coffee);
    fetch("https://coffee-shop-server-pink.vercel.app/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.insertedId) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
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
            <SectionHeading className={"text-black text-center"}>
              Add New Coffee
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
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee chef"}
              label={"Chef"}
              name={"chef"}
            />
            <InputWithLabel
              name={"supplier"}
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee supplier"}
              label={"Supplier"}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee taste"}
              label={"Taste"}
              name={"taste"}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee category"}
              label={"Category"}
              name={"category"}
            />
            <InputWithLabel
              className={"col-span-12 lg:col-span-6"}
              placeholder={"Enter coffee details"}
              label={"Details"}
              name={"details"}
            />
            <InputWithLabel
              className={"col-span-12 "}
              placeholder={"Enter photo URL"}
              label={"Photo"}
              name={"photo"}
            />
            <input
              type="submit"
              value="Add Coffee"
              className="col-span-12 py-4 rounded-md bg-[#D2B48C] border-2 border-coffee text-coffee font-rancho text-2xl font-normal cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
