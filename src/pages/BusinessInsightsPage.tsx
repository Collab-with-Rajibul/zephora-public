import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, TrendingUp, TrendingDown, Target, Users, DollarSign, Package } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

const BusinessInsightsPage: React.FC = () => {
  const customerSegmentData = [
    { segment: 'Enterprise', revenue: 45, customers: 12, color: '#8884d8' },
    { segment: 'SMB', revenue: 30, customers: 45, color: '#82ca9d' },
    { segment: 'Startup', revenue: 15, customers: 78, color: '#ffc658' },
    { segment: 'Individual', revenue: 10, customers: 125, color: '#ff7300' },
  ];

  const productPerformance = [
    { product: 'Consulting', revenue: 85000, margin: 45, growth: 15 },
    { product: 'Software License', revenue: 62000, margin: 78, growth: 8 },
    { product: 'Support Services', revenue: 45000, margin: 35, growth: 22 },
    { product: 'Training', revenue: 28000, margin: 55, growth: -5 },
    { product: 'Hardware', revenue: 35000, margin: 25, growth: 12 },
  ];

  const salesTrendData = [
    { month: 'Jan', newCustomers: 12, churnRate: 2.1, avgDealSize: 8500, conversionRate: 18 },
    { month: 'Feb', newCustomers: 18, churnRate: 1.8, avgDealSize: 9200, conversionRate: 22 },
    { month: 'Mar', newCustomers: 15, churnRate: 2.5, avgDealSize: 7800, conversionRate: 15 },
    { month: 'Apr', newCustomers: 22, churnRate: 1.2, avgDealSize: 10500, conversionRate: 28 },
    { month: 'May', newCustomers: 19, churnRate: 1.9, avgDealSize: 9800, conversionRate: 25 },
    { month: 'Jun', newCustomers: 25, churnRate: 1.5, avgDealSize: 11200, conversionRate: 32 },
  ];

  const insights = [
    {
      title: "Customer Acquisition Cost Optimization",
      type: "Opportunity",
      impact: "High",
      description: "CAC has decreased by 15% while customer lifetime value increased by 22%",
      recommendation: "Invest more in digital marketing channels that are performing well"
    },
    {
      title: "Inventory Optimization",
      type: "Alert",
      impact: "Medium",
      description: "Stock turnover rate is below industry average by 12%",
      recommendation: "Review slow-moving inventory and adjust procurement strategy"
    },
    {
      title: "Seasonal Revenue Pattern",
      type: "Insight",
      impact: "Medium",
      description: "Q2 consistently shows 18% higher revenue than other quarters",
      recommendation: "Plan inventory and staffing to capitalize on Q2 demand"
    },
    {
      title: "Top Customer Concentration Risk",
      type: "Risk",
      impact: "High",
      description: "Top 3 customers represent 45% of total revenue",
      recommendation: "Diversify customer base to reduce dependency risk"
    }
  ];

  const getInsightColor = (type: string) => {
    switch (type) {
      case 'Opportunity': return 'bg-green-100 text-green-800';
      case 'Alert': return 'bg-yellow-100 text-yellow-800';
      case 'Insight': return 'bg-blue-100 text-blue-800';
      case 'Risk': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'High': return 'text-red-600';
      case 'Medium': return 'text-yellow-600';
      case 'Low': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b h-[88px] flex items-center">
        <div className="w-full flex items-center justify-between px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Business Insights</h1>
            <p className="text-muted-foreground">AI-powered analysis and strategic recommendations</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="current-quarter">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-quarter">Current Quarter</SelectItem>
                <SelectItem value="last-quarter">Last Quarter</SelectItem>
                <SelectItem value="current-year">Current Year</SelectItem>
                <SelectItem value="custom">Custom Period</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Period
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export Insights
            </Button>
          </div>
        </div>
      </header>

      <div className="px-6 space-y-6">
        {/* Key Insights Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Customer Lifetime Value</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">$24,500</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +22%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Customer Acquisition Cost</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">$3,200</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  -15%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Churn Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-600">1.8%</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  -0.5%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Market Share</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">12.5%</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +2.1%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Customer Segment Analysis */}
          <Card>
            <CardHeader>
              <CardTitle>Customer Segment Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={customerSegmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ segment, revenue }) => `${segment}: ${revenue}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="revenue"
                  >
                    {customerSegmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 space-y-2">
                {customerSegmentData.map((segment, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{segment.segment}</span>
                    <span>{segment.customers} customers</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Product Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Product Performance Matrix</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={productPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="product" angle={-45} textAnchor="end" height={60} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="revenue" fill="#8884d8" name="Revenue ($K)" />
                  <Bar dataKey="margin" fill="#82ca9d" name="Margin %" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Sales Trends */}
        <Card>
          <CardHeader>
            <CardTitle>Sales Performance Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesTrendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="newCustomers" stroke="#8884d8" strokeWidth={2} name="New Customers" />
                <Line type="monotone" dataKey="conversionRate" stroke="#82ca9d" strokeWidth={2} name="Conversion Rate %" />
                <Line type="monotone" dataKey="churnRate" stroke="#ff7300" strokeWidth={2} name="Churn Rate %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* AI-Generated Insights */}
        <Card>
          <CardHeader>
            <CardTitle>AI-Generated Business Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {insights.map((insight, index) => (
                <div key={index} className="border rounded-lg p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Badge className={getInsightColor(insight.type)}>
                        {insight.type}
                      </Badge>
                      <span className="font-semibold">{insight.title}</span>
                    </div>
                    <span className={`text-sm font-medium ${getImpactColor(insight.impact)}`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                  <p className="text-muted-foreground">{insight.description}</p>
                  <div className="bg-blue-50 p-3 rounded-md">
                    <p className="text-sm"><strong>Recommendation:</strong> {insight.recommendation}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Strategic Recommendations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Growth Opportunities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-medium">Expand Enterprise Segment</p>
                    <p className="text-sm text-muted-foreground">Higher margins and customer lifetime value</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                  <Target className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-medium">Geographic Expansion</p>
                    <p className="text-sm text-muted-foreground">Untapped markets in emerging regions</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
                  <Package className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Product Bundling</p>
                    <p className="text-sm text-muted-foreground">Increase average deal size by 25%</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Risk Mitigation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                  <TrendingDown className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="font-medium">Customer Concentration Risk</p>
                    <p className="text-sm text-muted-foreground">Diversify customer base to reduce dependency</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <DollarSign className="h-5 w-5 text-yellow-600" />
                  <div>
                    <p className="font-medium">Cash Flow Management</p>
                    <p className="text-sm text-muted-foreground">Improve payment terms and collection processes</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-orange-50 rounded-lg">
                  <Users className="h-5 w-5 text-orange-600" />
                  <div>
                    <p className="font-medium">Talent Retention</p>
                    <p className="text-sm text-muted-foreground">Key employee turnover in critical positions</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BusinessInsightsPage;
