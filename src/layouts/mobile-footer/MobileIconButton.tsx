
import React from 'react';
import { cn } from '@/lib/utils';
import { MobileIconItem } from './types';
import { MobileIcon } from './MobileIcon';
import { ProfileDropdown } from './ProfileDropdown';
import { NavigationDropdown } from './NavigationDropdown';

interface MobileIconButtonProps {
  item: MobileIconItem;
  openDropdown: string | null;
  onDropdownToggle: (itemTitle: string) => void;
  onNavigation: (path?: string) => void;
  onDropdownItemClick: (path: string) => void;
}

export function MobileIconButton({ 
  item, 
  openDropdown, 
  onDropdownToggle, 
  onNavigation, 
  onDropdownItemClick 
}: MobileIconButtonProps) {
  // Handle Home button
  if (item.id === 'home') {
    return (
      <MobileIcon item={item} onClick={() => onNavigation(item.path)}>
        <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          {item.component && item.component()}
        </div>
      </MobileIcon>
    );
  }

  // Handle Profile button
  if (item.isProfile) {
    return (
      <MobileIcon item={item} onClick={() => onDropdownToggle('user-profile')}>
        <ProfileDropdown
          isOpen={openDropdown === 'user-profile'}
          onToggle={() => onDropdownToggle('user-profile')}
          onNavigate={onDropdownItemClick}
          onClose={() => onDropdownToggle('')}
        />
      </MobileIcon>
    );
  }

  // Handle navigation items with dropdowns
  if (item.navItem && item.navItem.children && item.navItem.children.length > 0) {
    return (
      <MobileIcon item={item} onClick={() => onDropdownToggle(item.navItem!.title)}>
        <NavigationDropdown
          item={item}
          isOpen={openDropdown === item.navItem.title}
          onToggle={() => onDropdownToggle(item.navItem!.title)}
          onNavigate={onDropdownItemClick}
          onClose={() => onDropdownToggle('')}
        />
      </MobileIcon>
    );
  }

  // Handle simple navigation items
  const Icon = item.icon!;
  return (
    <MobileIcon item={item} onClick={() => onNavigation(item.navItem?.path || '/')}>
      <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
        <Icon className={cn("h-6 w-6", item.color)} />
      </div>
    </MobileIcon>
  );
}
