
"use client";

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  React.useEffect(() => {
    if (isMobile) {
      setIsSidebarCollapsed(true);
    } else {
      setIsSidebarCollapsed(false);
    }
  }, [isMobile]);


  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="financeflow-theme">
      <div className="flex h-screen w-full bg-background rounded-lg overflow-hidden">
        {/* Sidebar */}
        <Sidebar 
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
        />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Header */}
          <Header onMenuClick={toggleSidebar} />
          
          {/* Dashboard Content */}
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-6 max-w-7xl">
              <DashboardOverview />
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Index;
