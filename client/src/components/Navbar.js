import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styling/Navbar.css';

const Navbar = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Cash Transfer</Link>
            </div>

            <ul className="navbar-links">
                {isAuthenticated ? (
                    <>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/create-account">Create Account</Link></li>
                        <li><Link to="/view-account">Accounts</Link></li>
                        <li><Link to="/transfer">Transfer</Link></li>
                        <li><Link to="/transfer-history">History</Link></li>
                        <li className="navbar-user">
                            <span>Hi, {user?.name?.split(' ')[0]}</span>
                        </li>
                        <li>
                            <button className="logout-btn" onClick={handleLogout}>Logout</button>
                        </li>
                    </>
                ) : (
                    <>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/register">Register</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
