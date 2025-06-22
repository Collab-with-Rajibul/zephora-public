
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Toaster } from '@/components/ui/sonner';

// Dashboard
import Index from '@/pages/dashboard/Index';

// Sales Management
import SalesInvoices from '@/pages/sales-management/SalesInvoices';
import NewSaleInvoicePage from '@/pages/sales-management/NewSaleInvoicePage';

// Purchase Management
import PurchaseBillsPage from '@/pages/purchase-management/PurchaseBillsPage';
import NewPurchaseBillPage from '@/pages/purchase-management/NewPurchaseBillPage';
import PurchaseReportsPage from '@/pages/purchase-management/PurchaseReportsPage';

// Customer & Supplier Management
import CustomersPage from '@/pages/customer-supplier-management/CustomersPage';
import NewCustomerPage from '@/pages/customer-supplier-management/NewCustomerPage';
import SuppliersPage from '@/pages/customer-supplier-management/SuppliersPage';
import NewSupplierPage from '@/pages/customer-supplier-management/NewSupplierPage';

// Employee Management
import EmployeesPage from '@/pages/employee-management/EmployeesPage';
import AttendancePage from '@/pages/employee-management/AttendancePage';

// Financial Statements
import ProfitLossPage from '@/pages/financial-statements/ProfitLossPage';
import BalanceSheetPage from '@/pages/financial-statements/BalanceSheetPage';
import CashFlowPage from '@/pages/financial-statements/CashFlowPage';
import TrialBalancePage from '@/pages/financial-statements/TrialBalancePage';

// Payments
import PaymentsSentPage from '@/pages/payments/PaymentsSentPage';
import PaymentsReceivedPage from '@/pages/payments/PaymentsReceivedPage';
import OutstandingPaymentsPage from '@/pages/payments/OutstandingPaymentsPage';
import PaymentTrackingPage from '@/pages/payments/PaymentTrackingPage';
import RecordPaymentPage from '@/pages/payments/RecordPaymentPage';

// Inventory & Stock
import StockLevelsPage from '@/pages/inventory-stock/StockLevelsPage';
import StockReportsPage from '@/pages/inventory-stock/StockReportsPage';
import LowStockAlertsPage from '@/pages/inventory-stock/LowStockAlertsPage';

// Reports & Analytics
import FinancialAnalyticsPage from '@/pages/reports-analytics/FinancialAnalyticsPage';
import BusinessInsightsPage from '@/pages/reports-analytics/BusinessInsightsPage';
import CustomReportsPage from '@/pages/reports-analytics/CustomReportsPage';
import ComparativeAnalysisPage from '@/pages/reports-analytics/ComparativeAnalysisPage';
import GenerateReportPage from '@/pages/reports-analytics/GenerateReportPage';

// Settings
import CompanyProfilePage from '@/pages/settings/CompanyProfilePage';
import UserManagementPage from '@/pages/settings/UserManagementPage';
import SystemSettingsPage from '@/pages/settings/SystemSettingsPage';
import IntegrationsPage from '@/pages/settings/IntegrationsPage';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Dashboard */}
          <Route path="/" element={<Index />} />
          
          {/* Sales Management */}
          <Route path="/sales-invoices" element={<SalesInvoices />} />
          <Route path="/sales-invoices/new" element={<NewSaleInvoicePage />} />
          
          {/* Purchase Management */}
          <Route path="/purchase-bills" element={<PurchaseBillsPage />} />
          <Route path="/purchase-bills/new" element={<NewPurchaseBillPage />} />
          <Route path="/purchase-reports" element={<PurchaseReportsPage />} />
          
          {/* Customer & Supplier Management */}
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/new" element={<NewCustomerPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/suppliers/new" element={<NewSupplierPage />} />
          
          {/* Employee Management */}
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          
          {/* Financial Statements */}
          <Route path="/profit-loss" element={<ProfitLossPage />} />
          <Route path="/balance-sheet" element={<BalanceSheetPage />} />
          <Route path="/cash-flow" element={<CashFlowPage />} />
          <Route path="/trial-balance" element={<TrialBalancePage />} />
          
          {/* Payments */}
          <Route path="/payments-sent" element={<PaymentsSentPage />} />
          <Route path="/payments-received" element={<PaymentsReceivedPage />} />
          <Route path="/outstanding-payments" element={<OutstandingPaymentsPage />} />
          <Route path="/payment-tracking" element={<PaymentTrackingPage />} />
          <Route path="/record-payment" element={<RecordPaymentPage />} />
          
          {/* Inventory & Stock */}
          <Route path="/stock-levels" element={<StockLevelsPage />} />
          <Route path="/stock-reports" element={<StockReportsPage />} />
          <Route path="/low-stock-alerts" element={<LowStockAlertsPage />} />
          
          {/* Reports & Analytics */}
          <Route path="/financial-analytics" element={<FinancialAnalyticsPage />} />
          <Route path="/business-insights" element={<BusinessInsightsPage />} />
          <Route path="/custom-reports" element={<CustomReportsPage />} />
          <Route path="/comparative-analysis" element={<ComparativeAnalysisPage />} />
          <Route path="/generate-report" element={<GenerateReportPage />} />
          
          {/* Settings */}
          <Route path="/company-profile" element={<CompanyProfilePage />} />
          <Route path="/user-management" element={<UserManagementPage />} />
          <Route path="/system-settings" element={<SystemSettingsPage />} />
          <Route path="/integrations" element={<IntegrationsPage />} />
        </Routes>
      </Layout>
      <Toaster />
    </Router>
  );
}

export default App;
