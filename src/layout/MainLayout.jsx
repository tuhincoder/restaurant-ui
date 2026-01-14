import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import LiveChat from "@/components/liveChat/LiveChat";
import ScrollToTop from "@/components/common/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Navbar></Navbar>
      <Outlet />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default MainLayout;
