import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Spinner from "../../../Components/Spinner/Spinner";
import { GoVerified } from "react-icons/go";

const AllSeller = () => {
    const {
        data: allSeller = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["allSeller"],
        queryFn: async () => {
            const res = await fetch(`${process.env.REACT_APP_API_URI}/seller`);
            const data = await res.json();
            return data;
        },
    });

    const handleMakeVerify = (id) => {
        fetch(`${process.env.REACT_APP_API_URI}/seller/${id}`, {
            method: "PUT",
            headers: {
                authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success("Make Verified Successfully");
                    refetch();
                }
            });
    };

    if (isLoading) {
        return <Spinner />;
    }

    return (
        <div>
            <div className="px-5 py-10">
                <h2 className="text-2xl font-bold pb-4">All Users</h2>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        <thead>
                            <tr>
                                <th>no</th>
                                <th>Name</th>
                                <th>email</th>
                                <th>User Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {allSeller.map((seller, i) => (
                                <tr key={seller._id}>
                                    <th>{i + 1}</th>
                                    <td className="flex gap-2 items-center">
                                        {seller.name}{" "}
                                        {seller?.verify && (
                                            <GoVerified className="text-info" />
                                        )}
                                    </td>
                                    <td>{seller.email}</td>
                                    <td>{seller.role}</td>
                                    <td>
                                        {seller?.verify ? (
                                            <p className="font-medium text-info">
                                                Verified
                                            </p>
                                        ) : (
                                            <button
                                                onClick={() =>
                                                    handleMakeVerify(seller._id)
                                                }
                                                className="btn btn-sm btn-primary text-xs"
                                            >
                                                Verify Now
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllSeller;
