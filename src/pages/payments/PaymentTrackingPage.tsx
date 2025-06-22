
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export default function PaymentTrackingPage() {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-2 md:space-y-0">
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" /> Filter
          </Button>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={() => toast.info("Exporting data...")}>
            <Download className="mr-2 h-4 w-4" /> Export Data
          </Button>
        </div>
      </div>
      
      <div className="py-4">
        <Input placeholder="Search payment history..." className="max-w-sm" />
      </div>

      <div className="text-center py-8 text-muted-foreground">
        Payment tracking dashboard will be displayed here
      </div>
    </div>
  );
}
