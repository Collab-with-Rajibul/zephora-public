
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, TrendingUp, TrendingDown, GitCompareArrows } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const ComparativeAnalysisPage: React.FC = () => {
  const periodComparison = [
    { metric: 'Revenue', thisYear: 328000, lastYear: 285000, growth: 15.1 },
    { metric: 'Expenses', thisYear: 242000, lastYear: 218000, growth: 11.0 },
    { metric: 'Net Profit', thisYear: 86000, lastYear: 67000, growth: 28.4 },
    { metric: 'Customers', thisYear: 156, lastYear: 142, growth: 9.9 },
    { metric: 'Avg Deal Size', thisYear: 8500, lastYear: 7800, growth: 9.0 },
  ];

  const monthlyComparison = [
    { month: 'Jan', thisYear: 45000, lastYear: 38000, industry: 42000 },
    { month: 'Feb', thisYear: 52000, lastYear: 41000, industry: 45000 },
    { month: 'Mar', thisYear: 48000, lastYear: 43000, industry: 46000 },
    { month: 'Apr', thisYear: 61000, lastYear: 47000, industry: 52000 },
    { month: 'May', thisYear: 55000, lastYear: 49000, industry: 51000 },
    { month: 'Jun', thisYear: 67000, lastYear: 53000, industry: 58000 },
  ];

  const competitorAnalysis = [
    { company: 'Our Company', marketShare: 12.5, customerSat: 4.2, pricing: 85, innovation: 78 },
    { company: 'Competitor A', marketShare: 18.3, customerSat: 3.8, pricing: 92, innovation: 65 },
    { company: 'Competitor B', marketShare: 15.7, customerSat: 4.0, pricing: 78, innovation: 82 },
    { company: 'Competitor C', marketShare: 22.1, customerSat: 3.6, pricing: 95, innovation: 58 },
  ];

  const kpiComparison = [
    { kpi: 'Gross Margin', ourValue: 68.5, industry: 62.3, variance: 6.2, status: 'above' },
    { kpi: 'Customer Acquisition Cost', ourValue: 3200, industry: 4100, variance: -22.0, status: 'below' },
    { kpi: 'Customer Lifetime Value', ourValue: 24500, industry: 19800, variance: 23.7, status: 'above' },
    { kpi: 'Employee Turnover', ourValue: 12.5, industry: 18.2, variance: -31.3, status: 'below' },
    { kpi: 'Cash Flow Margin', ourValue: 15.8, industry: 12.4, variance: 27.4, status: 'above' },
  ];

  const departmentPerformance = [
    { department: 'Sales', target: 100, actual: 115, lastPeriod: 98 },
    { department: 'Marketing', target: 100, actual: 108, lastPeriod: 102 },
    { department: 'Operations', target: 100, actual: 95, lastPeriod: 89 },
    { department: 'Finance', target: 100, actual: 112, lastPeriod: 105 },
    { department: 'HR', target: 100, actual: 103, lastPeriod: 97 },
  ];

  const getVarianceColor = (variance: number) => {
    return variance > 0 ? 'text-green-600' : 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    return status === 'above' ? <TrendingUp className="h-4 w-4 text-green-500" /> : <TrendingDown className="h-4 w-4 text-red-500" />;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Comparative Analysis</h1>
          <p className="text-muted-foreground">Compare performance across periods, competitors, and benchmarks</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="year-over-year">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="year-over-year">Year over Year</SelectItem>
              <SelectItem value="quarter-over-quarter">Quarter over Quarter</SelectItem>
              <SelectItem value="month-over-month">Month over Month</SelectItem>
              <SelectItem value="custom">Custom Periods</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" />
            Custom Period
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Analysis
          </Button>
        </div>
      </div>

      {/* Period-over-Period Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <GitCompareArrows className="h-5 w-5" />
            <span>Year-over-Year Performance</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {periodComparison.map((item, index) => (
              <div key={index} className="text-center p-4 border rounded-lg">
                <h4 className="font-semibold text-sm text-muted-foreground">{item.metric}</h4>
                <div className="mt-2 space-y-1">
                  <p className="text-lg font-bold">${item.thisYear.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">vs ${item.lastYear.toLocaleString()}</p>
                  <Badge variant="secondary" className={item.growth > 0 ? 'text-green-600' : 'text-red-600'}>
                    {item.growth > 0 ? <TrendingUp className="mr-1 h-3 w-3" /> : <TrendingDown className="mr-1 h-3 w-3" />}
                    {item.growth}%
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Trend Comparison */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Revenue Comparison</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyComparison}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="thisYear" stroke="#8884d8" strokeWidth={2} name="This Year" />
                <Line type="monotone" dataKey="lastYear" stroke="#82ca9d" strokeWidth={2} name="Last Year" />
                <Line type="monotone" dataKey="industry" stroke="#ffc658" strokeWidth={2} strokeDasharray="5 5" name="Industry Avg" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Department Performance */}
        <Card>
          <CardHeader>
            <CardTitle>Department Performance vs Target</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={departmentPerformance}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="department" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="target" fill="#e0e0e0" name="Target" />
                <Bar dataKey="actual" fill="#8884d8" name="Actual" />
                <Bar dataKey="lastPeriod" fill="#82ca9d" name="Last Period" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Industry Benchmarking */}
      <Card>
        <CardHeader>
          <CardTitle>Industry Benchmarking</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {kpiComparison.map((kpi, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  {getStatusIcon(kpi.status)}
                  <div>
                    <p className="font-medium">{kpi.kpi}</p>
                    <p className="text-sm text-muted-foreground">
                      Our Value: {kpi.ourValue.toLocaleString()} | Industry: {kpi.industry.toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className={`font-bold ${getVarianceColor(kpi.variance)}`}>
                    {kpi.variance > 0 ? '+' : ''}{kpi.variance}%
                  </p>
                  <p className="text-xs text-muted-foreground">vs Industry</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Competitive Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Competitive Landscape Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={competitorAnalysis}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="company" />
                  <PolarRadiusAxis angle={90} domain={[0, 100]} />
                  <Radar name="Market Share" dataKey="marketShare" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
                  <Radar name="Customer Satisfaction" dataKey="customerSat" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.1} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-4">
              <h4 className="font-semibold">Competitive Positioning</h4>
              {competitorAnalysis.map((competitor, index) => (
                <div key={index} className={`p-3 rounded-lg border ${competitor.company === 'Our Company' ? 'bg-blue-50 border-blue-200' : 'bg-gray-50'}`}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium">{competitor.company}</span>
                    <span className="text-sm text-muted-foreground">{competitor.marketShare}% market share</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>Satisfaction: {competitor.customerSat}/5</div>
                    <div>Pricing: {competitor.pricing}/100</div>
                    <div>Innovation: {competitor.innovation}/100</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Analysis Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Key Insights & Recommendations</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-green-600">Strengths</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">28% increase in net profit year-over-year</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Gross margin 6.2% above industry average</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-green-50 rounded">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Customer acquisition cost 22% below industry</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-orange-600">Areas for Improvement</h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded">
                  <TrendingDown className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Market share below key competitors</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded">
                  <TrendingDown className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Operations department underperforming target</span>
                </div>
                <div className="flex items-center space-x-2 p-2 bg-orange-50 rounded">
                  <TrendingDown className="h-4 w-4 text-orange-600" />
                  <span className="text-sm">Innovation score needs improvement vs competition</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ComparativeAnalysisPage;
