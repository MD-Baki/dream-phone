import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import fbImg from "../../../assets/social-icon/fb.png";
import twitImg from "../../../assets/social-icon/twitImg.png";
import wappImg from "../../../assets/social-icon/wapp.png";

const Footer = () => {
    return (
        <section className="max-w-[1440px] mx-auto">
            <footer className="footer footer-center p-10 text-white rounded bg-gradient-to-tr from-primary to-[#083f50]">
                <div className="grid grid-flow-col gap-4">
                    <Link to="/home" className="link link-hover">
                        Home
                    </Link>
                    <Link to="/products" className="link link-hover">
                        All Products
                    </Link>
                    <Link to="/blog" className="link link-hover">
                        Blog
                    </Link>
                    <Link to="/signUp" className="link link-hover">
                        Sign Up
                    </Link>
                    <Link to="/signIn" className="link link-hover">
                        Sign In
                    </Link>
                </div>
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a
                            href="https://www.facebook.com/profile.php?id=100007616027360"
                            target="blank"
                        >
                            <img src={fbImg} alt="" className="h-14" />
                        </a>
                        <a href="https://twitter.com/" target="blank">
                            <img src={twitImg} alt="" className="h-14" />
                        </a>
                        <a href="https://web.whatsapp.com/" target="blank">
                            <img src={wappImg} alt="" className="h-14" />
                        </a>
                    </div>
                </div>
                <div>
                    <p>Copyright © 2022 - All right reserved by Dream Phone</p>
                </div>
            </footer>
        </section>
    );
};

export default Footer;
