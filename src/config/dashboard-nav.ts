
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
  UserCheck,
  CalendarDays,
  Banknote,
  type LucideIcon,
} from 'lucide-react';

export interface NavItem {
  title: string;
  icon: LucideIcon;
  color: string;
  path?: string;
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
    {
      title: 'Sales Management',
      icon: DollarSign,
      color: 'text-green-500',
      children: [
        { title: 'Sales Invoices', path: '/sales-invoices', icon: Receipt, color: 'text-sky-500' },
        { title: 'Customers', path: '/customers', icon: Users, color: 'text-amber-500' },
        { title: 'Sales Reports', path: '/sales-reports', icon: BarChart3, color: 'text-indigo-500' },
      ],
    },
    {
      title: 'Purchase Management',
      icon: ShoppingCart,
      color: 'text-blue-500',
      children: [
        { title: 'Purchase Bills', path: '/purchase-bills', icon: FileText, color: 'text-teal-500' },
        { title: 'Suppliers', path: '/suppliers', icon: Building2, color: 'text-orange-500' },
        { title: 'Purchase Reports', path: '/purchase-reports', icon: BarChart3, color: 'text-indigo-500' },
      ],
    },
    {
      title: 'Employee Management',
      icon: UserCheck,
      color: 'text-purple-500',
      children: [
        { title: 'Employees', path: '/employees', icon: Users, color: 'text-blue-500' },
        { title: 'Attendance', path: '/attendance', icon: CalendarDays, color: 'text-green-500' },
        { title: 'Advances', path: '/advances', icon: Banknote, color: 'text-yellow-500' },
      ],
    },
    {
      title: 'Financial Statements',
      icon: BookOpen,
      color: 'text-cyan-500',
      children: [
        { title: 'Profit & Loss', path: '/profit-loss', icon: TrendingUp, color: 'text-emerald-500' },
        { title: 'Balance Sheet', path: '/balance-sheet', icon: Scale, color: 'text-fuchsia-500' },
        { title: 'Cash Flow', path: '/cash-flow', icon: ArrowRightLeft, color: 'text-violet-500' },
        { title: 'Trial Balance', path: '/trial-balance', icon: ClipboardCheck, color: 'text-lime-500' },
      ],
    },
    {
      title: 'Payments',
      icon: CreditCard,
      color: 'text-pink-500',
      children: [
        { title: 'Payments Sent', path: '/payments-sent', icon: ArrowUpFromLine, color: 'text-red-500' },
        { title: 'Payments Received', path: '/payments-received', icon: ArrowDownToLine, color: 'text-green-500' },
        { title: 'Outstanding Payments', path: '/outstanding-payments', icon: Clock, color: 'text-yellow-500' },
        { title: 'Payment Tracking', path: '/payment-tracking', icon: History, color: 'text-stone-500' },
      ],
    },
    {
      title: 'Inventory & Stock',
      icon: Package,
      color: 'text-purple-500',
      children: [
        { title: 'Stock Levels', path: '/stock-levels', icon: Layers, color: 'text-cyan-400' },
        { title: 'Stock Reports', path: '/stock-reports', icon: BarChart3, color: 'text-indigo-500' },
        { title: 'Low Stock Alerts', path: '/low-stock-alerts', icon: AlertTriangle, color: 'text-red-600' },
      ],
    },
    {
      title: 'Reports & Analytics',
      icon: PieChart,
      color: 'text-yellow-400',
      children: [
        { title: 'Financial Analytics', path: '/financial-analytics', icon: LineChart, color: 'text-rose-500' },
        { title: 'Business Insights', path: '/business-insights', icon: Target, color: 'text-blue-600' },
        { title: 'Custom Reports', path: '/custom-reports', icon: FilePlus2, color: 'text-green-600' },
        { title: 'Comparative Analysis', path: '/comparative-analysis', icon: GitCompareArrows, color: 'text-orange-400' },
      ],
    },
    {
      title: 'Settings',
      icon: Settings,
      color: 'text-gray-500',
      children: [
        { title: 'Company Profile', path: '/company-profile', icon: Building, color: 'text-sky-600' },
        { title: 'User Management', path: '/user-management', icon: Users, color: 'text-amber-500' },
        { title: 'System Settings', path: '/system-settings', icon: Wrench, color: 'text-slate-500' },
        { title: 'Integrations', path: '/integrations', icon: Plug, color: 'text-teal-400' },
      ],
    },
];
