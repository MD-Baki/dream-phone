import React from "react";
import peopleTrust from "../../../../assets/Why-People-Trust-Us.jpg";
import { FaCheckSquare } from "react-icons/fa";

const TrustUs = () => {
    const peopleTrustUs = [
        {
            heading: "One-stop Solution",
            topick: "Sell, buy, repair or accessorize your smartphone",
        },
        {
            heading: "Trained Professionals",
            topick: "Trusted experts to help every step of the way",
        },
        {
            heading: "Amazing Prices",
            topick: "Buying or selling, you’ll surely love our prices",
        },
        {
            heading: "Quick & Hassle-free",
            topick: "Get mobile care in a click at your home or office",
        },
        {
            heading: "Premium Products",
            topick: "Certified, high quality products guaranteed",
        },
    ];

    return (
        <div className="grid md:grid-cols-2 items-center justify-between gap-6 py-32 md:px-5 lg:px-0">
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
            >
                <h2 className="text-2xl font-medium text-primary">
                    Why People Trust Us
                </h2>
                <div className="pt-5 grid gap-y-4">
                    {peopleTrustUs.map((trust, i) => (
                        <div key={i} className="flex gap-1">
                            <FaCheckSquare className="text-xl mt-1" />
                            <div>
                                <h4 className="text-primary font-medium text-lg">
                                    {trust.heading}
                                </h4>
                                <p className="text-primary opacity-80">
                                    {trust.topick}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div
                data-aos="fade-down"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1500"
            >
                <img src={peopleTrust} alt="" />
            </div>
        </div>
    );
};

export default TrustUs;
