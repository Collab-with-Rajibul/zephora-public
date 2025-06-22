
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, TrendingUp, TrendingDown, DollarSign } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ProfitLossPage: React.FC = () => {
  const currentPeriod = {
    revenue: 250000,
    costOfSales: 150000,
    grossProfit: 100000,
    operatingExpenses: 75000,
    netIncome: 25000
  };

  const previousPeriod = {
    revenue: 220000,
    costOfSales: 140000,
    grossProfit: 80000,
    operatingExpenses: 70000,
    netIncome: 10000
  };

  const calculateChange = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      isPositive: change >= 0
    };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Select defaultValue="current-month">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="current-quarter">Current Quarter</SelectItem>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="custom">Custom Period</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Report
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${currentPeriod.revenue.toLocaleString()}</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+{calculateChange(currentPeriod.revenue, previousPeriod.revenue).value}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gross Profit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${currentPeriod.grossProfit.toLocaleString()}</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+{calculateChange(currentPeriod.grossProfit, previousPeriod.grossProfit).value}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Operating Expenses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">${currentPeriod.operatingExpenses.toLocaleString()}</span>
              <div className="flex items-center text-red-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+{calculateChange(currentPeriod.operatingExpenses, previousPeriod.operatingExpenses).value}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Income</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">${currentPeriod.netIncome.toLocaleString()}</span>
              <div className="flex items-center text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span className="text-sm">+{calculateChange(currentPeriod.netIncome, previousPeriod.netIncome).value}%</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed P&L Statement */}
      <Card>
        <CardHeader>
          <CardTitle>Profit & Loss Statement</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-3 gap-4 font-semibold border-b pb-2">
              <div>Item</div>
              <div className="text-right">Current Period</div>
              <div className="text-right">Previous Period</div>
            </div>
            
            <div className="space-y-2">
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium">Revenue</div>
                <div className="text-right">${currentPeriod.revenue.toLocaleString()}</div>
                <div className="text-right">${previousPeriod.revenue.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="pl-4">Cost of Sales</div>
                <div className="text-right">-${currentPeriod.costOfSales.toLocaleString()}</div>
                <div className="text-right">-${previousPeriod.costOfSales.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 font-medium border-t pt-2">
                <div>Gross Profit</div>
                <div className="text-right">${currentPeriod.grossProfit.toLocaleString()}</div>
                <div className="text-right">${previousPeriod.grossProfit.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4">
                <div className="pl-4">Operating Expenses</div>
                <div className="text-right">-${currentPeriod.operatingExpenses.toLocaleString()}</div>
                <div className="text-right">-${previousPeriod.operatingExpenses.toLocaleString()}</div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 font-bold text-lg border-t pt-2">
                <div>Net Income</div>
                <div className="text-right text-green-600">${currentPeriod.netIncome.toLocaleString()}</div>
                <div className="text-right">${previousPeriod.netIncome.toLocaleString()}</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfitLossPage;
