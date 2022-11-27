import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Modal from "../../../Products/ProductsCard/Modal/Modal";
import ProductsCard from "../../../Products/ProductsCard/ProductsCard";

const CategoryItems = () => {
    const items = useLoaderData();
    const [productModal, setProductModal] = useState(null);

    return (
        <div className="py-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {items?.map((product) => (
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
    );
};

export default CategoryItems;
