
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ className, isCollapsed, onToggle }: SidebarProps) {
  const isMobile = useIsMobile();

  const sidebarContent = (
    <>
      <SidebarHeader isCollapsed={isMobile ? false : isCollapsed} onToggle={onToggle} />
      <SidebarNavigation isCollapsed={isMobile ? false : isCollapsed} onToggle={onToggle} />
      <Separator className="bg-border" />
      <SidebarFooter isCollapsed={isMobile ? false : isCollapsed} />
    </>
  );

  if (isMobile) {
    return (
      <>
        <div
          onClick={onToggle}
          className={cn(
            "fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden",
            isCollapsed ? "pointer-events-none opacity-0" : "opacity-100",
            "transition-opacity duration-300"
          )}
        />
        <div className={cn(
          "fixed z-50 flex h-screen w-72 flex-col border-r border-border bg-background text-foreground transition-transform duration-300 md:hidden rounded-r-lg",
          isCollapsed ? "-translate-x-full" : "translate-x-0",
          className
        )}>
          {sidebarContent}
        </div>
      </>
    );
  }

  return (
    <div className={cn(
      "hidden md:flex flex-col h-screen bg-background text-foreground border-r border-border transition-all duration-300 rounded-r-lg",
      isCollapsed ? "w-16" : "w-72",
      className
    )}>
      {sidebarContent}
    </div>
  );
}
