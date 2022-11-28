import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal";
import Spinner from "../../../Components/Spinner/Spinner";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const [deletingBookedProduct, setDeletingBookedProduct] = useState(null);

    const {
        data: bookingsProduct = [],
        refetch,
        isLoading,
    } = useQuery({
        queryKey: ["bookingsProduct", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URI}/bookingProduct?email=${user?.email}`,
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

    const handleDeleteBookedProduct = (booking) => {
        fetch(
            `${process.env.REACT_APP_API_URI}/bookingsProduct/${booking._id}`,
            {
                method: "DELETE",
                headers: {
                    authorization: `bearer ${localStorage.getItem(
                        "accessToken"
                    )}`,
                },
            }
        )
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(
                        `${booking.productName} Deleted Successfully`
                    );
                }
            });
    };

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
                            <th>Buyer Info</th>
                            <th>Contact Info</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingsProduct.map((booking, i) => (
                            <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask rounded-md h-12 w-12">
                                                <img
                                                    src={booking.productImage}
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {booking.productName}
                                            </div>
                                            <div className="text-sm opacity-70">
                                                Price: {booking.price} TK
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="font-bold">
                                        {booking.buyerName}
                                    </div>
                                    <div className="text-sm opacity-70">
                                        {booking.email}
                                    </div>
                                </td>
                                <td>
                                    <div className="text-sm font-medium">
                                        Phone: {booking.phone}
                                    </div>
                                    <div className="text-sm font-medium">
                                        Pick Up: {booking.pickUpLocation}
                                    </div>
                                </td>
                                <td>
                                    {booking.price && !booking.paid && (
                                        <Link
                                            to={`/dashboard/payment/${booking._id}`}
                                            className="btn btn-sm btn-primary text-xs"
                                        >
                                            Pay Now
                                        </Link>
                                    )}
                                    {booking.price && booking.paid && (
                                        <button className="btn  btn-disabled btn-sm capitalize">
                                            Paid
                                        </button>
                                    )}
                                    <label
                                        onClick={() =>
                                            setDeletingBookedProduct(booking)
                                        }
                                        htmlFor="confirmation-modal"
                                        className="btn btn-sm btn-error bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white ml-2"
                                    >
                                        delete
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {deletingBookedProduct && (
                <ConfirmationModal
                    title={`Are you sure you want to delete`}
                    message={`If you delete ${deletingBookedProduct.productName}. It Cannot be undone`}
                    successAction={handleDeleteBookedProduct}
                    modalData={deletingBookedProduct}
                    action={"Delete"}
                ></ConfirmationModal>
            )}
        </div>
    );
};

export default MyOrders;
