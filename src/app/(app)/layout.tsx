// src/app/(app)/layout.tsx
import React from 'react';
import Sidebar from '@/components/layout/Sidebar';
import ProtectedRoute from '../auth/ProtectedRoute'; // Keep using the alias
import LoadingSpinner from '@/components/ui/LoadingSpinner';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     // Wrap with the (now minimal) ProtectedRoute
     <ProtectedRoute>
       <div className="flex h-screen overflow-hidden bg-background text-text">
         <Sidebar />
         <main className="flex-1 overflow-y-auto p-6 md:p-10">
           {children}
         </main>
       </div>
     </ProtectedRoute>
  );
}
