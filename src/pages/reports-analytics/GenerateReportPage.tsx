
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, FileText, Download, Eye } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';

const GenerateReportPage: React.FC = () => {
  const navigate = useNavigate();
  const [reportData, setReportData] = useState({
    type: '',
    title: '',
    dateRange: 'current-month',
    customDateFrom: '',
    customDateTo: '',
    format: 'pdf',
    description: '',
    includeCharts: true,
    includeDetails: true,
    includeAnalysis: false
  });

  const handleInputChange = (field: string, value: any) => {
    setReportData(prev => ({ ...prev, [field]: value }));
  };

  const handleGenerate = () => {
    if (!reportData.type || !reportData.title) {
      toast.error('Please fill in required fields (Report Type and Title)');
      return;
    }
    toast.success('Report generation started! You will be notified when ready.');
    navigate('/');
  };

  const reportTypes = [
    { value: 'financial-summary', label: 'Financial Summary' },
    { value: 'sales-report', label: 'Sales Report' },
    { value: 'purchase-report', label: 'Purchase Report' },
    { value: 'inventory-report', label: 'Inventory Report' },
    { value: 'customer-analysis', label: 'Customer Analysis' },
    { value: 'supplier-analysis', label: 'Supplier Analysis' },
    { value: 'profit-loss', label: 'Profit & Loss' },
    { value: 'balance-sheet', label: 'Balance Sheet' },
    { value: 'cash-flow', label: 'Cash Flow' },
    { value: 'custom', label: 'Custom Report' }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button variant="outline" onClick={() => toast.info("Previewing report...")}>
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
          <Button onClick={handleGenerate}>
            <FileText className="mr-2 h-4 w-4" />
            Generate Report
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Report Configuration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="report-type">Report Type *</Label>
              <Select value={reportData.type} onValueChange={(value) => handleInputChange('type', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select report type" />
                </SelectTrigger>
                <SelectContent>
                  {reportTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>{type.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="title">Report Title *</Label>
              <Input
                id="title"
                placeholder="Enter report title"
                value={reportData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
              />
            </div>

            <div>
              <Label htmlFor="date-range">Date Range</Label>
              <Select value={reportData.dateRange} onValueChange={(value) => handleInputChange('dateRange', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current-month">Current Month</SelectItem>
                  <SelectItem value="last-month">Last Month</SelectItem>
                  <SelectItem value="current-quarter">Current Quarter</SelectItem>
                  <SelectItem value="last-quarter">Last Quarter</SelectItem>
                  <SelectItem value="current-year">Current Year</SelectItem>
                  <SelectItem value="last-year">Last Year</SelectItem>
                  <SelectItem value="custom">Custom Date Range</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {reportData.dateRange === 'custom' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="date-from">From Date</Label>
                  <Input
                    id="date-from"
                    type="date"
                    value={reportData.customDateFrom}
                    onChange={(e) => handleInputChange('customDateFrom', e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="date-to">To Date</Label>
                  <Input
                    id="date-to"
                    type="date"
                    value={reportData.customDateTo}
                    onChange={(e) => handleInputChange('customDateTo', e.target.value)}
                  />
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="format">Output Format</Label>
              <Select value={reportData.format} onValueChange={(value) => handleInputChange('format', value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF Document</SelectItem>
                  <SelectItem value="excel">Excel Spreadsheet</SelectItem>
                  <SelectItem value="csv">CSV File</SelectItem>
                  <SelectItem value="html">HTML Report</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Report Options</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Enter report description or notes"
                rows={3}
                value={reportData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>Include in Report:</Label>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="include-charts"
                  checked={reportData.includeCharts}
                  onCheckedChange={(checked) => handleInputChange('includeCharts', checked)}
                />
                <Label htmlFor="include-charts" className="text-sm font-normal">
                  Charts and Graphs
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="include-details"
                  checked={reportData.includeDetails}
                  onCheckedChange={(checked) => handleInputChange('includeDetails', checked)}
                />
                <Label htmlFor="include-details" className="text-sm font-normal">
                  Detailed Data Tables
                </Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="include-analysis"
                  checked={reportData.includeAnalysis}
                  onCheckedChange={(checked) => handleInputChange('includeAnalysis', checked)}
                />
                <Label htmlFor="include-analysis" className="text-sm font-normal">
                  Analysis and Insights
                </Label>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Report Preview</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Type:</span>
                  <span className="font-medium">{reportData.type || 'Not selected'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Title:</span>
                  <span className="font-medium">{reportData.title || 'Untitled'}</span>
                </div>
                <div className="flex justify-between">
                  <span>Period:</span>
                  <span className="font-medium capitalize">{reportData.dateRange.replace('-', ' ')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Format:</span>
                  <span className="font-medium uppercase">{reportData.format}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Templates */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Templates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-16 flex flex-col space-y-2" onClick={() => {
              handleInputChange('type', 'financial-summary');
              handleInputChange('title', 'Monthly Financial Summary');
            }}>
              <FileText className="h-5 w-5" />
              <span>Monthly Financial</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2" onClick={() => {
              handleInputChange('type', 'sales-report');
              handleInputChange('title', 'Sales Performance Report');
            }}>
              <FileText className="h-5 w-5" />
              <span>Sales Performance</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2" onClick={() => {
              handleInputChange('type', 'inventory-report');
              handleInputChange('title', 'Inventory Status Report');
            }}>
              <FileText className="h-5 w-5" />
              <span>Inventory Status</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default GenerateReportPage;
