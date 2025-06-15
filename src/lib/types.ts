export interface DashboardMetric {
  id: string;
  title: string;
  value: number;
  currency?: string;
  trend?: {
    percentage: number;
    direction: 'up' | 'down' | 'neutral';
    period: string;
  };
  status?: 'positive' | 'negative' | 'neutral';
  icon?: string;
}

export interface QuickAction {
  id: string;
  title: string;
  description: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'accent';
  href?: string;
}

export interface ActivityItem {
  id: string;
  type: 'sale' | 'purchase' | 'payment' | 'customer' | 'supplier';
  title: string;
  description: string;
  timestamp: Date;
  amount?: number;
  status?: string;
  icon?: string;
}

export interface ChartData {
  name: string;
  revenue?: number;
  expenses?: number;
  profit?: number;
  value?: number;
}

export interface NavItem {
  title: string;
  href: string;
  icon: string;
  badge?: string;
  children?: NavItem[];
}

export interface Customer {
  id: string;
  name: string;
  email: string;
}

export type InvoiceStatus = 'draft' | 'sent' | 'paid' | 'overdue' | 'cancelled' | 'partially-paid';

export interface Invoice {
  id: string;
  invoiceNumber: string;
  customer: Customer;
  date: string;
  dueDate: string;
  amount: number;
  status: InvoiceStatus;
  description: string;
}
