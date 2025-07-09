
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { toast } from "sonner";
import { RevenueChart } from '@/components/page/sales-reports/RevenueChart';
import { SalesByCustomerChart } from '@/components/page/sales-reports/SalesByCustomerChart';
import { InvoiceStatusPieChart } from '@/components/page/sales-reports/InvoiceStatusPieChart';
import { SummaryCard } from '@/components/page/sales-invoices/SummaryCard';
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
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Sales Reports</h1>
          <p className="text-muted-foreground">Analyze your sales performance and trends.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Downloading PDF report...")}>
            <Download className="mr-2 h-4 w-4" /> Download PDF
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Printing report...")}>
            <Printer className="mr-2 h-4 w-4" /> Print Report
          </Button>
        </div>
      </header>

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
