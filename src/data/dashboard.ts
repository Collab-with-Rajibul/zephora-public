import { DashboardMetric, ActivityItem, ChartData } from '@/lib/types';

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
