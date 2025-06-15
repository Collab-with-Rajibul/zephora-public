
import React from 'react';
import { Search, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PageHeaderProps {
  title: string;
}

export function PageHeader({ title }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between px-6 border-b border-border h-[88px]">
      <div className="flex items-center gap-4">
        <h1 className="text-xl font-semibold text-foreground">{title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </Button>
        <div className="relative">
          <Button variant="ghost" size="icon" className="rounded-full w-10 h-10">
            <Bell className="h-5 w-5" />
            <span className="sr-only">Notifications</span>
          </Button>
          <Badge variant="destructive" className="absolute top-0 right-0 block h-4 w-4 rounded-full p-0 text-xs">
            3
          </Badge>
        </div>
      </div>
    </header>
  );
}
