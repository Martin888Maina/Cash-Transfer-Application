//importing the react and useState hook
import React, { useState } from 'react';
//importing the centralized api instance
import api from '../services/api';
//importing the custom css fro styling the form
import '../styling/CreateForm.css';

const CreateAccountForm = () => {
  //state hooks to manage user inut values and alert messages
  //store the account name
  const [name, setName] = useState('');
  //store the account balance
  const [balance, setBalance] = useState('');
  //store the alert message
  const [alertMessage, setAlertMessage] = useState('');
  //store the type of alert
  const [alertType, setAlertType] = useState('');


  //handle the form submission
  const handleSubmit = async (e) => {
    //prevents the page reload on form submit
    e.preventDefault();
    try {
      //sending a post request when creating an account
      const response = await api.post('/Account/accounts', {
        name, //passes the name
        balance: parseFloat(balance), //converts the balance into a float
      });
      //displays success message when account is created
      setAlertMessage(`Account created with ID: ${response.data.id}`);
      setAlertType('success');
    } catch (error) {
      const msg = error.response?.data?.error?.message || 'Failed to create account. Please try again.';
      setAlertMessage(msg);
      setAlertType('error');
    }
  };

  return (
    <div className="form-container">
      {/* header */}
      <h2>Create Account</h2>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          {/* name */}
          <label>Name:</label>
          <input
            type="text"
            value={name}
            //update state when input changes
            onChange={(e) => setName(e.target.value)} 
            required
            placeholder="Enter account name"
          />
        </div>
        <div className="form-group">
          {/* balance */}
          <label>Initial Balance:</label>
          <input
            type="number"
            value={balance}
            //upfate the state when input changes
            onChange={(e) => setBalance(e.target.value)} 
            required
            placeholder="Enter initial balance"
          />
        </div>
        {/* create account button */}
        <button type="submit">Create Account</button>
        {/* conditional rendering of the alert message */}
        {alertMessage && (
          <div className={`alert alert-${alertType}`}>
            {alertMessage}
          </div>
        )}
      </form>
    </div>
  );
};

//exports the omponent so that It can be used in other parts of the application
export default CreateAccountForm;