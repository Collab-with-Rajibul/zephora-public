
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download, Search } from "lucide-react";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { Input } from "@/components/ui/input";
import { customers } from "@/data/customers";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function CustomersPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
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
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{customers.length}</Badge>
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input placeholder="Search customers by name, email, or company..." className="pl-10 max-w-sm" />
        </div>
      </div>

      <CustomersTable />
    </div>
  );
}
