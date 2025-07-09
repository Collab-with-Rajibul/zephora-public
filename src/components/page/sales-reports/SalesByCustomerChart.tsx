
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices } from "@/data/sales-invoices";
import { ChartData } from "@/lib/types";
import { useMemo } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export function SalesByCustomerChart() {
  const data: ChartData[] = useMemo(() => {
    const customerSales: { [key: string]: number } = {};
    invoices.forEach((invoice) => {
      if (invoice.status === 'paid' || invoice.status === 'partially-paid') {
        const customerName = invoice.customer.name;
        if (!customerSales[customerName]) {
          customerSales[customerName] = 0;
        }
        customerSales[customerName] += invoice.amount;
      }
    });

    return Object.entries(customerSales)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 10)
        .map(([name, value]) => ({
            name,
            value
        }));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top 10 Customers by Revenue</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" tickFormatter={(value) => `$${(value as number / 1000)}k`} />
            <YAxis dataKey="name" type="category" width={120} />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)} />
            <Legend />
            <Bar dataKey="value" name="Total Revenue" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
