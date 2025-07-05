
"use client";

import React, { useState } from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { MobileFooterNav } from '@/components/MobileFooterNav';
import { useIsMobile } from '@/hooks/use-mobile';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="financeflow-theme">
      <div className="flex h-screen w-full bg-background rounded-lg overflow-hidden">
        {!isMobile && (
          <Sidebar 
            isCollapsed={isSidebarCollapsed}
            onToggle={toggleSidebar}
          />
        )}
        
        <div className="flex-1 flex flex-col overflow-hidden">
          <main className="flex-1 overflow-y-auto pb-16 md:pb-0">
            <div className="container mx-auto p-6 max-w-7xl">
              {children}
            </div>
          </main>
          
          {isMobile && <MobileFooterNav />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
