
import React from 'react';
import { Button } from "@/components/ui/button";
import { Plus, Download } from "lucide-react";
import { toast } from "sonner";

export default function AdvancesPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 justify-end">
        <Button variant="outline" size="sm" onClick={() => toast.info("Downloading advances report...")}>
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
        <Button size="sm" onClick={() => toast.info("Creating new advance...")}>
          <Plus className="mr-2 h-4 w-4" /> Record Advance
        </Button>
      </div>
      
      <div className="text-center py-8 text-muted-foreground">
        Employee advances tracking will be displayed here
      </div>
    </div>
  );
}
