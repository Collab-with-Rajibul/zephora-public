
import { DollarSign, ShoppingCart, CreditCard, UserCheck, Package, BookOpen, PieChart, Settings } from 'lucide-react';
import { navigationItems } from '@/lib/constants';
import { MobileIconItem } from './types';

// Mobile icon order
export const mobileIconOrder = [
  'home', 'sales', 'purchase', 'payments', 'profile',
  'employees', 'inventory', 'financial', 'reports', 'settings'
];

// Icon definitions
export const iconDefinitions: Record<string, MobileIconItem> = {
  home: {
    id: 'home',
    title: 'Home',
    path: '/',
    isHome: true
  },
  sales: {
    id: 'sales',
    title: 'Sales',
    icon: DollarSign,
    color: 'text-green-500',
    navItem: navigationItems.find(item => item.title === 'Sales Management')
  },
  purchase: {
    id: 'purchase',
    title: 'Purchase',
    icon: ShoppingCart,
    color: 'text-blue-500',
    navItem: navigationItems.find(item => item.title === 'Purchase Management')
  },
  payments: {
    id: 'payments',
    title: 'Payments',
    icon: CreditCard,
    color: 'text-pink-500',
    navItem: navigationItems.find(item => item.title === 'Payments')
  },
  profile: {
    id: 'profile',
    title: 'Profile',
    isProfile: true
  },
  employees: {
    id: 'employees',
    title: 'Employees',
    icon: UserCheck,
    color: 'text-purple-500',
    navItem: navigationItems.find(item => item.title === 'Employee Management')
  },
  inventory: {
    id: 'inventory',
    title: 'Inventory',
    icon: Package,
    color: 'text-purple-500',
    navItem: navigationItems.find(item => item.title === 'Inventory & Stock')
  },
  financial: {
    id: 'financial',
    title: 'Financial',
    icon: BookOpen,
    color: 'text-cyan-500',
    navItem: navigationItems.find(item => item.title === 'Financial Statements')
  },
  reports: {
    id: 'reports',
    title: 'Reports',
    icon: PieChart,
    color: 'text-yellow-400',
    navItem: navigationItems.find(item => item.title === 'Reports & Analytics')
  },
  settings: {
    id: 'settings',
    title: 'Settings',
    icon: Settings,
    color: 'text-gray-500',
    navItem: navigationItems.find(item => item.title === 'Settings')
  }
};

// Create groups from the ordered list
export const mobileIconGroups = [
  { items: mobileIconOrder.slice(0, 5).map(id => ({ ...iconDefinitions[id] })) },
  { items: mobileIconOrder.slice(5, 10).map(id => ({ ...iconDefinitions[id] })) }
];
