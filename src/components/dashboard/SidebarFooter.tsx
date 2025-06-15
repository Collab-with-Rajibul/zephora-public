
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '@/components/ThemeProvider';
import { Sun, Moon, Users, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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

  const UserProfileMenu = () => (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 rounded-full p-0 flex items-center justify-center">
          <Avatar className="w-8 h-8">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback className="text-primary-foreground text-sm font-medium bg-gradient-to-br from-blue-500 to-purple-600">
              JD
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 bg-popover rounded-xl mb-2" side="top" align={isCollapsed ? "center" : "start"} forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">John Doe</p>
            <p className="text-xs leading-none text-muted-foreground">
              john.doe@company.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="rounded-lg">
          <Users className="mr-2 h-4 w-4" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg">
          <Settings className="mr-2 h-4 w-4" />
          <span>Settings</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600 rounded-lg">
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  if (isCollapsed) {
    return (
      <div className="flex flex-col items-center space-y-2 p-4">
        {themeToggleButton}
        <UserProfileMenu />
      </div>
    );
  }

  return (
    <div className="p-4 border-t border-border">
      <div className="flex items-center space-x-3">
        <UserProfileMenu />
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
