import React from 'react';
import '../../styling/Common.css';

const ErrorAlert = ({ message }) => {
    if (!message) return null;
    return (
        <div className="alert-box alert-box--error">
            {message}
        </div>
    );
};

export default ErrorAlert;
