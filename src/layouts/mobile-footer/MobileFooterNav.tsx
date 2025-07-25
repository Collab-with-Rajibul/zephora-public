"use client";

import { useState, useCallback, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@/components/ThemeProvider';
import { type CarouselApi } from '@/components/ui/carousel';
import { DropdownMenu } from './DropdownMenu';
import { Carousel } from './Carousel';

export function MobileFooterNav() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [menuPosition, setMenuPosition] = useState({ left: 0, transform: 'translateX(-50%)' });  
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

  return (
    <>
      <DropdownMenu
        activeMenu={activeMenu}
        menuPosition={menuPosition}
        handleNavigation={handleNavigation}
        toggleTheme={toggleTheme}
      />
      <div className="fixed inset-x-0 bottom-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border md:hidden shadow-lg">
        <Carousel
          setCarouselApi={setCarouselApi}
          activeMenu={activeMenu}
          handleNavigation={handleNavigation}
          handleMenuToggle={handleMenuToggle}          
        />
      </div>
    </>
  );
}