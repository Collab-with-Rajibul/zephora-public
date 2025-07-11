"use client";

import React, { useState, useCallback } from 'react';
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

// Mobile icon order
const mobileIconOrder = [
  'home', 'sales', 'purchase', 'payments', 'profile',
  'employees', 'inventory', 'financial', 'reports', 'settings'
];

// Icon definitions
const iconDefinitions = {
  home: {
    title: 'Home',
    component: () => (
      <img src="/zephora-logo.png" alt="Zephora Logo" className="w-6 h-6 rounded-full object-cover" />
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
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handleNavigation = useCallback((itemPath?: string) => {
    if (itemPath) {
      navigate(itemPath);
    }
  }, [navigate]);

  const handleDropdownToggle = useCallback((itemTitle: string) => {
    setOpenDropdown(prev => prev === itemTitle ? null : itemTitle);
  }, []);

  const handleDropdownItemClick = useCallback((path: string) => {
    navigate(path);
    setOpenDropdown(null);
  }, [navigate]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const renderIconButton = useCallback((item: any) => {
    const baseButtonClass = "flex flex-col items-center justify-start text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-out rounded-xl select-none touch-manipulation h-16 w-full min-w-0 px-1 pt-1 pb-2";

    // Handle Home button
    if (item.id === 'home') {
      return (
        <Button
          key={item.id}
          variant="ghost"
          size="sm"
          className={baseButtonClass}
          onClick={() => handleNavigation(item.path)}
          aria-label={`Navigate to ${item.title}`}
        >
          <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
            {item.component()}
          </div>
          <span className="text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0">{item.title}</span>
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
              onClick={() => handleDropdownToggle('user-profile')}
              aria-label="User profile menu"
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder-avatar.jpg" />
                  <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0">{item.title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-in slide-in-from-bottom-2 duration-200">
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
              onClick={() => handleDropdownToggle(item.navItem.title)}
              aria-label={`${item.title} menu`}
            >
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                <Icon className={cn("h-6 w-6", item.color)} />
              </div>
              <span className="text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0">{item.title}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-in slide-in-from-bottom-2 duration-200">
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
        onClick={() => handleNavigation(item.navItem?.path || '/')}
        aria-label={`Navigate to ${item.title}`}
      >
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
        <span className="text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0">{item.title}</span>
      </Button>
    );
  }, [handleNavigation, handleDropdownToggle, openDropdown, handleDropdownItemClick, toggleTheme, theme]);

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
      <Carousel
        opts={{
          align: "center",
          loop: false,
          containScroll: "keepSnaps",
          skipSnaps: false,
          duration: 25,
          dragFree: false,
          inViewThreshold: 0.7
        }}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {mobileIconGroups.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="pl-0 basis-full">
              <div className="flex h-20 items-start justify-center px-2 pt-0 pb-1">
                <div className="flex items-start justify-evenly w-full max-w-lg mx-auto gap-1">
                  {group.map((item) => (
                    <div key={item.id} className="flex-1 min-w-0">
                      {renderIconButton(item)}
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}