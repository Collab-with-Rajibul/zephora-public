
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices } from "@/data/sales-invoices";
import { InvoiceStatus } from "@/lib/types";
import { useMemo } from "react";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const COLORS: Record<InvoiceStatus, string> = {
  paid: '#10B981',
  sent: '#3B82F6',
  overdue: '#EF4444',
  draft: '#6B7280',
  'partially-paid': '#F59E0B',
  cancelled: '#9CA3AF',
};

export function InvoiceStatusPieChart() {
  const data = useMemo(() => {
    const statusCounts: { [key in InvoiceStatus]?: number } = {};
    invoices.forEach((invoice) => {
        if (!statusCounts[invoice.status]) {
            statusCounts[invoice.status] = 0;
        }
        statusCounts[invoice.status]!++;
    });

    return Object.entries(statusCounts).map(([name, value]) => ({
        name: (name as string).replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase()),
        value,
    }));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Invoice Status Distribution</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              nameKey="name"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[entry.name.toLowerCase().replace(' ', '-') as InvoiceStatus]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
