
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Search, Bell, Settings, Users, MoreVertical } from 'lucide-react';

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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-8 w-8 rounded-full">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
                <AvatarFallback className="text-primary-foreground font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 bg-popover rounded-xl" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">John Doe</p>
                <p className="text-xs leading-none text-muted-foreground">
                  john.doe@company.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="rounded-lg">
              <Users className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-lg">
              <Settings className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600 rounded-lg">
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreVertical className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-4">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col space-y-6 pt-6">
              {/* Search */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 bg-muted/50 border-0 focus-visible:ring-1 focus-visible:ring-ring rounded-xl"
                />
              </div>

              {/* Actions */}
              <div className="flex items-center justify-start space-x-2">
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
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-xl">
                  <Settings className="h-5 w-5 text-gray-500" />
                </Button>
              </div>
              
              <Separator />
              
              {/* Profile */}
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder-avatar.jpg" alt="@johndoe" />
                  <AvatarFallback className="text-primary-foreground font-medium bg-gradient-to-br from-blue-500 to-purple-600">JD</AvatarFallback>
                </Avatar>
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john.doe@company.com
                  </p>
                </div>
              </div>

              <nav className="flex flex-col space-y-2">
                <Button variant="ghost" className="justify-start rounded-lg">
                  <Users className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Button>
                <Button variant="ghost" className="justify-start rounded-lg">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Button>
                <Separator />
                <Button variant="ghost" className="justify-start text-red-600 hover:text-red-600 rounded-lg">
                  <span>Log out</span>
                </Button>
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
