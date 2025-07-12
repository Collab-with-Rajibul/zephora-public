"use client";

import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { navigationItems } from '@/lib/constants';
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

// Mobile icon order with pre-defined groups using first words of titles
const iconOrder = [
  ['Home', 'Sales', 'Purchase', 'Payments', 'Profile'],
  ['Employees', 'Inventory', 'Financial', 'Reports', 'Settings']
];

// Create mobile navigation items by combining navigation items with new items
const createMobileNavItems = () => {
  const navItemsMap = new Map(navigationItems.map(item => [item.title.split(' ')[0], item]));
  
  const newItems = {
    'Home': {
      title: 'Home',
      icon: () => <img src="/zephora-logo.png" alt="Zephora Logo" className="w-6 h-6 rounded-full object-cover" />,
      path: '/'
    },
    'Profile': {
      title: 'Profile',
      icon: () => (
        <Avatar className="w-6 h-6">
          <AvatarImage src="/placeholder-avatar.jpg" />
          <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
        </Avatar>
      )
    }
  };

  return iconOrder.map(group => 
    group.map(label => {
      if (newItems[label]) {
        return { ...newItems[label], label };
      }
      
      const navItem = navItemsMap.get(label);
      if (navItem) {
        return { ...navItem, label };
      }
      
      return null;
    }).filter(Boolean)
  );
};

// Create mobile items with groups
const mobileItems = createMobileNavItems();

export function MobileFooterNav() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();

  const handleNavigation = useCallback((path?: string) => {
    if (path) navigate(path);
  }, [navigate]);

  const handleDropdownToggle = useCallback((title: string) => {
    setOpenDropdown(prev => prev === title ? null : title);
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
    const iconContainerClass = "w-6 h-6 flex items-center justify-center flex-shrink-0";
    const labelClass = "text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0";

    // Handle Home button
    if (item.title === 'Home') {
      return (
        <Button
          key={item.title}
          variant="ghost"
          size="sm"
          className={baseButtonClass}
          onClick={() => handleNavigation(item.path)}
          aria-label={`Navigate to ${item.title}`}
        >
          <div className={iconContainerClass}>
            {item.icon()}
          </div>
          <span className={labelClass}>{item.label}</span>
        </Button>
      );
    }

    // Handle Profile button
    if (item.title === 'Profile') {
      return (
        <DropdownMenu key={item.title} open={openDropdown === 'Profile'} onOpenChange={(open) => !open && setOpenDropdown(null)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={baseButtonClass}
              onClick={() => handleDropdownToggle('Profile')}
              aria-label="User profile menu"
            >
              <div className={iconContainerClass}>
                {item.icon()}
              </div>
              <span className={labelClass}>{item.label}</span>
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
    if (item.children?.length > 0) {
      const Icon = item.icon;
      return (
        <DropdownMenu key={item.title} open={openDropdown === item.title} onOpenChange={(open) => !open && setOpenDropdown(null)}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={baseButtonClass}
              onClick={() => handleDropdownToggle(item.title)}
              aria-label={`${item.label} menu`}
            >
              <div className={iconContainerClass}>
                <Icon className={cn("h-6 w-6", item.color)} />
              </div>
              <span className={labelClass}>{item.label}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-in slide-in-from-bottom-2 duration-200">
            {item.children.map((child: any) => {
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

    // Handle simple navigation items (fallback, though most have children)
    const Icon = item.icon;
    return (
      <Button
        key={item.title}
        variant="ghost"
        size="sm"
        className={baseButtonClass}
        onClick={() => handleNavigation(item.path || '/')}
        aria-label={`Navigate to ${item.title}`}
      >
        <div className={iconContainerClass}>
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
        <span className={labelClass}>{item.label}</span>
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
          {mobileItems.map((group, groupIndex) => (
            <CarouselItem key={groupIndex} className="pl-0 basis-full">
              <div className="flex h-20 items-start justify-center px-2 pt-0 pb-1">
                <div className="flex items-start justify-evenly w-full max-w-lg mx-auto gap-1">
                  {group.map((item) => (
                    <div key={item.title} className="flex-1 min-w-0">
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