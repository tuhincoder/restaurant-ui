import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AboutUs from "@/pages/AboutUs";
import Reservation from "@/pages/Reservation";
import BookATable from "@/pages/BookATable";
import ContactUs from "@/pages/ContactUs";
import ErrorPage from "@/pages/shared/ErrorPage";
import DishesDetails from "@/pages/menu/dishes/DishesDetails";
import Hours from "@/pages/hours/Hours";
import AllMenu from "@/pages/menu/AllMenu";
import HappyCustomers from "@/pages/HappyCustomers/HappyCustomers";

const router = createBrowserRouter([
  {
    path: "/",

    element: <MainLayout />,

    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "allMenu",
        element: <AllMenu />,
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
        path: "hours",
        element: <Hours />,
      },
      {
        path: "happy-customers",
        element: <HappyCustomers />,
      },

      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "bookTable",
        element: <BookATable />,
      },
      {
        path: "/singleDishes/:id",
        element: <DishesDetails></DishesDetails>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-server-delta-lyart.vercel.app/singleDishes/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
