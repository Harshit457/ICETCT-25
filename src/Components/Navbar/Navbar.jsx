import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";
import menuIcon from "../../assets/menu-icon.png"; 

const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const toggleMenu = () => setMobileMenu(prevState => !prevState);

    return (
        <nav className={`container ${sticky ? "dark-nav" : ""}`}>
            <h1>KIET</h1>
            <ul className={mobileMenu ? "mobile-menu" : "mb-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/registration">Registration</Link>
                </li>
                <li>
                    <Link to="/speaker">Speaker</Link>
                </li>
                <li>
                    <Link to="/submission">Submission</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <Link to="/commities">Commities</Link>
                </li>
                <li>
                    <Link to="/accomodation">Accomodation</Link>
                </li>
            </ul>
            <img
                src={menuIcon}
                alt="menu-icon"
                className="menu-icon"
                onClick={toggleMenu} 
            />
        </nav>
    );
};

export default Navbar;
