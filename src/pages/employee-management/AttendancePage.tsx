
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Calendar } from "lucide-react";
import { toast } from "sonner";

export default function AttendancePage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 justify-end">
        <Button variant="outline" size="sm" onClick={() => toast.info("Downloading attendance report...")}>
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
        <Button variant="ghost" size="sm" onClick={() => toast.info("Opening calendar view...")}>
          <Calendar className="mr-2 h-4 w-4" /> Calendar View
        </Button>
      </div>
      
      <div className="text-center py-8 text-muted-foreground">
        Employee attendance tracking will be displayed here
      </div>
    </div>
  );
}
