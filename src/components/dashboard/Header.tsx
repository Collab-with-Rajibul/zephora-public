
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

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  const [open, setOpen] = React.useState(false);

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
        "flex items-center justify-between px-4 sm:px-6 bg-background border-b border-border h-[88px]",
        className
      )}>
        {/* Left side - Title */}
        <div className="flex-none">
          <h1 className="text-xl sm:text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="hidden sm:block text-sm text-muted-foreground">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>

        {/* Middle - Search (Desktop) */}
        <div className="hidden sm:flex flex-1 justify-center px-8">
            <Button
              variant="outline"
              className={cn(
                "relative w-full justify-start text-sm text-muted-foreground sm:max-w-md rounded-xl bg-muted/50 border-0 hover:bg-muted hover:text-muted-foreground"
              )}
              onClick={() => setOpen(true)}
            >
              <Search className="h-4 w-4 mr-2" />
              <span className="inline-flex">Search anything...</span>
              <kbd className="pointer-events-none absolute right-3 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded-lg border bg-background px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
                <span className="text-xs">⌘</span>K
              </kbd>
            </Button>
        </div>

        {/* Right side - Actions (Desktop) */}
        <div className="hidden sm:flex items-center space-x-4">
          <div className="relative">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
              <Bell className="h-5 w-5 text-blue-500" />
            </Button>
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
            >
              3
            </Badge>
          </div>

          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground rounded-xl">
            <Settings className="h-5 w-5 text-gray-500" />
          </Button>
        </div>

        {/* Mobile Actions */}
        <div className="sm:hidden flex items-center space-x-1">
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
          
          <Button variant="ghost" size="icon" onClick={() => setOpen(true)}>
            <Search className="h-5 w-5" />
          </Button>
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
