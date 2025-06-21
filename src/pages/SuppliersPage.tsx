
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
            <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Suppliers</h1>
                    <p className="text-muted-foreground">Manage your company's suppliers.</p>
                </div>
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
            </header>
            
            <section>
                <SuppliersTable suppliers={suppliers} />
            </section>
        </div>
    );
};

export default SuppliersPage;
