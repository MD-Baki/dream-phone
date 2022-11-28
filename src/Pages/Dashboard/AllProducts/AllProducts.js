import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Spinner from "../../../Components/Spinner/Spinner";
import { FaTrashAlt } from "react-icons/fa";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import { toast } from "react-toastify";

const AllProducts = () => {
    const [deletingProduct, setDeletingProduct] = useState(null);

    const {
        data: productList = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ["productList"],
        queryFn: async () => {
            try {
                const res = await fetch(
                    `${process.env.REACT_APP_API_URI}/allProducts`,
                    {
                        headers: {
                            authorization: `bearer ${localStorage.getItem(
                                "accessToken"
                            )}`,
                        },
                    }
                );
                const data = await res.json();
                return data;
            } catch (error) {}
        },
    });

    const handleMakeAds = (id) => {
        fetch(`${process.env.REACT_APP_API_URI}/allProducts/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Make Ads Successfully");
                    refetch();
                }
            });
    };

    const handleDeleteProduct = (product) => {
        fetch(`${process.env.REACT_APP_API_URI}/allProducts/${product._id}`, {
            method: "DELETE",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(
                        `${product.productName} Deleted Successfully`
                    );
                }
            });
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="flex flex-col p-6 space-y-4 sm:p-10 my-10 mx-5">
            <h2 className="text-xl font-semibold">
                All Products {productList.length}
            </h2>
            <ul className="flex flex-col divide-y divide-gray-700 border-2 px-4 border-primary rounded-lg">
                {productList?.map((product) => (
                    <li
                        key={product._id}
                        className="flex flex-col py-6 sm:flex-row sm:justify-between"
                    >
                        <div className="flex w-full space-x-2 sm:space-x-4">
                            <img
                                className="flex-shrink-0 object-cover w-20 h-20 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 "
                                src={product.image}
                                alt="Polaroid camera"
                            />
                            <div className="flex flex-col justify-between w-full pb-4">
                                <div className="flex justify-between w-full pb-2 space-x-2">
                                    <div className="space-y-1">
                                        <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                            {product.productName}{" "}
                                            <span className="text-xs font-medium capitalize">
                                                {product?.ads}
                                            </span>
                                        </h3>
                                        <p className="text-sm dark:text-gray-700">
                                            Seller:{" "}
                                            <strong>{product.seller}</strong>
                                        </p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-lg font-semibold">
                                            TK {product.selling}
                                        </p>
                                        <p className="text-sm line-through dark:text-gray-600">
                                            TK {product.purchase}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex text-sm divide-x gap-3">
                                    <label
                                        onClick={() =>
                                            setDeletingProduct(product)
                                        }
                                        htmlFor="confirmation-modal"
                                        className="flex gap-1 btn btn-primary btn-sm text-xs btn-outline"
                                    >
                                        <FaTrashAlt /> Remove
                                    </label>
                                    <button
                                        onClick={() =>
                                            handleMakeAds(product._id)
                                        }
                                        className="flex gap-1 btn btn-primary btn-sm text-xs"
                                    >
                                        Add advertisement
                                    </button>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            {deletingProduct && (
                <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingProduct.productName}. It Cannot be undone`}
                    successAction={handleDeleteProduct}
                    modalData={deletingProduct}
                    action={"Delete"}
                ></ConfirmationModal>
            )}
        </div>
    );
};

export default AllProducts;
