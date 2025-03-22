import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { BottomNavigation } from './BottomNavigation';
import { TopBar } from './TopBar';

export function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-1 relative">
        <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        
        <main className="flex-1 pb-16 md:pb-0">
          <Outlet />
        </main>
      </div>
      
      <BottomNavigation />
    </div>
  );
}