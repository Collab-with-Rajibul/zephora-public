
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Printer } from "lucide-react";
import { toast } from "sonner";

export default function PurchaseReportsPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 justify-end">
         <Button variant="outline" size="sm" onClick={() => toast.info("Downloading PDF report...")}>
          <Download className="mr-2 h-4 w-4" /> Download PDF
        </Button>
        <Button variant="ghost" size="sm" onClick={() => toast.info("Printing report...")}>
          <Printer className="mr-2 h-4 w-4" /> Print Report
        </Button>
      </div>
      
      <div className="text-center py-8 text-muted-foreground">
        Purchase reports will be displayed here
      </div>
    </div>
  );
}
