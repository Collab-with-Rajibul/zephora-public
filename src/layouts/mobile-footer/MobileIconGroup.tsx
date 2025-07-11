
import React from 'react';
import { MobileIconButton } from './MobileIconButton';
import { MobileIconGroup as MobileIconGroupType } from './types';

interface MobileIconGroupProps {
  group: MobileIconGroupType;
  openDropdown: string | null;
  onDropdownToggle: (itemTitle: string) => void;
  onNavigation: (path?: string) => void;
  onDropdownItemClick: (path: string) => void;
}

export function MobileIconGroup({ 
  group, 
  openDropdown, 
  onDropdownToggle, 
  onNavigation, 
  onDropdownItemClick 
}: MobileIconGroupProps) {
  return (
    <div className="flex h-20 items-start justify-center px-2 pt-0 pb-1">
      <div className="flex items-start justify-evenly w-full max-w-lg mx-auto gap-1">
        {group.items.map((item) => (
          <div key={item.id} className="flex-1 min-w-0">
            <MobileIconButton
              item={item}
              openDropdown={openDropdown}
              onDropdownToggle={onDropdownToggle}
              onNavigation={onNavigation}
              onDropdownItemClick={onDropdownItemClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
