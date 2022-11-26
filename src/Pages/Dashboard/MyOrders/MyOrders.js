import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const MyOrders = () => {
    const { user } = useContext(AuthContext);

    const { data: bookingsProduct = [] } = useQuery({
        queryKey: ["bookingsProduct", user?.email],
        queryFn: async () => {
            const res = await fetch(
                `${process.env.REACT_APP_API_URI}/bookingProduct?email=${user?.email}`
            );
            const data = await res.json();
            return data;
        },
    });

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
                            <th>Purchase</th>
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
                                                Price: ${booking.price}
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
                                    <Link className="btn btn-sm btn-primary text-xs">
                                        Payment
                                    </Link>
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-error bg-gradient-to-r from-red-600 to-orange-600 text-xs text-white">
                                        delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;
