import React from 'react';
import '../../styling/Common.css';

const SuccessAlert = ({ message }) => {
    if (!message) return null;
    return (
        <div className="alert-box alert-box--success">
            {message}
        </div>
    );
};

export default SuccessAlert;
