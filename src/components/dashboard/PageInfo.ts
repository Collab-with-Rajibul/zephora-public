
import { LucideIcon } from 'lucide-react';

export interface PageButton {
  id: string;
  label: string;
  icon?: LucideIcon;
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  action: string; // Action identifier that components can handle
}

export interface PageInfo {
  title: string;
  description: string;
  showSearch?: boolean;
  showAlerts?: boolean;
  buttons?: PageButton[];
}

const PAGE_INFO_MAP: Record<string, PageInfo> = {
  '/': {
    title: 'Dashboard',
    description: 'Welcome back! Here\'s what\'s happening with your business today.',
    showSearch: true,
    showAlerts: true,
    buttons: []
  },
  
  // Sales Management
  '/sales-invoices': {
    title: 'Sales Invoices',
    description: 'Manage and track your sales invoices.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'import-invoices', label: 'Import Invoices', variant: 'outline', size: 'sm', action: 'import_invoices' },
      { id: 'export-data', label: 'Export Data', variant: 'ghost', size: 'sm', action: 'export_data' },
      { id: 'create-invoice', label: 'Create New Invoice', variant: 'default', size: 'sm', action: 'create_invoice' }
    ]
  },
  '/sales-invoices/new': {
    title: 'New Sales Invoice',
    description: 'Create a new sales invoice for your customers.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-invoice', label: 'Save Invoice', variant: 'default', size: 'sm', action: 'save_invoice' }
    ]
  },
  '/customers': {
    title: 'Customers',
    description: 'Manage your customer relationships and information.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'import-customers', label: 'Import Customers', variant: 'outline', size: 'sm', action: 'import_customers' },
      { id: 'export-data', label: 'Export Data', variant: 'ghost', size: 'sm', action: 'export_data' },
      { id: 'add-customer', label: 'Add New Customer', variant: 'default', size: 'sm', action: 'add_customer' }
    ]
  },
  '/customers/new': {
    title: 'New Customer',
    description: 'Add a new customer to your database.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-customer', label: 'Save Customer', variant: 'default', size: 'sm', action: 'save_customer' }
    ]
  },
  '/sales-reports': {
    title: 'Sales Reports',
    description: 'Analyze your sales performance and trends.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-report', label: 'Export Report', variant: 'outline', size: 'sm', action: 'export_report' },
      { id: 'generate-report', label: 'Generate Report', variant: 'default', size: 'sm', action: 'generate_report' }
    ]
  },
  
  // Purchase Management
  '/purchase-bills': {
    title: 'Purchase Bills',
    description: 'Track and manage your purchase bills and expenses.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'import-invoices', label: 'Import Invoices', variant: 'outline', size: 'sm', action: 'import_invoices' },
      { id: 'export-data', label: 'Export Data', variant: 'ghost', size: 'sm', action: 'export_data' },
      { id: 'create-bill', label: 'Create New Bill', variant: 'default', size: 'sm', action: 'create_bill' }
    ]
  },
  '/purchase-bills/new': {
    title: 'New Purchase Bill',
    description: 'Create a new purchase bill for your suppliers.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-bill', label: 'Save Bill', variant: 'default', size: 'sm', action: 'save_bill' }
    ]
  },
  '/suppliers': {
    title: 'Suppliers',
    description: 'Manage your supplier relationships and contacts.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'import-suppliers', label: 'Import Suppliers', variant: 'outline', size: 'sm', action: 'import_suppliers' },
      { id: 'export-data', label: 'Export Data', variant: 'ghost', size: 'sm', action: 'export_data' },
      { id: 'add-supplier', label: 'Add New Supplier', variant: 'default', size: 'sm', action: 'add_supplier' }
    ]
  },
  '/suppliers/new': {
    title: 'New Supplier',
    description: 'Add a new supplier to your database.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-supplier', label: 'Save Supplier', variant: 'default', size: 'sm', action: 'save_supplier' }
    ]
  },
  '/purchase-reports': {
    title: 'Purchase Reports',
    description: 'Analyze your purchase activities and spending.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-report', label: 'Export Report', variant: 'outline', size: 'sm', action: 'export_report' },
      { id: 'generate-report', label: 'Generate Report', variant: 'default', size: 'sm', action: 'generate_report' }
    ]
  },
  
  // Employee Management
  '/employees': {
    title: 'Employees',
    description: 'Manage your team members and their information.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'add-employee', label: 'Add Employee', variant: 'default', size: 'sm', action: 'add_employee' }
    ]
  },
  '/attendance': {
    title: 'Attendance',
    description: 'Track employee attendance and working hours.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-attendance', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_attendance' },
      { id: 'mark-attendance', label: 'Mark Attendance', variant: 'default', size: 'sm', action: 'mark_attendance' }
    ]
  },
  '/advances': {
    title: 'Advances',
    description: 'Manage employee salary advances and payments.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-advances', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_advances' },
      { id: 'record-advance', label: 'Record Advance', variant: 'default', size: 'sm', action: 'record_advance' }
    ]
  },
  
  // Financial Statements
  '/profit-loss': {
    title: 'Profit & Loss',
    description: 'View your company\'s profit and loss statement.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-statement', label: 'Export Statement', variant: 'outline', size: 'sm', action: 'export_statement' },
      { id: 'refresh-data', label: 'Refresh Data', variant: 'default', size: 'sm', action: 'refresh_data' }
    ]
  },
  '/balance-sheet': {
    title: 'Balance Sheet',
    description: 'Review your company\'s balance sheet and financial position.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-statement', label: 'Export Statement', variant: 'outline', size: 'sm', action: 'export_statement' },
      { id: 'refresh-data', label: 'Refresh Data', variant: 'default', size: 'sm', action: 'refresh_data' }
    ]
  },
  '/cash-flow': {
    title: 'Cash Flow',
    description: 'Monitor your company\'s cash flow and liquidity.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-statement', label: 'Export Statement', variant: 'outline', size: 'sm', action: 'export_statement' },
      { id: 'refresh-data', label: 'Refresh Data', variant: 'default', size: 'sm', action: 'refresh_data' }
    ]
  },
  '/trial-balance': {
    title: 'Trial Balance',
    description: 'View your company\'s trial balance and account summaries.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-statement', label: 'Export Statement', variant: 'outline', size: 'sm', action: 'export_statement' },
      { id: 'refresh-data', label: 'Refresh Data', variant: 'default', size: 'sm', action: 'refresh_data' }
    ]
  },
  
  // Payments
  '/payments-sent': {
    title: 'Payments Sent',
    description: 'Track outgoing payments to suppliers and vendors.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-payments', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_payments' },
      { id: 'record-payment', label: 'Record Payment', variant: 'default', size: 'sm', action: 'record_payment' }
    ]
  },
  '/payments-received': {
    title: 'Payments Received',
    description: 'Monitor incoming payments from customers.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-payments', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_payments' },
      { id: 'record-payment', label: 'Record Payment', variant: 'default', size: 'sm', action: 'record_payment' }
    ]
  },
  '/outstanding-payments': {
    title: 'Outstanding Payments',
    description: 'View and manage overdue and pending payments.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'send-reminders', label: 'Send Reminders', variant: 'outline', size: 'sm', action: 'send_reminders' },
      { id: 'record-payment', label: 'Record Payment', variant: 'default', size: 'sm', action: 'record_payment' }
    ]
  },
  '/payment-tracking': {
    title: 'Payment Tracking',
    description: 'Track the status of all payments in real-time.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-tracking', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_tracking' },
      { id: 'refresh-status', label: 'Refresh Status', variant: 'default', size: 'sm', action: 'refresh_status' }
    ]
  },
  '/payments/new': {
    title: 'Record Payment',
    description: 'Record a new payment transaction.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-payment', label: 'Save Payment', variant: 'default', size: 'sm', action: 'save_payment' }
    ]
  },
  
  // Inventory & Stock
  '/stock-levels': {
    title: 'Stock Levels',
    description: 'Monitor current inventory levels and stock quantities.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-stock', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_stock' },
      { id: 'update-stock', label: 'Update Stock', variant: 'default', size: 'sm', action: 'update_stock' }
    ]
  },
  '/stock-reports': {
    title: 'Stock Reports',
    description: 'Analyze inventory performance and stock movements.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-report', label: 'Export Report', variant: 'outline', size: 'sm', action: 'export_report' },
      { id: 'generate-report', label: 'Generate Report', variant: 'default', size: 'sm', action: 'generate_report' }
    ]
  },
  '/low-stock-alerts': {
    title: 'Low Stock Alerts',
    description: 'View items that are running low in stock.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'reorder-items', label: 'Reorder Items', variant: 'outline', size: 'sm', action: 'reorder_items' },
      { id: 'update-thresholds', label: 'Update Thresholds', variant: 'default', size: 'sm', action: 'update_thresholds' }
    ]
  },
  
  // Reports & Analytics
  '/financial-analytics': {
    title: 'Financial Analytics',
    description: 'Comprehensive financial analysis and insights.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-analytics', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_analytics' },
      { id: 'refresh-analytics', label: 'Refresh Analytics', variant: 'default', size: 'sm', action: 'refresh_analytics' }
    ]
  },
  '/business-insights': {
    title: 'Business Insights',
    description: 'Strategic insights and business performance metrics.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-insights', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_insights' },
      { id: 'generate-insights', label: 'Generate Insights', variant: 'default', size: 'sm', action: 'generate_insights' }
    ]
  },
  '/custom-reports': {
    title: 'Custom Reports',
    description: 'Create and manage custom business reports.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-reports', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_reports' },
      { id: 'create-report', label: 'Create Report', variant: 'default', size: 'sm', action: 'create_report' }
    ]
  },
  '/comparative-analysis': {
    title: 'Comparative Analysis',
    description: 'Compare performance across different periods and metrics.',
    showSearch: false,
    showAlerts: true,
    buttons: [
      { id: 'export-analysis', label: 'Export Data', variant: 'outline', size: 'sm', action: 'export_analysis' },
      { id: 'generate-analysis', label: 'Generate Analysis', variant: 'default', size: 'sm', action: 'generate_analysis' }
    ]
  },
  '/reports': {
    title: 'Generate Report',
    description: 'Generate custom reports for your business needs.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'generate-report', label: 'Generate Report', variant: 'default', size: 'sm', action: 'generate_report' }
    ]
  },
  
  // Settings
  '/company-profile': {
    title: 'Company Profile',
    description: 'Manage your company information and settings.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'cancel', label: 'Cancel', variant: 'outline', size: 'sm', action: 'cancel' },
      { id: 'save-profile', label: 'Save Changes', variant: 'default', size: 'sm', action: 'save_profile' }
    ]
  },
  '/user-management': {
    title: 'User Management',
    description: 'Manage user accounts and permissions.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'export-users', label: 'Export Users', variant: 'outline', size: 'sm', action: 'export_users' },
      { id: 'add-user', label: 'Add User', variant: 'default', size: 'sm', action: 'add_user' }
    ]
  },
  '/system-settings': {
    title: 'System Settings',
    description: 'Configure system preferences and options.',
    showSearch: false,
    showAlerts: false,
    buttons: [
      { id: 'reset-settings', label: 'Reset to Default', variant: 'outline', size: 'sm', action: 'reset_settings' },
      { id: 'save-settings', label: 'Save Settings', variant: 'default', size: 'sm', action: 'save_settings' }
    ]
  },
  '/integrations': {
    title: 'Integrations',
    description: 'Manage third-party integrations and connections.',
    showSearch: true,
    showAlerts: true,
    buttons: [
      { id: 'browse-integrations', label: 'Browse Integrations', variant: 'outline', size: 'sm', action: 'browse_integrations' },
      { id: 'add-integration', label: 'Add Integration', variant: 'default', size: 'sm', action: 'add_integration' }
    ]
  }
};

const DEFAULT_PAGE_INFO: PageInfo = {
  title: 'Dashboard',
  description: 'Welcome back! Here\'s what\'s happening with your business today.',
  showSearch: true,
  showAlerts: true,
  buttons: []
};

export const getPageInfo = (pathname: string): PageInfo => {
  return PAGE_INFO_MAP[pathname] || DEFAULT_PAGE_INFO;
};
