
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, BarChart3, Download, Calendar, FileText, Play } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const GenerateReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [reportConfig, setReportConfig] = useState({
    type: '',
    name: '',
    dateRange: '',
    startDate: '',
    endDate: '',
    format: 'pdf',
    includeCharts: true,
    includeSummary: true,
    includeDetails: true,
    emailReport: false,
    schedule: 'one-time'
  });

  const handleInputChange = (field: string, value: any) => {
    setReportConfig(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    if (!reportConfig.type) {
      toast.error('Please select a report type');
      return;
    }
    toast.success('Report generated successfully!');
  };

  const reportTypes = [
    { value: 'financial-summary', label: 'Financial Summary', description: 'Revenue, expenses, and profit overview' },
    { value: 'profit-loss', label: 'Profit & Loss Statement', description: 'Detailed income and expense breakdown' },
    { value: 'balance-sheet', label: 'Balance Sheet', description: 'Assets, liabilities, and equity snapshot' },
    { value: 'cash-flow', label: 'Cash Flow Statement', description: 'Cash inflows and outflows analysis' },
    { value: 'sales-report', label: 'Sales Report', description: 'Sales performance and customer analysis' },
    { value: 'inventory-report', label: 'Inventory Report', description: 'Stock levels and movement tracking' },
    { value: 'customer-aging', label: 'Customer Aging Report', description: 'Outstanding receivables by age' },
    { value: 'supplier-report', label: 'Supplier Report', description: 'Purchase analysis and payables' },
    { value: 'employee-report', label: 'Employee Report', description: 'Payroll and attendance summary' },
    { value: 'tax-report', label: 'Tax Report', description: 'Tax obligations and payments' }
  ];

  const quickReports = [
    { name: 'This Month P&L', type: 'profit-loss', period: 'current-month' },
    { name: 'YTD Financial Summary', type: 'financial-summary', period: 'year-to-date' },
    { name: 'Outstanding Invoices', type: 'customer-aging', period: 'current-date' },
    { name: 'Low Stock Alert', type: 'inventory-report', period: 'current-date' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold tracking-tight">Generate Report</h1>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button onClick={handleGenerate}>
            <Play className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Configuration */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Report Configuration</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="report-type">Report Type *</Label>
                <Select value={reportConfig.type} onValueChange={(value) => handleInputChange('type', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select report type" />
                  </SelectTrigger>
                  <SelectContent>
                    {reportTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div>
                          <div className="font-medium">{type.label}</div>
                          <div className="text-sm text-muted-foreground">{type.description}</div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="report-name">Report Name</Label>
                <Input
                  id="report-name"
                  placeholder="Enter custom report name"
                  value={reportConfig.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date-range">Date Range</Label>
                  <Select value={reportConfig.dateRange} onValueChange={(value) => handleInputChange('dateRange', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select date range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="current-month">Current Month</SelectItem>
                      <SelectItem value="last-month">Last Month</SelectItem>
                      <SelectItem value="current-quarter">Current Quarter</SelectItem>
                      <SelectItem value="last-quarter">Last Quarter</SelectItem>
                      <SelectItem value="current-year">Current Year</SelectItem>
                      <SelectItem value="last-year">Last Year</SelectItem>
                      <SelectItem value="year-to-date">Year to Date</SelectItem>
                      <SelectItem value="custom">Custom Range</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="format">Export Format</Label>
                  <Select value={reportConfig.format} onValueChange={(value) => handleInputChange('format', value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="html">HTML</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {reportConfig.dateRange === 'custom' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="start-date">Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={reportConfig.startDate}
                      onChange={(e) => handleInputChange('startDate', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="end-date">End Date</Label>
                    <Input
                      id="end-date"
                      type="date"
                      value={reportConfig.endDate}
                      onChange={(e) => handleInputChange('endDate', e.target.value)}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-charts"
                    checked={reportConfig.includeCharts}
                    onCheckedChange={(checked) => handleInputChange('includeCharts', checked)}
                  />
                  <Label htmlFor="include-charts">Include Charts and Graphs</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-summary"
                    checked={reportConfig.includeSummary}
                    onCheckedChange={(checked) => handleInputChange('includeSummary', checked)}
                  />
                  <Label htmlFor="include-summary">Include Executive Summary</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="include-details"
                    checked={reportConfig.includeDetails}
                    onCheckedChange={(checked) => handleInputChange('includeDetails', checked)}
                  />
                  <Label htmlFor="include-details">Include Detailed Breakdown</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="email-report"
                    checked={reportConfig.emailReport}
                    onCheckedChange={(checked) => handleInputChange('emailReport', checked)}
                  />
                  <Label htmlFor="email-report">Email Report When Ready</Label>
                </div>
              </div>

              <div>
                <Label htmlFor="schedule">Schedule</Label>
                <Select value={reportConfig.schedule} onValueChange={(value) => handleInputChange('schedule', value)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="one-time">One-time Generation</SelectItem>
                    <SelectItem value="daily">Daily</SelectItem>
                    <SelectItem value="weekly">Weekly</SelectItem>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Reports & Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Reports</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickReports.map((report, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4"
                  onClick={() => {
                    handleInputChange('type', report.type);
                    handleInputChange('dateRange', report.period);
                    handleInputChange('name', report.name);
                  }}
                >
                  <div className="text-left">
                    <div className="font-medium">{report.name}</div>
                    <div className="text-sm text-muted-foreground capitalize">
                      {report.type.replace('-', ' ')} • {report.period.replace('-', ' ')}
                    </div>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Report Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                  <FileText className="mx-auto h-12 w-12 text-gray-400" />
                  <p className="mt-2 text-sm text-gray-500">
                    {reportConfig.type ? 'Report preview will appear here' : 'Select a report type to see preview'}
                  </p>
                </div>
                
                {reportConfig.type && (
                  <div className="space-y-3">
                    <div className="text-sm">
                      <strong>Report Type:</strong> {reportTypes.find(t => t.value === reportConfig.type)?.label}
                    </div>
                    <div className="text-sm">
                      <strong>Date Range:</strong> {reportConfig.dateRange || 'Not selected'}
                    </div>
                    <div className="text-sm">
                      <strong>Format:</strong> {reportConfig.format.toUpperCase()}
                    </div>
                    <Button size="sm" className="w-full">
                      <Download className="mr-2 h-4 w-4" />
                      Preview Report
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reports</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Monthly P&L - December</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Q4 Financial Summary</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>2023 Year-End Report</span>
                  <Button variant="ghost" size="sm">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GenerateReportPage;
