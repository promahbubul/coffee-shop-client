import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import AddCoffee from "../../Pages/AddCoffee";
import UpdateCoffee from "../../Pages/UpdateCoffee";
import Home from "../../Pages/Home";
import SingleCoffee from "../../Pages/SingleCoffee";
import Signin from "../../Pages/Signin";
import Signup from "../../Pages/Signup";
import Users from "../../Pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-shop-server-pink.vercel.app/coffee"),
      },
      { path: "/addCoffee", element: <AddCoffee /> },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-pink.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/coffee/:id",
        element: <SingleCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-shop-server-pink.vercel.app/coffee/${params?.id}`
          ),
      },
      {
        path: "/signin",
        element: <Signin />,
      },

      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://coffee-shop-server-pink.vercel.app/user"),
      },
    ],
  },
]);

export default router;
