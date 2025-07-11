
import React from 'react';
import { cn } from '@/lib/utils';
import { MobileIconItem } from './types';

interface MobileIconProps {
  item: MobileIconItem;
  onClick: () => void;
  children: React.ReactNode;
}

export function MobileIcon({ item, onClick, children }: MobileIconProps) {
  return (
    <div onClick={onClick} className="flex flex-col items-center justify-start text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200 ease-out rounded-xl select-none touch-manipulation h-16 w-full min-w-0 px-1 pt-1 pb-2 cursor-pointer">
      {children}
      <span className="text-xs font-medium text-center leading-tight block overflow-hidden text-ellipsis mt-0">
        {item.title}
      </span>
    </div>
  );
}
