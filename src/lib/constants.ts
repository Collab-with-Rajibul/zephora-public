
import { NavItem, DashboardMetric, QuickAction, ActivityItem, ChartData } from './types';

export const navigationItems: NavItem[] = [
  {
    title: "Sales Management",
    href: "/sales",
    icon: "dollar-sign",
    children: [
      { title: "Sales Invoices", href: "/sales/invoices", icon: "file" },
      { title: "Customers", href: "/sales/customers", icon: "users" },
      { title: "Sales Reports", href: "/sales/reports", icon: "file" },
      { title: "Sales Analytics", href: "/sales/analytics", icon: "file" }
    ]
  },
  {
    title: "Purchase Management", 
    href: "/purchases",
    icon: "file",
    children: [
      { title: "Purchase Bills", href: "/purchases/bills", icon: "file" },
      { title: "Suppliers", href: "/purchases/suppliers", icon: "users" },
      { title: "Purchase Reports", href: "/purchases/reports", icon: "file" },
      { title: "Purchase Analytics", href: "/purchases/analytics", icon: "file" }
    ]
  },
  {
    title: "Financial Statements",
    href: "/financials", 
    icon: "file",
    children: [
      { title: "Profit & Loss", href: "/financials/profit-loss", icon: "file" },
      { title: "Balance Sheet", href: "/financials/balance-sheet", icon: "file" },
      { title: "Cash Flow", href: "/financials/cash-flow", icon: "file" },
      { title: "Trial Balance", href: "/financials/trial-balance", icon: "file" }
    ]
  },
  {
    title: "Payments",
    href: "/payments",
    icon: "dollar-sign",
    children: [
      { title: "Payments Sent", href: "/payments/sent", icon: "arrow-up" },
      { title: "Payments Received", href: "/payments/received", icon: "arrow-down" },
      { title: "Outstanding Payments", href: "/payments/outstanding", icon: "clock" },
      { title: "Payment Tracking", href: "/payments/tracking", icon: "search" }
    ]
  },
  {
    title: "Reports & Analytics",
    href: "/reports",
    icon: "file",
    children: [
      { title: "Financial Analytics", href: "/reports/financial", icon: "file" },
      { title: "Business Insights", href: "/reports/insights", icon: "file" },
      { title: "Custom Reports", href: "/reports/custom", icon: "file" },
      { title: "Comparative Analysis", href: "/reports/comparative", icon: "file" }
    ]
  },
  {
    title: "Settings",
    href: "/settings",
    icon: "settings",
    children: [
      { title: "Company Profile", href: "/settings/company", icon: "settings" },
      { title: "User Management", href: "/settings/users", icon: "users" },
      { title: "System Settings", href: "/settings/system", icon: "settings" },
      { title: "Integrations", href: "/settings/integrations", icon: "settings" }
    ]
  }
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
