
export interface PageInfo {
  title: string;
  description: string;
}

const PAGE_INFO_MAP: Record<string, PageInfo> = {
  '/': {
    title: 'Dashboard',
    description: 'Welcome back! Here\'s what\'s happening with your business today.'
  },
  
  // Sales Management
  '/sales-invoices': {
    title: 'Sales Invoices',
    description: 'Manage and track your sales invoices.'
  },
  '/sales-invoices/new': {
    title: 'New Sales Invoice',
    description: 'Create a new sales invoice for your customers.'
  },
  '/customers': {
    title: 'Customers',
    description: 'Manage your customer relationships and information.'
  },
  '/customers/new': {
    title: 'New Customer',
    description: 'Add a new customer to your database.'
  },
  '/sales-reports': {
    title: 'Sales Reports',
    description: 'Analyze your sales performance and trends.'
  },
  
  // Purchase Management
  '/purchase-bills': {
    title: 'Purchase Bills',
    description: 'Track and manage your purchase bills and expenses.'
  },
  '/purchase-bills/new': {
    title: 'New Purchase Bill',
    description: 'Create a new purchase bill for your suppliers.'
  },
  '/suppliers': {
    title: 'Suppliers',
    description: 'Manage your supplier relationships and contacts.'
  },
  '/suppliers/new': {
    title: 'New Supplier',
    description: 'Add a new supplier to your database.'
  },
  '/purchase-reports': {
    title: 'Purchase Reports',
    description: 'Analyze your purchase activities and spending.'
  },
  
  // Employee Management
  '/employees': {
    title: 'Employees',
    description: 'Manage your team members and their information.'
  },
  '/attendance': {
    title: 'Attendance',
    description: 'Track employee attendance and working hours.'
  },
  '/advances': {
    title: 'Advances',
    description: 'Manage employee salary advances and payments.'
  },
  
  // Financial Statements
  '/profit-loss': {
    title: 'Profit & Loss',
    description: 'View your company\'s profit and loss statement.'
  },
  '/balance-sheet': {
    title: 'Balance Sheet',
    description: 'Review your company\'s balance sheet and financial position.'
  },
  '/cash-flow': {
    title: 'Cash Flow',
    description: 'Monitor your company\'s cash flow and liquidity.'
  },
  '/trial-balance': {
    title: 'Trial Balance',
    description: 'View your company\'s trial balance and account summaries.'
  },
  
  // Payments
  '/payments-sent': {
    title: 'Payments Sent',
    description: 'Track outgoing payments to suppliers and vendors.'
  },
  '/payments-received': {
    title: 'Payments Received',
    description: 'Monitor incoming payments from customers.'
  },
  '/outstanding-payments': {
    title: 'Outstanding Payments',
    description: 'View and manage overdue and pending payments.'
  },
  '/payment-tracking': {
    title: 'Payment Tracking',
    description: 'Track the status of all payments in real-time.'
  },
  '/payments/new': {
    title: 'Record Payment',
    description: 'Record a new payment transaction.'
  },
  
  // Inventory & Stock
  '/stock-levels': {
    title: 'Stock Levels',
    description: 'Monitor current inventory levels and stock quantities.'
  },
  '/stock-reports': {
    title: 'Stock Reports',
    description: 'Analyze inventory performance and stock movements.'
  },
  '/low-stock-alerts': {
    title: 'Low Stock Alerts',
    description: 'View items that are running low in stock.'
  },
  
  // Reports & Analytics
  '/financial-analytics': {
    title: 'Financial Analytics',
    description: 'Comprehensive financial analysis and insights.'
  },
  '/business-insights': {
    title: 'Business Insights',
    description: 'Strategic insights and business performance metrics.'
  },
  '/custom-reports': {
    title: 'Custom Reports',
    description: 'Create and manage custom business reports.'
  },
  '/comparative-analysis': {
    title: 'Comparative Analysis',
    description: 'Compare performance across different periods and metrics.'
  },
  '/reports': {
    title: 'Generate Report',
    description: 'Generate custom reports for your business needs.'
  },
  
  // Settings
  '/company-profile': {
    title: 'Company Profile',
    description: 'Manage your company information and settings.'
  },
  '/user-management': {
    title: 'User Management',
    description: 'Manage user accounts and permissions.'
  },
  '/system-settings': {
    title: 'System Settings',
    description: 'Configure system preferences and options.'
  },
  '/integrations': {
    title: 'Integrations',
    description: 'Manage third-party integrations and connections.'
  }
};

const DEFAULT_PAGE_INFO: PageInfo = {
  title: 'Dashboard',
  description: 'Welcome back! Here\'s what\'s happening with your business today.'
};

export const getPageInfo = (pathname: string): PageInfo => {
  return PAGE_INFO_MAP[pathname] || DEFAULT_PAGE_INFO;
};
