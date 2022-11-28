import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../Context/AuthProvider";

const MyFavorite = () => {
    const { user } = useContext(AuthContext);

    const {
        data: saveProduct = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["saveProduct", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URI}/saveProduct?email=${user?.email}`,
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
        },
    });

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div className="px-5 py-10">
            <h2 className="text-2xl font-bold pb-4">MY Orders</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>Product Info</th>
                            <th>Seller Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {saveProduct?.map((save, i) => (
                            <tr key={save._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-md h-12 w-12">
                                                <img src={save?.image} alt="" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {save.productName}
                                            </div>
                                            <div className="text-sm opacity-70">
                                                Price: {save.selling} TK
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">
                                        {save.seller}
                                    </div>
                                    <div className="text-sm opacity-70">
                                        {save.email}
                                    </div>
                                </td>
                                <td>
                                    <Link className="btn btn-sm btn-primary text-xs mr-2">
                                        Pay Now
                                    </Link>
                                    <label
                                        htmlFor="confirmation-modal"
                                        className="btn btn-sm btn-error bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white"
                                    >
                                        delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyFavorite;
