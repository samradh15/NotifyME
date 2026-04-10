// src/store/userStore.ts
import { create } from 'zustand';

// Define the shape of the user object
// --- ADD export HERE ---
export interface User {
  id: string;
  email: string;
  name?: string;
  // Add other relevant user properties here
}

// Define the interface for the store's state
interface UserState {
  isAuthenticated: boolean;
  user: User | null; // Uses the User interface
}

// Define the interface for the store's actions
interface UserActions {
  login: (userData: User) => void; // Uses the User interface
  logout: () => void;
  // Potentially add actions like setUser, checkAuthStatus etc. later
}

// Create the Zustand store
const useUserStore = create<UserState & UserActions>((set) => ({
  // Initial state
  isAuthenticated: false,
  user: null,

  // Actions
  login: (userData) => set({ isAuthenticated: true, user: userData }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));

// Default export is the hook
export default useUserStore;

// No need to export UserState or UserActions unless used directly elsewhere
