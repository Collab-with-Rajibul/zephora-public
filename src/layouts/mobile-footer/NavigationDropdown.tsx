
import React from 'react';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { MobileIconItem } from './types';

interface NavigationDropdownProps {
  item: MobileIconItem;
  isOpen: boolean;
  onToggle: () => void;
  onNavigate: (path: string) => void;
  onClose: () => void;
}

export function NavigationDropdown({ item, isOpen, onToggle, onNavigate, onClose }: NavigationDropdownProps) {
  const Icon = item.icon!;

  const handleDropdownItemClick = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DropdownMenuTrigger asChild>
        <div onClick={onToggle} className="w-6 h-6 flex items-center justify-center flex-shrink-0">
          <Icon className={cn("h-6 w-6", item.color)} />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent side="top" align="center" className="w-56 mb-2 animate-in slide-in-from-bottom-2 duration-200">
        {item.navItem?.children?.map((child) => {
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
