//importing react hooks
import React, { useState, useEffect } from 'react';
//importing the centralized api instance
import api from '../services/api';
//importing the custom styling file for the transfer form 
import '../styling/TransferForm.css';

const TransferForm = () => {
  //state variables to manage form inputs and account information
  //handles the sender account id
  const [fromAccount, setFromAccount] = useState('');
  //handles the reciever account id
  const [toAccount, setToAccount] = useState('');
  //handles the amount
  const [amount, setAmount] = useState('');
  //handles the sender aaccount name
  const [fromAccountName, setFromAccountName] = useState('');
  //handles the receiver account name
  const [toAccountName, setToAccountName] = useState('');
  //handles the alert messages
  const [alertMessage, setAlertMessage] = useState('');
  //handles the alert notifications
  const [alertType, setAlertType] = useState('');

  // Function to fetch account name by ID
  const fetchAccountName = async (accountId, type) => {
    try {
      //send get request to fetch account details
      const response = await api.get(`/Account/accounts/${accountId}`);
      //set yhe account name depending on the type
      if (type === 'from') {
        setFromAccountName(response.data.name);
      } else if (type === 'to') {
        setToAccountName(response.data.name);
      }
    } catch (error) {
      //logs the error message in the console
      console.error('Error fetching account name', error);
    }
  };

  // Effect to fetch account names when the account IDs change
  useEffect(() => {
    if (fromAccount) {
      fetchAccountName(fromAccount, 'from');
    }
  }, [fromAccount]);
  // useEffect to fetch recipient's account name when the recipient's account ID changes
  useEffect(() => {
    if (toAccount) {
      fetchAccountName(toAccount, 'to');
    }
  }, [toAccount]);


  //handle form submission
  const handleSubmit = async (e) => {
    //prevent page reloads on form submit
    e.preventDefault();
    try {
      //send post request to start transfer
      await api.post('/Transfer/transfers', {
        from_account_id: fromAccount,
        to_account_id: toAccount,
        amount: parseFloat(amount),
      });
      //sets success message
      setAlertMessage('Transfer successful');
      setAlertType('success');
      
      // Clear form after successful transfer
      setFromAccount('');
      setToAccount('');
      setAmount('');
      setFromAccountName('');
      setToAccountName('');
    } catch (error) {
      //logs and display error message if transfer fails
      console.error('Error transferring money', error);
      setAlertMessage('Failed to transfer money');
      setAlertType('error');
    }
  };

  return (
    <div className="transfer-container">
      {/* form title */}
      <h2 className="transfer-title">Transfer Money</h2>
      <form className="transfer-form" onSubmit={handleSubmit}>
        <div className="form-field">
          {/* sender account id */}
          <label className="form-label">From Account ID:</label>
          <input
            className="form-input"
            type="number"
            value={fromAccount}
            //updates the state when changes occur
            onChange={(e) => setFromAccount(e.target.value)}
            placeholder="Enter sender's account ID"
            required
          />
          {fromAccountName && <div className="account-name">Sender: {fromAccountName}</div>}
        </div>
        <div className="form-field">
          {/* receiver account id */}
          <label className="form-label">To Account ID:</label>
          <input
            className="form-input"
            type="number"
            value={toAccount}
            //updates the state when changes occur
            onChange={(e) => setToAccount(e.target.value)}
            placeholder="Enter recipient's account ID"
            required
          />
          {toAccountName && <div className="account-name">Recipient: {toAccountName}</div>}
        </div>
        <div className="form-field">
          {/* transfer amount field */}
          <label className="form-label">Amount:</label>
          <input
            className="form-input"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount to transfer"
            required
          />
        </div>
        {/* submit button for transfers */}
        <button className="transfer-button" type="submit">
          Transfer Money
        </button>
        {/* display alert message conditionally */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
};

//exports the trabsferForm component to be used elsewhere in the application
export default TransferForm;
