import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/auth/ProtectedRoute';

import MainPage from './components/MainPage';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import CreateAccountForm from './components/CreateAccountForm';
import ViewAccount from './components/ViewAccount';
import TransferForm from './components/TransferForm';

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <div className="App">
                    <Navbar />

                    <Routes>
                        {/* public routes */}
                        <Route path="/" element={<MainPage />} />
                        <Route path="/login" element={<LoginForm />} />
                        <Route path="/register" element={<RegisterForm />} />

                        {/* protected routes — redirect to /login if not authenticated */}
                        <Route path="/create-account" element={
                            <ProtectedRoute><CreateAccountForm /></ProtectedRoute>
                        } />
                        <Route path="/view-account" element={
                            <ProtectedRoute><ViewAccount /></ProtectedRoute>
                        } />
                        <Route path="/transfer" element={
                            <ProtectedRoute><TransferForm /></ProtectedRoute>
                        } />
                    </Routes>
                </div>
            </Router>
        </AuthProvider>
    );
};

export default App;
