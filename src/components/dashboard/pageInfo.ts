
export interface PageInfo {
  title: string;
  description: string;
}

export const getPageInfo = (pathname: string): PageInfo => {
  switch (pathname) {
    case '/':
      return {
        title: 'Dashboard',
        description: 'Welcome back! Here\'s what\'s happening with your business today.'
      };
    
    // Sales Management
    case '/sales-invoices':
      return {
        title: 'Sales Invoices',
        description: 'Manage and track your sales invoices.'
      };
    case '/sales-invoices/new':
      return {
        title: 'New Sales Invoice',
        description: 'Create a new sales invoice for your customers.'
      };
    case '/customers':
      return {
        title: 'Customers',
        description: 'Manage your customer relationships and information.'
      };
    case '/customers/new':
      return {
        title: 'New Customer',
        description: 'Add a new customer to your database.'
      };
    case '/sales-reports':
      return {
        title: 'Sales Reports',
        description: 'Analyze your sales performance and trends.'
      };
    
    // Purchase Management
    case '/purchase-bills':
      return {
        title: 'Purchase Bills',
        description: 'Track and manage your purchase bills and expenses.'
      };
    case '/purchase-bills/new':
      return {
        title: 'New Purchase Bill',
        description: 'Create a new purchase bill for your suppliers.'
      };
    case '/suppliers':
      return {
        title: 'Suppliers',
        description: 'Manage your supplier relationships and contacts.'
      };
    case '/suppliers/new':
      return {
        title: 'New Supplier',
        description: 'Add a new supplier to your database.'
      };
    case '/purchase-reports':
      return {
        title: 'Purchase Reports',
        description: 'Analyze your purchase activities and spending.'
      };
    
    // Employee Management
    case '/employees':
      return {
        title: 'Employees',
        description: 'Manage your team members and their information.'
      };
    case '/attendance':
      return {
        title: 'Attendance',
        description: 'Track employee attendance and working hours.'
      };
    case '/advances':
      return {
        title: 'Advances',
        description: 'Manage employee salary advances and payments.'
      };
    
    // Financial Statements
    case '/profit-loss':
      return {
        title: 'Profit & Loss',
        description: 'View your company\'s profit and loss statement.'
      };
    case '/balance-sheet':
      return {
        title: 'Balance Sheet',
        description: 'Review your company\'s balance sheet and financial position.'
      };
    case '/cash-flow':
      return {
        title: 'Cash Flow',
        description: 'Monitor your company\'s cash flow and liquidity.'
      };
    case '/trial-balance':
      return {
        title: 'Trial Balance',
        description: 'View your company\'s trial balance and account summaries.'
      };
    
    // Payments
    case '/payments-sent':
      return {
        title: 'Payments Sent',
        description: 'Track outgoing payments to suppliers and vendors.'
      };
    case '/payments-received':
      return {
        title: 'Payments Received',
        description: 'Monitor incoming payments from customers.'
      };
    case '/outstanding-payments':
      return {
        title: 'Outstanding Payments',
        description: 'View and manage overdue and pending payments.'
      };
    case '/payment-tracking':
      return {
        title: 'Payment Tracking',
        description: 'Track the status of all payments in real-time.'
      };
    case '/payments/new':
      return {
        title: 'Record Payment',
        description: 'Record a new payment transaction.'
      };
    
    // Inventory & Stock
    case '/stock-levels':
      return {
        title: 'Stock Levels',
        description: 'Monitor current inventory levels and stock quantities.'
      };
    case '/stock-reports':
      return {
        title: 'Stock Reports',
        description: 'Analyze inventory performance and stock movements.'
      };
    case '/low-stock-alerts':
      return {
        title: 'Low Stock Alerts',
        description: 'View items that are running low in stock.'
      };
    
    // Reports & Analytics
    case '/financial-analytics':
      return {
        title: 'Financial Analytics',
        description: 'Comprehensive financial analysis and insights.'
      };
    case '/business-insights':
      return {
        title: 'Business Insights',
        description: 'Strategic insights and business performance metrics.'
      };
    case '/custom-reports':
      return {
        title: 'Custom Reports',
        description: 'Create and manage custom business reports.'
      };
    case '/comparative-analysis':
      return {
        title: 'Comparative Analysis',
        description: 'Compare performance across different periods and metrics.'
      };
    case '/reports':
      return {
        title: 'Generate Report',
        description: 'Generate custom reports for your business needs.'
      };
    
    // Settings
    case '/company-profile':
      return {
        title: 'Company Profile',
        description: 'Manage your company information and settings.'
      };
    case '/user-management':
      return {
        title: 'User Management',
        description: 'Manage user accounts and permissions.'
      };
    case '/system-settings':
      return {
        title: 'System Settings',
        description: 'Configure system preferences and options.'
      };
    case '/integrations':
      return {
        title: 'Integrations',
        description: 'Manage third-party integrations and connections.'
      };
    
    default:
      return {
        title: 'Dashboard',
        description: 'Welcome back! Here\'s what\'s happening with your business today.'
      };
  }
};
