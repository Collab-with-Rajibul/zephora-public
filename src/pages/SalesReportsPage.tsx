
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Printer, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { RevenueChart } from '@/components/sales-reports/RevenueChart';
import { SalesByCustomerChart } from '@/components/sales-reports/SalesByCustomerChart';
import { InvoiceStatusPieChart } from '@/components/sales-reports/InvoiceStatusPieChart';
import { SummaryCard } from '@/components/sales-invoices/SummaryCard';
import { DollarSign, FileText, UserPlus, FileWarning } from 'lucide-react';
import { invoices } from '@/data/sales-invoices';
import { customers } from '@/data/customers';

export default function SalesReportsPage() {
  const totalRevenue = invoices
    .filter(inv => ['paid', 'partially-paid'].includes(inv.status))
    .reduce((sum, inv) => sum + inv.amount, 0);

  const avgInvoiceValue = totalRevenue / invoices.filter(inv => inv.status !== 'draft' && inv.status !== 'cancelled').length;
  
  const newCustomers = customers.filter(c => c.status === 'new').length;

  const overdueInvoices = invoices.filter(inv => inv.status === 'overdue').length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Reports</h1>
          <p className="text-muted-foreground">Analyze your sales performance and trends.</p>
        </div>
        <div className="flex items-center space-x-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input placeholder="Search..." className="pl-10 w-64" />
          </div>
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.info("Downloading PDF report...")}>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Printing report...")}>
            <Printer className="mr-2 h-4 w-4" /> Print Report
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Total Revenue" value={totalRevenue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} icon={DollarSign} />
        <SummaryCard title="Avg. Invoice Value" value={avgInvoiceValue.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} icon={FileText} />
        <SummaryCard title="New Customers" value={`+${newCustomers}`} icon={UserPlus} />
        <SummaryCard title="Overdue Invoices" value={overdueInvoices.toString()} icon={FileWarning} />
      </div>
      
      <div className="grid gap-4 md:grid-cols-2">
        <RevenueChart />
        <SalesByCustomerChart />
      </div>
      <div className="grid gap-4">
        <InvoiceStatusPieChart />
      </div>
    </div>
  );
}
