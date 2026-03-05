import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Import Routes and Route from 'react-router-dom'

import Navbar from './components/Navbar';
import MainPage from './components/MainPage';  // Import the MainPage
import CreateAccountForm from './components/CreateAccountForm';
import ViewAccount from './components/ViewAccount';
import TransferForm from './components/TransferForm';

const App = () => {
  return (
    <Router>
      <div className="App">
        {/* <h1>Money Transfer App</h1> */}
        <Navbar />

        {/* Define Routes for different pages */}
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Add the MainPage as the default route */}
          <Route path="/create-account" element={<CreateAccountForm />} />
          <Route path="/view-account" element={<ViewAccount />} />
          <Route path="/transfer" element={<TransferForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

