import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';
import '../../styling/TransferHistory.css';

const TransferHistory = () => {
    const [transfers, setTransfers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTransfers = async () => {
            try {
                const response = await api.get('/Transfer/transfers');
                setTransfers(response.data.data);
            } catch (err) {
                setError('Failed to load transfer history. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchTransfers();
    }, []);

    if (loading) return <LoadingSpinner message="Loading transfer history..." />;

    return (
        <div className="history-page">
            <div className="history-header">
                <h2 className="history-title">Transfer History</h2>
                <p className="history-subtitle">All transfers — newest first</p>
            </div>

            <ErrorAlert message={error} />

            {!error && transfers.length === 0 && (
                <div className="history-empty">
                    <p>No transfers have been made yet.</p>
                </div>
            )}

            {transfers.length > 0 && (
                <div className="history-card">
                    <div className="table-wrapper">
                        <table className="history-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>From</th>
                                    <th>To</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th>Time</th>
                                </tr>
                            </thead>
                            <tbody>
                                {transfers.map((t) => (
                                    <tr key={t.id}>
                                        <td className="id-cell">{t.id}</td>
                                        <td>{t.sender?.name || `Account #${t.from_account_id}`}</td>
                                        <td>{t.receiver?.name || `Account #${t.to_account_id}`}</td>
                                        <td className="amount-cell">{formatCurrency(t.amount)}</td>
                                        <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                        <td className="time-cell">
                                            {new Date(t.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="history-count">{transfers.length} transfer{transfers.length !== 1 ? 's' : ''} total</p>
                </div>
            )}
        </div>
    );
};

export default TransferHistory;
