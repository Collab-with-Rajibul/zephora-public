
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "@/components/layout/AppLayout";

import DashboardPage from "./pages/DashboardPage";
import NotFound from "./pages/NotFound";

// Quick Action Pages
import NewSaleInvoicePage from "./pages/sales/NewSaleInvoicePage";
import NewPurchaseBillPage from "./pages/purchase/NewPurchaseBillPage";
import NewCustomerPage from "./pages/sales/NewCustomerPage";
import NewSupplierPage from "./pages/purchase/NewSupplierPage";
import RecordPaymentPage from "./pages/payments/RecordPaymentPage";
import GenerateReportPage from "./pages/reports/GenerateReportPage";

// Sales Management
import SalesInvoicesPage from "./pages/sales/SalesInvoices";
import CustomersPage from "./pages/sales/CustomersPage";
import SalesReportsPage from "./pages/sales/SalesReportsPage";

//Purchase Management
import PurchaseBillsPage from "./pages/purchase/PurchaseBillsPage";
import SuppliersPage from "./pages/purchase/SuppliersPage";
import PurchaseReportsPage from "./pages/purchase/PurchaseReportsPage";

//Employee Management
import EmployeesPage from "./pages/employees/EmployeesPage";
import AttendancePage from "./pages/employees/AttendancePage";
import AdvancesPage from "./pages/employees/AdvancesPage";

// Financial Statements
import ProfitLossPage from "./pages/financial/ProfitLossPage";
import BalanceSheetPage from "./pages/financial/BalanceSheetPage";
import CashFlowPage from "./pages/financial/CashFlowPage";
import TrialBalancePage from "./pages/financial/TrialBalancePage";

// Payments
import PaymentsSentPage from "./pages/payments/PaymentsSentPage";
import PaymentsReceivedPage from "./pages/payments/PaymentsReceivedPage";
import OutstandingPaymentsPage from "./pages/payments/OutstandingPaymentsPage";
import PaymentTrackingPage from "./pages/payments/PaymentTrackingPage";

// Inventory & Stock
import StockLevelsPage from "./pages/inventory/StockLevelsPage";
import StockReportsPage from "./pages/inventory/StockReportsPage";
import LowStockAlertsPage from "./pages/inventory/LowStockAlertsPage";

// Reports & Analytics
import FinancialAnalyticsPage from "./pages/reports/FinancialAnalyticsPage";
import BusinessInsightsPage from "./pages/reports/BusinessInsightsPage";
import CustomReportsPage from "./pages/reports/CustomReportsPage";
import ComparativeAnalysisPage from "./pages/reports/ComparativeAnalysisPage";

// Settings
import CompanyProfilePage from "./pages/settings/CompanyProfilePage";
import UserManagementPage from "./pages/settings/UserManagementPage";
import SystemSettingsPage from "./pages/settings/SystemSettingsPage";
import IntegrationsPage from "./pages/settings/IntegrationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><DashboardPage /></AppLayout>} />
          
          {/* Quick Action Pages */}
          <Route path="/sales-invoices/new" element={<AppLayout><NewSaleInvoicePage /></AppLayout>} />
          <Route path="/purchase-bills/new" element={<AppLayout><NewPurchaseBillPage /></AppLayout>} />
          <Route path="/customers/new" element={<AppLayout><NewCustomerPage /></AppLayout>} />
          <Route path="/suppliers/new" element={<AppLayout><NewSupplierPage /></AppLayout>} />
          <Route path="/payments/new" element={<AppLayout><RecordPaymentPage /></AppLayout>} />
          <Route path="/reports" element={<AppLayout><GenerateReportPage /></AppLayout>} />
          
          {/* Sales Management */}
          <Route path="/sales-invoices" element={<AppLayout><SalesInvoicesPage /></AppLayout>} />
          <Route path="/customers" element={<AppLayout><CustomersPage /></AppLayout>} />        
          <Route path="/sales-reports" element={<AppLayout><SalesReportsPage /></AppLayout>} />
          
          {/* Purchase Management */}
          <Route path="/purchase-bills" element={<AppLayout><PurchaseBillsPage /></AppLayout>} />          
          <Route path="/suppliers" element={<AppLayout><SuppliersPage /></AppLayout>} />          
          <Route path="/purchase-reports" element={<AppLayout><PurchaseReportsPage /></AppLayout>} />
          
          {/* Employee Management */}
          <Route path="/employees" element={<AppLayout><EmployeesPage /></AppLayout>} />
          <Route path="/attendance" element={<AppLayout><AttendancePage /></AppLayout>} />
          <Route path="/advances" element={<AppLayout><AdvancesPage /></AppLayout>} />
          
          {/* Financial Statements */}
          <Route path="/profit-loss" element={<AppLayout><ProfitLossPage /></AppLayout>} />
          <Route path="/balance-sheet" element={<AppLayout><BalanceSheetPage /></AppLayout>} />
          <Route path="/cash-flow" element={<AppLayout><CashFlowPage /></AppLayout>} />
          <Route path="/trial-balance" element={<AppLayout><TrialBalancePage /></AppLayout>} />
          
          {/* Payments */}
          <Route path="/payments-sent" element={<AppLayout><PaymentsSentPage /></AppLayout>} />
          <Route path="/payments-received" element={<AppLayout><PaymentsReceivedPage /></AppLayout>} />
          <Route path="/outstanding-payments" element={<AppLayout><OutstandingPaymentsPage /></AppLayout>} />
          <Route path="/payment-tracking" element={<AppLayout><PaymentTrackingPage /></AppLayout>} />
          
          {/* Inventory & Stock */}
          <Route path="/stock-levels" element={<AppLayout><StockLevelsPage /></AppLayout>} />
          <Route path="/stock-reports" element={<AppLayout><StockReportsPage /></AppLayout>} />
          <Route path="/low-stock-alerts" element={<AppLayout><LowStockAlertsPage /></AppLayout>} />
          
          {/* Reports & Analytics */}
          <Route path="/financial-analytics" element={<AppLayout><FinancialAnalyticsPage /></AppLayout>} />
          <Route path="/business-insights" element={<AppLayout><BusinessInsightsPage /></AppLayout>} />
          <Route path="/custom-reports" element={<AppLayout><CustomReportsPage /></AppLayout>} />
          <Route path="/comparative-analysis" element={<AppLayout><ComparativeAnalysisPage /></AppLayout>} />
          
          {/* Settings */}
          <Route path="/company-profile" element={<AppLayout><CompanyProfilePage /></AppLayout>} />
          <Route path="/user-management" element={<AppLayout><UserManagementPage /></AppLayout>} />
          <Route path="/system-settings" element={<AppLayout><SystemSettingsPage /></AppLayout>} />
          <Route path="/integrations" element={<AppLayout><IntegrationsPage /></AppLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
