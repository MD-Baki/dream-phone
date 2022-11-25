import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AuthContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm();
    // const navigate = useNavigate();
    const imgHostkey = process.env.REACT_APP_imgbb_key;
    const { user } = useContext(AuthContext);

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URI}/productsCategories`)
            .then((res) => res.json())
            .then((data) => setCategories(data));
    });

    const handleSignUp = (data) => {
        const image = data.photo[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imgHostkey}`;
        fetch(url, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((imgData) => {
                if (imgData.success) {
                    const product = {
                        seller: user?.displayName,
                        email: user?.email,
                        brand: data.brand,
                        productName: data.productName,
                        image: imgData.data.url,
                        purchase: data.purchase,
                        selling: data.selling,
                        location: data.location,
                        details: data.details,
                    };

                    fetch(`${process.env.REACT_APP_API_URI}/allProducts`, {
                        method: "POST",
                        headers: {
                            "content-type": "application/json",
                        },
                        body: JSON.stringify(product),
                    })
                        .then((res) => res.json())
                        .then((result) => {
                            console.log(result);
                            toast.success("Product Add Successfully");
                            // navigate("/dashboard/addProduct");
                        });
                }
            });
    };

    return (
        <div className="w-11/12 lg:w-9/12 mx-auto pt-16 pb-32">
            <div className="bg-primary bg-opacity-30 py-10 rounded-xl shadow-xl">
                <div className="inline-block">
                    <h4 className="text-2xl font-medium uppercase text-white bg-gradient-to-r from-primary to-[#083f50] text-center py-2 mb-5 shadow-lg pl-9 pr-10 rounded-r-lg">
                        Add Your Product for Sell
                    </h4>
                </div>
                <form
                    onSubmit={handleSubmit(handleSignUp)}
                    className="px-8 grid grid-cols-2 gap-x-6 gap-y-2"
                >
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input
                            {...register("name")}
                            type="text"
                            defaultValue={user?.displayName}
                            disabled
                            className="input input-primary"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                            {...register("email")}
                            type="email"
                            defaultValue={user?.email}
                            disabled
                            className="input input-primary"
                        />
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Product Photo</span>
                        </label>

                        <input
                            {...register("photo", {
                                required: "Required",
                            })}
                            type="file"
                            className="file-input file-input-primary w-full"
                        />
                        {errors.photo && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.photo?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">
                                Select Brand Name
                            </span>
                        </label>
                        <select
                            {...register("brand", { required: true })}
                            className="select select-primary w-full"
                        >
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Purchase Price</span>
                        </label>
                        <input
                            {...register("purchase", {
                                required: "Required",
                            })}
                            type="number"
                            placeholder="Purchase Price"
                            className="input input-primary"
                        />
                        {errors.purchase && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.purchase?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Selling Price</span>
                        </label>
                        <input
                            {...register("selling", {
                                required: "Required",
                            })}
                            type="number"
                            placeholder="Selling Price"
                            className="input input-primary"
                        />
                        {errors.selling && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.selling?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Product Name</span>
                        </label>
                        <input
                            {...register("productName", {
                                required: "Required",
                            })}
                            type="text"
                            placeholder="Product Name"
                            className="input input-primary"
                        />
                        {errors.productName && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.productName?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control col-span-2">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Pick Up Location</span>
                        </label>
                        <input
                            {...register("location", {
                                required: "Required",
                            })}
                            type="text"
                            placeholder="Location"
                            className="input input-primary"
                        />
                        {errors.location && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.location?.message}
                            </p>
                        )}
                    </div>

                    <div className="form-control col-span-2">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Product Details</span>
                        </label>
                        <textarea
                            {...register("details", {
                                required: "Required",
                            })}
                            className="textarea textarea-primary h-40"
                            placeholder="Product Details"
                        ></textarea>
                        {errors.details && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.details?.message}
                            </p>
                        )}
                    </div>

                    <input
                        type="submit"
                        value="Add Product"
                        className="btn btn-block btn-primary bg-gradient-to-r from-primary to-[#083f50] text-white mt-5 shadow-lg col-span-2"
                    />
                </form>
            </div>
        </div>
    );
};

export default AddProduct;
