
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "Sales Management",
    // "Purchase Management",
  ]);
  
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarContent = (
    <>
      <SidebarHeader isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} setExpandedItems={setExpandedItems} />
      <SidebarNavigation
        isCollapsed={isSidebarCollapsed}
        onToggle={toggleSidebar}
        expandedItems={expandedItems}
        setExpandedItems={setExpandedItems}
      />
      <Separator className="bg-border" />
      <SidebarFooter isCollapsed={isSidebarCollapsed} />
    </>
  );

  return (
    <div className={cn(
      "flex flex-col h-screen bg-background text-foreground border-r border-border transition-all duration-300 rounded-r-lg",
      isSidebarCollapsed ? "w-16" : "w-72",
      className
    )}>
      {sidebarContent}
    </div>
  );
}
