
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import { SuppliersTable } from "@/components/suppliers/SuppliersTable";
import { Input } from "@/components/ui/input";
import { suppliers } from "@/data/suppliers";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';

export default function SuppliersPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">{suppliers.length}</Badge>
        </div>
        <div className="flex items-center space-x-2">
           <Button variant="outline" size="sm" onClick={() => toast.info("Importing suppliers...")}>
            <Upload className="mr-2 h-4 w-4" /> Import Suppliers
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => navigate('/suppliers/new')}>
            <Plus className="mr-2 h-4 w-4" /> Add New Supplier
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search suppliers by name, email, or company..." className="max-w-sm" />
      </div>

      <SuppliersTable />
    </div>
  );
}
