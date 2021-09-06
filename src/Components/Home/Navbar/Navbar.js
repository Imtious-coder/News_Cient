import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="px-5 mb-5">
            <p id="Logo" className="md:px-5">News Moon</p>
            <div id="Navigations">
                <p>Home</p>
                <p>COVID</p>
                <p>International</p>
                <p>Local</p>
                <p>Entertainment</p>
                <p>Style</p>
                <p>Healh</p>
                <p>Business</p>
                <p>Food</p>
            </div>
        </nav>
    );
};

export default Navbar;