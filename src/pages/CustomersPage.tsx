
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import { CustomersTable } from "@/components/customers/CustomersTable";
import { Input } from "@/components/ui/input";
import { customers } from "@/data/customers";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { toast } from "sonner";

export default function CustomersPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
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
              <BreadcrumbPage>Customers</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
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
