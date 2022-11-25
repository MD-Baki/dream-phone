import React from "react";
import AllCategory from "../AllCategory/AllCategory";
import BannerSlider from "../BnaaerSlider/BannerSlider";
import WorkStyle from "../WorkStyle/WorkStyle";

const Home = () => {
    return (
        <div>
            <BannerSlider />
            <WorkStyle />
            <AllCategory />
        </div>
    );
};

export default Home;
