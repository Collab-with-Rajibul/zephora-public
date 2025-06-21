
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus, Download, Search, Filter, Play, Save, Calendar, BarChart3 } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const CustomReportsPage: React.FC = () => {
  const [isBuilding, setIsBuilding] = useState(false);

  const savedReports = [
    { id: 'CR001', name: 'Monthly P&L Summary', type: 'Financial', lastRun: '2024-01-15', schedule: 'Monthly', status: 'Active' },
    { id: 'CR002', name: 'Customer Payment Analysis', type: 'Sales', lastRun: '2024-01-14', schedule: 'Weekly', status: 'Active' },
    { id: 'CR003', name: 'Inventory Turnover Report', type: 'Inventory', lastRun: '2024-01-13', schedule: 'Quarterly', status: 'Draft' },
    { id: 'CR004', name: 'Employee Performance Metrics', type: 'HR', lastRun: '2024-01-12', schedule: 'Monthly', status: 'Active' },
    { id: 'CR005', name: 'Supplier Payment Terms', type: 'Purchase', lastRun: '2024-01-11', schedule: 'Ad-hoc', status: 'Inactive' },
  ];

  const reportFields = {
    financial: ['Revenue', 'Expenses', 'Profit', 'Cash Flow', 'Assets', 'Liabilities'],
    sales: ['Customer Name', 'Invoice Amount', 'Payment Date', 'Sales Rep', 'Product', 'Quantity'],
    inventory: ['SKU', 'Product Name', 'Current Stock', 'Min Stock', 'Turnover Rate', 'Value'],
    hr: ['Employee Name', 'Department', 'Attendance Rate', 'Performance Score', 'Salary'],
    purchase: ['Supplier', 'Purchase Amount', 'Payment Terms', 'Due Date', 'Category']
  };

  const [selectedFields, setSelectedFields] = useState<string[]>([]);
  const [reportType, setReportType] = useState('financial');

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleFieldToggle = (field: string) => {
    setSelectedFields(prev => 
      prev.includes(field) 
        ? prev.filter(f => f !== field)
        : [...prev, field]
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Custom Reports</h1>
          <p className="text-muted-foreground">Create and manage custom business reports</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => setIsBuilding(!isBuilding)}>
            <Plus className="mr-2 h-4 w-4" />
            {isBuilding ? 'View Reports' : 'Build Report'}
          </Button>
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export All
          </Button>
        </div>
      </div>

      {isBuilding ? (
        /* Report Builder */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Report Configuration</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="report-name">Report Name</Label>
                    <Input id="report-name" placeholder="Enter report name" />
                  </div>
                  <div>
                    <Label htmlFor="report-type">Report Type</Label>
                    <Select value={reportType} onValueChange={setReportType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="inventory">Inventory</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="purchase">Purchase</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="date-range">Date Range</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="last-30-days">Last 30 Days</SelectItem>
                        <SelectItem value="last-quarter">Last Quarter</SelectItem>
                        <SelectItem value="last-year">Last Year</SelectItem>
                        <SelectItem value="custom">Custom Range</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="schedule">Schedule</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select schedule" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ad-hoc">Ad-hoc</SelectItem>
                        <SelectItem value="daily">Daily</SelectItem>
                        <SelectItem value="weekly">Weekly</SelectItem>
                        <SelectItem value="monthly">Monthly</SelectItem>
                        <SelectItem value="quarterly">Quarterly</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Select Fields</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {reportFields[reportType as keyof typeof reportFields]?.map((field) => (
                    <div key={field} className="flex items-center space-x-2">
                      <Checkbox
                        id={field}
                        checked={selectedFields.includes(field)}
                        onCheckedChange={() => handleFieldToggle(field)}
                      />
                      <Label htmlFor={field} className="text-sm">{field}</Label>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Filters & Conditions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <Label>Field</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select field" />
                      </SelectTrigger>
                      <SelectContent>
                        {selectedFields.map(field => (
                          <SelectItem key={field} value={field}>{field}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Condition</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="equals">Equals</SelectItem>
                        <SelectItem value="greater">Greater than</SelectItem>
                        <SelectItem value="less">Less than</SelectItem>
                        <SelectItem value="contains">Contains</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Value</Label>
                    <Input placeholder="Enter value" />
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Plus className="mr-2 h-3 w-3" />
                  Add Filter
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <BarChart3 className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-500">Report preview will appear here</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" className="flex-1">
                      <Play className="mr-2 h-3 w-3" />
                      Preview
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <Save className="mr-2 h-3 w-3" />
                      Save
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Output Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="pdf" />
                  <Label htmlFor="pdf">PDF Export</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="excel" />
                  <Label htmlFor="excel">Excel Export</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="email" />
                  <Label htmlFor="email">Email Delivery</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="dashboard" />
                  <Label htmlFor="dashboard">Add to Dashboard</Label>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        /* Saved Reports List */
        <div className="space-y-6">
          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Total Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold">{savedReports.length}</span>
                <p className="text-sm text-muted-foreground">Custom reports created</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Active Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold text-green-600">
                  {savedReports.filter(r => r.status === 'Active').length}
                </span>
                <p className="text-sm text-muted-foreground">Currently running</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Scheduled Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold text-blue-600">
                  {savedReports.filter(r => r.schedule !== 'Ad-hoc').length}
                </span>
                <p className="text-sm text-muted-foreground">Automated delivery</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Draft Reports</CardTitle>
              </CardHeader>
              <CardContent>
                <span className="text-2xl font-bold text-yellow-600">
                  {savedReports.filter(r => r.status === 'Draft').length}
                </span>
                <p className="text-sm text-muted-foreground">Pending completion</p>
              </CardContent>
            </Card>
          </div>

          {/* Reports Table */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Saved Reports</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search reports..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select defaultValue="all-types">
                    <SelectTrigger className="w-40">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-types">All Types</SelectItem>
                      <SelectItem value="financial">Financial</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="inventory">Inventory</SelectItem>
                      <SelectItem value="hr">HR</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Report ID</TableHead>
                    <TableHead>Report Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Last Run</TableHead>
                    <TableHead>Schedule</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {savedReports.map((report) => (
                    <TableRow key={report.id}>
                      <TableCell className="font-medium">{report.id}</TableCell>
                      <TableCell>{report.name}</TableCell>
                      <TableCell>{report.type}</TableCell>
                      <TableCell>{report.lastRun}</TableCell>
                      <TableCell>{report.schedule}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Play className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">Edit</Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default CustomReportsPage;
