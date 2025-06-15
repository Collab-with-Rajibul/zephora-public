
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
          <Route path="/customers" element={<AppLayout><CustomersPage /></AppLayout>} />
          <Route path="/sales-reports" element={<AppLayout><SalesReportsPage /></AppLayout>} />
          <Route path="/purchase-bills" element={<AppLayout><PurchaseBillsPage /></AppLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
