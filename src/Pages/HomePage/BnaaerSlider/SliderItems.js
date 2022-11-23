import React from "react";

const SliderItems = ({ slide }) => {
    const { image, id, next, prev } = slide;

    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className="carousel-img w-full">
                <img src={image} alt="" className="w-full" />
            </div>

            <div className="absolute flex transform -translate-y-1/2 left-14 lg:left-20 top-1/2 text-white">
                <div>
                    <h1 className="font-medium text-5xl leading-[55px]">
                        Sell Your Device At
                        <br />
                        Best Offer
                    </h1>
                    <p className="pt-5 pb-8 capitalize w-2/3">
                        Buy and sell with confidence on our website. with the
                        facility of selling the phone at a good price
                    </p>
                    <div className="flex gap-4">
                        <button className="btn btn-primary bg-gradient-to-r from-primary to-[#8d233e] text-white">
                            All Products
                        </button>
                        <button className="btn btn-outline  text-white">
                            explore more
                        </button>
                    </div>
                </div>
            </div>

            <div
                className="absolute flex justify-end
                 transform -translate-y-1/2 left-5 right-8 bottom-0"
            >
                <a
                    href={`#slide${prev}`}
                    className="mr-3 bg-gradient-to-r from-primary to-[#8d233e] text-white text-md font-bold py-2 px-[14px] rounded-md"
                >
                    ❮
                </a>
                <a
                    href={`#slide${next}`}
                    className="bg-gradient-to-r from-primary to-[#8d233e] text-white text-md font-bold py-2 px-[14px] rounded-md"
                >
                    ❯
                </a>
            </div>
        </div>
    );
};

export default SliderItems;
