import React, { useEffect, useState } from "react";
import CategoryCart from "./CategoryCart";

const AllCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/productsCategories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    });

    return (
        <div className="uppercase py-6">
            <h2 className="text-2xl font-medium text-primary text-center pb-5">
                All Category
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 px-4 lg:px-0">
                {categories.map((category) => (
                    <CategoryCart
                        key={category._id}
                        category={category}
                    ></CategoryCart>
                ))}
            </div>
        </div>
    );
};

export default AllCategory;
