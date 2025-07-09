
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sidebar } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export function SidebarHeader({ isCollapsed, onToggle }: SidebarHeaderProps) {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (!isCollapsed) {
      onToggle();
    }
    navigate('/');
  };

  return (
    <div className={cn(
      "flex items-center border-b border-border h-[88px]",
      isCollapsed ? "justify-center" : "justify-between p-6"
    )}>
      {!isCollapsed && (
        <button onClick={handleLogoClick} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <img src="/zephora-logo.png" alt="Zephora Logo" className="w-8 h-8 rounded-full object-cover" />
          <div>
            <h1 className="text-lg font-semibold text-foreground">Zephora</h1>
            <p className="text-xs text-muted-foreground">
              Simplify with Elegance
            </p>
          </div>
        </button>
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
          <button onClick={handleLogoClick}>
            <img src="/zephora-logo.png" alt="Zephora Logo" className="w-8 h-8 rounded-full object-cover" />
          </button>
        ) : (
          <Sidebar className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}
