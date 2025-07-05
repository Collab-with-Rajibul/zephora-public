"use client";

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { navigationItems, iconMap } from '@/config/dashboard-nav';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Moon, Users, Settings, LogOut } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';


const CLICK_THRESHOLD = 10; // pixels

export function MobileFooterNav() {
  const navigate = useNavigate();
  const isDragging = useRef(false);
  const startCoords = useRef({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handlePointerDown = (e: React.PointerEvent<HTMLButtonElement>) => {
    isDragging.current = false;
    startCoords.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLButtonElement>) => {
    if (startCoords.current) {
      const dx = e.clientX - startCoords.current.x;
      const dy = e.clientY - startCoords.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > CLICK_THRESHOLD) {
        isDragging.current = true;
      }
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLButtonElement>, itemPath?: string, itemTitle?: string) => {
    if (!isDragging.current) {
      // It was a click
      if (itemPath) {
        navigate(itemPath);
      } else if (itemTitle) {
        setOpenDropdown(openDropdown === itemTitle ? null : itemTitle);
      }
    }
    startCoords.current = { x: 0, y: 0 }; // Reset coords
    isDragging.current = false;
  };

  const handleDropdownItemClick = (path: string) => {
    navigate(path);
    setOpenDropdown(null); // Close dropdown after navigation
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background border-t border-border md:hidden shadow-lg">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex flex-nowrap h-16 items-center justify-center space-x-6 px-4">
          {/* Zephora Logo Button */}
          <Button
            variant="ghost"
            size="sm"
            className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={(e) => handlePointerUp(e, '/')}
          >
            <img src="/lovable-uploads/zephora-logo.png" alt="Zephora Logo" className="w-6 h-6 rounded-full object-cover" />
            <span className="text-xs mt-1">Home</span>
          </Button>

          {navigationItems.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            
            if (item.children && item.children.length > 0) {
              return (
                <DropdownMenu key={item.title} open={openDropdown === item.title} onOpenChange={setOpenDropdown}>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
                      onPointerDown={handlePointerDown}
                      onPointerMove={handlePointerMove}
                      onPointerUp={(e) => handlePointerUp(e, undefined, item.title)}
                    >
                      <Icon className={cn("h-6 w-6", item.color)} />
                      <span className="text-xs mt-1">{item.title.split(' ')[0]}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent side="top" align="center" className="w-56 mb-2">
                    {item.children.map((child) => {
                      const ChildIcon = iconMap[child.icon as keyof typeof iconMap];
                      return (
                        <DropdownMenuItem key={child.title} onClick={() => handleDropdownItemClick(child.path || '/')}>
                          <ChildIcon className={cn("mr-2 h-4 w-4", child.color)} />
                          <span>{child.title}</span>
                        </DropdownMenuItem>
                      );
                    })}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
            
            return (
              <Button
                key={item.title}
                variant="ghost"
                size="sm"
                className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={(e) => handlePointerUp(e, item.path || '/')}
              >
                <Icon className={cn("h-6 w-6", item.color)} />
                <span className="text-xs mt-1">{item.title.split(' ')[0]}</span>
              </Button>
            );
          })}

          {/* User Profile Avatar */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={(e) => handlePointerUp(e, undefined, 'user-profile')}
              >
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
                </Avatar>
                <span className="text-xs mt-1">Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent side="top" align="center" className="w-56 mb-2">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => handleDropdownItemClick('/company-profile')}>
                <Users className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleDropdownItemClick('/system-settings')}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={toggleTheme}>
                {theme === 'dark' ? (
                  <Sun className="mr-2 h-4 w-4 text-yellow-400" />
                ) : (
                  <Moon className="mr-2 h-4 w-4 text-slate-900" />
                )}
                <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-red-600" onClick={() => console.log('Logout')}> {/* Replace with actual logout logic */}
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
