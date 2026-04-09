// src/app/(app)/layout.tsx
import React from 'react';
import AppShell from '@/components/layout/AppShell';
import ProtectedRoute from '../auth/ProtectedRoute'; // Keep using the alias

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     // Wrap with the (now minimal) ProtectedRoute
     <ProtectedRoute>
       <AppShell>{children}</AppShell>
     </ProtectedRoute>
  );
}
