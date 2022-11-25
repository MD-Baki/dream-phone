import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/allProducts`)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    });

    return (
        <div>
            <div className="h-[300px] overflow-hidden rounded-lg shadow-lg">
                <img
                    src="https://i.ibb.co/d2GGpqb/24595852-2202-w039-n003-110b-p1-110.jpg"
                    alt=""
                />
            </div>
            <div className="pb-10 px-5 lg:px-0">
                <h2 className="text-2xl font-medium text-primary text-center py-6">
                    All Products
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductsCard key={product._id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
