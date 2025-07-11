
"use client";

import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { MobileIconGroup } from './MobileIconGroup';
import { mobileIconGroups } from './constants';

export function MobileFooterNav() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
              <MobileIconGroup
                group={group}
                openDropdown={openDropdown}
                onDropdownToggle={handleDropdownToggle}
                onNavigation={handleNavigation}
                onDropdownItemClick={handleDropdownItemClick}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
