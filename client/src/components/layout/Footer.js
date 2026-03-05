import React from 'react';
import '../../styling/Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer-text">
                &copy; {year} Cash Transfer Application. Built by Martin Maina.
            </p>
        </footer>
    );
};

export default Footer;
