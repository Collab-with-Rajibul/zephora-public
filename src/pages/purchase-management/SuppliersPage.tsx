
import { Button } from "@/components/ui/button";
import { suppliers } from "@/data/suppliers";
import { SuppliersTable } from "@/components/suppliers/SuppliersTable";
import { Plus, Download } from "lucide-react";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SuppliersPage: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
                <Button variant="outline">
                    <Download className="mr-2" />
                    Export Data
                </Button>
                <Button onClick={() => navigate('/suppliers/new')}>
                    <Plus className="mr-2" />
                    Add New Supplier
                </Button>
            </div>
            
            <section>
                <SuppliersTable suppliers={suppliers} />
            </section>
        </div>
    );
};

export default SuppliersPage;
