import axios from 'axios';

// single axios instance — all components import from here instead of using axios directly
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:4000',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
