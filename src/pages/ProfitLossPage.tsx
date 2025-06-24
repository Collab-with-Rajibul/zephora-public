import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, TrendingDown, Download, Calendar, Bell } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const ProfitLossPage: React.FC = () => {
  const profitLossData = {
    revenue: {
      salesRevenue: 125000,
      serviceRevenue: 45000,
      otherRevenue: 5000,
      total: 175000
    },
    expenses: {
      costOfGoodsSold: 60000,
      operatingExpenses: 35000,
      salariesWages: 25000,
      rent: 8000,
      utilities: 3000,
      depreciation: 5000,
      total: 136000
    },
    netIncome: 39000
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Profit & Loss</h1>
          <p className="text-muted-foreground">View your company's profit and loss statement.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Select defaultValue="current-month">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-month">Last Month</SelectItem>
              <SelectItem value="current-quarter">Current Quarter</SelectItem>
              <SelectItem value="current-year">Current Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => toast.info("Setting custom date...")}>
            <Calendar className="mr-2 h-4 w-4" />
            Custom Date
          </Button>
          <Button variant="outline" onClick={() => toast.info("Exporting statement...")}>
            <Download className="mr-2 h-4 w-4" />
            Export Statement
          </Button>
          <Button onClick={() => toast.info("Refreshing data...")}>
            Refresh Data
          </Button>
        </div>
      </div>

      <div className="grid gap-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* ... keep existing code (summary cards and detailed statement) the same ... */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${profitLossData.revenue.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +12%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">${profitLossData.expenses.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-red-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +8%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Net Income</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${profitLossData.netIncome.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +22%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed P&L Statement */}
        <Card>
          <CardHeader>
            <CardTitle>Detailed Statement</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Revenue Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-green-600">Revenue</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Sales Revenue</span>
                    <span className="font-medium">${profitLossData.revenue.salesRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Service Revenue</span>
                    <span className="font-medium">${profitLossData.revenue.serviceRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Other Revenue</span>
                    <span className="font-medium">${profitLossData.revenue.otherRevenue.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                    <span>Total Revenue</span>
                    <span className="text-green-600">${profitLossData.revenue.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Expenses Section */}
              <div>
                <h3 className="text-lg font-semibold mb-4 text-red-600">Expenses</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Cost of Goods Sold</span>
                    <span className="font-medium">${profitLossData.expenses.costOfGoodsSold.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Operating Expenses</span>
                    <span className="font-medium">${profitLossData.expenses.operatingExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Salaries & Wages</span>
                    <span className="font-medium">${profitLossData.expenses.salariesWages.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Rent</span>
                    <span className="font-medium">${profitLossData.expenses.rent.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Utilities</span>
                    <span className="font-medium">${profitLossData.expenses.utilities.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span>Depreciation</span>
                    <span className="font-medium">${profitLossData.expenses.depreciation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center font-bold text-lg border-t pt-2">
                    <span>Total Expenses</span>
                    <span className="text-red-600">${profitLossData.expenses.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              {/* Net Income */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex justify-between items-center text-xl font-bold">
                  <span>Net Income</span>
                  <span className="text-blue-600">${profitLossData.netIncome.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProfitLossPage;
