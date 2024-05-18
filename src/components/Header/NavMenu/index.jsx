import { NavLink } from "react-router-dom";

const NavMenu = () => {
  return (
    <div className="bg-black-1">
      <div className="flex flex-row font-rancho   text text-white text-2xl font-semibold  items-center justify-center  mx-auto">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black-1 py-5 px-10 transition-all duration-300 ease-in-out"
              : " text-white py-5 px-10 hover:bg-white hover:text-black-1 transition-all duration-300 ease-in-out"
          }
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black-1 py-5 px-10  transition-all duration-300 ease-in-out"
              : " text-white py-5 px-10  hover:bg-white hover:text-black-1 transition-all duration-300 ease-in-out"
          }
          to={"/addCoffee"}
        >
          Add Coffee
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black-1 py-5 px-10  transition-all duration-300 ease-in-out"
              : " text-white py-5 px-10  hover:bg-white hover:text-black-1 transition-all duration-300 ease-in-out"
          }
          to={"/users"}
        >
          Users
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black-1 py-5 px-10  transition-all duration-300 ease-in-out"
              : " text-white py-5 px-10  hover:bg-white hover:text-black-1 transition-all duration-300 ease-in-out"
          }
          to={"/signin"}
        >
          Signin
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "bg-white text-black-1 py-5 px-10  transition-all duration-300 ease-in-out"
              : " text-white py-5 px-10  hover:bg-white hover:text-black-1 transition-all duration-300 ease-in-out"
          }
          to={"/signup"}
        >
          Signup
        </NavLink>
      </div>
    </div>
  );
};

export default NavMenu;
