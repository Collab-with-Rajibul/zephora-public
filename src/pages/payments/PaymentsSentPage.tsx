
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from '@/components/ui/badge';
import { toast } from "sonner";

export default function PaymentsSentPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center gap-2">
          <Badge variant="secondary">8</Badge>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
          <Button size="sm" onClick={() => toast.success("This would open the payment recording page.")}>
            <Plus className="mr-2 h-4 w-4" /> Record Payment
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search payments by reference, supplier, or amount..." className="max-w-sm" />
      </div>

      <div className="text-center py-8 text-muted-foreground">
        Payments sent table will be displayed here
      </div>
    </div>
  );
}
