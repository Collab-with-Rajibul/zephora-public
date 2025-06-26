import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Calendar, Search, Bell } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { toast } from 'sonner';

const TrialBalancePage: React.FC = () => {
  const trialBalanceData = [
    { account: 'Cash', accountType: 'Asset', debit: 45000, credit: 0 },
    { account: 'Accounts Receivable', accountType: 'Asset', debit: 32000, credit: 0 },
    { account: 'Inventory', accountType: 'Asset', debit: 28000, credit: 0 },
    { account: 'Equipment', accountType: 'Asset', debit: 85000, credit: 0 },
    { account: 'Accumulated Depreciation', accountType: 'Asset', debit: 0, credit: 15000 },
    { account: 'Accounts Payable', accountType: 'Liability', debit: 0, credit: 22000 },
    { account: 'Short-term Debt', accountType: 'Liability', debit: 0, credit: 15000 },
    { account: 'Long-term Debt', accountType: 'Liability', debit: 0, credit: 150000 },
    { account: 'Owner\'s Equity', accountType: 'Equity', debit: 0, credit: 120000 },
    { account: 'Retained Earnings', accountType: 'Equity', debit: 0, credit: 35000 },
    { account: 'Sales Revenue', accountType: 'Revenue', debit: 0, credit: 175000 },
    { account: 'Cost of Goods Sold', accountType: 'Expense', debit: 60000, credit: 0 },
    { account: 'Operating Expenses', accountType: 'Expense', debit: 35000, credit: 0 },
    { account: 'Salaries & Wages', accountType: 'Expense', debit: 25000, credit: 0 },
    { account: 'Rent Expense', accountType: 'Expense', debit: 8000, credit: 0 },
    { account: 'Utilities Expense', accountType: 'Expense', debit: 3000, credit: 0 },
    { account: 'Depreciation Expense', accountType: 'Expense', debit: 5000, credit: 0 },
  ];

  const totalDebits = trialBalanceData.reduce((sum, item) => sum + item.debit, 0);
  const totalCredits = trialBalanceData.reduce((sum, item) => sum + item.credit, 0);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trial Balance</h1>
          <p className="text-muted-foreground">View your company's trial balance and account summaries.</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="current-date">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current-date">Current Date</SelectItem>
              <SelectItem value="end-of-month">End of Month</SelectItem>
              <SelectItem value="end-of-quarter">End of Quarter</SelectItem>
              <SelectItem value="end-of-year">End of Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={() => toast.info("Setting custom date...")}>
            <Calendar className="mr-2 h-4 w-4" />
            Custom Date
          </Button>
          <Button variant="outline" onClick={() => toast.info("Exporting statement...")}>
            <Download className="mr-2 h-4 w-4" />
            Export Statement
          </Button>
          <Button onClick={() => toast.info("Refreshing data...")}>
            Refresh Data
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Debits</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-green-600">${totalDebits.toLocaleString()}</span>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Credits</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-blue-600">${totalCredits.toLocaleString()}</span>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Balance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <span className={`text-2xl font-bold ${totalDebits === totalCredits ? 'text-green-600' : 'text-red-600'}`}>
              {totalDebits === totalCredits ? 'BALANCED' : 'UNBALANCED'}
            </span>
          </CardContent>
        </Card>
      </div>

      {/* Trial Balance Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Trial Balance Details</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search accounts..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Account Types</SelectItem>
                  <SelectItem value="asset">Assets</SelectItem>
                  <SelectItem value="liability">Liabilities</SelectItem>
                  <SelectItem value="equity">Equity</SelectItem>
                  <SelectItem value="revenue">Revenue</SelectItem>
                  <SelectItem value="expense">Expenses</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Name</TableHead>
                <TableHead>Account Type</TableHead>
                <TableHead className="text-right">Debit</TableHead>
                <TableHead className="text-right">Credit</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trialBalanceData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{item.account}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      item.accountType === 'Asset' ? 'bg-green-100 text-green-800' :
                      item.accountType === 'Liability' ? 'bg-red-100 text-red-800' :
                      item.accountType === 'Equity' ? 'bg-blue-100 text-blue-800' :
                      item.accountType === 'Revenue' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {item.accountType}
                    </span>
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {item.debit > 0 ? `$${item.debit.toLocaleString()}` : '-'}
                  </TableCell>
                  <TableCell className="text-right font-medium">
                    {item.credit > 0 ? `$${item.credit.toLocaleString()}` : '-'}
                  </TableCell>
                </TableRow>
              ))}
              <TableRow className="bg-gray-50 font-bold border-t-2">
                <TableCell colSpan={2} className="text-lg">TOTALS</TableCell>
                <TableCell className="text-right text-lg text-green-600">
                  ${totalDebits.toLocaleString()}
                </TableCell>
                <TableCell className="text-right text-lg text-blue-600">
                  ${totalCredits.toLocaleString()}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Difference: ${Math.abs(totalDebits - totalCredits).toLocaleString()}
              </p>
              {totalDebits === totalCredits ? (
                <p className="text-green-600 font-semibold">✓ Trial Balance is in balance</p>
              ) : (
                <p className="text-red-600 font-semibold">⚠ Trial Balance is out of balance</p>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TrialBalancePage;
