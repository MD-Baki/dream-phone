import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import DashboardNav from "../Pages/SharedPages/DashboardNav/DashboardNav";

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className="fixed w-full ">
            <div className=" mx-auto">
                <DashboardNav></DashboardNav>

                <div className="drawer drawer-mobile">
                    <input
                        id="dashboard-drawer"
                        type="checkbox"
                        className="drawer-toggle"
                    />
                    <div className="drawer-content bg-[#e9eef0]  ">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label
                            htmlFor="dashboard-drawer"
                            className="drawer-overlay"
                        ></label>
                        <div className="menu p-4 w-80 bg-base-100 text-base-content">
                            <div className="border-2 px-4 bg-[#e9eef0] mb-6 rounded-xl">
                                <img
                                    src={user?.photoURL}
                                    alt=""
                                    className="shadow-xl border h-32 w-32 rounded-xl mx-auto my-4"
                                />
                                <div className="text-center py-4 border-t-2 border-primary  text-primary">
                                    <h3 className="font-bold text-lg">
                                        {user?.displayName}
                                    </h3>
                                    <p className="font-medium">
                                        Email: {user?.email}
                                    </p>
                                </div>
                            </div>
                            <ul className="grid gap-5">
                                <li>
                                    <NavLink to="/dashboard" className="border">
                                        MY Orders
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allUsers"
                                        className="border"
                                    >
                                        All Users
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allSeller"
                                        className="border"
                                    >
                                        All Seller
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/addProduct"
                                        className="border"
                                    >
                                        Add Product
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/dashboard/allProducts"
                                        className="border"
                                    >
                                        All Products
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/home" className="border">
                                        Back Home
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
