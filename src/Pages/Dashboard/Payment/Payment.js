import { Elements } from "@stripe/react-stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Spinner from "../../../Components/Spinner/Spinner";

const stripePromise = loadStripe(process.env.REACT_APP_stripe_PK);

const Payment = () => {
    const booking = useLoaderData();
    const navigation = useNavigation();
    if (navigation.state === "loading") {
        return <Spinner></Spinner>;
    }
    return (
        <div className="py-10 px-5 text-center">
            <h3 className="text-2xl">Payment for {booking.productName}</h3>
            <p>
                Please pay <strong>TK {booking.price}</strong> to buy this
                product
            </p>
            <div className="w-7/12 mx-auto pt-6">
                <Elements stripe={stripePromise}>
                    <CheckoutForm booking={booking} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
