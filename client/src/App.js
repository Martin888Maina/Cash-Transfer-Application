import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/layout/Footer';
import ProtectedRoute from './components/auth/ProtectedRoute';

import MainPage from './components/MainPage';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import Dashboard from './components/dashboard/Dashboard';
import CreateAccountForm from './components/CreateAccountForm';
import ViewAccount from './components/ViewAccount';
import TransferForm from './components/TransferForm';
import TransferHistory from './components/transfers/TransferHistory';

const App = () => {
    return (
        <AuthProvider>
            <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                <div className="App">
                    <Navbar />

                    <Routes>
                        {/* public routes */}
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />

                        {/* protected routes — redirect to /login if not authenticated */}
                        <Route path="/dashboard" element={
                            <ProtectedRoute><Dashboard /></ProtectedRoute>
                        } />
                        <Route path="/create-account" element={
                            <ProtectedRoute><CreateAccountForm /></ProtectedRoute>
                        } />
                        <Route path="/view-account" element={
                            <ProtectedRoute><ViewAccount /></ProtectedRoute>
                        } />
                        <Route path="/transfer" element={
                            <ProtectedRoute><TransferForm /></ProtectedRoute>
                        } />
                        <Route path="/transfer-history" element={
                            <ProtectedRoute><TransferHistory /></ProtectedRoute>
                        } />
                    </Routes>

                    <Footer />
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
