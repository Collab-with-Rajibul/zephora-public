
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quickActions } from '@/lib/constants';
import { Plus, DollarSign, File, Users } from 'lucide-react';

const iconMap = {
  'plus': Plus,
  'dollar-sign': DollarSign,
  'file': File,
  'users': Users
};

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  const getVariantStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg';
      case 'secondary':
        return 'bg-secondary text-secondary-foreground hover:bg-secondary/80';
      case 'accent':
        return 'bg-success text-success-foreground hover:bg-success/90';
      default:
        return 'bg-muted text-muted-foreground hover:bg-muted/80';
    }
  };

  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold">Quick Actions</h2>
          <p className="text-sm text-muted-foreground">Common tasks</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {quickActions.map((action) => {
            const Icon = iconMap[action.icon as keyof typeof iconMap];
            
            return (
              <Button
                key={action.id}
                variant="outline"
                className={cn(
                  "h-auto p-4 flex flex-col items-center space-y-2 card-hover border-0",
                  getVariantStyles(action.variant)
                )}
                onClick={() => console.log(`Navigate to ${action.href}`)}
              >
                <div className="p-2 bg-white/20 rounded-lg">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">{action.title}</div>
                  <div className="text-xs opacity-80 mt-1">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
