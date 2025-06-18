
import React from 'react';

const PurchaseAnalyticsPage: React.FC = () => {
    return (
        <div className="flex flex-col gap-8">
            <header>
                <h1 className="text-3xl font-bold tracking-tight">Purchase Analytics</h1>
                <p className="text-muted-foreground">Visual insights into your purchasing data.</p>
            </header>
            <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-lg bg-card">
                <p className="text-muted-foreground">Purchase Analytics Coming Soon</p>
            </div>
        </div>
    );
};

export default PurchaseAnalyticsPage;
