import React from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
    return (
        <div>
            <div className="h-[300px] overflow-hidden rounded-lg shadow-lg">
                <img
                    src="https://i.ibb.co/d2GGpqb/24595852-2202-w039-n003-110b-p1-110.jpg"
                    alt=""
                />
            </div>
            <div>
                <h2 className="text-2xl font-medium text-primary text-center py-6">
                    All Products
                </h2>
                <div className="grid grid-cols-3 gap-8">
                    <ProductsCard />
                </div>
            </div>
        </div>
    );
};

export default Products;
