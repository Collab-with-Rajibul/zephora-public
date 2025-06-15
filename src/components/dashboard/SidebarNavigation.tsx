"use client";

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
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
      color: 'text-green-500',
      children: [
        { title: 'Sales Invoices', icon: 'receipt', color: 'text-sky-500' },
        { title: 'Customers', icon: 'users', color: 'text-amber-500' },
        { title: 'Sales Reports', icon: 'bar-chart-3', color: 'text-indigo-500' },
        { title: 'Sales Analytics', icon: 'line-chart', color: 'text-rose-500' },
      ],
    },
    {
      title: 'Purchase Management',
      icon: 'shopping-cart',
      color: 'text-blue-500',
      children: [
        { title: 'Purchase Bills', icon: 'file-text', color: 'text-teal-500' },
        { title: 'Suppliers', icon: 'building-2', color: 'text-orange-500' },
        { title: 'Purchase Reports', icon: 'bar-chart-3', color: 'text-indigo-500' },
        { title: 'Purchase Analytics', icon: 'line-chart', color: 'text-rose-500' },
      ],
    },
    {
      title: 'Financial Statements',
      icon: 'book-open',
      color: 'text-cyan-500',
      children: [
        { title: 'Profit & Loss', icon: 'trending-up', color: 'text-emerald-500' },
        { title: 'Balance Sheet', icon: 'scale', color: 'text-fuchsia-500' },
        { title: 'Cash Flow', icon: 'arrow-right-left', color: 'text-violet-500' },
        { title: 'Trial Balance', icon: 'clipboard-check', color: 'text-lime-500' },
      ],
    },
    {
      title: 'Payments',
      icon: 'credit-card',
      color: 'text-pink-500',
      children: [
        { title: 'Payments Sent', icon: 'arrow-up-from-line', color: 'text-red-500' },
        { title: 'Payments Received', icon: 'arrow-down-to-line', color: 'text-green-500' },
        { title: 'Outstanding Payments', icon: 'clock', color: 'text-yellow-500' },
        { title: 'Payment Tracking', icon: 'history', color: 'text-stone-500' },
      ],
    },
    {
      title: 'Inventory & Stock',
      icon: 'package',
      color: 'text-purple-500',
      children: [
        { title: 'Stock Levels', icon: 'layers', color: 'text-cyan-400' },
        { title: 'Stock Reports', icon: 'bar-chart-3', color: 'text-indigo-500' },
        { title: 'Low Stock Alerts', icon: 'alert-triangle', color: 'text-red-600' },
        { title: 'Stock Analytics', icon: 'line-chart', color: 'text-rose-500' },
      ],
    },
    {
      title: 'Reports & Analytics',
      icon: 'pie-chart',
      color: 'text-yellow-400',
      children: [
        { title: 'Financial Analytics', icon: 'line-chart', color: 'text-rose-500' },
        { title: 'Business Insights', icon: 'target', color: 'text-blue-600' },
        { title: 'Custom Reports', icon: 'file-plus-2', color: 'text-green-600' },
        { title: 'Comparative Analysis', icon: 'git-compare-arrows', color: 'text-orange-400' },
      ],
    },
    {
      title: 'Settings',
      icon: 'settings',
      color: 'text-gray-500',
      children: [
        { title: 'Company Profile', icon: 'building', color: 'text-sky-600' },
        { title: 'User Management', icon: 'users', color: 'text-amber-500' },
        { title: 'System Settings', icon: 'wrench', color: 'text-slate-500' },
        { title: 'Integrations', icon: 'plug', color: 'text-teal-400' },
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
  onToggle: () => void;
}

export function SidebarNavigation({ isCollapsed, onToggle }: SidebarNavigationProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Sales Management']);

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const handleLinkClick = () => {
    if (!isCollapsed) {
      onToggle();
    }
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
                onClick={() => {
                  if (isCollapsed) {
                    onToggle();
                    if (item.children && !expandedItems.includes(item.title)) {
                      setExpandedItems(prev => [...prev, item.title]);
                    }
                  } else if (item.children) {
                    toggleExpanded(item.title);
                  }
                }}
              >
                <Icon className={cn("w-5 h-5 shrink-0", item.color)} />
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
                    
                    const buttonContent = (
                      <>
                        <ChildIcon className={cn("w-4 h-4 shrink-0", child.color)} />
                        <span className="ml-3">{child.title}</span>
                      </>
                    );
                    
                    const buttonProps = {
                      variant: "ghost" as const,
                      className: "w-full justify-start text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg",
                    };

                    if (child.title === 'Sales Invoices') {
                      return (
                        <Button {...buttonProps} asChild key={child.title} onClick={handleLinkClick}>
                          <Link to="/sales-invoices">
                            {buttonContent}
                          </Link>
                        </Button>
                      );
                    }

                    if (child.title === 'Customers') {
                      return (
                        <Button {...buttonProps} asChild key={child.title} onClick={handleLinkClick}>
                          <Link to="/customers">
                            {buttonContent}
                          </Link>
                        </Button>
                      );
                    }

                    if (child.title === 'Sales Reports') {
                      return (
                        <Button {...buttonProps} asChild key={child.title} onClick={handleLinkClick}>
                          <Link to="/sales-reports">
                            {buttonContent}
                          </Link>
                        </Button>
                      );
                    }

                    if (child.title === 'Purchase Bills') {
                      return (
                        <Button {...buttonProps} asChild key={child.title} onClick={handleLinkClick}>
                          <Link to="/purchase-bills">
                            {buttonContent}
                          </Link>
                        </Button>
                      );
                    }

                    return (
                      <Button key={child.title} {...buttonProps}>
                        {buttonContent}
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
