
"use client";

import React from 'react';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Sidebar } from '@/components/dashboard/Sidebar';
import { Header } from '@/components/dashboard/Header';
import { DashboardOverview } from '@/components/dashboard/DashboardOverview';
import { SidebarProvider } from '@/components/ui/sidebar';

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light" storageKey="financeflow-theme">
      <SidebarProvider>
        <div className="flex h-screen w-full bg-background rounded-lg overflow-hidden">
          {/* Sidebar */}
          <Sidebar />
          
          {/* Main Content */}
          <div className="flex-1 flex flex-col overflow-hidden">
            {/* Header */}
            <Header />
            
            {/* Dashboard Content */}
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto p-6 max-w-7xl">
                <DashboardOverview />
              </div>
            </main>
          </div>
        </div>
      </SidebarProvider>
    </ThemeProvider>
  );
};

export default Index;
