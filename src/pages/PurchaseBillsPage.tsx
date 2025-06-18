
import { Button } from "@/components/ui/button";
import { purchaseBills } from "@/data/purchase-bills";
import { PurchaseBillsTable } from "@/components/purchase-bills/PurchaseBillsTable";
import { SummaryCard } from "@/components/purchase-bills/SummaryCard";
import { Plus, Download, FileText, AlertCircle } from "lucide-react";
import React from 'react';

const PurchaseBillsPage: React.FC = () => {
    const totalBills = purchaseBills.length;
    const totalAmount = purchaseBills.reduce((sum, bill) => sum + bill.amount, 0);
    const outstandingAmount = purchaseBills.filter(b => b.status === 'unpaid' || b.status === 'partially-paid' || b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);
    const overdueAmount = purchaseBills.filter(b => b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);

    return (
        <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Purchase Bills</h1>
                    <p className="text-muted-foreground">Manage your company's purchase bills.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2" />
                        Export Data
                    </Button>
                    <Button>
                        <Plus className="mr-2" />
                        Create New Bill
                    </Button>
                </div>
            </header>

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
