//importimng react and useState for state managements
import React, { useState } from 'react';
//importing the centralized api instance
import api from '../services/api';
// currency formatter lives here so we're not duplicating it across components
import formatCurrency from '../utils/formatCurrency';
//imports the custom styling file for the ViewAccount.js file
import '../styling/View.css';

const ViewAccount = () => {
  //state variable to manage user input
  //handles the account id
  const [accountId, setAccountId] = useState('');
  //handles the account
  const [account, setAccount] = useState(null);
  //tracks loading state 
  const [isLoading, setIsLoading] = useState(false);
  //handles the error messages
  const [error, setError] = useState('');

  //handles the account search when the user clicks the search button
  const handleSearch = async () => {
    //if account id is not entered do not proceed to search
    if (!accountId) return;
  
    //set loading state to true
    setIsLoading(true);
    setError('');
    try {
      // get request to fetch the account data by the account id
      const response = await api.get(`/Account/accounts/${accountId}`);
      setAccount(response.data);
      setError('');
    } catch (error) {
      //log the error to the console
      console.error('Error retrieving account', error);
      //if the account is not found, set the account state to null
      setAccount(null);
      setError('Account not found. Please check the ID and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="view-container">
      {/* header */}
      <h2 className="view-title">View Account</h2>
      
      <div className="search-container">
        {/* input the account id */}
        <input
          type="number"
          className="search-input"
          placeholder="Enter account ID"
          value={accountId}
          onChange={(e) => setAccountId(e.target.value)}
        />
        {/* search button */}
        <button 
          className="search-button"
          onClick={handleSearch}
          disabled={isLoading}
        >
          {isLoading ? 'Searching...' : 'Search'}
        </button>
      </div>

    {/* displays error message */}
      {error && (
        <div className="error-message">
          {error}
        </div>
      )}

    {/* displays account details if an account is found */}
      {account && (
        <div className="account-details">
          <h3 className="details-title">Account Details</h3>
          
          {/* display account id */}
          <div className="detail-item">
            <span className="detail-label">Account ID</span>
            <span className="detail-value">{account.id}</span>
          </div>
          {/* display account name */}
          <div className="detail-item">
            <span className="detail-label">Account Name</span>
            <span className="detail-value">{account.name}</span>
          </div>
          {/* displays balance */}
          <div className="detail-item">
            <span className="detail-label">Balance</span>
            <span className="detail-value balance-value">
              {formatCurrency(account.balance)}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
// Export the ViewAccount component for use in other parts of the application
export default ViewAccount;
