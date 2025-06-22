
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { Search, Bell, Settings, LayoutDashboard, Users, CreditCard, FileText } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useLocation } from 'react-router-dom';
import { getPageInfo } from './pageInfo';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();

  const { title, description } = getPageInfo(location.pathname);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const runCommand = (command: () => unknown) => {
    setOpen(false)
    command()
  }

  return (
    <>
      <header className={cn(
        "flex items-center justify-between px-4 md:px-6 bg-background border-b border-border h-[88px]",
        className
      )}>
        {/* Left side - Title */}
        <div className="flex items-center gap-2">
          <div className="flex-none">
            <h1 className="text-xl md:text-2xl font-bold text-foreground">{title}</h1>
            <p className="hidden md:block text-sm text-muted-foreground">
              {description}
            </p>
          </div>
        </div>

        {/* Right side - Actions (Desktop) */}
        <div className="hidden md:flex items-center space-x-4">
           <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => setOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>

          <div className="relative">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-xl">
              <Bell className="h-5 w-5 text-blue-500" />
            </Button>
            <Badge 
              variant="destructive" 
              className="absolute top-0 right-0 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              3
            </Badge>
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="md:hidden flex items-center space-x-1">
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)} className="rounded-xl">
            <Search className="h-5 w-5" />
          </Button>

          <div className="relative">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-xl">
              <Bell className="h-5 w-5 text-blue-500" />
            </Button>
            <Badge 
              variant="destructive" 
              className="absolute top-0 right-0 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center"
            >
              3
            </Badge>
          </div>
        </div>
      </header>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem onSelect={() => runCommand(() => console.log("Navigating to Dashboard"))}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => console.log("Navigating to Customers"))}>
              <Users className="mr-2 h-4 w-4" />
              <span>Customers</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => console.log("Navigating to Billing"))}>
              <CreditCard className="mr-2 h-4 w-4" />
              <span>Billing</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Reports">
            <CommandItem onSelect={() => runCommand(() => console.log("Navigating to Invoices"))}>
              <FileText className="mr-2 h-4 w-4" />
              <span>Invoices</span>
            </CommandItem>
          </CommandGroup>
           <CommandSeparator />
          <CommandGroup heading="Settings">
             <CommandItem onSelect={() => runCommand(() => console.log("Navigating to Settings"))}>
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
