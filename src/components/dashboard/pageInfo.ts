
export interface PageInfo {
  title: string;
  description: string;
}

export function getPageInfo(pathname: string): PageInfo {
  // Remove trailing slash and normalize the path
  const normalizedPath = pathname === '/' ? '/' : pathname.replace(/\/$/, '');
  
  const pageMap: Record<string, PageInfo> = {
    '/': {
      title: 'Dashboard',
      description: 'Overview of your business performance'
    },
    
    // Sales Management
    '/sales-invoices': {
      title: 'Sales Invoices',
      description: 'Manage customer invoices and track payments'
    },
    '/sales-invoices/new': {
      title: 'New Sale Invoice',
      description: 'Create a new invoice for your customer'
    },
    
    // Purchase Management
    '/purchase-bills': {
      title: 'Purchase Bills',
      description: 'Manage supplier bills and expenses'
    },
    '/purchase-bills/new': {
      title: 'New Purchase Bill',
      description: 'Create a new purchase bill from supplier'
    },
    '/purchase-reports': {
      title: 'Purchase Reports',
      description: 'Analyze purchase trends and supplier performance'
    },
    
    // Customer & Supplier Management
    '/customers': {
      title: 'Customers',
      description: 'Manage your customer database'
    },
    '/customers/new': {
      title: 'Add New Customer',
      description: 'Create a new customer profile'
    },
    '/suppliers': {
      title: 'Suppliers',
      description: 'Manage your supplier database'
    },
    '/suppliers/new': {
      title: 'Add New Supplier',
      description: 'Create a new supplier profile'
    },
    
    // Employee Management
    '/employees': {
      title: 'Employees',
      description: 'Manage your workforce and employee information'
    },
    '/attendance': {
      title: 'Attendance Management',
      description: 'Track employee attendance and manage weekly payroll calculations'
    },
    
    // Financial Statements
    '/profit-loss': {
      title: 'Profit & Loss Statement',
      description: 'Financial performance overview'
    },
    '/balance-sheet': {
      title: 'Balance Sheet',
      description: 'Assets, liabilities and equity overview'
    },
    '/cash-flow': {
      title: 'Cash Flow Statement',
      description: 'Cash inflows and outflows analysis'
    },
    '/trial-balance': {
      title: 'Trial Balance',
      description: 'Account balances verification'
    },
    
    // Payments
    '/payments-sent': {
      title: 'Payments Sent',
      description: 'Track outgoing payments to suppliers'
    },
    '/payments-received': {
      title: 'Payments Received',
      description: 'Track incoming payments from customers'
    },
    '/outstanding-payments': {
      title: 'Outstanding Payments',
      description: 'Track pending receivables and payables'
    },
    '/payment-tracking': {
      title: 'Payment Tracking',
      description: 'Monitor all payment activities and history'
    },
    '/record-payment': {
      title: 'Record Payment',
      description: 'Record a new payment transaction'
    },
    
    // Inventory & Stock
    '/stock-levels': {
      title: 'Stock Levels',
      description: 'Current inventory levels and stock status'
    },
    '/stock-reports': {
      title: 'Stock Reports',
      description: 'Inventory movement and analysis reports'
    },
    '/low-stock-alerts': {
      title: 'Low Stock Alerts',
      description: 'Items that need restocking'
    },
    
    // Reports & Analytics
    '/financial-analytics': {
      title: 'Financial Analytics',
      description: 'Comprehensive financial data analysis'
    },
    '/business-insights': {
      title: 'Business Insights',
      description: 'Key performance metrics and trends'
    },
    '/custom-reports': {
      title: 'Custom Reports',
      description: 'Create and manage custom business reports'
    },
    '/comparative-analysis': {
      title: 'Comparative Analysis',
      description: 'Compare performance across different periods'
    },
    '/generate-report': {
      title: 'Generate Report',
      description: 'Create custom reports for your business'
    },
    
    // Settings
    '/company-profile': {
      title: 'Company Profile',
      description: 'Manage your company information and settings'
    },
    '/user-management': {
      title: 'User Management',
      description: 'Manage user accounts and permissions'
    },
    '/system-settings': {
      title: 'System Settings',
      description: 'Configure system preferences and defaults'
    },
    '/integrations': {
      title: 'Integrations',
      description: 'Connect with third-party applications'
    }
  };

  return pageMap[normalizedPath] || {
    title: 'Page Not Found',
    description: 'The requested page could not be found'
  };
}
