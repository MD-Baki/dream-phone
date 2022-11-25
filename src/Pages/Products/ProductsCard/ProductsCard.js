import React from "react";
import "./ProductsCard.css";
import { FaMapMarkerAlt } from "react-icons/fa";

const ProductsCard = ({ product }) => {
    const { productName, image, purchase, selling, location, details } =
        product;

    return (
        <div className="border rounded-lg shadow-lg pl-5 py-5">
            <div className="relative pr-5">
                <img src={image} alt="" />
                <div className="absolute top-0 right-0 shadow-lg">
                    <p className="mark bg-orange-600 text-white pr-3 pl-7 py-px lg:py-2  uppercase">
                        used
                    </p>
                </div>
            </div>
            <div className="border-t mr-5">
                <h2 className="text-lg font-medium text-center py-3">
                    {productName}
                </h2>
                <div className="font-light pb-2">
                    {details.length > 100 ? (
                        <p>{details.slice(0, 100) + "..."}</p>
                    ) : (
                        <p className="text-justify">{details}</p>
                    )}
                </div>
                <div className="flex flex-wrap justify-between gap-2">
                    <p className="flex items-center gap-1">
                        <FaMapMarkerAlt /> {location}
                    </p>
                    <p className="font-light">
                        Price:
                        <span className="line-through px-px">${purchase}</span>
                        <span className="font-medium">${selling}</span>
                    </p>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2">
                    <button className="btn btn-outline btn-primary btn-sm text-xs btn-block">
                        favorite
                    </button>
                    <button className="btn btn-primary btn-sm text-xs btn-block">
                        favorite
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
