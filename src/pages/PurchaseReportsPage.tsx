
import React from 'react';

const PurchaseReportsPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Purchase Reports</h1>
                <p className="text-muted-foreground">Detailed reports on your purchase activities.</p>
            </header>
            <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg bg-card">
                <p className="text-muted-foreground">Purchase Reports Coming Soon</p>
            </div>
        </div>
    );
};

export default PurchaseReportsPage;
