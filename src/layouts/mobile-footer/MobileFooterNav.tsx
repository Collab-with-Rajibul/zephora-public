"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from '@/components/ui/carousel';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sun, Moon, Users, Settings, LogOut } from 'lucide-react';
import { useTheme } from '@/components/ThemeProvider';
import { NavItem } from '@/lib/types';
import { navigationItems } from '@/lib/constants';

// Define custom NavItems for Home and Profile menu
const newNavItems: NavItem[] = [
  {
    title: 'Home',
    icon: ({ className }) => <img src="/zephora-logo.png" alt="Zephora Logo" className={cn(className, "w-6 h-6 rounded-full object-cover")} />,
    color: 'text-gray-500',
    path: '/'
  },
  {
    title: 'Profile',
    icon: ({ className }) => (
      <Avatar className={cn(className, "w-6 h-6")}>
        <AvatarImage src="/placeholder-avatar.jpg" />
        <AvatarFallback className="text-primary-foreground text-xs font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
      </Avatar>
    ),
    color: 'text-gray-500',
    children: [
      { title: 'Profile', path: '/company-profile', icon: Users, color: 'text-sky-600' },
      { title: 'Settings', path: '/system-settings', icon: Settings, color: 'text-slate-500' },
    ]
  },
];

// Combine all navigation items
const mobileNavigationItems: NavItem[] = [
  ...newNavItems,
  ...navigationItems
];

// Mobile icon order with pre-defined groups using first words of titles
const iconOrder = [
  ['Home', 'Sales', 'Purchase', 'Payments', 'Profile'],
  ['Employees', 'Inventory', 'Financial', 'Reports', 'Settings']
];

// Create mobile navigation items by combining navigation items with new items
const createMobileNavItems = () => {
  const navItemsMap = new Map(mobileNavigationItems.map(item => [item.title.split(' ')[0], item]));

  return iconOrder.map(group =>
    group.map(label => {
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
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();

  // Close dropdown on carousel swipe
  useEffect(() => {
    if (!carouselApi) return;
    const handleSelect = () => setActiveMenu(null);
    carouselApi.on('select', handleSelect);
    return () => {
      carouselApi.off('select', handleSelect);
    };
  }, [carouselApi]);

  const handleNavigation = useCallback((path?: string) => {
    if (path) navigate(path);
    setActiveMenu(null);
  }, [navigate]);

  const handleMenuToggle = useCallback((title: string, event: React.MouseEvent) => {
    if (activeMenu === title) {
      setActiveMenu(null);
      return;
    }

    const buttonElement = event.currentTarget as HTMLButtonElement;
    const buttonRect = buttonElement.getBoundingClientRect();
    const screenWidth = window.innerWidth;
    const buttonCenter = buttonRect.left + buttonRect.width / 2;
    const dropdownWidth = 200;
    
    let leftPosition = buttonCenter;
    if (buttonCenter - dropdownWidth / 2 < 16) {
      leftPosition = 16 + dropdownWidth / 2;
    } else if (buttonCenter + dropdownWidth / 2 > screenWidth - 16) {
      leftPosition = screenWidth - 16 - dropdownWidth / 2;
    }
    
    setMenuPosition({ left: leftPosition, transform: 'translateX(-50%)' });
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

  const renderIconButton = useCallback((item: NavItem & { label: string }) => {
    const baseButtonClass = "flex flex-col items-center justify-start text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-out rounded-xl select-none touch-manipulation h-16 w-full min-w-0 px-1 pt-1 pb-2";
    const iconContainerClass = "w-6 h-6 flex items-center justify-center flex-shrink-0";
    const labelClass = "text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0";

    const hasDropdown = !!item.children?.length;
    const Icon = item.icon;

    const handleClick = (e: React.MouseEvent) => {
      if (hasDropdown) {
        handleMenuToggle(item.title, e);
      } else if (item.path) {
        handleNavigation(item.path);
      }
    };

    return (
      <Button
        key={item.title}
        variant="ghost"
        size="sm"
        className={cn(baseButtonClass, activeMenu === item.title && 'bg-accent text-primary')}
        onClick={handleClick}
        aria-label={hasDropdown ? `${item.label} menu` : `Navigate to ${item.title}`}
        data-dropdown-trigger={hasDropdown || undefined}
        ref={(el) => (buttonRefs.current[item.title] = el)}
      >
        <div className={iconContainerClass}>
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
        <span className={labelClass}>{item.label}</span>
      </Button>
    );
  }, [handleNavigation, handleMenuToggle, activeMenu]);

  const renderNavigationMenu = () => {
    if (!activeMenu) return null;

    const dropdownMenuClass = "fixed bottom-[5.5rem] z-50 min-w-[8rem] w-[200px] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in slide-in-from-bottom-2 duration-200 md:hidden";
    const dropdownMenuStyle = {
      left: `${menuPosition.left}px`,
      transform: 'translateX(-50%)'
    };

    const activeItem = mobileNavItems.flat().find(item => item?.title === activeMenu);
    if (!activeItem) return null;

    const menuItemClasses = "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent hover:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50";

    return (
      <div
        className={dropdownMenuClass}
        style={dropdownMenuStyle}
        data-dropdown-menu
      >
        {activeMenu === 'Profile' && (
          <>
            <div className="px-2 py-1.5 text-sm">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">john.doe@company.com</p>
              </div>
            </div>
            <div className="h-px bg-muted my-1" />
          </>
        )}
        
        {activeItem.children?.map((child) => {
          const ChildIcon = child.icon;
          return (
            <div key={child.title} className={menuItemClasses} onClick={() => handleNavigation(child.path)}>
              <ChildIcon className={cn("mr-2 h-4 w-4", child.color)} />
              <span className="truncate">{child.title}</span>
            </div>
          );
        })}

        {activeMenu === 'Profile' && (
          <>
            {/* <div className="h-px bg-muted my-1" /> */}
            <div className={menuItemClasses} onClick={toggleTheme}>
              {theme === 'dark' ? (
                <Sun className="mr-2 h-4 w-4 text-yellow-400" />
              ) : (
                <Moon className="mr-2 h-4 w-4" />
              )}
              <span>{theme === 'dark' ? 'Light' : 'Dark'} Mode</span>
            </div>
            <div className="h-px bg-muted my-1" />
            <div className={cn(menuItemClasses, "text-red-600 focus:text-red-600")} onClick={() => console.log('Logout')}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <>
      {renderNavigationMenu()}
      <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
        <Carousel
          ref={carouselRef}
          setApi={setCarouselApi}
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