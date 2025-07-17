
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ className, isCollapsed, onToggle }: SidebarProps) {
  const [expandedItems, setExpandedItems] = React.useState<string[]>([
    "Sales Management",
    // "Purchase Management",
  ]);

  const resetAndToggle = () => {
    if (!isCollapsed) {
      setExpandedItems(["Sales Management", "Purchase Management"]);
    }
    onToggle();
  };

  const sidebarContent = (
    <>
      <SidebarHeader isCollapsed={isCollapsed} onToggle={onToggle} setExpandedItems={setExpandedItems} />
      <SidebarNavigation
        isCollapsed={isCollapsed}
        onToggle={onToggle}
        expandedItems={expandedItems}
        setExpandedItems={setExpandedItems}
      />
      <Separator className="bg-border" />
      <SidebarFooter isCollapsed={isCollapsed} />
    </>
  );

  return (
    <div className={cn(
      "flex flex-col h-screen bg-background text-foreground border-r border-border transition-all duration-300 rounded-r-lg",
      isCollapsed ? "w-16" : "w-72",
      className
    )}>
      {sidebarContent}
    </div>
  );
}
