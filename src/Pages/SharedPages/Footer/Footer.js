import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import fbImg from "../../../assets/social-icon/fb.png";
import twitImg from "../../../assets/social-icon/twitImg.png";
import wappImg from "../../../assets/social-icon/wapp.png";

const Footer = () => {
    return (
        <section className="max-w-[1440px] mx-auto">
            <div className="footer p-10 bg-primary bg-opacity-70 text-white lg:rounded-t-lg">
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <footer className="footer px-10 py-4 bg-primary text-white">
                <div className="items-center grid-flow-col">
                    <img src={logo} alt="" className="h-16" />
                    <div className="pl-2">
                        <h2 className="text-xl uppercase">
                            <strong>Dream</strong> Phones
                        </h2>
                        <p>Copyright © 2022 - All right reserved</p>
                    </div>
                </div>
                <div className="md:place-self-center md:justify-self-end">
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
            </footer>
        </section>
    );
};

export default Footer;
