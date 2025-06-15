
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
          <img src="/lovable-uploads/66302364-77b8-4f58-9dae-ab86821d9e4e.png" alt="Zephora Logo" className="w-8 h-8 rounded-full object-cover" />
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
        size={isCollapsed ? "icon" : "sm"}
        onClick={onToggle}
        className={cn(
          "text-muted-foreground hover:text-foreground hover:bg-accent",
          isCollapsed ? "rounded-full" : "rounded-lg p-2"
        )}
      >
        {isCollapsed ? (
          <img src="/lovable-uploads/66302364-77b8-4f58-9dae-ab86821d9e4e.png" alt="Zephora Logo" className="w-8 h-8 rounded-full object-cover" />
        ) : (
          <Sidebar className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
