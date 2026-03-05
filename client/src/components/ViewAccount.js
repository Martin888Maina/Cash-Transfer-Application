import React, { useState, useEffect } from 'react';
import api from '../services/api';
import formatCurrency from '../utils/formatCurrency';
import LoadingSpinner from './common/LoadingSpinner';
import ErrorAlert from './common/ErrorAlert';
import SuccessAlert from './common/SuccessAlert';
import '../styling/View.css';

const ViewAccount = () => {
    // search-by-id state
    const [accountId, setAccountId] = useState('');
    const [account, setAccount] = useState(null);
    const [searchLoading, setSearchLoading] = useState(false);
    const [searchError, setSearchError] = useState('');

    // all-accounts list state
    const [accounts, setAccounts] = useState([]);
    const [listLoading, setListLoading] = useState(true);
    const [listError, setListError] = useState('');
    const [deleteSuccess, setDeleteSuccess] = useState('');
    const [deleteError, setDeleteError] = useState('');

    // load full account list on mount
    useEffect(() => {
        fetchAllAccounts();
    }, []);

    const fetchAllAccounts = async () => {
        try {
            const response = await api.get('/Account/accounts');
            setAccounts(response.data.data);
        } catch (err) {
            setListError('Failed to load accounts.');
        } finally {
            setListLoading(false);
        }
    };

    const handleSearch = async () => {
        if (!accountId) return;
        setSearchLoading(true);
        setSearchError('');
        setAccount(null);
        try {
            const response = await api.get(`/Account/accounts/${accountId}`);
            setAccount(response.data);
        } catch (err) {
            setSearchError('Account not found. Please check the ID and try again.');
        } finally {
            setSearchLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm(`Are you sure you want to delete account #${id}? This cannot be undone.`)) return;

        setDeleteError('');
        setDeleteSuccess('');
        try {
            await api.delete(`/Account/accounts/${id}`);
            setDeleteSuccess(`Account #${id} was deleted successfully.`);
            fetchAllAccounts();
            // clear the search result if the deleted account was being displayed
            if (account?.id === id) setAccount(null);
        } catch (err) {
            const msg = err.response?.data?.error?.message || 'Failed to delete account.';
            setDeleteError(msg);
        }
    };

    return (
        <div className="view-container">
            <h2 className="view-title">Accounts</h2>

            {/* search by ID section */}
            <div className="search-container">
                <input
                    type="number"
                    className="search-input"
                    placeholder="Enter account ID to search"
                    value={accountId}
                    onChange={(e) => setAccountId(e.target.value)}
                />
                <button
                    className="search-button"
                    onClick={handleSearch}
                    disabled={searchLoading}
                >
                    {searchLoading ? 'Searching...' : 'Search'}
                </button>
            </div>

            {searchError && <div className="error-message">{searchError}</div>}

            {account && (
                <div className="account-details">
                    <h3 className="details-title">Account Details</h3>
                    <div className="detail-item">
                        <span className="detail-label">Account ID</span>
                        <span className="detail-value">{account.id}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Account Name</span>
                        <span className="detail-value">{account.name}</span>
                    </div>
                    <div className="detail-item">
                        <span className="detail-label">Balance</span>
                        <span className="detail-value balance-value">{formatCurrency(account.balance)}</span>
                    </div>
                </div>
            )}

            {/* full accounts list */}
            <div className="all-accounts-section">
                <h3 className="section-heading">All Accounts</h3>

                <SuccessAlert message={deleteSuccess} />
                <ErrorAlert message={deleteError} />
                <ErrorAlert message={listError} />

                {listLoading ? (
                    <LoadingSpinner message="Loading accounts..." />
                ) : accounts.length === 0 ? (
                    <p className="no-accounts-text">No accounts found. Create one to get started.</p>
                ) : (
                    <div className="table-wrapper">
                        <table className="accounts-table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Balance</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {accounts.map((acc) => (
                                    <tr key={acc.id}>
                                        <td className="id-cell">#{acc.id}</td>
                                        <td>{acc.name}</td>
                                        <td className="balance-cell">{formatCurrency(acc.balance)}</td>
                                        <td>
                                            {/* delete is blocked on the server side too, this is just a UI hint */}
                                            <button
                                                className="delete-btn"
                                                onClick={() => handleDelete(acc.id)}
                                                disabled={acc.balance > 0}
                                                title={acc.balance > 0 ? 'Transfer out all funds before deleting' : 'Delete this account'}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ViewAccount;
