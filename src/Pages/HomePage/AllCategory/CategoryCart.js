import React from "react";
import { Link } from "react-router-dom";

const CategoryCart = ({ category }) => {
    const { _id, name, img } = category;

    return (
        <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="rounded-lg overflow-hidden shadow-lg"
        >
            <Link to={`/category/${_id}`} className="relative">
                <img src={img} alt="" className="w-full" />
                <div className="absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0 grid items-center justify-center m-0 rounded-lg text-white hover:lg:m-6 hover:m-3 tease-out duration-300 font-light hover:font-medium text-xl hover:text-xl">
                    <p className="">{name}</p>
                </div>
            </Link>
        </div>
    );
};
export default CategoryCart;
