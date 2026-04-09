// src/services/authService.ts
import { isAxiosError } from 'axios';
import apiClient from './apiClient';
import { User } from '@/store/userStore'; // Assuming User interface is exported from here

// Define response types expected from your backend API
interface AuthResponse {
  token?: string; // Example: JWT token
  user: User;
}

type ApiErrorResponse = {
  message?: string;
};

const getApiErrorMessage = (error: unknown, fallbackMessage: string): string => {
  if (isAxiosError<ApiErrorResponse>(error)) {
    return error.response?.data?.message || fallbackMessage;
  }

  if (error instanceof Error) {
    return error.message || fallbackMessage;
  }

  return fallbackMessage;
};

// --- FUNCTION DEFINITIONS (Keep these as they were) ---
const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    console.log('authService.login called with:', email);
    const response = await apiClient.post<AuthResponse>('/auth/login', { email, password });
    console.log('authService.login response:', response.data);
    // Optional: Handle token storage
    return response.data;
  } catch (error: unknown) {
     const message = getApiErrorMessage(error, 'Login failed');
     console.error('authService.login error:', message, error);
     throw new Error(message);
  }
};

const signup = async (userData: { name?: string; email: string; password: string }): Promise<User> => {
  try {
    console.log('authService.signup called with:', userData.email);
    const response = await apiClient.post<User>('/auth/register', userData);
    console.log('authService.signup response:', response.data);
    return response.data;
  } catch (error: unknown) {
    const message = getApiErrorMessage(error, 'Signup failed');
    console.error('authService.signup error:', message, error);
    throw new Error(message);
  }
};

const forgotPassword = async (email: string): Promise<void> => {
    try {
      console.log('authService.forgotPassword called with:', email);
      await apiClient.post('/auth/forgot-password', { email });
      console.log('authService.forgotPassword success');
    } catch (error: unknown) {
        const message = getApiErrorMessage(error, 'Failed to send reset instructions.');
        console.error('authService.forgotPassword error:', message, error);
        throw new Error(message);
    }
};
// --- END FUNCTION DEFINITIONS ---


// --- NAMED EXPORT (Ensure this is the ONLY export related to the service object) ---
export const authService = {
  login,
  signup,
  forgotPassword,
};
// --- NO 'export default authService;' or similar ---
