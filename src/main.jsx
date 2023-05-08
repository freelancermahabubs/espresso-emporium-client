import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Page/Home/Home/Home.jsx";
import ErrorPage from "./components/Page/ErrorPage.jsx";
import Main from "./components/Layout/Main/Main";
import AddCoffee from "./components/Page/AddCoffee/AddCoffee";
import UpdateCoffee from "./components/Page/UpdateCoffee/UpdateCoffee";
import CoffeeDetails from "./components/Page/CoffeeDetails/CoffeeDetails";
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://espresso-emporium-server-freelancermahabubs.vercel.app/coffees"
          ),
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-freelancermahabubs.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "coffeeDetails/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://espresso-emporium-server-freelancermahabubs.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
