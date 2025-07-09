
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { quickActions } from '@/lib/constants';

// Mobile-specific order: Row1: Sale Invoice, Purchase Bill | Row2: Customer, Supplier | Row3: Payment, Report
const mobileOrder = [
  'new-sale-invoice',
  'new-purchase-bill',
  'new-customer', 
  'new-supplier',
  'record-payment',
  'generate-report'
];

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  const getActionStyles = (variant: string) => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600 text-white border-0 shadow-lg hover:shadow-xl';
      case 'success':
        return 'bg-emerald-500 hover:bg-emerald-600 text-white border-0 shadow-lg hover:shadow-xl';
      case 'warning':
        return 'bg-amber-500 hover:bg-amber-600 text-white border-0 shadow-lg hover:shadow-xl';
      case 'info':
        return 'bg-cyan-500 hover:bg-cyan-600 text-white border-0 shadow-lg hover:shadow-xl';
      case 'purple':
        return 'bg-purple-500 hover:bg-purple-600 text-white border-0 shadow-lg hover:shadow-xl';
      case 'secondary':
        return 'bg-slate-600 hover:bg-slate-700 text-white border-0 shadow-lg hover:shadow-xl';
      default:
        return 'bg-gray-100 hover:bg-gray-200 text-gray-700 border-0 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-200 shadow-lg hover:shadow-xl';
    }
  };

  // Get actions in the appropriate order
  const actionsToRender = isMobile 
    ? mobileOrder.map(id => quickActions.find(action => action.id === id)).filter(Boolean)
    : quickActions;

  return (
    <Card className={cn("overflow-hidden border-0 bg-transparent shadow-none", className)}>
      <CardContent className="p-0">
        <div className={cn(
          "grid gap-4",
          isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {actionsToRender.map((action) => {
            const Icon = action.icon;
            
            if (isMobile) {
              return (
                <Button
                  key={action.id}
                  variant="outline"
                  className={cn(
                    "h-20 p-4 flex flex-col items-start justify-start space-y-2 rounded-xl transition-all duration-200 hover:scale-105 relative",
                    getActionStyles(action.variant)
                  )}
                  onClick={() => navigate(action.href)}
                >
                  <Icon className="w-6 h-6 self-start" />
                  <div className="text-left self-start">
                    <div className="text-sm font-medium leading-tight">{action.title}</div>
                  </div>
                </Button>
              );
            }
            
            return (
              <Button
                key={action.id}
                variant="outline"
                className={cn(
                  "h-24 p-4 flex flex-col items-center justify-center space-y-2 rounded-xl transition-all duration-200 hover:scale-105",
                  getActionStyles(action.variant)
                )}
                onClick={() => navigate(action.href)}
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
