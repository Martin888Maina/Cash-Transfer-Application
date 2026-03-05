import React from 'react';
import '../../styling/Common.css';

const LoadingSpinner = ({ message = 'Loading...' }) => {
    return (
        <div className="spinner-wrapper">
            <div className="spinner"></div>
            <p className="spinner-text">{message}</p>
        </div>
    );
};

export default LoadingSpinner;
