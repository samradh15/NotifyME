// src/services/apiClient.ts
import axios from 'axios';

// Define your API base URL from environment variables or hardcode for now
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'; // Example

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Add other default headers if needed
  },
  // withCredentials: true, // Uncomment if using cookies for sessions
});

// Optional: Add interceptors for handling tokens, errors, etc.
apiClient.interceptors.request.use(
  (config) => {
    // Example: Get token from storage/state and add to headers
    // const token = localStorage.getItem('authToken');
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiClient.interceptors.response.use(
  (response) => {
    // Handle successful responses
    return response;
  },
  (error) => {
    // Handle global API errors (e.g., unauthorized, network error)
    console.error('API Error:', error.response || error.message);
    // if (error.response?.status === 401) {
    //   // Handle unauthorized access (e.g., redirect to login, clear state)
    //   // useUserStore.getState().logout(); // Be careful calling store actions outside components
    //   // window.location.href = '/auth/login';
    // }
    return Promise.reject(error);
  }
);

export default apiClient;
