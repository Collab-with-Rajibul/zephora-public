
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sidebar } from 'lucide-react';

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
          <img src="/lovable-uploads/66302364-77b8-4f58-9dae-ab86821d9e4e.png" alt="Zephora Logo" className="w-8 h-8" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Zephora</h1>
            <p className="text-xs text-muted-foreground">
              Simplify with Elegance
            </p>
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
