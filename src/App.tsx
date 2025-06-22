
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Index from "./pages/dashboard/Index";
import NotFound from "./pages/NotFound";

// Sales Management
import SalesInvoicesPage from "./pages/sales-management/SalesInvoicesPage";
import NewSaleInvoicePage from "./pages/sales-management/NewSaleInvoicePage";
import CustomersPage from "./pages/sales-management/CustomersPage";
import NewCustomerPage from "./pages/sales-management/NewCustomerPage";
import SalesReportsPage from "./pages/SalesReportsPage";

// Purchase Management
import PurchaseBillsPage from "./pages/purchase-management/PurchaseBillsPage";
import NewPurchaseBillPage from "./pages/NewPurchaseBillPage";
import SuppliersPage from "./pages/purchase-management/SuppliersPage";
import NewSupplierPage from "./pages/NewSupplierPage";
import PurchaseReportsPage from "./pages/PurchaseReportsPage";

// Employee Management
import EmployeesPage from "./pages/employee-management/EmployeesPage";
import AttendancePage from "./pages/AttendancePage";
import AdvancesPage from "./pages/AdvancesPage";

// Financial Statements
import ProfitLossPage from "./pages/financial-statements/ProfitLossPage";
import BalanceSheetPage from "./pages/BalanceSheetPage";
import CashFlowPage from "./pages/CashFlowPage";
import TrialBalancePage from "./pages/TrialBalancePage";

// Payments
import RecordPaymentPage from "./pages/payments/RecordPaymentPage";
import PaymentsSentPage from "./pages/PaymentsSentPage";
import PaymentsReceivedPage from "./pages/PaymentsReceivedPage";
import OutstandingPaymentsPage from "./pages/OutstandingPaymentsPage";
import PaymentTrackingPage from "./pages/PaymentTrackingPage";

// Inventory & Stock
import StockLevelsPage from "./pages/StockLevelsPage";
import StockReportsPage from "./pages/StockReportsPage";
import LowStockAlertsPage from "./pages/inventory-stock/LowStockAlertsPage";

// Reports & Analytics
import FinancialAnalyticsPage from "./pages/FinancialAnalyticsPage";
import BusinessInsightsPage from "./pages/BusinessInsightsPage";
import CustomReportsPage from "./pages/CustomReportsPage";
import ComparativeAnalysisPage from "./pages/ComparativeAnalysisPage";
import GenerateReportPage from "./pages/GenerateReportPage";

// Settings
import CompanyProfilePage from "./pages/CompanyProfilePage";
import UserManagementPage from "./pages/UserManagementPage";
import SystemSettingsPage from "./pages/SystemSettingsPage";
import IntegrationsPage from "./pages/IntegrationsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Index /></AppLayout>} />
          
          {/* Sales Management */}
          <Route path="/sales-invoices" element={<AppLayout><SalesInvoicesPage /></AppLayout>} />
          <Route path="/sales-invoices/new" element={<AppLayout><NewSaleInvoicePage /></AppLayout>} />
          <Route path="/customers" element={<AppLayout><CustomersPage /></AppLayout>} />
          <Route path="/customers/new" element={<AppLayout><NewCustomerPage /></AppLayout>} />
          <Route path="/sales-reports" element={<AppLayout><SalesReportsPage /></AppLayout>} />
          
          {/* Purchase Management */}
          <Route path="/purchase-bills" element={<AppLayout><PurchaseBillsPage /></AppLayout>} />
          <Route path="/purchase-bills/new" element={<AppLayout><NewPurchaseBillPage /></AppLayout>} />
          <Route path="/suppliers" element={<AppLayout><SuppliersPage /></AppLayout>} />
          <Route path="/suppliers/new" element={<AppLayout><NewSupplierPage /></AppLayout>} />
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
          <Route path="/payments/new" element={<AppLayout><RecordPaymentPage /></AppLayout>} />
          <Route path="/payments-sent" element={<AppLayout><PaymentsSentPage /></AppLayout>} />
          <Route path="/payments-received" element={<AppLayout><PaymentsReceivedPage /></AppLayout>} />
          <Route path="/outstanding-payments" element={<AppLayout><OutstandingPaymentsPage /></AppLayout>} />
          <Route path="/payment-tracking" element={<AppLayout><PaymentTrackingPage /></AppLayout>} />
          
          {/* Inventory & Stock */}
          <Route path="/stock-levels" element={<AppLayout><StockLevelsPage /></AppLayout>} />
          <Route path="/stock-reports" element={<AppLayout><StockReportsPage /></AppLayout>} />
          <Route path="/low-stock-alerts" element={<AppLayout><LowStockAlertsPage /></AppLayout>} />
          
          {/* Reports & Analytics */}
          <Route path="/reports" element={<AppLayout><GenerateReportPage /></AppLayout>} />
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
