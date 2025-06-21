
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, TrendingUp, TrendingDown, Package, AlertTriangle } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const StockReportsPage: React.FC = () => {
  const stockMovementData = [
    { month: 'Jan', inbound: 250, outbound: 180, netChange: 70 },
    { month: 'Feb', inbound: 320, outbound: 240, netChange: 80 },
    { month: 'Mar', inbound: 180, outbound: 320, netChange: -140 },
    { month: 'Apr', inbound: 450, outbound: 280, netChange: 170 },
    { month: 'May', inbound: 380, outbound: 350, netChange: 30 },
    { month: 'Jun', inbound: 290, outbound: 220, netChange: 70 },
  ];

  const categoryDistribution = [
    { name: 'Electronics', value: 45, color: '#8884d8' },
    { name: 'Furniture', value: 25, color: '#82ca9d' },
    { name: 'Supplies', value: 20, color: '#ffc658' },
    { name: 'Accessories', value: 10, color: '#ff7300' },
  ];

  const topMovingItems = [
    { item: 'Laptop Computer', moved: 45, trend: 'up' },
    { item: 'Office Chair', moved: 32, trend: 'down' },
    { item: 'Wireless Mouse', moved: 28, trend: 'up' },
    { item: 'Monitor Stand', moved: 22, trend: 'up' },
    { item: 'Printer Paper', moved: 18, trend: 'down' },
  ];

  const stockAlerts = [
    { item: 'Office Chair', type: 'Low Stock', level: 5, min: 8 },
    { item: 'Monitor Stand', type: 'Low Stock', level: 12, min: 15 },
    { item: 'Keyboard', type: 'Out of Stock', level: 0, min: 10 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stock Reports</h1>
          <p className="text-muted-foreground">Comprehensive inventory analytics and insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="current-month">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-month">Current Month</SelectItem>
              <SelectItem value="last-3-months">Last 3 Months</SelectItem>
              <SelectItem value="last-6-months">Last 6 Months</SelectItem>
              <SelectItem value="current-year">Current Year</SelectItem>
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

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Stock Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">$134,950</span>
            </div>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Stock Turnover</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">4.2x</span>
            <p className="text-sm text-muted-foreground flex items-center mt-1">
              <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              +0.3x from last period
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Items Below Min</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <p className="text-sm text-muted-foreground">Require restocking</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Dead Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-red-600">$2,450</span>
            <p className="text-sm text-muted-foreground">No movement in 90 days</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Stock Movement Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Movement Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={stockMovementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="inbound" fill="#82ca9d" name="Inbound" />
                <Bar dataKey="outbound" fill="#8884d8" name="Outbound" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Stock by Category</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Moving Items */}
        <Card>
          <CardHeader>
            <CardTitle>Top Moving Items</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topMovingItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{item.item}</p>
                    <p className="text-sm text-muted-foreground">{item.moved} units moved</p>
                  </div>
                  <div className="flex items-center">
                    {item.trend === 'up' ? (
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    ) : (
                      <TrendingDown className="h-4 w-4 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Stock Alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {stockAlerts.map((alert, index) => (
                <div key={index} className={`flex items-center justify-between p-3 border rounded-lg ${
                  alert.type === 'Out of Stock' ? 'border-red-200 bg-red-50' : 'border-yellow-200 bg-yellow-50'
                }`}>
                  <div className="flex items-center space-x-3">
                    <AlertTriangle className={`h-4 w-4 ${
                      alert.type === 'Out of Stock' ? 'text-red-500' : 'text-yellow-500'
                    }`} />
                    <div>
                      <p className="font-medium">{alert.item}</p>
                      <p className="text-sm text-muted-foreground">
                        Current: {alert.level} | Min: {alert.min}
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Reorder
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StockReportsPage;
