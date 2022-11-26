import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../Components/Spinner/Spinner";
import Modal from "./ProductsCard/Modal/Modal";
import ProductsCard from "./ProductsCard/ProductsCard";

const Products = () => {
    const [productModal, setProductModal] = useState(null);

    const { data: products = [], isLoading } = useQuery({
        queryKey: ["productList"],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URI}/allProducts`
            );
            const data = await res.json();
            return data;
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            {/* <div className="h-[300px] overflow-hidden rounded-lg shadow-lg">
                <img
                    src="https://i.ibb.co/d2GGpqb/24595852-2202-w039-n003-110b-p1-110.jpg"
                    alt=""
                />
            </div> */}
            <div className="pb-10 px-5 lg:px-0">
                <h2 className="text-2xl font-medium text-primary text-center py-6">
                    All Products
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductsCard
                            key={product._id}
                            product={product}
                            setProduct={setProductModal}
                        />
                    ))}
                </div>
                {productModal && (
                    <Modal
                        product={productModal}
                        setProduct={setProductModal}
                    ></Modal>
                )}
            </div>
        </div>
    );
};

export default Products;
