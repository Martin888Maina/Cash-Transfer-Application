import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import formatCurrency from '../../utils/formatCurrency';
import LoadingSpinner from '../common/LoadingSpinner';
import ErrorAlert from '../common/ErrorAlert';
import '../../styling/Dashboard.css';

const Dashboard = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const response = await api.get('/Account/stats');
                setStats(response.data.data);
            } catch (err) {
                setError('Failed to load dashboard data. Please try again.');
            } finally {
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <LoadingSpinner message="Loading dashboard..." />;

    return (
        <div className="dashboard-page">
            <div className="dashboard-header">
                <h2 className="dashboard-title">Dashboard</h2>
                <p className="dashboard-subtitle">Overview of your Cash Transfer activity</p>
            </div>

            <ErrorAlert message={error} />

            {stats && (
                <>
                    {/* summary stat cards */}
                    <div className="stats-grid">
                        <div className="stat-card">
                            <p className="stat-label">Total Accounts</p>
                            <p className="stat-value">{stats.totalAccounts}</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">Total Transfers</p>
                            <p className="stat-value">{stats.totalTransfers}</p>
                        </div>
                        <div className="stat-card">
                            <p className="stat-label">Total Balance</p>
                            <p className="stat-value stat-value--green">{formatCurrency(stats.totalBalance)}</p>
                        </div>
                    </div>

                    {/* quick action links */}
                    <div className="quick-actions">
                        <h3 className="section-title">Quick Actions</h3>
                        <div className="action-grid">
                            <Link to="/create-account" className="action-card">
                                <span className="action-title">Create Account</span>
                                <span className="action-desc">Open a new account</span>
                            </Link>
                            <Link to="/transfer" className="action-card">
                                <span className="action-title">Transfer Money</span>
                                <span className="action-desc">Send funds between accounts</span>
                            </Link>
                            <Link to="/view-account" className="action-card">
                                <span className="action-title">View Accounts</span>
                                <span className="action-desc">Browse all accounts</span>
                            </Link>
                            <Link to="/transfer-history" className="action-card">
                                <span className="action-title">Transfer History</span>
                                <span className="action-desc">See all past transfers</span>
                            </Link>
                        </div>
                    </div>

                    {/* recent transfers table */}
                    {stats.recentTransfers && stats.recentTransfers.length > 0 && (
                        <div className="recent-section">
                            <h3 className="section-title">Recent Transfers</h3>
                            <div className="table-wrapper">
                                <table className="data-table">
                                    <thead>
                                        <tr>
                                            <th>From</th>
                                            <th>To</th>
                                            <th>Amount</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {stats.recentTransfers.map((t) => (
                                            <tr key={t.id}>
                                                <td>{t.sender?.name || `Account #${t.from_account_id}`}</td>
                                                <td>{t.receiver?.name || `Account #${t.to_account_id}`}</td>
                                                <td className="amount-cell">{formatCurrency(t.amount)}</td>
                                                <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Link to="/transfer-history" className="view-all-link">View all transfers</Link>
                        </div>
                    )}
                </>
            )}
        </div>
    );
};

export default Dashboard;
