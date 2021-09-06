import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <section className="bg-gray-900 px-10 py-5 text-white">
            {/* Logo/Name */}
            <p id="FooterLogo">NEWS MOON</p>
            {/* Footer Navigations */}
            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4">
                <div className="mb-5 text-gray-400">
                    <p className="font-bold text-lg text-gray-300" >COVID 19</p>
                    <p>Canada</p>
                    <p>USA</p>
                    <p>England</p>
                    <p>Bangladesh</p>
                </div>
                <div className="mb-5 text-gray-400">
                    <p className="font-bold text-lg text-gray-300" >Hot News</p>
                    <p>Celebrity</p>
                    <p>Cricket</p>
                    <p>Bangladesh</p>
                    <p>Amir Khan</p>
                </div>
                <div className="mb-5 text-gray-400">
                    <p className="font-bold text-lg text-gray-300" >Travel</p>
                    <p>Dhaka</p>
                    <p>Cumilla</p>
                    <p>Feni</p>
                    <p>Chattogram</p>
                </div>
                <div className="mb-5 text-gray-400">
                    <p className="font-bold text-lg text-gray-300" >More</p>
                    <p>Our Blogs</p>
                    <p>Videos</p>
                    <p>Weather</p>
                    <p>Stock Market</p>
                </div>
            </section>
            {/* Message */}
            <div>
                <p>© 2021 News Moon Comapany.All Rights Reserved.</p>
            </div>
        </section>
    );
};

export default Footer;