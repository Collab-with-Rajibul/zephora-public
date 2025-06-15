
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { quickActions } from '@/lib/constants';
import { Plus, DollarSign, File, Users, Package, FileText, BarChart3 } from 'lucide-react';

const iconMap = {
  'plus': Plus,
  'dollar-sign': DollarSign,
  'file': File,
  'users': Users,
  'package': Package,
  'file-text': FileText,
  'bar-chart-3': BarChart3
};

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  const getActionStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white border-0';
      case 'secondary':
        return 'bg-green-500 hover:bg-green-600 text-white border-0';
      case 'accent':
        return 'bg-orange-500 hover:bg-orange-600 text-white border-0';
      default:
        return 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200';
    }
  };

  return (
    <Card className={cn("overflow-hidden border-0 bg-transparent shadow-none", className)}>
      <CardContent className="p-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-4">
          {quickActions.map((action) => {
            const Icon = iconMap[action.icon as keyof typeof iconMap];
            
            return (
              <Button
                key={action.id}
                variant="outline"
                className={cn(
                  "h-24 p-4 flex flex-col items-center justify-center space-y-2 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-md",
                  getActionStyles(action.variant)
                )}
                onClick={() => console.log(`Navigate to ${action.href}`)}
              >
                <Icon className="w-6 h-6" />
                <div className="text-center">
                  <div className="text-sm font-medium leading-tight">{action.title}</div>
                  <div className="text-xs opacity-80 mt-1 leading-tight">{action.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
