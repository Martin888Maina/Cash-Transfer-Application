import React, { useState, useEffect } from 'react';
import api from '../services/api';
import '../styling/TransferForm.css';

const TransferForm = () => {
    const [accounts, setAccounts] = useState([]);
    const [fromUuid, setFromUuid] = useState('');
    const [toUuid, setToUuid] = useState('');
    const [amount, setAmount] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');
    const [loadingAccounts, setLoadingAccounts] = useState(true);

    // load the account list so users pick from a dropdown instead of typing raw IDs
    useEffect(() => {
        const fetchAccounts = async () => {
            try {
                const response = await api.get('/Account/accounts');
                setAccounts(response.data.data);
            } catch (err) {
                setAlertMessage('Failed to load accounts. Please refresh the page.');
                setAlertType('error');
            } finally {
                setLoadingAccounts(false);
            }
        };
        fetchAccounts();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setAlertMessage('');

        if (fromUuid === toUuid) {
            setAlertMessage('Sender and recipient cannot be the same account.');
            setAlertType('error');
            return;
        }

        try {
            // send uuids to the backend — it resolves them to internal ids
            await api.post('/Transfer/transfers', {
                from_account_uuid: fromUuid,
                to_account_uuid: toUuid,
                amount: parseFloat(amount),
            });

            setAlertMessage('Transfer successful.');
            setAlertType('success');
            setFromUuid('');
            setToUuid('');
            setAmount('');
        } catch (error) {
            const msg = error.response?.data?.error?.message || 'Failed to transfer money. Please try again.';
            setAlertMessage(msg);
            setAlertType('error');
        }
    };

    return (
        <div className="transfer-container">
            <h2 className="transfer-title">Transfer Money</h2>

            <form className="transfer-form" onSubmit={handleSubmit}>
                <div className="form-field">
                    <label className="form-label">From Account:</label>
                    <select
                        className="form-input"
                        value={fromUuid}
                        onChange={(e) => setFromUuid(e.target.value)}
                        required
                        disabled={loadingAccounts}
                    >
                        <option value="">{loadingAccounts ? 'Loading accounts...' : 'Select sender account'}</option>
                        {accounts.map((acc) => (
                            <option key={acc.uuid} value={acc.uuid}>
                                {acc.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <label className="form-label">To Account:</label>
                    <select
                        className="form-input"
                        value={toUuid}
                        onChange={(e) => setToUuid(e.target.value)}
                        required
                        disabled={loadingAccounts}
                    >
                        <option value="">{loadingAccounts ? 'Loading accounts...' : 'Select recipient account'}</option>
                        {accounts.map((acc) => (
                            <option key={acc.uuid} value={acc.uuid}>
                                {acc.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="form-field">
                    <label className="form-label">Amount (KES):</label>
                    <input
                        className="form-input"
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount to transfer"
                        min="0.01"
                        step="0.01"
                        required
                    />
                </div>

                <button className="transfer-button" type="submit">
                    Transfer Money
                </button>

                {alertMessage && (
                    <div className={`alert alert-${alertType}`}>
                        {alertMessage}
                    </div>
                )}
            </form>
        </div>
    );
};

export default TransferForm;
