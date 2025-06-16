import { Button } from "@/components/ui/button";
import { suppliers } from "@/data/suppliers";
import { SuppliersTable } from "@/components/suppliers/SuppliersTable";
import { Plus, Download } from "lucide-react";
import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const SuppliersPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="#">Purchase Management</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Suppliers</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
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
