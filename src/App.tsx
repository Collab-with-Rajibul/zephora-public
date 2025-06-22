
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Toaster } from '@/components/ui/sonner';

// Dashboard
import Index from '@/pages/dashboard/Index';

// Sales Management
import SalesInvoices from '@/pages/sales-management/SalesInvoices';
import NewSaleInvoicePage from '@/pages/sales-management/NewSaleInvoicePage';
import CustomersPage from '@/pages/sales-management/CustomersPage';
import NewCustomerPage from '@/pages/sales-management/NewCustomerPage';
import SalesReportsPage from '@/pages/sales-management/SalesReportsPage';

// Purchase Management
import PurchaseBillsPage from '@/pages/purchase-management/PurchaseBillsPage';
import NewPurchaseBillPage from '@/pages/purchase-management/NewPurchaseBillPage';
import SuppliersPage from '@/pages/purchase-management/SuppliersPage';
import NewSupplierPage from '@/pages/purchase-management/NewSupplierPage';
import PurchaseReportsPage from '@/pages/purchase-management/PurchaseReportsPage';

// Employee Management
import EmployeesPage from '@/pages/employee-management/EmployeesPage';
import AttendancePage from '@/pages/employee-management/AttendancePage';
import AdvancesPage from '@/pages/employee-management/AdvancesPage';

// Financial Statements
import ProfitLossPage from '@/pages/financial-statements/ProfitLossPage';
import BalanceSheetPage from '@/pages/financial-statements/BalanceSheetPage';
import CashFlowPage from '@/pages/financial-statements/CashFlowPage';
import TrialBalancePage from '@/pages/TrialBalancePage';

// Payments
import RecordPaymentPage from '@/pages/RecordPaymentPage';
import PaymentsSentPage from '@/pages/payments/PaymentsSentPage';
import PaymentsReceivedPage from '@/pages/payments/PaymentsReceivedPage';
import OutstandingPaymentsPage from '@/pages/payments/OutstandingPaymentsPage';
import PaymentTrackingPage from '@/pages/payments/PaymentTrackingPage';

// Inventory & Stock
import StockLevelsPage from '@/pages/StockLevelsPage';
import StockReportsPage from '@/pages/StockReportsPage';
import LowStockAlertsPage from '@/pages/LowStockAlertsPage';

// Reports & Analytics
import GenerateReportPage from '@/pages/reports-analytics/GenerateReportPage';
import FinancialAnalyticsPage from '@/pages/reports-analytics/FinancialAnalyticsPage';
import BusinessInsightsPage from '@/pages/reports-analytics/BusinessInsightsPage';
import CustomReportsPage from '@/pages/reports-analytics/CustomReportsPage';
import ComparativeAnalysisPage from '@/pages/reports-analytics/ComparativeAnalysisPage';

// Settings
import CompanyProfilePage from '@/pages/settings/CompanyProfilePage';
import UserManagementPage from '@/pages/settings/UserManagementPage';
import SystemSettingsPage from '@/pages/SystemSettingsPage';
import IntegrationsPage from '@/pages/IntegrationsPage';

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
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/customers/new" element={<NewCustomerPage />} />
          <Route path="/sales-reports" element={<SalesReportsPage />} />
          
          {/* Purchase Management */}
          <Route path="/purchase-bills" element={<PurchaseBillsPage />} />
          <Route path="/purchase-bills/new" element={<NewPurchaseBillPage />} />
          <Route path="/suppliers" element={<SuppliersPage />} />
          <Route path="/suppliers/new" element={<NewSupplierPage />} />
          <Route path="/purchase-reports" element={<PurchaseReportsPage />} />
          
          {/* Employee Management */}
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/advances" element={<AdvancesPage />} />
          
          {/* Financial Statements */}
          <Route path="/profit-loss" element={<ProfitLossPage />} />
          <Route path="/balance-sheet" element={<BalanceSheetPage />} />
          <Route path="/cash-flow" element={<CashFlowPage />} />
          <Route path="/trial-balance" element={<TrialBalancePage />} />
          
          {/* Payments */}
          <Route path="/record-payment" element={<RecordPaymentPage />} />
          <Route path="/payments-sent" element={<PaymentsSentPage />} />
          <Route path="/payments-received" element={<PaymentsReceivedPage />} />
          <Route path="/outstanding-payments" element={<OutstandingPaymentsPage />} />
          <Route path="/payment-tracking" element={<PaymentTrackingPage />} />
          
          {/* Inventory & Stock */}
          <Route path="/stock-levels" element={<StockLevelsPage />} />
          <Route path="/stock-reports" element={<StockReportsPage />} />
          <Route path="/low-stock-alerts" element={<LowStockAlertsPage />} />
          
          {/* Reports & Analytics */}
          <Route path="/generate-report" element={<GenerateReportPage />} />
          <Route path="/financial-analytics" element={<FinancialAnalyticsPage />} />
          <Route path="/business-insights" element={<BusinessInsightsPage />} />
          <Route path="/custom-reports" element={<CustomReportsPage />} />
          <Route path="/comparative-analysis" element={<ComparativeAnalysisPage />} />
          
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
