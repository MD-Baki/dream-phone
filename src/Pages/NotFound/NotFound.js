import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2">
            <img src="https://i.ibb.co/cJyYMDR/aa.jpg" alt="" />
            <div className="text-center">
                <Link
                    className="btn btn-error bg-gradient-to-r from-red-600 to-orange-600 text-white "
                    to="/home"
                >
                    Back To Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
