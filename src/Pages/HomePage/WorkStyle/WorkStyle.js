import React from "react";
import sell from "../../../assets/icon/trade.png";
import buy from "../../../assets/icon/best-price.png";
import payment from "../../../assets/icon/payment-method.png";
import location from "../../../assets/icon/location.png";

const WorkStyle = () => {
    const works = [
        {
            icon: sell,
            text: "Sell Good Price",
        },
        {
            icon: buy,
            text: "Get Best Price",
        },
        {
            icon: payment,
            text: "Safe Payment",
        },
        {
            icon: location,
            text: "get pickup location",
        },
    ];

    return (
        <div className="pb-5  uppercase">
            <h2 className="text-2xl font-medium text-primary text-center py-6">
                How Dream Phones Works
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mx-6 lg:mx-0">
                {works.map((work, i) => (
                    <div
                        key={i}
                        className="text-center shadow-lg p-4 rounded-lg hover:bg-primary hover:bg-opacity-30 ease-out duration-300"
                    >
                        <img
                            src={work.icon}
                            alt=""
                            className="h-16 mx-auto mb-2"
                        />
                        <div className="divider m-0 border-secondary"></div>
                        <h5 className="text-xl font-light text-secondary">
                            {work.text}
                        </h5>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkStyle;
