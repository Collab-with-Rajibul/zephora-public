"use client";

import React, { useState, useEffect } from 'react';
import { dashboardMetrics } from '@/lib/constants';
import { MetricCard } from './MetricCard';
import { QuickActions } from './QuickActions';
import { Charts } from './Charts';
import { ActivityFeed } from './ActivityFeed';
import { Search, Bell, LayoutDashboard, Users, CreditCard, FileText, Settings } from 'lucide-react';
import { Input } from '@/components/ui/input';
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
} from '@/components/ui/command';

export function DashboardOverview() {
  const [open, setOpen] = useState(false);
  const [showDescription, setShowDescription] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Simple logic: show description only when at the very top
      if (currentScrollY <= 5) {
        setShowDescription(true);
      } else {
        setShowDescription(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const runCommand = React.useCallback((command: () => void) => {
    setOpen(false);
    command();
  }, []);

  return (
    <div className="space-y-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="py-3 transition-all duration-300 ease-in-out">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  showDescription 
                    ? 'max-h-10 opacity-100 mt-2' 
                    : 'max-h-0 opacity-0 mt-0'
                }`}
              >
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Welcome back! Here's what's happening with your business today.
                </p>
              </div>
            </div>
            
            {/* Right side - Actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
              <Button variant="ghost" size="icon" className="rounded-xl" onClick={() => setOpen(true)}>
                <Search className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-xl">
                  <Bell className="h-5 w-5 text-blue-500" />
                </Button>
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs flex items-center justify-center"
                >
                  3
                </Badge>
              </div>
            </div>

            {/* Mobile Actions */}
            <div className="md:hidden flex items-center space-x-1 flex-shrink-0">
              <Button variant="ghost" size="icon" onClick={() => setOpen(true)} className="rounded-xl">
                <Search className="h-5 w-5" />
              </Button>

              <div className="relative">
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground rounded-xl">
                  <Bell className="h-5 w-5 text-blue-500" />
                </Button>
                <Badge 
                  variant="destructive" 
                  className="absolute -top-1 -right-1 h-4 w-4 rounded-full p-0 text-[10px] flex items-center justify-center"
                >
                  3
                </Badge>
              </div>
            </div>
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
      
      {/* Quick Actions */}
      <QuickActions />
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {dashboardMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
      
      {/* Charts Section */}
      <Charts />
      
      {/* Recent Activity */}
      <ActivityFeed />
    </div>
  );
}
