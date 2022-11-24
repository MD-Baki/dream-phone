import React from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const menuItems = (
        <>
            <li className="font-medium rounded-lg overflow-hidden">
                <NavLink to="/home">Home</NavLink>
            </li>
            <li className="font-medium rounded-lg overflow-hidden">
                <NavLink to="/products">Products</NavLink>
            </li>
            <li className="font-medium rounded-lg overflow-hidden">
                <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li className="font-medium rounded-lg overflow-hidden">
                <NavLink to="/signUp">sign Up</NavLink>
            </li>
            <li className="font-medium rounded-lg overflow-hidden">
                <NavLink to="/signIn">sign In</NavLink>
            </li>
        </>
    );

    return (
        <div className="fixed w-full z-10">
            <header className="max-w-[1440px] mx-auto border-b-4 border-primary">
                <div className="navbar bg-base-100 justify-between">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="btn btn-primary btn-outline  lg:hidden"
                            >
                                <FaBars />
                            </label>
                            <ul
                                tabIndex={0}
                                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {menuItems}
                            </ul>
                        </div>
                        <Link
                            to="/home"
                            className="md:text-xl text-white font-bold ml-3 px-3 py-2 rounded-lg bg-primary"
                        >
                            Dream Phones
                        </Link>
                    </div>
                    <div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal p-0">
                                {menuItems}
                            </ul>
                        </div>
                        <div className="avatar ml-3">
                            <div className="w-10 rounded-full border-2 p-px border-primary">
                                <img
                                    src="https://placeimg.com/192/192/people"
                                    alt=""
                                    className="rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
