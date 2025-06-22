
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import { EmployeesTable } from "@/components/employees/EmployeesTable";
import { Input } from "@/components/ui/input";
import { employees } from "@/data/employees";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

export default function EmployeesPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{employees.length}</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Importing employees...")}>
            <Upload className="mr-2 h-4 w-4" /> Import Employees
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => toast.success("This would open the employee creation page.")}>
            <Plus className="mr-2 h-4 w-4" /> Add New Employee
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search employees by name, email, or position..." className="max-w-sm" />
      </div>

      <EmployeesTable />
    </div>
  );
}
