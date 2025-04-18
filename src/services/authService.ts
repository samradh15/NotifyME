// src/services/authService.ts
import apiClient from './apiClient';
import { User } from '@/store/userStore'; // Assuming User interface is exported from here

// Define response types expected from your backend API
interface AuthResponse {
  token?: string; // Example: JWT token
  user: User;
}

// --- FUNCTION DEFINITIONS (Keep these as they were) ---
const login = async (email: string, password: string): Promise<AuthResponse> => {
  try {
    console.log('authService.login called with:', email);
    const response = await apiClient.post<AuthResponse>('/auth/login', { email, password });
    console.log('authService.login response:', response.data);
    // Optional: Handle token storage
    return response.data;
  } catch (error: any) {
     console.error('authService.login error:', error.response?.data || error.message);
     throw new Error(error.response?.data?.message || 'Login failed');
  }
};

const signup = async (userData: { name?: string; email: string; password: string }): Promise<User> => {
  try {
    console.log('authService.signup called with:', userData.email);
    const response = await apiClient.post<User>('/auth/register', userData);
    console.log('authService.signup response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('authService.signup error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Signup failed');
  }
};

const forgotPassword = async (email: string): Promise<void> => {
    try {
      console.log('authService.forgotPassword called with:', email);
      await apiClient.post('/auth/forgot-password', { email });
      console.log('authService.forgotPassword success');
    } catch (error: any) {
        console.error('authService.forgotPassword error:', error.response?.data || error.message);
        throw new Error(error.response?.data?.message || 'Failed to send reset instructions.');
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

