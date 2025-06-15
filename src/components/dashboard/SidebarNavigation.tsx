
"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown,
  DollarSign,
  Users,
  Clock,
  Settings,
  Receipt,
  BarChart3,
  LineChart,
  ShoppingCart,
  FileText,
  Building2,
  BookOpen,
  Scale,
  ArrowRightLeft,
  ClipboardCheck,
  CreditCard,
  ArrowUpFromLine,
  ArrowDownToLine,
  History,
  Package,
  Layers,
  AlertTriangle,
  PieChart,
  Target,
  FilePlus2,
  GitCompareArrows,
  Building,
  Wrench,
  Plug,
  TrendingUp,
} from 'lucide-react';

const navigationItems = [
    {
      title: 'Sales Management',
      icon: 'dollar-sign',
      children: [
        { title: 'Sales Invoices', icon: 'receipt' },
        { title: 'Customers', icon: 'users' },
        { title: 'Sales Reports', icon: 'bar-chart-3' },
        { title: 'Sales Analytics', icon: 'line-chart' },
      ],
    },
    {
      title: 'Purchase Management',
      icon: 'shopping-cart',
      children: [
        { title: 'Purchase Bills', icon: 'file-text' },
        { title: 'Suppliers', icon: 'building-2' },
        { title: 'Purchase Reports', icon: 'bar-chart-3' },
        { title: 'Purchase Analytics', icon: 'line-chart' },
      ],
    },
    {
      title: 'Financial Statements',
      icon: 'book-open',
      children: [
        { title: 'Profit & Loss', icon: 'trending-up' },
        { title: 'Balance Sheet', icon: 'scale' },
        { title: 'Cash Flow', icon: 'arrow-right-left' },
        { title: 'Trial Balance', icon: 'clipboard-check' },
      ],
    },
    {
      title: 'Payments',
      icon: 'credit-card',
      children: [
        { title: 'Payments Sent', icon: 'arrow-up-from-line' },
        { title: 'Payments Received', icon: 'arrow-down-to-line' },
        { title: 'Outstanding Payments', icon: 'clock' },
        { title: 'Payment Tracking', icon: 'history' },
      ],
    },
    {
      title: 'Inventory & Stock',
      icon: 'package',
      children: [
        { title: 'Stock Levels', icon: 'layers' },
        { title: 'Stock Reports', icon: 'bar-chart-3' },
        { title: 'Low Stock Alerts', icon: 'alert-triangle' },
        { title: 'Stock Analytics', icon: 'line-chart' },
      ],
    },
    {
      title: 'Reports & Analytics',
      icon: 'pie-chart',
      children: [
        { title: 'Financial Analytics', icon: 'line-chart' },
        { title: 'Business Insights', icon: 'target' },
        { title: 'Custom Reports', icon: 'file-plus-2' },
        { title: 'Comparative Analysis', icon: 'git-compare-arrows' },
      ],
    },
    {
      title: 'Settings',
      icon: 'settings',
      children: [
        { title: 'Company Profile', icon: 'building' },
        { title: 'User Management', icon: 'users' },
        { title: 'System Settings', icon: 'wrench' },
        { title: 'Integrations', icon: 'plug' },
      ],
    },
];

const iconMap = {
  'dollar-sign': DollarSign,
  'users': Users,
  'clock': Clock,
  'settings': Settings,
  'receipt': Receipt,
  'bar-chart-3': BarChart3,
  'line-chart': LineChart,
  'shopping-cart': ShoppingCart,
  'file-text': FileText,
  'building-2': Building2,
  'book-open': BookOpen,
  'scale': Scale,
  'arrow-right-left': ArrowRightLeft,
  'clipboard-check': ClipboardCheck,
  'credit-card': CreditCard,
  'arrow-up-from-line': ArrowUpFromLine,
  'arrow-down-to-line': ArrowDownToLine,
  'history': History,
  'package': Package,
  'layers': Layers,
  'alert-triangle': AlertTriangle,
  'pie-chart': PieChart,
  'target': Target,
  'file-plus-2': FilePlus2,
  'git-compare-arrows': GitCompareArrows,
  'building': Building,
  'wrench': Wrench,
  'plug': Plug,
  'trending-up': TrendingUp,
};

interface SidebarNavigationProps {
  isCollapsed: boolean;
}

export function SidebarNavigation({ isCollapsed }: SidebarNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Sales Management']);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <nav className="space-y-2">
        {navigationItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isExpanded = expandedItems.includes(item.title);
          
          return (
            <div key={item.title}>
              <Button
                variant="ghost"
                className={cn(
                  "w-full text-muted-foreground hover:text-foreground hover:bg-accent transition-colors rounded-lg",
                  isCollapsed ? "justify-center px-2" : "justify-start"
                )}
                onClick={() => item.children && toggleExpanded(item.title)}
              >
                <Icon className="w-5 h-5 shrink-0" />
                {!isCollapsed && (
                  <>
                    <span className="ml-3 text-sm font-medium">{item.title}</span>
                    {item.children && (
                      <ChevronDown 
                        className={cn(
                          "w-4 h-4 ml-auto transition-transform",
                          isExpanded && "rotate-180"
                        )} 
                      />
                    )}
                  </>
                )}
              </Button>
              
              {/* Submenu */}
              {!isCollapsed && item.children && isExpanded && (
                <div className="ml-8 mt-2 space-y-1">
                  {item.children.map((child) => {
                    const ChildIcon = iconMap[child.icon as keyof typeof iconMap];
                    return (
                      <Button
                        key={child.title}
                        variant="ghost"
                        className="w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg"
                      >
                        <ChildIcon className="w-4 h-4 shrink-0" />
                        <span className="ml-3">{child.title}</span>
                      </Button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
