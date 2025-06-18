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

export interface NavItemChild {
  title: string;
  icon: string;
  color: string;
  path?: string;
}

export interface NavItem {
  title: string;
  icon: string;
  color: string;
  children?: NavItemChild[];
}

export const navigationItems: NavItem[] = [
    {
      title: 'Sales Management',
      icon: 'dollar-sign',
      color: 'text-green-500',
      children: [
        { title: 'Sales Invoices', path: '/sales-invoices', icon: 'receipt', color: 'text-sky-500' },
        { title: 'Customers', path: '/customers', icon: 'users', color: 'text-amber-500' },
        { title: 'Sales Reports', path: '/sales-reports', icon: 'bar-chart-3', color: 'text-indigo-500' },
      ],
    },
    {
      title: 'Purchase Management',
      icon: 'shopping-cart',
      color: 'text-blue-500',
      children: [
        { title: 'Purchase Bills', path: '/purchase-bills', icon: 'file-text', color: 'text-teal-500' },
        { title: 'Suppliers', path: '/suppliers', icon: 'building-2', color: 'text-orange-500' },
        { title: 'Purchase Reports', path: '/purchase-reports', icon: 'bar-chart-3', color: 'text-indigo-500' },
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

export const iconMap = {
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
