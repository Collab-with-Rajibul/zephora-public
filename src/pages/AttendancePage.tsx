
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Users, DollarSign, CheckCircle, XCircle, AlertCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn: string;
  checkOut: string;
  hoursWorked: number;
  status: 'present' | 'absent' | 'late' | 'half-day';
  overtime: number;
}

interface WeeklyPayroll {
  employeeId: string;
  employeeName: string;
  regularHours: number;
  overtimeHours: number;
  hourlyRate: number;
  regularPay: number;
  overtimePay: number;
  totalPay: number;
}

const attendanceRecords: AttendanceRecord[] = [
  {
    id: 'ATT001',
    employeeId: 'EMP001',
    employeeName: 'John Smith',
    date: '2024-01-15',
    checkIn: '09:00',
    checkOut: '17:30',
    hoursWorked: 8.5,
    status: 'present',
    overtime: 0.5
  },
  {
    id: 'ATT002',
    employeeId: 'EMP002',
    employeeName: 'Sarah Johnson',
    date: '2024-01-15',
    checkIn: '09:15',
    checkOut: '17:15',
    hoursWorked: 8,
    status: 'late',
    overtime: 0
  },
  {
    id: 'ATT003',
    employeeId: 'EMP003',
    employeeName: 'Mike Davis',
    date: '2024-01-15',
    checkIn: '--',
    checkOut: '--',
    hoursWorked: 0,
    status: 'absent',
    overtime: 0
  },
  {
    id: 'ATT004',
    employeeId: 'EMP004',
    employeeName: 'Emily Brown',
    date: '2024-01-15',
    checkIn: '09:00',
    checkOut: '13:00',
    hoursWorked: 4,
    status: 'half-day',
    overtime: 0
  }
];

const weeklyPayroll: WeeklyPayroll[] = [
  {
    employeeId: 'EMP001',
    employeeName: 'John Smith',
    regularHours: 40,
    overtimeHours: 5,
    hourlyRate: 36.06,
    regularPay: 1442.40,
    overtimePay: 270.45,
    totalPay: 1712.85
  },
  {
    employeeId: 'EMP002',
    employeeName: 'Sarah Johnson',
    regularHours: 40,
    overtimeHours: 2,
    hourlyRate: 32.69,
    regularPay: 1307.60,
    overtimePay: 98.07,
    totalPay: 1405.67
  },
  {
    employeeId: 'EMP004',
    employeeName: 'Emily Brown',
    regularHours: 35,
    overtimeHours: 0,
    hourlyRate: 25.00,
    regularPay: 875.00,
    overtimePay: 0,
    totalPay: 875.00
  }
];

const AttendancePage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('2024-01-15');

  const getStatusIcon = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present': return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'absent': return <XCircle className="h-4 w-4 text-red-500" />;
      case 'late': return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'half-day': return <Clock className="h-4 w-4 text-blue-500" />;
      default: return null;
    }
  };

  const getStatusColor = (status: AttendanceRecord['status']) => {
    switch (status) {
      case 'present': return 'bg-green-500';
      case 'absent': return 'bg-red-500';
      case 'late': return 'bg-yellow-500';
      case 'half-day': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const presentCount = attendanceRecords.filter(record => record.status === 'present').length;
  const absentCount = attendanceRecords.filter(record => record.status === 'absent').length;
  const lateCount = attendanceRecords.filter(record => record.status === 'late').length;
  const totalHours = attendanceRecords.reduce((sum, record) => sum + record.hoursWorked, 0);
  const totalPayroll = weeklyPayroll.reduce((sum, payroll) => sum + payroll.totalPay, 0);

  return (
    <div className="flex flex-col gap-8">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Attendance Management</h1>
        <p className="text-muted-foreground">Track employee attendance and manage weekly payroll calculations.</p>
      </header>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Present Today</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{presentCount}</div>
            <p className="text-xs text-muted-foreground">Out of {attendanceRecords.length} employees</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Absent Today</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{absentCount}</div>
            <p className="text-xs text-muted-foreground">{lateCount} came late</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours Today</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours}h</div>
            <p className="text-xs text-muted-foreground">Across all employees</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Payroll</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${totalPayroll.toLocaleString()}</div>
            <p className="text-xs text-muted-foreground">This week's total</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="attendance" className="space-y-4">
        <TabsList>
          <TabsTrigger value="attendance">Daily Attendance</TabsTrigger>
          <TabsTrigger value="payroll">Weekly Payroll</TabsTrigger>
        </TabsList>
        
        <TabsContent value="attendance" className="space-y-4">
          {/* Date Selector */}
          <div className="flex items-center gap-4">
            <label htmlFor="date" className="text-sm font-medium">Select Date:</label>
            <Input
              id="date"
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-auto"
            />
            <Button variant="outline">
              <Calendar className="mr-2 h-4 w-4" />
              Today's Report
            </Button>
          </div>

          {/* Attendance Table */}
          <Card>
            <CardHeader>
              <CardTitle>Attendance Records - {new Date(selectedDate).toLocaleDateString()}</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Check In</TableHead>
                    <TableHead>Check Out</TableHead>
                    <TableHead>Hours Worked</TableHead>
                    <TableHead>Overtime</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {attendanceRecords.map((record) => (
                    <TableRow key={record.id}>
                      <TableCell>
                        <div className="font-medium">{record.employeeName}</div>
                        <div className="text-sm text-muted-foreground">{record.employeeId}</div>
                      </TableCell>
                      <TableCell>{record.checkIn}</TableCell>
                      <TableCell>{record.checkOut}</TableCell>
                      <TableCell>{record.hoursWorked}h</TableCell>
                      <TableCell>{record.overtime}h</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          {getStatusIcon(record.status)}
                          <Badge className={`${getStatusColor(record.status)} text-white`}>
                            {record.status.replace('-', ' ')}
                          </Badge>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="payroll" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Weekly Payroll Calculation</CardTitle>
              <Button>
                <DollarSign className="mr-2 h-4 w-4" />
                Process Payroll
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Regular Hours</TableHead>
                    <TableHead>Overtime Hours</TableHead>
                    <TableHead>Hourly Rate</TableHead>
                    <TableHead>Regular Pay</TableHead>
                    <TableHead>Overtime Pay</TableHead>
                    <TableHead>Total Pay</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {weeklyPayroll.map((payroll) => (
                    <TableRow key={payroll.employeeId}>
                      <TableCell>
                        <div className="font-medium">{payroll.employeeName}</div>
                        <div className="text-sm text-muted-foreground">{payroll.employeeId}</div>
                      </TableCell>
                      <TableCell>{payroll.regularHours}h</TableCell>
                      <TableCell>{payroll.overtimeHours}h</TableCell>
                      <TableCell>${payroll.hourlyRate}</TableCell>
                      <TableCell>${payroll.regularPay.toFixed(2)}</TableCell>
                      <TableCell>${payroll.overtimePay.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="font-semibold">${payroll.totalPay.toFixed(2)}</div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              
              <div className="mt-4 pt-4 border-t">
                <div className="flex justify-between items-center text-lg font-semibold">
                  <span>Total Weekly Payroll:</span>
                  <span>${totalPayroll.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AttendancePage;
