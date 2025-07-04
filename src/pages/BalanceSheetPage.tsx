import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, Calendar, TrendingUp } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const BalanceSheetPage: React.FC = () => {
  const balanceSheetData = {
    assets: {
      currentAssets: {
        cash: 45000,
        accountsReceivable: 32000,
        inventory: 28000,
        prepaidExpenses: 5000,
        total: 110000
      },
      fixedAssets: {
        equipment: 85000,
        accumulatedDepreciation: -15000,
        buildings: 200000,
        land: 50000,
        total: 320000
      },
      totalAssets: 430000
    },
    liabilities: {
      currentLiabilities: {
        accountsPayable: 22000,
        shortTermDebt: 15000,
        accruedExpenses: 8000,
        total: 45000
      },
      longTermLiabilities: {
        longTermDebt: 150000,
        mortgagePayable: 80000,
        total: 230000
      },
      totalLiabilities: 275000
    },
    equity: {
      ownerEquity: 120000,
      retainedEarnings: 35000,
      total: 155000
    }
  };

  return (
    <div className="space-y-6">
      {/* Sticky Header */}
      <header className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b h-[88px] flex items-center">
        <div className="w-full flex items-center justify-between px-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Balance Sheet</h1>
            <p className="text-muted-foreground">Financial position statement</p>
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
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Custom Date
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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Assets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-green-600">${balanceSheetData.assets.totalAssets.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +8%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Liabilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-red-600">${balanceSheetData.liabilities.totalLiabilities.toLocaleString()}</span>
                <Badge variant="secondary" className="text-red-600">
                  +3%
                </Badge>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Equity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">${balanceSheetData.equity.total.toLocaleString()}</span>
                <Badge variant="secondary" className="text-green-600">
                  <TrendingUp className="mr-1 h-3 w-3" />
                  +15%
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Assets */}
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Assets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Current Assets</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cash & Cash Equivalents</span>
                    <span className="font-medium">${balanceSheetData.assets.currentAssets.cash.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accounts Receivable</span>
                    <span className="font-medium">${balanceSheetData.assets.currentAssets.accountsReceivable.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Inventory</span>
                    <span className="font-medium">${balanceSheetData.assets.currentAssets.inventory.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Prepaid Expenses</span>
                    <span className="font-medium">${balanceSheetData.assets.currentAssets.prepaidExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Current Assets</span>
                    <span>${balanceSheetData.assets.currentAssets.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Fixed Assets</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Equipment</span>
                    <span className="font-medium">${balanceSheetData.assets.fixedAssets.equipment.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accumulated Depreciation</span>
                    <span className="font-medium">${balanceSheetData.assets.fixedAssets.accumulatedDepreciation.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Buildings</span>
                    <span className="font-medium">${balanceSheetData.assets.fixedAssets.buildings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Land</span>
                    <span className="font-medium">${balanceSheetData.assets.fixedAssets.land.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Fixed Assets</span>
                    <span>${balanceSheetData.assets.fixedAssets.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-3 rounded-lg">
                <div className="flex justify-between font-bold text-lg">
                  <span>TOTAL ASSETS</span>
                  <span>${balanceSheetData.assets.totalAssets.toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Liabilities & Equity */}
          <Card>
            <CardHeader>
              <CardTitle className="text-red-600">Liabilities & Equity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3 text-red-600">Current Liabilities</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Accounts Payable</span>
                    <span className="font-medium">${balanceSheetData.liabilities.currentLiabilities.accountsPayable.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Short-term Debt</span>
                    <span className="font-medium">${balanceSheetData.liabilities.currentLiabilities.shortTermDebt.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accrued Expenses</span>
                    <span className="font-medium">${balanceSheetData.liabilities.currentLiabilities.accruedExpenses.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Current Liabilities</span>
                    <span>${balanceSheetData.liabilities.currentLiabilities.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-red-600">Long-term Liabilities</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Long-term Debt</span>
                    <span className="font-medium">${balanceSheetData.liabilities.longTermLiabilities.longTermDebt.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mortgage Payable</span>
                    <span className="font-medium">${balanceSheetData.liabilities.longTermLiabilities.mortgagePayable.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Long-term Liabilities</span>
                    <span>${balanceSheetData.liabilities.longTermLiabilities.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-3 rounded-lg">
                <div className="flex justify-between font-bold">
                  <span>TOTAL LIABILITIES</span>
                  <span>${balanceSheetData.liabilities.totalLiabilities.toLocaleString()}</span>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3 text-blue-600">Owner's Equity</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Owner's Equity</span>
                    <span className="font-medium">${balanceSheetData.equity.ownerEquity.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Retained Earnings</span>
                    <span className="font-medium">${balanceSheetData.equity.retainedEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total Equity</span>
                    <span>${balanceSheetData.equity.total.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-3 rounded-lg">
                <div className="flex justify-between font-bold text-lg">
                  <span>TOTAL LIABILITIES & EQUITY</span>
                  <span>${(balanceSheetData.liabilities.totalLiabilities + balanceSheetData.equity.total).toLocaleString()}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BalanceSheetPage;
