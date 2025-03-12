import React, { useState, useEffect, useRef } from "react";
import logo from "../images/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setMenuOpen(false); // Close the menu when scrolling to top
    };

    const scrollToSection = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        setMenuOpen(false); // Close the menu after clicking a link
    };

    useEffect(() => {
        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <header className="header-main-div" ref={menuRef}>
            <img
                src={logo}
                onClick={scrollToTop}
                className="header-logo"
                alt="Logo"
            />
            <button className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? (
                    <span className="close-icon">&times;</span> // Close icon
                ) : (
                    <span className="hamburger-icon">&#9776;</span> // Hamburger icon
                )}
            </button>
            {menuOpen && <div className="menu-overlay"></div>} {/* Overlay for dark background */}
            <div className={`header-second-div ${menuOpen ? "open" : ""}`}>
                <ul className="nav-list">
                    <li className="nav-item" onClick={() => scrollToSection('about')}>
                        Ваш лікар
                    </li>
                    <li className="nav-item" onClick={() => scrollToSection('experience')}>
                        Досвід
                    </li>
                    <li className="nav-item" onClick={() => scrollToSection('services')}>
                        Послуги
                    </li>
                </ul>
                <button className="header-button" onClick={() => scrollToSection('footer')}>
                    Запишіться зараз
                </button>
            </div>
        </header>
    );
}