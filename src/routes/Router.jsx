import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Menu from "@/pages/Menu";
import AboutUs from "@/pages/AboutUs";
import Reservation from "@/pages/Reservation";
import BookATable from "@/pages/BookATable";
import ContactUs from "@/pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "aboutUs",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },

      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "bookTable",
        element: <BookATable />,
      },
    ],
  },
]);

export default router;
