// src/components/auth/ProtectedRoute.tsx
'use client'; // Still needs to be client for potential future hooks

import React from 'react';

// Define props
interface ProtectedRouteProps {
  children: React.ReactNode;
}

// Minimal component that just renders children
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  return <>{children}</>;
};

// Ensure the default export is correct
export default ProtectedRoute;

