import React from 'react';
import { Link } from 'react-router-dom';
import './LoginButton.css';

const LoginButton = () => {
    return (
        <section className="flex px-5 bg-red-700 text-white mb-5 py-2">
            <div className="flex-auto">
                <marquee className="Marquee" behavior="scroll" direction="" scrollamount="5">Programming Hero Assignment. END Game task.</marquee>
            </div>
            <div className="flex-1 m-auto">
                {/* Login Button */}
                <Link to="/LoginPage">
                    <button className="LoginButton">Login</button>
                </Link>
                {/* Admin Button */}
                <Link to="/admin">
                    <button className="LoginButton mr-5">Admin</button>
                </Link>
            </div>
        </section>
    );
};

export default LoginButton;