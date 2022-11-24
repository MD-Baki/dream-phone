import React from "react";

const SliderItems = ({ slide }) => {
    const { image, id, next, prev } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img w-full">
                <img src={image} alt="" className="w-full" />
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-14 lg:left-20 top-1/2 text-white text-center md:text-left">
                <div>
                    <h1 className="font-medium text-xl md:text-5xl md:leading-[55px] pb-3 md:pb-0">
                        Sell Your Device At
                        <br />
                        Best Offer
                    </h1>
                    <p className="md:pt-5 md:pb-8 capitalize w-2/3 hidden md:flex">
                        Buy and sell with confidence on our website. with the
                        facility of selling the phone at a good price
                    </p>
                    <div className="flex md:gap-4 justify-center md:justify-start">
                        <button className="btn  bg-gradient-to-r from-primary to-[#083f50] text-white btn-sm text-xs md:text-md md:btn-md">
                            All Products
                        </button>
                        <button className="btn btn-outline  text-white hidden md:inline">
                            explore more
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="absolute flex justify-end
                 transform -translate-y-1/2 md:left-5 md:right-8 left-1/2 -translate-x-1/2 md:-translate-x-0 bottom-[-6px] md:bottom-0"
            >
                <a
                    href={`#slide${prev}`}
                    className="mr-3 bg-gradient-to-r from-primary to-[#083f50] text-white text-md font-bold p-2 md:py-2 md:px-[14px] rounded-md btn-sm"
                >
                    ❮
                </a>
                <a
                    href={`#slide${next}`}
                    className="bg-gradient-to-r from-primary to-[#083f50] text-white text-md font-bold p-2 md:py-2 md:px-[14px] rounded-md btn-sm"
                >
                    ❯
                </a>
            </div>
        </div>
    );
};

export default SliderItems;
