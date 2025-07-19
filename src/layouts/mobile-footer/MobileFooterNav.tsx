"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { navigationItems } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Moon, Users, Settings, LogOut } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';

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
const mobileNavItems = createMobileNavItems();

export function MobileFooterNav() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ left: 0, transform: 'translateX(-50%)' });
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const carouselRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  const handleNavigation = useCallback((path?: string) => {
    if (path) navigate(path);
    setActiveMenu(null);
  }, [navigate]);

  const handleMenuToggle = useCallback((title: string, event: React.MouseEvent) => {
    if (activeMenu === title) {
      setActiveMenu(null);
      return;
    }

    // Calculate position relative to the clicked button
    const buttonElement = event.currentTarget as HTMLButtonElement;
    const buttonRect = buttonElement.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    
    // Calculate the center of the button
    const buttonCenter = buttonRect.left + buttonRect.width / 2;
    
    // Standard dropdown width (adjust based on your content)
    const dropdownWidth = 200; // Standard width for dropdown menus
    
    // Calculate left position to center dropdown on button
    let leftPosition = buttonCenter;
    let transformValue = 'translateX(-50%)';
    
    // Adjust if dropdown would go off screen
    if (buttonCenter - dropdownWidth / 2 < 16) {
      // Too close to left edge
      leftPosition = 16 + dropdownWidth / 2;
      transformValue = 'translateX(-50%)';
    } else if (buttonCenter + dropdownWidth / 2 > screenWidth - 16) {
      // Too close to right edge  
      leftPosition = screenWidth - 16 - dropdownWidth / 2;
      transformValue = 'translateX(-50%)';
    }
    
    setMenuPosition({
      left: leftPosition,
      transform: transformValue
    });
    
    setActiveMenu(title);
  }, [activeMenu]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (activeMenu && !target.closest('[data-dropdown-menu]') && !target.closest('[data-dropdown-trigger]')) {
        setActiveMenu(null);
      }
    };

    if (activeMenu) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeMenu]);

  // Close dropdown when carousel is swiped/moved
  useEffect(() => {
    if (!carouselRef.current) return;

    const carouselElement = carouselRef.current;
    const handleCarouselScroll = () => {
      if (activeMenu) {
        setActiveMenu(null);
      }
    };

    const handleTouchStart = () => {
      if (activeMenu) {
        setActiveMenu(null);
      }
    };

    const handlePointerDown = (event: PointerEvent) => {
      // Check if the pointer event is on the carousel content area
      const target = event.target as HTMLElement;
      if (target.closest('[data-carousel-content]') && activeMenu) {
        setActiveMenu(null);
      }
    };

    // Listen for scroll events (carousel movement)
    carouselElement.addEventListener('scroll', handleCarouselScroll, { passive: true });
    
    // Listen for touch events (swipe start)
    carouselElement.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    // Listen for pointer events (drag start)
    carouselElement.addEventListener('pointerdown', handlePointerDown, { passive: true });

    return () => {
      carouselElement.removeEventListener('scroll', handleCarouselScroll);
      carouselElement.removeEventListener('touchstart', handleTouchStart);
      carouselElement.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [activeMenu]);

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
        <Button
          key={item.title}
          variant="ghost"
          size="sm"
          className={cn(baseButtonClass, activeMenu === 'Profile' && 'bg-accent text-primary')}
          onClick={(e) => handleMenuToggle('Profile', e)}
          aria-label="User profile menu"
          data-dropdown-trigger
          ref={(el) => buttonRefs.current['Profile'] = el}
        >
          <div className={iconContainerClass}>
            {item.icon()}
          </div>
          <span className={labelClass}>{item.label}</span>
        </Button>
      );
    }

    // Handle navigation items with dropdowns
    if (item.children?.length > 0) {
      const Icon = item.icon;
      return (
        <Button
          key={item.title}
          variant="ghost"
          size="sm"
          className={cn(baseButtonClass, activeMenu === item.title && 'bg-accent text-primary')}
          onClick={(e) => handleMenuToggle(item.title, e)}
          aria-label={`${item.label} menu`}
          data-dropdown-trigger
          ref={(el) => buttonRefs.current[item.title] = el}
        >
          <div className={iconContainerClass}>
            <Icon className={cn("h-6 w-6", item.color)} />
          </div>
          <span className={labelClass}>{item.label}</span>
        </Button>
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
  }, [handleNavigation, handleMenuToggle, activeMenu, theme, toggleTheme]);

  const renderNavigationMenu = () => {
    if (!activeMenu) return null;

    const dropdownMenuClass = "fixed bottom-20 z-50 min-w-[8rem] w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-bottom-2 duration-200 md:hidden";
    
    const dropdownMenuStyle = {
      left: `${menuPosition.left}px`,
      transform: menuPosition.transform
    };

    // Handle Profile menu
    if (activeMenu === 'Profile') {
      return (
        <div 
          className={dropdownMenuClass}
          style={dropdownMenuStyle}
          data-dropdown-menu
        >
          <div className="px-2 py-1.5 text-sm font-semibold">
            <div className="flex flex-col space-y-1">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
            </div>
          </div>
          <div className="h-px bg-muted my-1"></div>
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
               onClick={() => handleNavigation('/company-profile')}>
            <Users className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </div>
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
               onClick={() => handleNavigation('/system-settings')}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </div>
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground"
               onClick={toggleTheme}>
            {theme === 'dark' ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
          </div>
          <div className="h-px bg-muted my-1"></div>
          <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 text-red-600 focus:text-red-600"
               onClick={() => console.log('Logout')}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </div>
        </div>
      );
    }

    // Handle navigation items with children
    const activeItem = mobileNavItems.flat().find(item => item.title === activeMenu);
    if (activeItem?.children?.length > 0) {
      return (
        <div 
          className={dropdownMenuClass}
          style={dropdownMenuStyle}
          data-dropdown-menu
        >
          {activeItem.children.map((child: any) => {
            const ChildIcon = child.icon;
            return (
              <div
                key={child.title}
                className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
                onClick={() => handleNavigation(child.path || '/')}
              >
                <ChildIcon className={cn("mr-2 h-4 w-4", child.color)} />
                <span className="truncate">{child.title}</span>
              </div>
            );
          })}
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {renderNavigationMenu()}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
        <Carousel
          ref={carouselRef}
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
          <CarouselContent className="ml-0" data-carousel-content>
            {mobileNavItems.map((group, groupIndex) => (
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
    </>
  );
}