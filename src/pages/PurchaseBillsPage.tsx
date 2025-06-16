import { Button } from "@/components/ui/button";
import { purchaseBills } from "@/data/purchase-bills";
import { PurchaseBillsTable } from "@/components/purchase-bills/PurchaseBillsTable";
import { SummaryCard } from "@/components/purchase-bills/SummaryCard";
import { Plus, Download, FileText, AlertCircle } from "lucide-react";
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const PurchaseBillsPage: React.FC = () => {
    const totalBills = purchaseBills.length;
    const totalAmount = purchaseBills.reduce((sum, bill) => sum + bill.amount, 0);
    const outstandingAmount = purchaseBills.filter(b => b.status === 'unpaid' || b.status === 'partially-paid' || b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);
    const overdueAmount = purchaseBills.filter(b => b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);

    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Purchase Management</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Purchase Bills</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Create New Bill
                    </Button>
                </div>
            </div>

            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                <SummaryCard
                    title="Total Bills"
                    value={totalBills}
                    icon={FileText}
                />
                <SummaryCard
                    title="Total Amount"
                    value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(totalAmount)}
                    icon={FileText}
                />
                <SummaryCard
                    title="Outstanding Amount"
                    value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(outstandingAmount)}
                    icon={AlertCircle}
                    color="text-yellow-500"
                />
                <SummaryCard
                    title="Overdue Amount"
                    value={new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(overdueAmount)}
                    icon={AlertCircle}
                    color="text-red-500"
                />
            </section>
            
            <section>
                <PurchaseBillsTable bills={purchaseBills} />
            </section>
        </div>
    );
};

export default PurchaseBillsPage;
