
"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Plus, 
  DollarSign, 
  FileText, 
  Users, 
  Building, 
  BarChart3,
  Receipt,
  CreditCard,
  type LucideIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  variant: string;
  href: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'new-sale-invoice',
    title: 'New Sale Invoice',
    description: 'Create a new sales invoice',
    icon: Receipt,
    variant: 'primary',
    href: '/sales-invoices/new'
  },
  {
    id: 'new-purchase-bill',
    title: 'New Purchase Bill',
    description: 'Record a new purchase',
    icon: FileText,
    variant: 'success',
    href: '/purchase-bills/new'
  },
  {
    id: 'record-payment',
    title: 'Record Payment',
    description: 'Log payment received or sent',
    icon: CreditCard,
    variant: 'warning',
    href: '/payments/new'
  },
  {
    id: 'new-customer',
    title: 'New Customer',
    description: 'Add a new customer',
    icon: Users,
    variant: 'info',
    href: '/customers/new'
  },
  {
    id: 'new-supplier',
    title: 'New Supplier',
    description: 'Add a new supplier',
    icon: Building,
    variant: 'purple',
    href: '/suppliers/new'
  },
  {
    id: 'generate-report',
    title: 'Generate Report',
    description: 'Create financial reports',
    icon: BarChart3,
    variant: 'secondary',
    href: '/reports'
  }
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

  return (
    <Card className={cn("overflow-hidden border-0 bg-transparent shadow-none", className)}>
      <CardContent className="p-0">
        <div className={cn(
          "grid gap-4",
          isMobile ? "grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        )}>
          {quickActions.map((action) => {
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
