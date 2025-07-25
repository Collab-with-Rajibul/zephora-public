
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Download, Search, Filter, Package, AlertTriangle, TrendingUp } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const StockLevelsPage: React.FC = () => {
  const stockItems = [
    { id: 'SKU001', name: 'Laptop Computer', category: 'Electronics', currentStock: 25, minStock: 10, maxStock: 50, unit: 'pcs', value: 125000, lastUpdated: '2024-01-15' },
    { id: 'SKU002', name: 'Office Chair', category: 'Furniture', currentStock: 5, minStock: 8, maxStock: 30, unit: 'pcs', value: 2500, lastUpdated: '2024-01-14' },
    { id: 'SKU003', name: 'Printer Paper', category: 'Supplies', currentStock: 150, minStock: 50, maxStock: 200, unit: 'boxes', value: 3000, lastUpdated: '2024-01-15' },
    { id: 'SKU004', name: 'Wireless Mouse', category: 'Electronics', currentStock: 45, minStock: 20, maxStock: 100, unit: 'pcs', value: 2250, lastUpdated: '2024-01-13' },
    { id: 'SKU005', name: 'Monitor Stand', category: 'Accessories', currentStock: 12, minStock: 15, maxStock: 40, unit: 'pcs', value: 1200, lastUpdated: '2024-01-12' },
  ];

  const totalValue = stockItems.reduce((sum, item) => sum + item.value, 0);
  const lowStockItems = stockItems.filter(item => item.currentStock <= item.minStock).length;
  const outOfStockItems = stockItems.filter(item => item.currentStock === 0).length;

  const getStockStatus = (currentStock: number, minStock: number, maxStock: number) => {
    if (currentStock === 0) return { status: 'Out of Stock', color: 'bg-red-100 text-red-800' };
    if (currentStock <= minStock) return { status: 'Low Stock', color: 'bg-yellow-100 text-yellow-800' };
    if (currentStock >= maxStock * 0.8) return { status: 'High Stock', color: 'bg-blue-100 text-blue-800' };
    return { status: 'Normal', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Stock Levels</h1>
          <p className="text-muted-foreground">Monitor inventory levels and stock status</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Item
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Inventory Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">${totalValue.toLocaleString()}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Items</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold">{stockItems.length}</span>
            <p className="text-sm text-muted-foreground">SKUs tracked</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">{lowStockItems}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Out of Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-red-600">{outOfStockItems}</span>
            <p className="text-sm text-muted-foreground">Items unavailable</p>
          </CardContent>
        </Card>
      </div>

      {/* Stock Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Inventory Items</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search items..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all-categories">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="supplies">Supplies</SelectItem>
                  <SelectItem value="accessories">Accessories</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="low-stock">Low Stock</SelectItem>
                  <SelectItem value="out-of-stock">Out of Stock</SelectItem>
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
                <TableHead>Current Stock</TableHead>
                <TableHead>Min/Max</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stockItems.map((item) => {
                const stockStatus = getStockStatus(item.currentStock, item.minStock, item.maxStock);
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="font-medium">
                      <span className={item.currentStock <= item.minStock ? 'text-red-600' : ''}>
                        {item.currentStock}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">
                      {item.minStock} / {item.maxStock}
                    </TableCell>
                    <TableCell>{item.unit}</TableCell>
                    <TableCell className="font-medium">${item.value.toLocaleString()}</TableCell>
                    <TableCell>
                      <Badge className={stockStatus.color}>
                        {stockStatus.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.lastUpdated}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Adjust</Button>
                        <Button variant="ghost" size="sm">History</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockLevelsPage;
