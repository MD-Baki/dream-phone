import React from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = () => {
    return (
        <div className="navbar border-b-2 border-[#ececec] ">
            <div className="flex-1">
                <Link
                    to="/home"
                    className="md:text-xl text-white font-bold ml-3 px-3 py-2 rounded-lg bg-primary"
                >
                    Dream Phones
                </Link>
            </div>
            <div className="flex-none">
                <h4 className="mr-5 border-2 border-primary text-primary font-medium uppercase py-2 px-3 rounded-lg">
                    DashBoard
                </h4>
                <label
                    htmlFor="dashboard-drawer"
                    className="btn btn-primary drawer-button lg:hidden"
                >
                    <FaBars />
                </label>
            </div>
        </div>
    );
};

export default DashboardNav;
