import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import Modal from "../../Products/ProductsCard/Modal/Modal";
import ProductsCard from "../../Products/ProductsCard/ProductsCard";

const AdsProducts = () => {
    const [productModal, setProductModal] = useState(null);

    const {
        data: products,
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["allproductlis"],
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
        <div className="pb-10">
            <h2 className="text-2xl font-medium text-primary text-center py-6">
                Advertised Products
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {products?.map(
                    (product) =>
                        product?.ads && (
                            <div key={product._id}>
                                <ProductsCard
                                    product={product}
                                    setProduct={setProductModal}
                                />
                            </div>
                        )
                )}
            </div>

            {productModal && (
                <Modal
                    product={productModal}
                    setProduct={setProductModal}
                    refetch={refetch}
                ></Modal>
            )}
        </div>
    );
};

export default AdsProducts;
