
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Search, Bell, Settings } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export function Header({ className }: HeaderProps) {
  return (
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
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search transactions, customers..."
            className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring rounded-xl"
          />
          <kbd className="pointer-events-none absolute right-3 top-1/2 hidden h-5 -translate-y-1/2 select-none items-center gap-1 rounded-lg border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 lg:flex">
            <span className="text-xs">⌘</span>K
          </kbd>
        </div>
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
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Search</DialogTitle>
              <DialogDescription>
                Search for transactions, customers, etc.
              </DialogDescription>
            </DialogHeader>
            <div className="relative w-full mt-4">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search..."
                className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring rounded-xl"
              />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
}
