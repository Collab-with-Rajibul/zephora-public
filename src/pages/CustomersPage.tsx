
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { Input } from "@/components/ui/input";
import { customers } from "@/data/customers";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <h2 className="text-3xl font-bold tracking-tight">Customers</h2>
          <Badge variant="secondary">{customers.length}</Badge>
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="outline" size="sm" onClick={() => toast.info("Importing customers...")}>
            <Upload className="mr-2 h-4 w-4" /> Import Customers
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => toast.success("Navigating to create new customer page...")}>
            <Plus className="mr-2 h-4 w-4" /> Add New Customer
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search customers by name, email, or company..." className="max-w-sm" />
      </div>

      <CustomersTable />
    </div>
  );
}
