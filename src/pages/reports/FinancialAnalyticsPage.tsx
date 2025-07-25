
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, TrendingUp, TrendingDown, DollarSign, Target } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';

const FinancialAnalyticsPage: React.FC = () => {
  const revenueData = [
    { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000, target: 15000 },
    { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000, target: 15000 },
    { month: 'Mar', revenue: 48000, expenses: 38000, profit: 10000, target: 15000 },
    { month: 'Apr', revenue: 61000, expenses: 41000, profit: 20000, target: 18000 },
    { month: 'May', revenue: 55000, expenses: 39000, profit: 16000, target: 18000 },
    { month: 'Jun', revenue: 67000, expenses: 42000, profit: 25000, target: 20000 },
  ];

  const cashFlowData = [
    { month: 'Jan', operating: 43000, investing: -7000, financing: 3000, net: 39000 },
    { month: 'Feb', operating: 48000, investing: -12000, financing: 8000, net: 44000 },
    { month: 'Mar', operating: 41000, investing: -5000, financing: -2000, net: 34000 },
    { month: 'Apr', operating: 55000, investing: -15000, financing: 12000, net: 52000 },
    { month: 'May', operating: 47000, investing: -8000, financing: 5000, net: 44000 },
    { month: 'Jun', operating: 58000, investing: -10000, financing: 7000, net: 55000 },
  ];

  const kpiData = {
    grossMargin: 68.5,
    netMargin: 15.2,
    roa: 12.8,
    roe: 18.3,
    currentRatio: 2.4,
    quickRatio: 1.8,
    debtToEquity: 0.65,
    workingCapital: 125000
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Financial Analytics</h1>
          <p className="text-muted-foreground">Comprehensive financial performance analysis</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="current-year">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-year">Current Year</SelectItem>
              <SelectItem value="last-year">Last Year</SelectItem>
              <SelectItem value="last-2-years">Last 2 Years</SelectItem>
              <SelectItem value="custom">Custom Period</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Custom Period
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Gross Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-600">{kpiData.grossMargin}%</span>
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +2.1%
              </Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Margin</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-blue-600">{kpiData.netMargin}%</span>
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +0.8%
              </Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">ROA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-purple-600">{kpiData.roa}%</span>
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +1.2%
              </Badge>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Current Ratio</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-orange-600">{kpiData.currentRatio}</span>
              <Badge variant="secondary" className="text-green-600">
                <TrendingUp className="mr-1 h-3 w-3" />
                +0.1
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue vs Profit Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Revenue vs Profit vs Target</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
                <Bar dataKey="profit" fill="#ffc658" name="Profit" />
                <Line dataKey="target" stroke="#ff7300" name="Target" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Cash Flow Analysis */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={cashFlowData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Area dataKey="operating" stackId="1" stroke="#8884d8" fill="#8884d8" name="Operating" />
                <Area dataKey="investing" stackId="1" stroke="#82ca9d" fill="#82ca9d" name="Investing" />
                <Area dataKey="financing" stackId="1" stroke="#ffc658" fill="#ffc658" name="Financing" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Financial Ratios */}
      <Card>
        <CardHeader>
          <CardTitle>Key Financial Ratios</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-blue-600">Profitability Ratios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Gross Margin</span>
                  <span className="font-medium">{kpiData.grossMargin}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Net Margin</span>
                  <span className="font-medium">{kpiData.netMargin}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">ROA</span>
                  <span className="font-medium">{kpiData.roa}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">ROE</span>
                  <span className="font-medium">{kpiData.roe}%</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Liquidity Ratios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Current Ratio</span>
                  <span className="font-medium">{kpiData.currentRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Quick Ratio</span>
                  <span className="font-medium">{kpiData.quickRatio}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Working Capital</span>
                  <span className="font-medium">${kpiData.workingCapital.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-purple-600">Leverage Ratios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Debt-to-Equity</span>
                  <span className="font-medium">{kpiData.debtToEquity}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Interest Coverage</span>
                  <span className="font-medium">8.5x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Debt Ratio</span>
                  <span className="font-medium">0.39</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-orange-600">Efficiency Ratios</h4>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Asset Turnover</span>
                  <span className="font-medium">1.4x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Inventory Turnover</span>
                  <span className="font-medium">6.2x</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Receivables Turnover</span>
                  <span className="font-medium">9.8x</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Trend Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>6-Month Trend Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Line type="monotone" dataKey="revenue" stroke="#8884d8" strokeWidth={2} name="Revenue" />
              <Line type="monotone" dataKey="profit" stroke="#82ca9d" strokeWidth={2} name="Profit" />
              <Line type="monotone" dataKey="target" stroke="#ff7300" strokeWidth={2} strokeDasharray="5 5" name="Target" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default FinancialAnalyticsPage;
