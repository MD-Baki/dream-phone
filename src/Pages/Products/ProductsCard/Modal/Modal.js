import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";

const Modal = ({ setProduct, product }) => {
    const { user } = useContext(AuthContext);
    const { _id, productName, selling, location, details } = product;

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const userName = form.name.value || "unauthorized";
        const email = form.email.value || "unauthorized";
        const price = form.price.value;
        const sellerLocation = form.sellerLocation.value;
        const pickUpLocation = form.pickUpLocation.value;
        const phone = form.phone.value || "undefined";

        const booking = {
            productId: _id,
            productName: productName,
            buyerName: userName,
            email,
            price,
            sellerLocation,
            pickUpLocation,
            phone,
        };
        console.log(booking);
    };

    return (
        <>
            <input
                type="checkbox"
                id="product-modal"
                className="modal-toggle"
            />
            <div className="modal">
                <div className="modal-box">
                    <div className="border-b pb-3 flex justify-between items-center">
                        <h3 className="font-bold text-lg">{productName}</h3>
                        <label
                            htmlFor="product-modal"
                            className="btn btn-sm btn-circle btn-primary"
                        >
                            X
                        </label>
                    </div>
                    {user?.uid ? (
                        <form
                            onSubmit={handleBooking}
                            className="pt-5 grid gap-3"
                        >
                            <label className="pl-1 text-sm font-medium">
                                User Info
                            </label>
                            <div className="border rounded-lg p-1">
                                <input
                                    name="name"
                                    type="text"
                                    defaultValue={user?.displayName}
                                    disabled
                                    className="input input-bordered w-full mb-2"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    defaultValue={user?.email}
                                    disabled
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label text-sm font-medium">
                                    Selling Price
                                </label>
                                <input
                                    name="price"
                                    type="text"
                                    defaultValue={selling}
                                    disabled
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label text-sm font-medium">
                                    Seller Location
                                </label>
                                <input
                                    name="sellerLocation"
                                    type="text"
                                    defaultValue={location}
                                    disabled
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label text-sm font-medium">
                                    Pick Up Location
                                </label>
                                <input
                                    name="pickUpLocation"
                                    type="text"
                                    placeholder="Location"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="label text-sm font-medium">
                                    Phone Number
                                </label>
                                <input
                                    name="phone"
                                    type="number"
                                    placeholder="Phone Number"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <input
                                className="btn btn-primary bg-gradient-to-r from-primary to-[#083f50] text-white mt-1 shadow-lg"
                                type="submit"
                                value="submit"
                            />
                        </form>
                    ) : (
                        <div className="pt-4">
                            <p>{details}</p>
                            <div className="text-right pt-4">
                                <Link to="/signIn" className="btn btn-primary ">
                                    Login First
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Modal;
