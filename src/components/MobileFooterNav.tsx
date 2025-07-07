
"use client";

import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { navigationItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Moon, Users, Settings, LogOut, UserCheck, Package, BookOpen, PieChart, DollarSign, ShoppingCart, CreditCard } from 'lucide-react';
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

// Define icon groups for mobile
const mobileIconGroups = [
  // Group 1: Home, Sales, Purchase, Payments, Profile
  [
    {
      id: 'home',
      title: 'Home',
      icon: 'home',
      path: '/',
      component: () => (
        <img src="/lovable-uploads/zephora-logo.png" alt="Zephora Logo" className="w-6 h-6 rounded-full object-cover" />
      )
    },
    {
      id: 'sales',
      title: 'Sales',
      icon: DollarSign,
      color: 'text-green-500',
      navItem: navigationItems.find(item => item.title === 'Sales Management')
    },
    {
      id: 'purchase',
      title: 'Purchase',
      icon: ShoppingCart,
      color: 'text-blue-500',
      navItem: navigationItems.find(item => item.title === 'Purchase Management')
    },
    {
      id: 'payments',
      title: 'Payments',
      icon: CreditCard,
      color: 'text-pink-500',
      navItem: navigationItems.find(item => item.title === 'Payments')
    },
    {
      id: 'profile',
      title: 'Profile',
      icon: 'profile',
      isProfile: true
    }
  ],
  // Group 2: Employees, Inventory, Financial, Reports, Settings
  [
    {
      id: 'employees',
      title: 'Employees',
      icon: UserCheck,
      color: 'text-purple-500',
      navItem: navigationItems.find(item => item.title === 'Employee Management')
    },
    {
      id: 'inventory',
      title: 'Inventory',
      icon: Package,
      color: 'text-purple-500',
      navItem: navigationItems.find(item => item.title === 'Inventory & Stock')
    },
    {
      id: 'financial',
      title: 'Financial',
      icon: BookOpen,
      color: 'text-cyan-500',
      navItem: navigationItems.find(item => item.title === 'Financial Statements')
    },
    {
      id: 'reports',
      title: 'Reports',
      icon: PieChart,
      color: 'text-yellow-400',
      navItem: navigationItems.find(item => item.title === 'Reports & Analytics')
    },
    {
      id: 'settings',
      title: 'Settings',
      icon: Settings,
      color: 'text-gray-500',
      navItem: navigationItems.find(item => item.title === 'Settings')
    }
  ]
];

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

  const createDropdownOpenChangeHandler = (itemTitle: string) => (open: boolean) => {
    // Only close the dropdown when open becomes false
    // Opening is handled by the pointer events to maintain drag detection
    if (!open) {
      setOpenDropdown(null);
    }
  };

  const renderIconButton = (item: any) => {
    // Handle Home button
    if (item.id === 'home') {
      return (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={(e) => handlePointerUp(e, item.path)}
        >
          {item.component()}
          <span className="text-xs mt-1">{item.title}</span>
        </Button>
      );
    }

    // Handle Profile button
    if (item.isProfile) {
      return (
        <DropdownMenu key={item.id}>
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
              <span className="text-xs mt-1">{item.title}</span>
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
            <DropdownMenuItem className="text-red-600" onClick={() => console.log('Logout')}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    // Handle navigation items with dropdowns
    if (item.navItem && item.navItem.children && item.navItem.children.length > 0) {
      const Icon = item.icon;
      return (
        <DropdownMenu key={item.id} open={openDropdown === item.navItem.title} onOpenChange={createDropdownOpenChangeHandler(item.navItem.title)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={(e) => handlePointerUp(e, undefined, item.navItem.title)}
            >
              <Icon className={cn("h-6 w-6", item.color)} />
              <span className="text-xs mt-1">{item.title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2">
            {item.navItem.children.map((child: any) => {
              const ChildIcon = child.icon;
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

    // Handle simple navigation items
    const Icon = item.icon;
    return (
      <Button
        key={item.id}
        variant="ghost"
        size="sm"
        className="flex flex-col h-auto w-auto p-2 items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-in-out rounded-lg active:scale-95"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={(e) => handlePointerUp(e, item.navItem?.path || '/')}
      >
        <Icon className={cn("h-6 w-6", item.color)} />
        <span className="text-xs mt-1">{item.title}</span>
      </Button>
    );
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background border-t border-border md:hidden shadow-lg">
      <Carousel
        opts={{
          align: "start",
          loop: false,
          containScroll: "trimSnaps",
          skipSnaps: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {mobileIconGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="pl-0 basis-full">
              <div className="flex h-16 items-center justify-center space-x-6 px-4">
                {group.map((item) => renderIconButton(item))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
