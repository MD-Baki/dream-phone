import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import { FaBars, FaUserAlt } from "react-icons/fa";
import Profile from "./Profile";

const Navbar = () => {
    const { user } = useContext(AuthContext);
    const [open, setOpen] = useState(false);
    console.log(user);

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
            {!user && (
                <>
                    <li className="font-medium rounded-lg overflow-hidden">
                        <NavLink to="/signUp">sign Up</NavLink>
                    </li>
                    <li className="font-medium rounded-lg overflow-hidden">
                        <NavLink to="/signIn">sign In</NavLink>
                    </li>
                </>
            )}
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
                        {user?.uid ? (
                            <div
                                onClick={() => setOpen(!open)}
                                className="relative ml-3"
                            >
                                {user?.photoURL ? (
                                    <Link>
                                        <img
                                            title={user?.displayName}
                                            src={user?.photoURL}
                                            alt=""
                                            className="rounded-full h-10 w-10"
                                        />
                                    </Link>
                                ) : (
                                    <FaUserAlt />
                                )}
                                <div
                                    className={`absolute z-10 top-full right-0 ${
                                        open ? "block" : "hidden"
                                    }`}
                                >
                                    <Profile></Profile>
                                </div>
                            </div>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
