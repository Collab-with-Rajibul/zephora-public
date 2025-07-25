
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Plus, Download, Search, Filter, Users, Shield, Settings, Mail } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const UserManagementPage: React.FC = () => {
  const users = [
    { id: 'USR001', name: 'John Smith', email: 'john.smith@company.com', role: 'Admin', department: 'Finance', status: 'Active', lastLogin: '2024-01-15 10:30 AM', permissions: ['Full Access'] },
    { id: 'USR002', name: 'Sarah Johnson', email: 'sarah.johnson@company.com', role: 'Manager', department: 'Sales', status: 'Active', lastLogin: '2024-01-15 09:15 AM', permissions: ['Sales', 'Reports'] },
    { id: 'USR003', name: 'Mike Davis', email: 'mike.davis@company.com', role: 'User', department: 'Operations', status: 'Active', lastLogin: '2024-01-14 03:45 PM', permissions: ['Inventory', 'Basic Reports'] },
    { id: 'USR004', name: 'Emily Chen', email: 'emily.chen@company.com', role: 'Manager', department: 'HR', status: 'Inactive', lastLogin: '2024-01-10 11:20 AM', permissions: ['HR', 'Employee Data'] },
    { id: 'USR005', name: 'David Wilson', email: 'david.wilson@company.com', role: 'User', department: 'Finance', status: 'Pending', lastLogin: 'Never', permissions: ['Read Only'] },
  ];

  const roles = [
    { name: 'Admin', users: 1, permissions: 'Full system access and configuration' },
    { name: 'Manager', users: 2, permissions: 'Department management and reporting' },
    { name: 'User', users: 2, permissions: 'Limited access to assigned modules' },
    { name: 'Viewer', users: 0, permissions: 'Read-only access to reports' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-red-100 text-red-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin': return 'bg-purple-100 text-purple-800';
      case 'Manager': return 'bg-blue-100 text-blue-800';
      case 'User': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">User Management</h1>
          <p className="text-muted-foreground">Manage users, roles, and permissions</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export Users
          </Button>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-blue-500" />
              <span className="text-2xl font-bold">{users.length}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Users</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-green-600">
              {users.filter(u => u.status === 'Active').length}
            </span>
            <p className="text-sm text-muted-foreground">Currently logged in</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-yellow-600">
              {users.filter(u => u.status === 'Pending').length}
            </span>
            <p className="text-sm text-muted-foreground">Awaiting activation</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Roles Defined</CardTitle>
          </CardHeader>
          <CardContent>
            <span className="text-2xl font-bold text-purple-600">{roles.length}</span>
            <p className="text-sm text-muted-foreground">Permission levels</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Users Table */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Users</CardTitle>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search users..."
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select defaultValue="all-status">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-status">All Status</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
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
                    <TableHead>User</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Login</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell>
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-muted-foreground">{user.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className={getRoleColor(user.role)}>
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(user.status)}>
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm">
                            <Settings className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Mail className="h-4 w-4" />
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

        {/* Roles & Permissions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Roles & Permissions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {roles.map((role, index) => (
              <div key={index} className="border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <Badge className={getRoleColor(role.name)}>
                    {role.name}
                  </Badge>
                  <span className="text-sm text-muted-foreground">{role.users} users</span>
                </div>
                <p className="text-sm text-muted-foreground">{role.permissions}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Edit Permissions
                </Button>
              </div>
            ))}
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Create Role
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent User Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">John Smith logged in from New York, NY</span>
              </div>
              <span className="text-xs text-muted-foreground">2 minutes ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Sarah Johnson updated customer data</span>
              </div>
              <span className="text-xs text-muted-foreground">15 minutes ago</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">David Wilson account created (pending approval)</span>
              </div>
              <span className="text-xs text-muted-foreground">1 hour ago</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Emily Chen account deactivated</span>
              </div>
              <span className="text-xs text-muted-foreground">2 hours ago</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UserManagementPage;
