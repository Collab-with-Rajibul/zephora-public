
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { navigationItems } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/components/ThemeProvider';
import { 
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  DollarSign,
  File,
  Users,
  ArrowUp,
  ArrowDown,
  Clock,
  Search,
  Settings,
  Bell,
  Folder,
  Sun,
  Moon,
  Menu
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
  isCollapsed: boolean;
  onToggle: () => void;
}

export function Sidebar({ className, isCollapsed, onToggle }: SidebarProps) {
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
      "flex flex-col h-screen bg-background text-foreground border-r border-border transition-all duration-300 rounded-r-lg",
      isCollapsed ? "w-16" : "w-72",
      className
    )}>
      {/* Header */}
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
          <Menu className="w-4 h-4" />
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

      <Separator className="bg-border" />

      {/* Theme Toggle for Collapsed State */}
      {isCollapsed && (
        <div className="p-4 border-t border-border">
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground hover:bg-accent p-2 rounded-lg"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      )}

      {/* User Profile with Theme Toggle for Expanded State */}
      <div className="p-4 border-t border-border">
        <div className={cn(
          "flex items-center",
          isCollapsed ? "justify-center" : "space-x-3"
        )}>
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm font-medium rounded-lg">
              JD
            </AvatarFallback>
          </Avatar>
          {!isCollapsed && (
            <>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  John Doe
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  john.doe@company.com
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-foreground hover:bg-accent p-2 rounded-lg"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
