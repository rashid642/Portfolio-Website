import { React, useState } from "react";
import { Link } from 'react-scroll';

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 p-4">
            <div className="container mx-auto flex items-center justify-evenly">
    
            {/* Logo */}
            <div className="text-white text-2xl font-semibold">
                Rashid
            </div>
    
            {/* Navbar Links (Hidden on Mobile) */}
            <div className="hidden md:flex space-x-10 items-center"> {/* Updated class here */}
                <Link to="home" smooth={true} duration={500}>
                    <a href="#" className="text-white text-1xl border-b border-transparent hover:border-white transition duration-500 ease-in-out">Home</a>
                </Link>
                <Link to="projects" smooth={true} duration={500}>
                    <a href="#" className="text-white text-1xl border-b border-transparent hover:border-white transition duration-500 ease-in-out">Projects</a>
                </Link>
                <Link to="skills" smooth={true} duration={500}>
                <a href="#" className="text-white text-1xl border-b border-transparent hover:border-white transition duration-500 ease-in-out">Skills</a>
                </Link>
                <Link to="footer" smooth={true} duration={500}>
                <a href="#" className="text-white text-1xl border-b border-transparent hover:border-white transition duration-500 ease-in-out">Contact</a>
                </Link>
            </div>
    
            {/* Hamburger Menu (Visible on Mobile) */}
            <div className="md:hidden">
                <button onClick={toggleMobileMenu} className="text-white focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                </button>
            </div>
            </div>
    
            {/* Mobile Menu (Hidden by Default) */}
            <div className={`md:hidden bg-transparent p-4 ${isMobileMenuOpen ? '' : 'hidden'}`}>
            <Link to="home" smooth={true} duration={500}>
            <a href="home" className="block text-white py-2">Home</a>
            </Link>
            <Link to="home" smooth={true} duration={500}>
            <a href="projects" className="block text-white py-2">Projects</a>
            </Link>
            <Link to="skills" smooth={true} duration={500}>
            <a href="#" className="block text-white py-2">Skills</a>
            </Link>
            <Link to="footer" smooth={true} duration={500}>
            <a href="#" className="block text-white py-2">Contact</a>
            </Link>
            </div>
        </nav>
    )
}