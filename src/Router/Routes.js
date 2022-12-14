import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
// import MyFavorite from "../Pages/Dashboard/MyFavorite/MyFavorite";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Payment from "../Pages/Dashboard/Payment/Payment";
import CategoryItems from "../Pages/HomePage/AllCategory/CategoryItems/CategoryItems";
import Home from "../Pages/HomePage/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import Products from "../Pages/Products/Products";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import SellerRoute from "./SellerRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/products",
                element: <Products />,
            },
            {
                path: "/category/:id",
                element: (
                    <PrivateRoute>
                        <CategoryItems />
                    </PrivateRoute>
                ),
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_API_URI}/category/${params.id}`
                    ),
            },
            {
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/signIn",
                element: <SignIn />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
        ],
    },
    {
        path: "/dashboard",
        element: (
            <PrivateRoute>
                <DashboardLayout></DashboardLayout>
            </PrivateRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <MyOrders></MyOrders>,
            },
            {
                path: "/dashboard/myOrders",
                element: <MyOrders></MyOrders>,
            },
            // {
            //     path: "/dashboard/myFavorite",
            //     element: <MyFavorite></MyFavorite>,
            // },
            {
                path: "/dashboard/allUsers",
                element: (
                    <AdminRoute>
                        <AllUsers></AllUsers>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/addProduct",
                element: (
                    <AdminRoute>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/addProducts",
                element: (
                    <SellerRoute>
                        <AddProduct></AddProduct>
                    </SellerRoute>
                ),
            },
            {
                path: "/dashboard/allProducts",
                element: (
                    <AdminRoute>
                        <AllProducts></AllProducts>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/allSeller",
                element: (
                    <AdminRoute>
                        <AllSeller></AllSeller>
                    </AdminRoute>
                ),
            },
            {
                path: "/dashboard/payment/:id",
                element: <Payment></Payment>,
                loader: ({ params }) =>
                    fetch(
                        `${process.env.REACT_APP_API_URI}/bookingProduct/${params.id}`
                    ),
            },
        ],
    },
    { path: "*", element: <NotFound></NotFound> },
]);
