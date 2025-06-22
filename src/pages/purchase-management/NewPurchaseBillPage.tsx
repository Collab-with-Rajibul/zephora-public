
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router-dom';

export default function NewPurchaseBillPage() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => navigate('/purchase-bills')}>
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Purchase Bills
        </Button>
      </div>
      
      <div className="text-center py-8 text-muted-foreground">
        New purchase bill form will be displayed here
      </div>
    </div>
  );
}
