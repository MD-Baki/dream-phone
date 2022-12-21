import React from "react";
import AdsProducts from "../AdsProducts/AdsProducts";
import AllCategory from "../AllCategory/AllCategory";
import BannerSlider from "../BnaaerSlider/BannerSlider";
import WorkStyle from "../WorkStyle/WorkStyle";
import TrustUs from "./TrustUs/TrustUs";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <WorkStyle />
            <AllCategory />
            <AdsProducts />
            <TrustUs />
        </div>
    );
};

export default Home;
