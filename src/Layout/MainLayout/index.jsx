import { Outlet } from "react-router-dom";
import Footers from "../../components/Footer";
import Header from "../../components/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footers />
    </div>
  );
};

export default MainLayout;
