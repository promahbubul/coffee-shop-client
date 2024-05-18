import { Link } from "react-router-dom";
import headerBg from "../../assets/header-bg.svg";
import headerlogo from "../../assets/header-logo.svg";
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div className="">
      <div style={{ backgroundImage: `url('${headerBg}')` }} className="py-6 ">
        <Link to={"/"}>
          <img src={headerlogo} alt="" className="mx-auto" />
        </Link>
      </div>
      <NavMenu />
    </div>
  );
};

export default Header;
