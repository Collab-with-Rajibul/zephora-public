
import { NavItem, DashboardMetric, QuickAction, ActivityItem, ChartData } from './types';
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
} from 'lucide-react';

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

export const dashboardMetrics: DashboardMetric[] = [
  {
    id: "revenue",
    title: "Total Revenue",
    value: 125430,
    currency: "USD",
    trend: {
      percentage: 12.5,
      direction: "up",
      period: "vs last month"
    },
    status: "positive",
    icon: "dollar-sign"
  },
  {
    id: "expenses", 
    title: "Total Expenses",
    value: 87650,
    currency: "USD",
    trend: {
      percentage: 5.2,
      direction: "up", 
      period: "vs last month"
    },
    status: "negative",
    icon: "arrow-up"
  },
  {
    id: "profit",
    title: "Net Profit",
    value: 37780,
    currency: "USD", 
    trend: {
      percentage: 8.3,
      direction: "up",
      period: "vs last month"
    },
    status: "positive",
    icon: "dollar-sign"
  },
  {
    id: "cash", 
    title: "Cash Balance",
    value: 234560,
    currency: "USD",
    trend: {
      percentage: 2.1,
      direction: "down",
      period: "vs last week"
    },
    status: "neutral",
    icon: "dollar-sign"
  },
  {
    id: "outstanding-invoices",
    title: "Outstanding Invoices", 
    value: 45230,
    currency: "USD",
    trend: {
      percentage: 15.8,
      direction: "down",
      period: "vs last month"
    },
    status: "positive",
    icon: "file"
  },
  {
    id: "outstanding-bills",
    title: "Outstanding Bills",
    value: 23450,
    currency: "USD", 
    trend: {
      percentage: 7.2,
      direction: "up",
      period: "vs last month"
    },
    status: "negative",
    icon: "file"
  },
  {
    id: "inventory",
    title: "Inventory Value",
    value: 156780,
    currency: "USD",
    trend: {
      percentage: 3.4,
      direction: "up", 
      period: "vs last month"
    },
    status: "positive",
    icon: "folder"
  },
  {
    id: "low-stock",
    title: "Low Stock Items",
    value: 12,
    trend: {
      percentage: 25.0,
      direction: "up",
      period: "items below threshold"
    },
    status: "negative",
    icon: "bell"
  }
];

export const quickActions: QuickAction[] = [
  {
    id: "new-invoice",
    title: "New Sale Invoice",
    description: "Create a new sales invoice",
    icon: "plus",
    variant: "primary",
    href: "/sales/invoices/new"
  },
  {
    id: "new-bill", 
    title: "New Purchase Bill",
    description: "Record a new purchase",
    icon: "plus",
    variant: "secondary",
    href: "/purchases/bills/new"
  },
  {
    id: "record-payment",
    title: "Record Payment", 
    description: "Log payment received or sent",
    icon: "dollar-sign",
    variant: "accent",
    href: "/payments/new"
  },
  {
    id: "add-customer",
    title: "New Customer",
    description: "Add a new customer",
    icon: "users",
    variant: "secondary",
    href: "/sales/customers/new"
  },
  {
    id: "generate-report",
    title: "Generate Report",
    description: "Create financial reports",
    icon: "file",
    variant: "secondary", 
    href: "/reports/new"
  },
  {
    id: "add-supplier",
    title: "New Supplier", 
    description: "Add a new supplier",
    icon: "users",
    variant: "secondary",
    href: "/purchases/suppliers/new"
  }
];

export const recentActivity: ActivityItem[] = [
  {
    id: "1",
    type: "sale",
    title: "Invoice #INV-2024-001 created",
    description: "Invoice for $2,500 sent to Acme Corp",
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    amount: 2500,
    status: "sent"
  },
  {
    id: "2", 
    type: "payment",
    title: "Payment received",
    description: "Payment of $1,200 from TechStart Inc", 
    timestamp: new Date(Date.now() - 4 * 60 * 60 * 1000),
    amount: 1200,
    status: "received"
  },
  {
    id: "3",
    type: "purchase", 
    title: "Purchase bill recorded",
    description: "Office supplies from SupplyCo",
    timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    amount: 350,
    status: "recorded"
  },
  {
    id: "4",
    type: "customer",
    title: "New customer added",
    description: "GlobalTech Solutions registered", 
    timestamp: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    status: "active"
  },
  {
    id: "5",
    type: "sale",
    title: "Invoice #INV-2024-002 paid",
    description: "Payment received for $3,750",
    timestamp: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    amount: 3750,
    status: "paid"
  }
];

export const chartData: ChartData[] = [
  { name: "Jan", revenue: 65000, expenses: 45000, profit: 20000 },
  { name: "Feb", revenue: 72000, expenses: 48000, profit: 24000 },
  { name: "Mar", revenue: 68000, expenses: 52000, profit: 16000 },
  { name: "Apr", revenue: 85000, expenses: 55000, profit: 30000 },
  { name: "May", revenue: 78000, expenses: 49000, profit: 29000 },
  { name: "Jun", revenue: 95000, expenses: 62000, profit: 33000 }
];

export const topCustomersData: ChartData[] = [
  { name: "Acme Corp", value: 45000 },
  { name: "TechStart Inc", value: 32000 },
  { name: "GlobalTech", value: 28000 },
  { name: "InnovaCorp", value: 22000 },
  { name: "FutureTech", value: 18000 }
];
