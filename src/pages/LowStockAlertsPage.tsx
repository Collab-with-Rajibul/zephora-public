
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Package, Search, Filter, RefreshCw, ShoppingCart } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LowStockAlertsPage: React.FC = () => {
  const lowStockItems = [
    { 
      id: 'SKU002', 
      name: 'Office Chair', 
      category: 'Furniture', 
      currentStock: 5, 
      minStock: 8, 
      maxStock: 30, 
      unit: 'pcs', 
      supplier: 'Office Furniture Co',
      lastOrderDate: '2023-12-15',
      avgDailyUsage: 0.5,
      daysUntilEmpty: 10,
      priority: 'High'
    },
    { 
      id: 'SKU005', 
      name: 'Monitor Stand', 
      category: 'Accessories', 
      currentStock: 12, 
      minStock: 15, 
      maxStock: 40, 
      unit: 'pcs', 
      supplier: 'Tech Accessories Ltd',
      lastOrderDate: '2024-01-05',
      avgDailyUsage: 0.3,
      daysUntilEmpty: 40,
      priority: 'Medium'
    },
    { 
      id: 'SKU008', 
      name: 'Printer Ink Cartridge', 
      category: 'Supplies', 
      currentStock: 3, 
      minStock: 10, 
      maxStock: 25, 
      unit: 'pcs', 
      supplier: 'Print Solutions Inc',
      lastOrderDate: '2024-01-01',
      avgDailyUsage: 0.2,
      daysUntilEmpty: 15,
      priority: 'Critical'
    },
    { 
      id: 'SKU012', 
      name: 'USB Cable', 
      category: 'Electronics', 
      currentStock: 8, 
      minStock: 12, 
      maxStock: 50, 
      unit: 'pcs', 
      supplier: 'Cable Corp',
      lastOrderDate: '2023-12-20',
      avgDailyUsage: 0.4,
      daysUntilEmpty: 20,
      priority: 'Medium'
    },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Critical': return 'bg-red-100 text-red-800';
      case 'High': return 'bg-orange-100 text-orange-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStockPercentage = (current: number, min: number, max: number) => {
    return ((current - 0) / (max - 0)) * 100;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Low Stock Alerts</h1>
          <p className="text-muted-foreground">Monitor items requiring immediate attention</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh Alerts
          </Button>
          <Button>
            <ShoppingCart className="mr-2 h-4 w-4" />
            Create Purchase Order
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-2xl font-bold text-red-600">
                {lowStockItems.filter(item => item.priority === 'Critical').length}
              </span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-orange-600">
              {lowStockItems.filter(item => item.priority === 'High').length}
            </span>
            <p className="text-sm text-muted-foreground">Items need attention</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Medium Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-yellow-600">
              {lowStockItems.filter(item => item.priority === 'Medium').length}
            </span>
            <p className="text-sm text-muted-foreground">Monitor closely</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">{lowStockItems.length}</span>
            <p className="text-sm text-muted-foreground">Below minimum</p>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Stock Alert Details</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search items..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all-priority">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-priority">All Priority</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-categories">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="supplies">Supplies</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
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
                <TableHead>SKU</TableHead>
                <TableHead>Item Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current/Min Stock</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Days Until Empty</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockItems.map((item) => {
                const stockPercentage = getStockPercentage(item.currentStock, item.minStock, item.maxStock);
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <AlertTriangle className={`h-4 w-4 ${
                          item.priority === 'Critical' ? 'text-red-500' : 
                          item.priority === 'High' ? 'text-orange-500' : 'text-yellow-500'
                        }`} />
                        <span>{item.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell>
                      <div className="text-center">
                        <span className="font-medium text-red-600">{item.currentStock}</span>
                        <span className="text-muted-foreground"> / {item.minStock}</span>
                        <p className="text-xs text-muted-foreground">{item.unit}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            stockPercentage < 20 ? 'bg-red-500' : 
                            stockPercentage < 40 ? 'bg-orange-500' : 'bg-yellow-500'
                          }`}
                          style={{ width: `${Math.max(stockPercentage, 5)}%` }}
                        ></div>
                      </div>
                      <p className="text-xs text-muted-foreground mt-1">{stockPercentage.toFixed(0)}%</p>
                    </TableCell>
                    <TableCell>
                      <span className={`font-medium ${
                        item.daysUntilEmpty <= 7 ? 'text-red-600' : 
                        item.daysUntilEmpty <= 14 ? 'text-orange-600' : 'text-yellow-600'
                      }`}>
                        {item.daysUntilEmpty} days
                      </span>
                    </TableCell>
                    <TableCell className="text-sm">{item.supplier}</TableCell>
                    <TableCell>
                      <Badge className={getPriorityColor(item.priority)}>
                        {item.priority}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <ShoppingCart className="h-4 w-4 mr-1" />
                          Order
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Package className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 flex flex-col space-y-2">
              <ShoppingCart className="h-5 w-5" />
              <span>Bulk Purchase Order</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <AlertTriangle className="h-5 w-5" />
              <span>Set Alert Thresholds</span>
            </Button>
            <Button variant="outline" className="h-16 flex flex-col space-y-2">
              <RefreshCw className="h-5 w-5" />
              <span>Update Stock Levels</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LowStockAlertsPage;
