
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Separator } from '@/components/ui/separator';
import { SidebarHeader } from './SidebarHeader';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarFooter } from './SidebarFooter';
import { Sidebar as UiSidebar, SidebarContent, useSidebar } from '@/components/ui/sidebar';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const { state, toggleSidebar } = useSidebar();
  const isCollapsed = state === 'collapsed';

  return (
    <UiSidebar>
      <SidebarContent className={cn("flex flex-col p-0 h-full", className)}>
        <SidebarHeader isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <SidebarNavigation isCollapsed={isCollapsed} onToggle={toggleSidebar} />
        <Separator className="bg-border" />
        <SidebarFooter isCollapsed={isCollapsed} />
      </SidebarContent>
    </UiSidebar>
  );
}
