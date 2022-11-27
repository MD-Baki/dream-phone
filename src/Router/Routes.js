import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import Home from "../Pages/HomePage/Home/Home";
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
                path: "/signUp",
                element: <SignUp />,
            },
            {
                path: "/signIn",
                element: <SignIn />,
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
        ],
    },
]);
