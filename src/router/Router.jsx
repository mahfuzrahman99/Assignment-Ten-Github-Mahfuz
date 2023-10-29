import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import MainLayout from "../layout/MainLayout";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import Login from "../pages/Login/Login";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AddBrand from "../components/AddCoffee/AddBrand";
import Advertisement from "../components/Advertisement";
import AddManagement from "../components/AddManagement";
import AddFetuses from "../components/AddFetuses";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import Register from "../pages/Login/Ragister";
import PrivetRout from "./PrivetRoute";
import UpdateProducts from "../components/UpdateProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch(
            "https://assignment-teen-server-site-ogzkadkvh.vercel.app/addBrands"
          ),
      },
      {
        path: "/AddProduct",
        element: (
          <PrivetRout>
            <AddProduct />
          </PrivetRout>
        ),
      },
      {
        path: "/updateProduct",
        element: <UpdateProducts />,
      },
      {
        path: "updateProduct/:id",
        element: <UpdateProducts />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-teen-server-site-ogzkadkvh.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "/myCart",
        element: (
          <PrivetRout>
            <MyCart />
          </PrivetRout>
        ),
        loader: () =>
          fetch(
            "https://assignment-teen-server-site-ogzkadkvh.vercel.app/cart"
          ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/addBrand",
        element: <AddBrand />,
      },
      {
        path: "/advertisement/:id",
        element: <Advertisement />,
        loader: ({ params }) =>
          fetch(
            `https://assignment-teen-server-site-ogzkadkvh.vercel.app/addBrands/${params.id}`
          ),
      },
      {
        path: "/management",
        element: <AddManagement />,
      },
      {
        path: "/addFetuses",
        element: <AddFetuses />,
      },
      {
        path: `/productDetails/:id`,
        element: (
          <PrivetRout>
            <ProductDetails />
          </PrivetRout>
        ),
        loader: ({ params }) =>
          fetch(
            `https://assignment-teen-server-site-ogzkadkvh.vercel.app/products/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
