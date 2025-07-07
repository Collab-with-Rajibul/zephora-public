
"use client";

import React, { useState, useRef, useCallback } from 'react';
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

const CLICK_THRESHOLD = 10;

// Mobile icon order similar to QuickActions approach
const mobileIconOrder = [
  'home', 'sales', 'purchase', 'payments', 'profile',
  'employees', 'inventory', 'financial', 'reports', 'settings'
];

// Icon definitions with consistent mapping
const iconDefinitions = {
  home: {
    title: 'Home',
    component: () => (
      <img src="/lovable-uploads/zephora-logo.png" alt="Zephora Logo" className="w-6 h-6 rounded-full object-cover" />
    ),
    path: '/'
  },
  sales: {
    title: 'Sales',
    icon: DollarSign,
    color: 'text-green-500',
    navItem: navigationItems.find(item => item.title === 'Sales Management')
  },
  purchase: {
    title: 'Purchase',
    icon: ShoppingCart,
    color: 'text-blue-500',
    navItem: navigationItems.find(item => item.title === 'Purchase Management')
  },
  payments: {
    title: 'Payments',
    icon: CreditCard,
    color: 'text-pink-500',
    navItem: navigationItems.find(item => item.title === 'Payments')
  },
  profile: {
    title: 'Profile',
    isProfile: true
  },
  employees: {
    title: 'Employees',
    icon: UserCheck,
    color: 'text-purple-500',
    navItem: navigationItems.find(item => item.title === 'Employee Management')
  },
  inventory: {
    title: 'Inventory',
    icon: Package,
    color: 'text-purple-500',
    navItem: navigationItems.find(item => item.title === 'Inventory & Stock')
  },
  financial: {
    title: 'Financial',
    icon: BookOpen,
    color: 'text-cyan-500',
    navItem: navigationItems.find(item => item.title === 'Financial Statements')
  },
  reports: {
    title: 'Reports',
    icon: PieChart,
    color: 'text-yellow-400',
    navItem: navigationItems.find(item => item.title === 'Reports & Analytics')
  },
  settings: {
    title: 'Settings',
    icon: Settings,
    color: 'text-gray-500',
    navItem: navigationItems.find(item => item.title === 'Settings')
  }
};

// Create groups from the ordered list
const mobileIconGroups = [
  mobileIconOrder.slice(0, 5).map(id => ({ id, ...iconDefinitions[id] })),
  mobileIconOrder.slice(5, 10).map(id => ({ id, ...iconDefinitions[id] }))
];

export function MobileFooterNav() {
  const navigate = useNavigate();
  const isDragging = useRef(false);
  const startCoords = useRef({ x: 0, y: 0 });
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handlePointerDown = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    isDragging.current = false;
    startCoords.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handlePointerMove = useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    if (startCoords.current) {
      const dx = e.clientX - startCoords.current.x;
      const dy = e.clientY - startCoords.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (distance > CLICK_THRESHOLD) {
        isDragging.current = true;
      }
    }
  }, []);

  const handleClick = useCallback((itemPath?: string, itemTitle?: string) => {
    if (!isDragging.current) {
      if (itemPath) {
        navigate(itemPath);
      } else if (itemTitle) {
        setOpenDropdown(prev => prev === itemTitle ? null : itemTitle);
      }
    }
    startCoords.current = { x: 0, y: 0 };
    isDragging.current = false;
  }, [navigate]);

  const handleDropdownItemClick = useCallback((path: string) => {
    navigate(path);
    setOpenDropdown(null);
  }, [navigate]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const renderIconButton = useCallback((item: any) => {
    const baseButtonClass = "flex flex-col items-center justify-center text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-300 ease-in-out rounded-xl active:scale-95 transform hover:scale-105 flex-1 py-2 px-1";

    // Handle Home button
    if (item.id === 'home') {
      return (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          className={baseButtonClass}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={() => handleClick(item.path)}
        >
          <div className="w-6 h-6 flex items-center justify-center mb-1">
            {item.component()}
          </div>
          <span className="text-xs font-medium text-center leading-tight max-w-full truncate">{item.title}</span>
        </Button>
      );
    }

    // Handle Profile button
    if (item.isProfile) {
      return (
        <DropdownMenu key={item.id} open={openDropdown === 'user-profile'} onOpenChange={(open) => !open && setOpenDropdown(null)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={baseButtonClass}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={() => handleClick(undefined, 'user-profile')}
            >
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs font-medium text-center leading-tight max-w-full truncate">{item.title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-scale-in">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
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
        <DropdownMenu key={item.id} open={openDropdown === item.navItem.title} onOpenChange={(open) => !open && setOpenDropdown(null)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={baseButtonClass}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={() => handleClick(undefined, item.navItem.title)}
            >
              <div className="w-6 h-6 flex items-center justify-center mb-1">
                <Icon className={cn("h-6 w-6", item.color)} />
              </div>
              <span className="text-xs font-medium text-center leading-tight max-w-full truncate">{item.title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-scale-in">
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
        className={baseButtonClass}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => handleClick(item.navItem?.path || '/')}
      >
        <div className="w-6 h-6 flex items-center justify-center mb-1">
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
        <span className="text-xs font-medium text-center leading-tight max-w-full truncate">{item.title}</span>
      </Button>
    );
  }, [handlePointerDown, handlePointerMove, handleClick, openDropdown, handleDropdownItemClick, toggleTheme, theme]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
      <Carousel
        opts={{
          align: "center",
          loop: false,
          containScroll: "trimSnaps",
          skipSnaps: false,
          duration: 25
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {mobileIconGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="pl-0 basis-full">
              <div className="flex h-16 items-center justify-center">
                <div className="flex items-center justify-evenly w-full px-4 max-w-md mx-auto">
                  {group.map((item) => renderIconButton(item))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
