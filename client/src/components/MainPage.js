import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styling/MainPage.css';

const MainPage = () => {
    const { isAuthenticated } = useAuth();

    return (
        <div className="landing-page">
            <div className="main-container">
                <h1 className="app-title">Cash Transfer</h1>

                {isAuthenticated ? (
                    // logged-in users get the full feature set
                    <div className="button-container">
                        <Link to="/dashboard">
                            <button className="main-button">Dashboard</button>
                        </Link>
                        <Link to="/create-account">
                            <button className="main-button">Create Account</button>
                        </Link>
                        <Link to="/view-account">
                            <button className="main-button">View Accounts</button>
                        </Link>
                        <Link to="/transfer">
                            <button className="main-button">Transfer Money</button>
                        </Link>
                        <Link to="/transfer-history">
                            <button className="main-button">Transfer History</button>
                        </Link>
                    </div>
                ) : (
                    // guests see login/register only
                    <div className="button-container">
                        <Link to="/login">
                            <button className="main-button">Login</button>
                        </Link>
                        <Link to="/register">
                            <button className="main-button">Get Started</button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MainPage;
