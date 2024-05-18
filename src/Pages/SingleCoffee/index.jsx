import { Link, useLoaderData } from "react-router-dom";
import SectionHeading from "../../components/ui/SectionHeading";
import containerBg from "../../assets/container-bg.svg";
import { MdOutlineKeyboardBackspace } from "../../assets/icons/Icons";

const SingleCoffee = () => {
  const coffee = useLoaderData();

  console.log(coffee);
  return (
    <div
      style={{ backgroundImage: `url('${containerBg}')` }}
      className="pt-12 pb-28  bg-no-repeat bg-top bg-cover object-cover "
    >
      <div className="max-w-7xl mx-auto">
        <Link className="flex flex-row items-center gap-2" to={"/"}>
          <MdOutlineKeyboardBackspace className="text-3xl text-coffee" />
          <p
            style={{ textShadow: "2px 2px 4px black" }}
            className="text-coffee  font-rancho text-3xl font-normal "
          >
            Back to home
          </p>
        </Link>
        <div className="mt-12 py-16 px-28 bg-cream rounded-md">
          <div
            key={coffee?._id}
            className="bg-[#F5F4F1] flex  flex-row items-center gap-20 col-span-6 rounded-md"
          >
            {/* left */}
            <div className="w-4/12  ">
              <img src={coffee?.photo} alt="" className="mx-auto w-full" />
            </div>
            {/* right */}
            <div className="w-8/12  flex flex-row gap-12 justify-between">
              <div className="font-raleway  flex flex-col gap-3">
                <SectionHeading className={"text-4xl mb-8"}>
                  Niceties
                </SectionHeading>
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
                    Supplier:
                  </span>{" "}
                  {coffee?.supplier}
                </p>
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    taste:
                  </span>{" "}
                  {coffee?.taste}
                </p>
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    category:
                  </span>{" "}
                  {coffee?.category}
                </p>
                <p className="text-xl text-[#5C5B5B] font-normal">
                  <span className="font-semibold text-black-1 text-xl">
                    details:
                  </span>{" "}
                  {coffee?.details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffee;
