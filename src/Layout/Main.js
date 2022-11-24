import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/SharedPages/Footer/Footer";
import Navbar from "../Pages/SharedPages/Headers/Navbar";

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-[1440px] mx-auto pt-[68px]">
                <Outlet />
            </div>
            <Footer></Footer>
        </>
    );
};

export default Main;
