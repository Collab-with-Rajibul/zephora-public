
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { AlertTriangle, Package, Search, Filter, RefreshCw } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const LowStockAlertsPage: React.FC = () => {
  const lowStockItems = [
    { id: 'PRD001', name: 'Office Chairs', category: 'Furniture', currentStock: 5, minStock: 10, reorderLevel: 15, supplier: 'Office Supply Co' },
    { id: 'PRD002', name: 'Printer Paper', category: 'Supplies', currentStock: 2, minStock: 20, reorderLevel: 30, supplier: 'Paper Plus' },
    { id: 'PRD003', name: 'Laptops', category: 'Electronics', currentStock: 3, minStock: 8, reorderLevel: 12, supplier: 'Tech Solutions' },
    { id: 'PRD004', name: 'Pens', category: 'Supplies', currentStock: 15, minStock: 50, reorderLevel: 75, supplier: 'Stationery World' },
    { id: 'PRD005', name: 'Desks', category: 'Furniture', currentStock: 1, minStock: 5, reorderLevel: 8, supplier: 'Furniture Direct' },
  ];

  const criticalItems = lowStockItems.filter(item => item.currentStock < item.minStock);
  const lowItems = lowStockItems.filter(item => item.currentStock >= item.minStock && item.currentStock < item.reorderLevel);

  const getStockLevel = (current: number, min: number, reorder: number) => {
    if (current < min) return { level: 'Critical', color: 'bg-red-100 text-red-800' };
    if (current < reorder) return { level: 'Low', color: 'bg-yellow-100 text-yellow-800' };
    return { level: 'Normal', color: 'bg-green-100 text-green-800' };
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          <Button>
            <Package className="mr-2 h-4 w-4" />
            Reorder All
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Critical Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-red-500" />
              <span className="text-2xl font-bold text-red-600">{criticalItems.length}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Below minimum level</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Low Stock</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Package className="h-4 w-4 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">{lowItems.length}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Below reorder level</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-4 w-4 text-orange-500" />
              <span className="text-2xl font-bold">{lowStockItems.length}</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">Requires attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Stock Alerts Table */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Stock Alerts</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-64"
                />
              </div>
              <Select defaultValue="all-categories">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-categories">All Categories</SelectItem>
                  <SelectItem value="furniture">Furniture</SelectItem>
                  <SelectItem value="supplies">Supplies</SelectItem>
                  <SelectItem value="electronics">Electronics</SelectItem>
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
                <TableHead>Product ID</TableHead>
                <TableHead>Product Name</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Min Stock</TableHead>
                <TableHead>Reorder Level</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Supplier</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {lowStockItems.map((item) => {
                const stockStatus = getStockLevel(item.currentStock, item.minStock, item.reorderLevel);
                return (
                  <TableRow key={item.id}>
                    <TableCell className="font-medium">{item.id}</TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.category}</TableCell>
                    <TableCell className="font-medium">{item.currentStock}</TableCell>
                    <TableCell>{item.minStock}</TableCell>
                    <TableCell>{item.reorderLevel}</TableCell>
                    <TableCell>
                      <Badge className={stockStatus.color}>
                        {stockStatus.level}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{item.supplier}</TableCell>
                    <TableCell>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm">Reorder</Button>
                        <Button variant="ghost" size="sm">Edit</Button>
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

export default LowStockAlertsPage;
