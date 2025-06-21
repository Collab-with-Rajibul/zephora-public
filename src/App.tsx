import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SalesInvoicesPage from "./pages/SalesInvoices";
import CustomersPage from "./pages/CustomersPage";
import SalesReportsPage from "./pages/SalesReportsPage";
import PurchaseBillsPage from "./pages/PurchaseBillsPage";
import SuppliersPage from "./pages/SuppliersPage";
import PurchaseReportsPage from "./pages/PurchaseReportsPage";
import EmployeesPage from "./pages/EmployeesPage";
import AttendancePage from "./pages/AttendancePage";
import AdvancesPage from "./pages/AdvancesPage";
import NewSaleInvoicePage from "./pages/NewSaleInvoicePage";
import NewPurchaseBillPage from "./pages/NewPurchaseBillPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout><Index /></AppLayout>} />
          <Route path="/sales-invoices" element={<AppLayout><SalesInvoicesPage /></AppLayout>} />
          <Route path="/sales-invoices/new" element={<AppLayout><NewSaleInvoicePage /></AppLayout>} />
          <Route path="/customers" element={<AppLayout><CustomersPage /></AppLayout>} />
          <Route path="/sales-reports" element={<AppLayout><SalesReportsPage /></AppLayout>} />
          <Route path="/purchase-bills" element={<AppLayout><PurchaseBillsPage /></AppLayout>} />
          <Route path="/purchase-bills/new" element={<AppLayout><NewPurchaseBillPage /></AppLayout>} />
          <Route path="/suppliers" element={<AppLayout><SuppliersPage /></AppLayout>} />
          <Route path="/purchase-reports" element={<AppLayout><PurchaseReportsPage /></AppLayout>} />
          <Route path="/employees" element={<AppLayout><EmployeesPage /></AppLayout>} />
          <Route path="/attendance" element={<AppLayout><AttendancePage /></AppLayout>} />
          <Route path="/advances" element={<AppLayout><AdvancesPage /></AppLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
