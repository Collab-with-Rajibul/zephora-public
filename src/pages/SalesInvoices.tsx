
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";
import { InvoicesTable } from "@/components/sales-invoices/InvoicesTable";
import { SummaryCard } from "@/components/sales-invoices/SummaryCard";
import { DollarSign, FileText, XCircle, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { invoices } from "@/data/sales-invoices";
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { toast } from 'sonner';

export default function SalesInvoicesPage() {
  const totalAmount = invoices.reduce((sum, inv) => sum + inv.amount, 0);
  const outstandingAmount = invoices.filter(inv => ['sent', 'overdue', 'partially-paid'].includes(inv.status)).reduce((sum, inv) => sum + inv.amount, 0);
  const overdueAmount = invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Sales Management</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Sales Invoices</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Sales Invoices</h2>
          <Badge variant="secondary">{invoices.length}</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Importing invoices...")}>
            Import Invoices
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => toast.success("This would open the invoice creation page.")}>
            <Plus className="mr-2 h-4 w-4" /> Create New Invoice
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <SummaryCard title="Total Invoices" value={invoices.length.toString()} icon={FileText} />
        <SummaryCard title="Total Amount" value={totalAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} icon={DollarSign} />
        <SummaryCard title="Outstanding Amount" value={outstandingAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} icon={Clock} />
        <SummaryCard title="Overdue Amount" value={overdueAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })} icon={XCircle} />
      </div>
      
      <div className="py-4">
        <Input placeholder="Search invoices by #, customer, or description..." className="max-w-sm" />
      </div>

      <InvoicesTable />
    </div>
  );
}
