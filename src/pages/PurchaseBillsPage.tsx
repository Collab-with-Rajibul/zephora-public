
import { Button } from "@/components/ui/button";
import { purchaseBills } from "@/data/purchase-bills";
import { PurchaseBillsTable } from "@/components/purchase-bills/PurchaseBillsTable";
import { SummaryCard } from "@/components/purchase-bills/SummaryCard";
import { Plus, Download, FileText, AlertCircle, Search, Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import React from 'react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

export default function PurchaseBillsPage() {
    const navigate = useNavigate();
    
    const totalBills = purchaseBills.length;
    const totalAmount = purchaseBills.reduce((sum, bill) => sum + bill.amount, 0);
    const outstandingAmount = purchaseBills.filter(b => b.status === 'unpaid' || b.status === 'partially-paid' || b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);
    const overdueAmount = purchaseBills.filter(b => b.status === 'overdue').reduce((sum, bill) => sum + bill.amount, 0);

    return (
        <div className="flex flex-col gap-8">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Purchase Bills</h1>
                    <p className="text-muted-foreground">Manage and track your purchase bills and expenses.</p>
                </div>
                <div className="flex items-center space-x-2">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input placeholder="Search..." className="pl-10 w-64" />
                    </div>
                    <Button variant="ghost" size="sm">
                        <Bell className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm" onClick={() => toast.info("Importing bills...")}>
                        Import Bills
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
                        <Download className="mr-2 h-4 w-4" /> Export Data
                    </Button>
                    <Button size="sm" onClick={() => navigate('/purchase-bills/new')}>
                        <Plus className="mr-2 h-4 w-4" /> Create New Bill
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
}
