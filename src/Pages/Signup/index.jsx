import { Link } from "react-router-dom";

import SectionHeading from "../../components/ui/SectionHeading";
import InputWithLabel from "../../components/ui/InputWithLabel";
import { MdOutlineKeyboardBackspace } from "../../assets/icons/Icons";
import containerBg from "../../assets/container-bg.svg";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Signup = () => {
  const { user, signUp } = useContext(AuthContext);

  console.log(user);

  const handleSignup = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signUp(email, password)
      .then((result) => {
        console.log(result);
        fetch("https://coffee-shop-server-pink.vercel.app/user", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ email }),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data?.insertedId) {
              Swal.fire({
                position: "center",
                icon: "success",
                title: "User register successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          position: "center",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 1500,
        });
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
          {/* HEADING */}
          <div className="max-w-xl mx-auto">
            <SectionHeading className={"text-black text-center underline "}>
              Register Account
            </SectionHeading>
            <p className="text-center my-5 text-lg">
              Already have an Account ?{" "}
              <Link
                className="font-extrabold text-coffee underline"
                to={"/signin"}
              >
                Login
              </Link>
            </p>
          </div>
          <form
            onSubmit={handleSignup}
            className=" grid grid-cols-12 gap-6 max-w-xl mx-auto  mt-10"
          >
            <InputWithLabel
              name={"email"}
              className={"col-span-12 "}
              placeholder={"Enter email address"}
              label={"email"}
            />
            <InputWithLabel
              className={"col-span-12 "}
              placeholder={"Enter password"}
              label={"password"}
              name={"password"}
              type={"password"}
            />

            <input
              type="submit"
              value="Signup"
              className="col-span-12 py-4 rounded-md bg-[#D2B48C] border-2 border-coffee text-coffee font-rancho text-2xl font-normal cursor-pointer"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
