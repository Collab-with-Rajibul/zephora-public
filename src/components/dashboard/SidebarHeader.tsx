
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { DollarSign, Sidebar } from 'lucide-react';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarHeader({ isCollapsed, onToggle }: SidebarHeaderProps) {
  return (
    <div className={cn(
      "flex items-center border-b border-border",
      isCollapsed ? "justify-center p-4" : "justify-between p-6"
    )}>
      {!isCollapsed && (
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
            <DollarSign className="w-5 h-5 text-primary-foreground" />
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
