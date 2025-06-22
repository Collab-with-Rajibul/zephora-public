
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Download, Search, Filter, History, Eye } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const PaymentTrackingPage: React.FC = () => {
  const paymentHistory = [
    { id: 'PT001', description: 'Payment sent to ABC Suppliers', amount: 5000, date: '2024-01-15', time: '10:30 AM', status: 'Completed', type: 'Outgoing', method: 'Bank Transfer' },
    { id: 'PT002', description: 'Payment received from Johnson & Co', amount: 8500, date: '2024-01-15', time: '09:15 AM', status: 'Completed', type: 'Incoming', method: 'Wire Transfer' },
    { id: 'PT003', description: 'Payment sent to XYZ Corp', amount: 3500, date: '2024-01-14', time: '03:45 PM', status: 'Processing', type: 'Outgoing', method: 'Check' },
    { id: 'PT004', description: 'Payment received from Smith Industries', amount: 6200, date: '2024-01-14', time: '11:20 AM', status: 'Processing', type: 'Incoming', method: 'ACH' },
    { id: 'PT005', description: 'Payment sent to Tech Solutions', amount: 2800, date: '2024-01-13', time: '02:10 PM', status: 'Completed', type: 'Outgoing', method: 'Wire Transfer' },
    { id: 'PT006', description: 'Payment received from Tech Startup LLC', amount: 4800, date: '2024-01-13', time: '08:30 AM', status: 'Completed', type: 'Incoming', method: 'Bank Transfer' },
  ];

  const totalIncoming = paymentHistory.filter(p => p.type === 'Incoming').reduce((sum, p) => sum + p.amount, 0);
  const totalOutgoing = paymentHistory.filter(p => p.type === 'Outgoing').reduce((sum, p) => sum + p.amount, 0);
  const processingCount = paymentHistory.filter(p => p.status === 'Processing').length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Failed': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeColor = (type: string) => {
    return type === 'Incoming' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Payment Tracking</h1>
          <p className="text-muted-foreground">Monitor all payment activities and history</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export History
          </Button>
          <Button variant="outline">
            <History className="mr-2 h-4 w-4" />
            View All
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Incoming</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-green-600">${totalIncoming.toLocaleString()}</span>
            <p className="text-sm text-muted-foreground">
              {paymentHistory.filter(p => p.type === 'Incoming').length} payments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Outgoing</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-red-600">${totalOutgoing.toLocaleString()}</span>
            <p className="text-sm text-muted-foreground">
              {paymentHistory.filter(p => p.type === 'Outgoing').length} payments
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Net Cash Flow</CardTitle>
          </CardHeader>
          <CardContent>
            <span className={`text-2xl font-bold ${totalIncoming - totalOutgoing >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${(totalIncoming - totalOutgoing).toLocaleString()}
            </span>
            <p className="text-sm text-muted-foreground">
              {totalIncoming - totalOutgoing >= 0 ? 'Positive' : 'Negative'} flow
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">{processingCount}</span>
            <p className="text-sm text-muted-foreground">Payments in progress</p>
          </CardContent>
        </Card>
      </div>

      {/* Payment History */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Recent Payment Activity</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search transactions..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all-types">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  <SelectItem value="incoming">Incoming</SelectItem>
                  <SelectItem value="outgoing">Outgoing</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
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
                <TableHead>Transaction ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Date & Time</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paymentHistory.map((transaction) => (
                <TableRow key={transaction.id}>
                  <TableCell className="font-medium">{transaction.id}</TableCell>
                  <TableCell className="max-w-xs">
                    <div className="truncate">{transaction.description}</div>
                  </TableCell>
                  <TableCell className="font-medium">
                    <span className={transaction.type === 'Incoming' ? 'text-green-600' : 'text-red-600'}>
                      {transaction.type === 'Incoming' ? '+' : '-'}${transaction.amount.toLocaleString()}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="text-sm">
                      <div>{transaction.date}</div>
                      <div className="text-muted-foreground">{transaction.time}</div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className={getTypeColor(transaction.type)}>
                      {transaction.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm">{transaction.method}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">Details</Button>
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

export default PaymentTrackingPage;
