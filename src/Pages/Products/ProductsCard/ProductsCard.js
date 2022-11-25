import React from "react";
import "./ProductsCard.css";

const ProductsCard = () => {
    return (
        <div>
            <div className="relative">
                <img
                    src="https://images.pexels.com/photos/11237829/pexels-photo-11237829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                />
                <div className="absolute top-[10px] right-0 shadow-lg">
                    <p className="mark bg-orange-600 text-white pr-3 pl-7 py-px lg:py-2  uppercase">
                        used phone
                    </p>
                </div>
            </div>
            <h2>Iphone 11</h2>
        </div>
    );
};

export default ProductsCard;
