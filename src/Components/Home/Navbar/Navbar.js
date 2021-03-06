import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../../Login/LoginButton/LoginButton';
import './Navbar.css';

const Navbar = () => {
    return (
        <section>
            <nav className="px-5">
                <p id="Logo" className="md:px-5">News Moon</p>
                <div id="Navigations">
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                    <p>COVID</p>
                    <p>International</p>
                    <p>Local</p>
                    <p>Entertainment</p>
                    <p>Style</p>
                    <p>Health</p>
                    <p>Business</p>
                    <p>Food</p>
                </div>
            </nav>
            <LoginButton />
        </section>
    );
};

export default Navbar;