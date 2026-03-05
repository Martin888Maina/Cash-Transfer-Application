import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

// wraps any route that requires a logged-in user
const ProtectedRoute = ({ children }) => {
    const { isAuthenticated, loading } = useAuth();

    // wait for the auth state to load before making a redirect decision
    if (loading) {
        return <div className="loading-placeholder">Loading...</div>;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
