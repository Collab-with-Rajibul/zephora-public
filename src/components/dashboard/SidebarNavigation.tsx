
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown,
  DollarSign,
  File,
  Users,
  ArrowUp,
  ArrowDown,
  Clock,
  Search,
  Settings,
  Bell,
  Folder
} from 'lucide-react';

const iconMap = {
  'dollar-sign': DollarSign,
  'file': File,
  'users': Users,
  'arrow-up': ArrowUp,
  'arrow-down': ArrowDown,
  'clock': Clock,
  'search': Search,
  'settings': Settings,
  'bell': Bell,
  'folder': Folder
};

interface SidebarNavigationProps {
  isCollapsed: boolean;
}

export function SidebarNavigation({ isCollapsed }: SidebarNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Sales Management']);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isExpanded = expandedItems.includes(item.title);
          
          return (
            <div key={item.title}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded-lg",
                  isCollapsed ? "justify-center px-2" : "justify-start"
                )}
                onClick={() => item.children && toggleExpanded(item.title)}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 text-sm font-medium">{item.title}</span>
                    {item.children && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 ml-auto transition-transform",
                          isExpanded && "rotate-180"
                        )} 
                      />
                    )}
                  </>
                )}
              </Button>
              
              {/* Submenu */}
              {!isCollapsed && item.children && isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.children.map((child) => {
                    const ChildIcon = iconMap[child.icon as keyof typeof iconMap];
                    return (
                      <Button
                        key={child.title}
                        variant="ghost"
                        className="w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
                      >
                        <ChildIcon className="w-4 h-4 shrink-0" />
                        <span className="ml-3">{child.title}</span>
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
