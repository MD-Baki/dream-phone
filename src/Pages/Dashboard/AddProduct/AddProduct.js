import React from "react";
import { useForm } from "react-hook-form";

const AddProduct = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const handleSignUp = (data) => {
        console.log(data);
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
                            {...register("name", {
                                required: "Required",
                            })}
                            type="text"
                            placeholder="Seller Name"
                            className="input input-primary"
                        />
                        {errors.name && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.name?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Seller Email</span>
                        </label>
                        <input
                            {...register("email", {
                                required: "Required",
                            })}
                            type="email"
                            placeholder="Your Email"
                            className="input input-primary"
                        />
                        {errors.email && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.email?.message}
                            </p>
                        )}
                    </div>
                    <div className="form-control">
                        <label className="label  font-bold text-secondary">
                            <span className="label-text">Product Photo</span>
                        </label>

                        <input
                            {...register("photoURL", {
                                required: "Required",
                            })}
                            type="url"
                            placeholder="Photo URL"
                            className="input input-primary"
                        />
                        {errors.photoURL && (
                            <p
                                role="alert"
                                className="text-right text-xs font-bold pt-1 pr-2 text-red-600"
                            >
                                {errors.photoURL?.message}
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
                            <option value="samsung">Samsung</option>
                            <option value="iphone">Iphone</option>
                            <option value="redmi">Redmi</option>
                            <option value="realme">Realme</option>
                            <option value="oppo">Oppo</option>
                            <option value="vivo">Vivo</option>
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
