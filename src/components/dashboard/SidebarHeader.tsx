
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sidebar, TrendingUp, Hexagon } from 'lucide-react';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarHeader({ isCollapsed, onToggle }: SidebarHeaderProps) {
  return (
    <div className={cn(
      "flex items-center border-b border-border h-[88px]",
      isCollapsed ? "justify-center" : "justify-between p-6"
    )}>
      {!isCollapsed && (
        <div className="flex items-center space-x-3">
          <div className="relative w-8 h-8">
            <Hexagon className="w-full h-full text-primary" fill="currentColor" />
            <TrendingUp className="absolute w-4 h-4 text-primary-foreground top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">FinanceFlow</h1>
            <p className="text-xs text-muted-foreground">Professional Accounting</p>
          </div>
        </div>
      )}
      <Button
        variant="ghost"
        size="sm"
        onClick={onToggle}
        className="text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg p-2"
      >
        <Sidebar className="w-4 h-4" />
      </Button>
    </div>
  );
}
