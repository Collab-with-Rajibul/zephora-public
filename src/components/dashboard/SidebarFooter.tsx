
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon } from 'lucide-react';

interface SidebarFooterProps {
  isCollapsed: boolean;
}

export function SidebarFooter({ isCollapsed }: SidebarFooterProps) {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const themeToggleButton = (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="text-muted-foreground hover:text-foreground hover:bg-accent p-2 rounded-lg"
    >
      {theme === 'dark' ? <Sun className="w-4 h-4 text-yellow-400" /> : <Moon className="w-4 h-4 text-slate-900" />}
    </Button>
  );

  const userAvatar = (
    <Avatar className="w-8 h-8">
      <AvatarImage src="/placeholder-avatar.jpg" />
      <AvatarFallback className="text-primary-foreground text-sm font-medium rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
        JD
      </AvatarFallback>
    </Avatar>
  );

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center space-y-2 p-4">
        {themeToggleButton}
        {userAvatar}
      </div>
    );
  }

  return (
    <div className="p-4 border-t border-border">
      <div className="flex items-center space-x-3">
        {userAvatar}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">
            John Doe
          </p>
          <p className="text-xs text-muted-foreground truncate">
            john.doe@company.com
          </p>
        </div>
        {themeToggleButton}
      </div>
    </div>
  );
}
