
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { invoices } from "@/data/sales-invoices";
import { ChartData } from "@/lib/types";
import { useMemo } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
} from "recharts";

export function RevenueChart() {
  const data: ChartData[] = useMemo(() => {
    const monthlyRevenue: { [key: string]: number } = {};
    invoices.forEach((invoice) => {
      if (invoice.status === 'paid' || invoice.status === 'partially-paid') {
        const date = new Date(invoice.date);
        const month = date.toLocaleString('default', { month: 'short', year: '2-digit' });
        if (!monthlyRevenue[month]) {
          monthlyRevenue[month] = 0;
        }
        monthlyRevenue[month] += invoice.amount;
      }
    });

    const sortedMonths = Object.keys(monthlyRevenue).sort((a, b) => {
        const [monthA, yearA] = a.split(' ');
        const [monthB, yearB] = b.split(' ');
        const dateA = new Date(`01 ${monthA} 20${yearA}`);
        const dateB = new Date(`01 ${monthB} 20${yearB}`);
        return dateA.getTime() - dateB.getTime();
    });

    return sortedMonths.map(month => ({
      name: month,
      revenue: monthlyRevenue[month],
    }));
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Over Time</CardTitle>
      </CardHeader>
      <CardContent className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${(value as number / 1000)}k`} />
            <Tooltip formatter={(value) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value as number)} />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#8884d8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
