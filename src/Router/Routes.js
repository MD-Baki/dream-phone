import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/Dashboard/AddProduct/AddProduct";
import AllProducts from "../Pages/Dashboard/AllProducts/AllProducts";
import AllSeller from "../Pages/Dashboard/AllSeller/AllSeller";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import Home from "../Pages/HomePage/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                path: "/dashboard/allUsers",
                element: <AllUsers></AllUsers>,
            },
            {
                path: "/dashboard/addProduct",
                element: <AddProduct></AddProduct>,
            },
            {
                path: "/dashboard/allSeller",
                element: <AllSeller></AllSeller>,
            },
            {
                path: "/dashboard/allProducts",
                element: <AllProducts></AllProducts>,
            },
        ],
    },
]);
