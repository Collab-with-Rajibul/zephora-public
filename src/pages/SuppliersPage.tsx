
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { suppliers } from "@/data/suppliers";
import { SuppliersTable } from "@/components/page/suppliers/SuppliersTable";
import { Plus, Download, Search } from "lucide-react";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuppliersPage: React.FC = () => {
    const navigate = useNavigate();

    const totalSuppliers = suppliers.length;
    const totalSpent = suppliers.reduce((sum, supplier) => sum + supplier.total_spent, 0);
    const activeSuppliers = suppliers.filter(s => s.last_order_date).length;
    const averageSpent = totalSpent / totalSuppliers;

    return (
        <div className="flex flex-col gap-8">
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
                    <p className="text-muted-foreground">Manage your company's suppliers.</p>
                </div>
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                    </Button>
                    <Button onClick={() => navigate('/suppliers/new')}>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Supplier
                    </Button>
                </div>
            </header>

            {/* Summary Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Suppliers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalSuppliers}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Active Suppliers</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{activeSuppliers}</div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {totalSpent.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Average per Supplier</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            {averageSpent.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Search Box */}
            <div className="flex items-center justify-between">
                <div className="relative w-full max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input placeholder="Search suppliers by name, email, or company..." className="pl-10 w-full" />
                </div>
            </div>
            
            {/* Suppliers Table in Card */}
            <Card>
                <CardHeader>
                    <CardTitle>Suppliers</CardTitle>
                </CardHeader>
                <CardContent>
                    <SuppliersTable suppliers={suppliers} />
                </CardContent>
            </Card>
        </div>
    );
};

export default SuppliersPage;
