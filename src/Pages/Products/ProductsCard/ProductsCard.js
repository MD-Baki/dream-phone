import React from "react";
import "./ProductsCard.css";
import {
    FaMapMarkerAlt,
    FaRegCalendarCheck,
    FaClock,
    FaBookmark,
} from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { useQuery } from "@tanstack/react-query";
import { GoVerified } from "react-icons/go";
import Spinner from "../../../Components/Spinner/Spinner";

const ProductsCard = ({ product, setProduct, handleSave }) => {
    const {
        productName,
        image,
        purchase,
        selling,
        location,
        postDate,
        usingYears,
        seller,
        ads,
    } = product;

    const { data: sellerStates = [], isLoading } = useQuery({
        queryKey: ["sellerStates"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URI}/seller`);
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="border rounded-lg shadow-lg pl-5 py-5">
            <div className="relative pr-5">
                <figure>
                    <PhotoProvider>
                        <PhotoView src={image}>
                            <img
                                src={image}
                                style={{ objectFit: "cover" }}
                                alt=""
                                className="w-full cursor-zoom-in"
                            />
                        </PhotoView>
                    </PhotoProvider>
                </figure>
                <div className="absolute top-0 right-0">
                    <p className="mark bg-orange-600 text-white pr-3 pl-7 py-px lg:py-2  uppercase flex gap-2 items-center">
                        <FaClock />
                        {usingYears} Years
                    </p>
                </div>
                <p className="absolute left-0 bottom-3 bg-info text-white px-2 rounded capitalize">
                    {ads}
                </p>
            </div>
            <div className="border-t mr-5">
                <h2 className="text-lg font-medium text-center py-3">
                    {productName}
                </h2>
                <div>
                    <div className="flex justify-between items-center">
                        <div className="text-lg flex items-center gap-1">
                            Seller: <strong>{seller}</strong>
                            {sellerStates.map((states) => (
                                <p key={states._id}>
                                    {states?.name === seller && (
                                        <span>
                                            {states?.verify && (
                                                <GoVerified className="text-info" />
                                            )}
                                        </span>
                                    )}
                                </p>
                            ))}
                        </div>
                        <button
                            onClick={() => handleSave(product)}
                            className="btn btn-primary btn-sm btn-outline"
                        >
                            <FaBookmark />
                        </button>
                    </div>

                    <p className="font-light">
                        <span className="font-medium text-lg">
                            Price: {selling} TK{" "}
                        </span>
                        <span className="font-light line-through text-sm">
                            {purchase} TK
                        </span>
                    </p>
                    <div className="flex justify-between text-stone-600 py-1">
                        <p className="flex items-center gap-1">
                            <FaMapMarkerAlt /> {location}
                        </p>
                        <p className="flex items-center gap-1">
                            <FaRegCalendarCheck /> {postDate}
                        </p>
                    </div>
                </div>

                <div className="pt-2 grid grid-cols-2 gap-2">
                    <button className="btn btn-outline btn-primary btn-sm text-xs btn-block">
                        favorite
                    </button>
                    <label
                        onClick={() => setProduct(product)}
                        htmlFor="product-modal"
                        className="btn btn-primary btn-sm text-xs btn-block"
                    >
                        buy now
                    </label>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;
