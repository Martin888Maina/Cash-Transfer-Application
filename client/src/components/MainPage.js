// imports the react library
import React from 'react';
//imports the link compinent for the navigation library
import { Link } from 'react-router-dom';
// Import the custom CSS file for the landing page
import '../styling/MainPage.css';  

const MainPage = () => {
  return (
    <div className="landing-page">
      <div className="main-container">
        {/* title */}
        <h1 className="app-title">Money Transfer App</h1>
        <div className="button-container">
          <Link to="/create-account">
          {/* button to create the account */}
            <button className="main-button">Create Account</button>
          </Link>
          <Link to="/view-account">
          {/* button to view the account */}
            <button className="main-button">View Account</button>
          </Link>
          <Link to="/transfer">
          {/* button to transfer money */}
            <button className="main-button">Transfer Money</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// exports the MainPage component to be used in other parts of the application
export default MainPage;
