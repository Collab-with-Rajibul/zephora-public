
"use client";

import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { PageHeader } from '@/components/dashboard/PageHeader';
import { useIsMobile } from '@/hooks/use-mobile';
import { navigationItems } from '@/config/dashboard-nav';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const getPageTitle = (pathname: string): string => {
    if (pathname === '/') {
      return 'Dashboard';
    }
    const allNavItems = navigationItems.flatMap(group => group.children || []);
    const currentNavItem = allNavItems.find(item => item.path === pathname);
    return currentNavItem?.title || 'Dashboard';
  };
  
  const pageTitle = getPageTitle(location.pathname);

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
  
  const isSidebarOpenOnMobile = isMobile && !isSidebarCollapsed;

  return (
    <ThemeProvider defaultTheme="light" storageKey="financeflow-theme">
      <div className="flex h-screen w-full bg-background rounded-lg overflow-hidden">
        <Sidebar 
          isCollapsed={isSidebarCollapsed}
          onToggle={toggleSidebar}
        />
        
        <div className="flex-1 flex flex-col overflow-hidden relative">
          {isSidebarOpenOnMobile && (
            <div
              onClick={toggleSidebar}
              className="absolute inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden"
            />
          )}

          <PageHeader title={pageTitle} />
          
          <main className="flex-1 overflow-y-auto">
            <div className="container mx-auto p-6 max-w-7xl">
              {children}
            </div>
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AppLayout;
