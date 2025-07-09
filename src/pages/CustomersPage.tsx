
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download, Search } from "lucide-react";
import { CustomersTable } from "@/components/page/customers/CustomersTable";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { customers } from "@/data/customers";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function CustomersPage() {
  const navigate = useNavigate();

  const totalCustomers = customers.length;
  const activeCustomers = customers.filter(c => c.status === 'active').length;
  const newCustomers = customers.filter(c => c.status === 'new').length;
  const totalSpent = customers.reduce((sum, customer) => sum + customer.total_spent, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Customers</h1>
          <p className="text-muted-foreground">Manage your customer relationships and information.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Importing customers...")}>
            <Upload className="mr-2 h-4 w-4" /> Import Customers
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => navigate('/customers/new')}>
            <Plus className="mr-2 h-4 w-4" /> Add New Customer
          </Button>
        </div>
      </header>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newCustomers}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {totalSpent.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search customers by name, email, or company..." className="pl-10 w-full" />
        </div>
      </div>

      <CustomersTable />
    </div>
  );
}
