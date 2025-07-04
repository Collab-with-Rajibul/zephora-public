import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Plus, Search, DollarSign, Calendar, CreditCard, AlertTriangle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface Advance {
  id: string;
  employeeId: string;
  employeeName: string;
  amount: number;
  requestDate: string;
  approvalDate?: string;
  reason: string;
  status: 'pending' | 'approved' | 'paid' | 'rejected';
  repaymentMethod: 'salary-deduction' | 'lump-sum';
  installments?: number;
  remainingAmount: number;
}

const advances: Advance[] = [
  {
    id: 'ADV001',
    employeeId: 'EMP001',
    employeeName: 'John Smith',
    amount: 2000,
    requestDate: '2024-01-10',
    approvalDate: '2024-01-12',
    reason: 'Medical emergency',
    status: 'paid',
    repaymentMethod: 'salary-deduction',
    installments: 4,
    remainingAmount: 1000
  },
  {
    id: 'ADV002',
    employeeId: 'EMP002',
    employeeName: 'Sarah Johnson',
    amount: 1500,
    requestDate: '2024-01-14',
    reason: 'Home renovation',
    status: 'pending',
    repaymentMethod: 'salary-deduction',
    installments: 3,
    remainingAmount: 1500
  },
  {
    id: 'ADV003',
    employeeId: 'EMP004',
    employeeName: 'Emily Brown',
    amount: 800,
    requestDate: '2024-01-08',
    approvalDate: '2024-01-09',
    reason: 'Car repair',
    status: 'approved',
    repaymentMethod: 'lump-sum',
    remainingAmount: 800
  },
  {
    id: 'ADV004',
    employeeId: 'EMP003',
    employeeName: 'Mike Davis',
    amount: 3000,
    requestDate: '2024-01-05',
    approvalDate: '2024-01-06',
    reason: 'Education expenses',
    status: 'rejected',
    repaymentMethod: 'salary-deduction',
    installments: 6,
    remainingAmount: 3000
  }
];

const AdvancesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredAdvances = advances.filter(advance =>
    advance.employeeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advance.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
    advance.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: Advance['status']) => {
    switch (status) {
      case 'pending': return 'bg-yellow-500';
      case 'approved': return 'bg-blue-500';
      case 'paid': return 'bg-green-500';
      case 'rejected': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const totalAdvances = advances.length;
  const pendingAdvances = advances.filter(adv => adv.status === 'pending').length;
  const totalAdvanceAmount = advances.filter(adv => adv.status === 'paid').reduce((sum, adv) => sum + adv.amount, 0);
  const totalOutstanding = advances.filter(adv => adv.status === 'paid').reduce((sum, adv) => sum + adv.remainingAmount, 0);

  const pendingApprovals = advances.filter(adv => adv.status === 'pending');
  const activeAdvances = advances.filter(adv => adv.status === 'paid' && adv.remainingAmount > 0);

  return (
    <div className="space-y-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b h-[88px] flex items-center">
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Employee Advances</h1>
            <p className="text-muted-foreground">Manage employee salary advances and credit requests.</p>
          </div>
          <Button className="sm:w-auto">
            <Plus className="mr-2 h-4 w-4" />
            New Advance Request
          </Button>
        </div>
      </header>

      <div className="px-6 space-y-8">
        {/* Summary Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalAdvances}</div>
              <p className="text-xs text-muted-foreground">{pendingAdvances} pending approval</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Advanced</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalAdvanceAmount.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">Paid to employees</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Outstanding Amount</CardTitle>
              <AlertTriangle className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalOutstanding.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">To be recovered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approvals</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingAdvances}</div>
              <p className="text-xs text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Advances</TabsTrigger>
            <TabsTrigger value="pending">Pending Approvals</TabsTrigger>
            <TabsTrigger value="active">Active Repayments</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            {/* Search */}
            <div className="flex items-center space-x-2">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search advances..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>

            {/* All Advances Table */}
            <Card>
              <CardHeader>
                <CardTitle>All Advance Requests</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Request Date</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Repayment</TableHead>
                      <TableHead>Remaining</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredAdvances.map((advance) => (
                      <TableRow key={advance.id}>
                        <TableCell>
                          <div className="font-medium">{advance.employeeName}</div>
                          <div className="text-sm text-muted-foreground">{advance.employeeId}</div>
                        </TableCell>
                        <TableCell>${advance.amount.toLocaleString()}</TableCell>
                        <TableCell>{new Date(advance.requestDate).toLocaleDateString()}</TableCell>
                        <TableCell>{advance.reason}</TableCell>
                        <TableCell>
                          <div className="text-sm">
                            {advance.repaymentMethod === 'salary-deduction' ? 
                              `${advance.installments} installments` : 
                              'Lump sum'
                            }
                          </div>
                        </TableCell>
                        <TableCell>${advance.remainingAmount.toLocaleString()}</TableCell>
                        <TableCell>
                          <Badge className={`${getStatusColor(advance.status)} text-white`}>
                            {advance.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Pending Approval Requests</CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Bulk Approve</Button>
                  <Button variant="outline" size="sm">Bulk Reject</Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Request Date</TableHead>
                      <TableHead>Reason</TableHead>
                      <TableHead>Repayment Plan</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingApprovals.map((advance) => (
                      <TableRow key={advance.id}>
                        <TableCell>
                          <div className="font-medium">{advance.employeeName}</div>
                          <div className="text-sm text-muted-foreground">{advance.employeeId}</div>
                        </TableCell>
                        <TableCell>${advance.amount.toLocaleString()}</TableCell>
                        <TableCell>{new Date(advance.requestDate).toLocaleDateString()}</TableCell>
                        <TableCell>{advance.reason}</TableCell>
                        <TableCell>
                          {advance.repaymentMethod === 'salary-deduction' ? 
                            `${advance.installments} monthly installments` : 
                            'Single payment'
                          }
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" className="text-green-600 border-green-600">
                              Approve
                            </Button>
                            <Button size="sm" variant="outline" className="text-red-600 border-red-600">
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="active" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Active Repayments</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Employee</TableHead>
                      <TableHead>Original Amount</TableHead>
                      <TableHead>Remaining</TableHead>
                      <TableHead>Monthly Deduction</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Next Due</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {activeAdvances.map((advance) => {
                      const monthlyDeduction = advance.installments ? advance.amount / advance.installments : advance.amount;
                      const progress = ((advance.amount - advance.remainingAmount) / advance.amount) * 100;
                      
                      return (
                        <TableRow key={advance.id}>
                          <TableCell>
                            <div className="font-medium">{advance.employeeName}</div>
                            <div className="text-sm text-muted-foreground">{advance.employeeId}</div>
                          </TableCell>
                          <TableCell>${advance.amount.toLocaleString()}</TableCell>
                          <TableCell>${advance.remainingAmount.toLocaleString()}</TableCell>
                          <TableCell>${monthlyDeduction.toLocaleString()}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                  className="bg-blue-600 h-2 rounded-full" 
                                  style={{ width: `${progress}%` }}
                                ></div>
                              </div>
                              <span className="text-sm text-muted-foreground">{progress.toFixed(0)}%</span>
                            </div>
                          </TableCell>
                          <TableCell>Next payroll</TableCell>
                        </TableRow>
                      );
                    })}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdvancesPage;
