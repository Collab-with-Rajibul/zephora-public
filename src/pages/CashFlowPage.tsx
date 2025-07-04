import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, TrendingUp, TrendingDown } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const CashFlowPage: React.FC = () => {
  const cashFlowData = {
    operating: {
      netIncome: 39000,
      depreciation: 5000,
      accountsReceivableChange: -3000,
      inventoryChange: -2000,
      accountsPayableChange: 4000,
      total: 43000
    },
    investing: {
      equipmentPurchase: -15000,
      assetSales: 8000,
      total: -7000
    },
    financing: {
      loanProceeds: 25000,
      loanRepayments: -12000,
      ownerWithdrawals: -10000,
      total: 3000
    },
    netCashFlow: 39000,
    beginningCash: 32000,
    endingCash: 71000
  };

  return (
    <div className="space-y-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b h-[88px] flex items-center">
        <div className="w-full flex items-center justify-between px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Cash Flow Statement</h1>
            <p className="text-muted-foreground">Cash inflows and outflows analysis</p>
          </div>
          <div className="flex items-center space-x-2">
            <Select defaultValue="current-month">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current-month">Current Month</SelectItem>
                <SelectItem value="last-month">Last Month</SelectItem>
                <SelectItem value="current-quarter">Current Quarter</SelectItem>
                <SelectItem value="current-year">Current Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Period
            </Button>
            <Button variant="outline">
              <Download className="mr-2 h-4 w-4" />
              Export PDF
            </Button>
          </div>
        </div>
      </header>

      <div className="px-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Operating Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${cashFlowData.operating.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +15%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Investing Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">${cashFlowData.investing.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-red-600">
                  <TrendingDown className="mr-1 h-3 w-3" />
                  -25%
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Financing Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${cashFlowData.financing.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  +8%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Net Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-purple-600">${cashFlowData.netCashFlow.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +22%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Cash Flow Statement */}
        <Card>
          <CardHeader>
            <CardTitle>Cash Flow Statement</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Operating Activities */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-green-600">Cash Flow from Operating Activities</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Net Income</span>
                  <span className="font-medium">${cashFlowData.operating.netIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Depreciation & Amortization</span>
                  <span className="font-medium">${cashFlowData.operating.depreciation.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Changes in Accounts Receivable</span>
                  <span className="font-medium">${cashFlowData.operating.accountsReceivableChange.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Changes in Inventory</span>
                  <span className="font-medium">${cashFlowData.operating.inventoryChange.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Changes in Accounts Payable</span>
                  <span className="font-medium">${cashFlowData.operating.accountsPayableChange.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg border-t pt-2 bg-green-50 p-2 rounded">
                  <span>Net Cash from Operating Activities</span>
                  <span className="text-green-600">${cashFlowData.operating.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Investing Activities */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-blue-600">Cash Flow from Investing Activities</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Purchase of Equipment</span>
                  <span className="font-medium">${cashFlowData.investing.equipmentPurchase.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Sale of Assets</span>
                  <span className="font-medium">${cashFlowData.investing.assetSales.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg border-t pt-2 bg-blue-50 p-2 rounded">
                  <span>Net Cash from Investing Activities</span>
                  <span className="text-blue-600">${cashFlowData.investing.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Financing Activities */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-purple-600">Cash Flow from Financing Activities</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Loan Proceeds</span>
                  <span className="font-medium">${cashFlowData.financing.loanProceeds.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Loan Repayments</span>
                  <span className="font-medium">${cashFlowData.financing.loanRepayments.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center border-b pb-2">
                  <span>Owner Withdrawals</span>
                  <span className="font-medium">${cashFlowData.financing.ownerWithdrawals.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-lg border-t pt-2 bg-purple-50 p-2 rounded">
                  <span>Net Cash from Financing Activities</span>
                  <span className="text-purple-600">${cashFlowData.financing.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            {/* Net Change in Cash */}
            <div className="bg-gray-50 p-4 rounded-lg space-y-3">
              <div className="flex justify-between items-center text-lg font-semibold">
                <span>Net Change in Cash</span>
                <span>${cashFlowData.netCashFlow.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cash at Beginning of Period</span>
                <span className="font-medium">${cashFlowData.beginningCash.toLocaleString()}</span>
              </div>
              <div className="flex justify-between items-center text-xl font-bold border-t pt-3">
                <span>Cash at End of Period</span>
                <span className="text-green-600">${cashFlowData.endingCash.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CashFlowPage;
