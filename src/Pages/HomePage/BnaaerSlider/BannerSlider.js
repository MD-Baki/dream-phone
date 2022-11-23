import React from "react";
import img1 from "../../../assets/slider/img-1.jpg";
import img2 from "../../../assets/slider/img-2.jpg";
import img3 from "../../../assets/slider/img-3.jpg";
import SliderItems from "./SliderItems";
import "./SliderPages.css";

const BannerSlider = () => {
    const bannerData = [
        {
            image: img1,
            prev: 3,
            id: 1,
            next: 2,
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3,
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 1,
        },
    ];

    return (
        <div className="carousel w-full rounded-xl overflow-hidden">
            {bannerData.map((slide) => (
                <SliderItems key={slide.id} slide={slide}></SliderItems>
            ))}
        </div>
    );
};

export default BannerSlider;
