
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Download, Search, Filter, Clock, AlertTriangle, Bell } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const OutstandingPaymentsPage: React.FC = () => {
  const outstandingPayments = [
    { id: 'OP001', customer: 'ABC Manufacturing', amount: 15000, dueDate: '2024-01-20', daysOverdue: 5, type: 'Receivable', priority: 'High' },
    { id: 'OP002', customer: 'XYZ Services', amount: 8500, dueDate: '2024-01-22', daysOverdue: 3, type: 'Receivable', priority: 'Medium' },
    { id: 'OP003', customer: 'Tech Solutions Inc', amount: 12000, dueDate: '2024-01-25', daysOverdue: 0, type: 'Receivable', priority: 'Low' },
    { id: 'OP004', customer: 'Global Suppliers', amount: 6800, dueDate: '2024-01-18', daysOverdue: 7, type: 'Payable', priority: 'High' },
    { id: 'OP005', customer: 'Local Business Co', amount: 4200, dueDate: '2024-01-24', daysOverdue: 1, type: 'Receivable', priority: 'Medium' },
  ];

  const totalOutstanding = outstandingPayments.reduce((sum, payment) => sum + payment.amount, 0);
  const highPriority = outstandingPayments.filter(p => p.priority === 'High').length;
  const overduePayments = outstandingPayments.filter(p => p.daysOverdue > 0).length;

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'Receivable' ? 'bg-blue-100 text-blue-800' : 'bg-purple-100 text-purple-800';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Outstanding Payments</h1>
          <p className="text-muted-foreground">View and manage overdue and pending payments.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline" onClick={() => toast.info("Sending reminders...")}>
            Send Reminders
          </Button>
          <Button onClick={() => toast.info("Recording payment...")}>
            <Plus className="mr-2 h-4 w-4" />
            Record Payment
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Outstanding</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4 text-orange-500" />
              <span className="text-2xl font-bold text-orange-600">${totalOutstanding.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">{outstandingPayments.length}</span>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-2xl font-bold text-red-600">{highPriority}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Overdue</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-red-600">{overduePayments}</span>
          </CardContent>
        </Card>
      </div>

      {/* Outstanding Payments Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Outstanding Payments</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search payments..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all-types">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="receivable">Receivable</SelectItem>
                  <SelectItem value="payable">Payable</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-priority">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-priority">All Priority</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
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
                <TableHead>ID</TableHead>
                <TableHead>Customer/Supplier</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Days Overdue</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {outstandingPayments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell className="font-medium">{payment.id}</TableCell>
                  <TableCell>{payment.customer}</TableCell>
                  <TableCell className="font-medium">${payment.amount.toLocaleString()}</TableCell>
                  <TableCell>{payment.dueDate}</TableCell>
                  <TableCell>
                    <span className={`font-medium ${payment.daysOverdue > 0 ? 'text-red-600' : 'text-green-600'}`}>
                      {payment.daysOverdue > 0 ? `${payment.daysOverdue} days` : 'Current'}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(payment.type)}>
                      {payment.type}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(payment.priority)}>
                      {payment.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">View</Button>
                      <Button variant="ghost" size="sm">Contact</Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default OutstandingPaymentsPage;
