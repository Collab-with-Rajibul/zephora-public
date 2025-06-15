
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/components/ThemeProvider';
import { 
  ChevronLeft, 
  ChevronRight,
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

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [expandedItems, setExpandedItems] = useState<string[]>(['Sales Management']);
  const { theme, setTheme } = useTheme();

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className={cn(
      "flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border transition-all duration-300",
      isCollapsed ? "w-16" : "w-72",
      className
    )}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-sidebar-border">
        {!isCollapsed && (
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-sidebar-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-semibold text-sidebar-primary-foreground">FinanceFlow</h1>
              <p className="text-xs text-sidebar-foreground">Professional Accounting</p>
            </div>
          </div>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="text-sidebar-foreground hover:text-sidebar-primary-foreground hover:bg-sidebar-accent"
        >
          {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </Button>
      </div>

      {/* Navigation */}
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
                    "w-full justify-start text-sidebar-foreground hover:text-sidebar-primary-foreground hover:bg-sidebar-accent transition-colors",
                    isCollapsed && "justify-center px-2"
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
                          className="w-full justify-start text-sm text-sidebar-foreground hover:text-sidebar-primary-foreground hover:bg-sidebar-accent"
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

      <Separator className="bg-sidebar-border" />

      {/* Theme Toggle */}
      {!isCollapsed && (
        <div className="p-4">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="w-full justify-start text-sidebar-foreground hover:text-sidebar-primary-foreground hover:bg-sidebar-accent"
          >
            <div className="w-5 h-5 rounded-full bg-gradient-to-r from-orange-400 to-rose-400 shrink-0" />
            <span className="ml-3 text-sm">
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </span>
          </Button>
        </div>
      )}

      {/* User Profile */}
      <div className="p-4 border-t border-sidebar-border">
        <div className={cn(
          "flex items-center space-x-3",
          isCollapsed && "justify-center"
        )}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-sidebar-primary text-sidebar-primary-foreground text-sm font-medium">
              JD
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-sidebar-primary-foreground truncate">
                John Doe
              </p>
              <p className="text-xs text-sidebar-foreground truncate">
                john.doe@company.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
