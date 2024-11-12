import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUserCircle, FaCog, FaBars } from 'react-icons/fa'; // Import FaBars icon
import logo from '../assets/logo.jpg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#45486B] p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-xl">
                    <img src={logo} alt="Logo" className="h-10" />
                </div>
                
                {/* Only show this div on larger screens */}
                <div className="hidden md:flex items-center space-x-4">
                    <Link className="text-white" to="/">Home</Link>
                    <Link className="text-white" to="/">|</Link>
                    <Link className="text-white" to="/services">Services</Link>
                    <Link className="text-white" to="/">|</Link>
                    <Link className="text-white" to="/appointments">Appointments</Link>
                    <Link className="text-white" to="/">|</Link>
                    <Link className="text-white" to="/my-records">My Records</Link>
                </div>

                {/* Profile and settings icons */}
                <div className="flex items-center space-x-4">
                    {/* Hide the search bar on mobile */}
                    <div className="hidden md:block">
                        <input 
                            type="text" 
                            placeholder="Search..." 
                            className="p-2 rounded border border-gray-400"
                        />
                    </div>

                    {/* Profile and settings icons always visible */}
                    <div className="text-white">
                        <FaUserCircle size={24} />
                    </div>

                    {/* Only show the menu toggle on mobile */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-white">
                            {isOpen ? 'Close' : <FaBars size={24} />} {/* Use FaBars icon for menu */}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu dropdown */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col items-center mt-2">
                        <Link className="text-white py-2" to="/">Home</Link>
                        <Link className="text-white py-2" to="/services">Services</Link>
                        <Link className="text-white py-2" to="/appointments">Appointments</Link>
                        <Link className="text-white py-2" to="/my-records">My Records</Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
