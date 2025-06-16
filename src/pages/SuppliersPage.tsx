
import { Button } from "@/components/ui/button";
import { suppliers } from "@/data/suppliers";
import { SuppliersTable } from "@/components/suppliers/SuppliersTable";
import { Plus, Download } from "lucide-react";
import React from 'react';

const SuppliersPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center justify-end space-y-2 md:space-y-0">
                <div className="flex items-center gap-2">
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" />
                        Export Data
                    </Button>
                    <Button>
                        <Plus className="mr-2 h-4 w-4" />
                        Add New Supplier
                    </Button>
                </div>
            </div>
            
            <section>
                <SuppliersTable suppliers={suppliers} />
            </section>
        </div>
    );
};

export default SuppliersPage;
