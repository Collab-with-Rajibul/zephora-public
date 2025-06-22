
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Upload, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

export default function PurchaseBillsPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">12</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Importing bills...")}>
            <Upload className="mr-2 h-4 w-4" /> Import Bills
          </Button>
          <Button variant="ghost" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => toast.success("This would open the bill creation page.")}>
            <Plus className="mr-2 h-4 w-4" /> Add New Bill
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search bills by #, supplier, or description..." className="max-w-sm" />
      </div>

      <div className="text-center py-8 text-muted-foreground">
        Purchase bills table will be displayed here
      </div>
    </div>
  );
}
