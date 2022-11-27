import React from "react";
import AdsProducts from "../AdsProducts/AdsProducts";
import AllCategory from "../AllCategory/AllCategory";
import BannerSlider from "../BnaaerSlider/BannerSlider";
import WorkStyle from "../WorkStyle/WorkStyle";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <WorkStyle />
            <AllCategory />
            <AdsProducts />
        </div>
    );
};

export default Home;
