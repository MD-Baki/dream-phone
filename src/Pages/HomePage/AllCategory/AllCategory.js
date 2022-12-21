import { useQuery } from "@tanstack/react-query";
import React from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import CategoryCart from "./CategoryCart";

const AllCategory = () => {
    const { data: categories = [], isLoading } = useQuery({
        queryKey: ["productList"],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URI}/productsCategories`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="uppercase py-32">
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
