
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
  CreditCard
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  variant: string;
  href: string;
}

const quickActions: QuickAction[] = [
  {
    id: 'new-sale-invoice',
    title: 'New Sale Invoice',
    description: 'Create a new sales invoice',
    icon: 'receipt',
    variant: 'primary',
    href: '/sales-invoices/new'
  },
  {
    id: 'new-purchase-bill',
    title: 'New Purchase Bill',
    description: 'Record a new purchase',
    icon: 'file-text',
    variant: 'success',
    href: '/purchase-bills/new'
  },
  {
    id: 'record-payment',
    title: 'Record Payment',
    description: 'Log payment received or sent',
    icon: 'credit-card',
    variant: 'warning',
    href: '/payments/new'
  },
  {
    id: 'new-customer',
    title: 'New Customer',
    description: 'Add a new customer',
    icon: 'users',
    variant: 'info',
    href: '/customers/new'
  },
  {
    id: 'new-supplier',
    title: 'New Supplier',
    description: 'Add a new supplier',
    icon: 'building',
    variant: 'purple',
    href: '/suppliers/new'
  },
  {
    id: 'generate-report',
    title: 'Generate Report',
    description: 'Create financial reports',
    icon: 'bar-chart-3',
    variant: 'secondary',
    href: '/reports'
  }
];

const iconMap = {
  'plus': Plus,
  'dollar-sign': DollarSign,
  'file-text': FileText,
  'users': Users,
  'building': Building,
  'bar-chart-3': BarChart3,
  'receipt': Receipt,
  'credit-card': CreditCard
};

interface QuickActionsProps {
  className?: string;
}

export function QuickActions({ className }: QuickActionsProps) {
  const navigate = useNavigate();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {quickActions.map((action) => {
            const Icon = iconMap[action.icon as keyof typeof iconMap];
            
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
