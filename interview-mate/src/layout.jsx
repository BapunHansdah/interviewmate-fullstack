import { Outlet } from "react-router-dom";
import Header from "./Components/header";
import Footer from "./Components/footer";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Layout;