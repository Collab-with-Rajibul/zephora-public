
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { EmployeeSummaryCards } from '@/components/employees/EmployeeSummaryCards';
import { EmployeeSearch } from '@/components/employees/EmployeeSearch';
import { EmployeeTable } from '@/components/employees/EmployeeTable';

interface Employee {
  id: string;
  name: string;
  email: string;
  phone: string;
  position: string;
  department: string;
  salary: number;
  joinDate: string;
  status: 'active' | 'inactive' | 'on-leave';
}

const employees: Employee[] = [
  {
    id: 'EMP001',
    name: 'John Smith',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    position: 'Software Engineer',
    department: 'Engineering',
    salary: 75000,
    joinDate: '2023-01-15',
    status: 'active'
  },
  {
    id: 'EMP002',
    name: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    position: 'Marketing Manager',
    department: 'Marketing',
    salary: 68000,
    joinDate: '2022-08-22',
    status: 'active'
  },
  {
    id: 'EMP003',
    name: 'Mike Davis',
    email: 'mike.davis@company.com',
    phone: '+1 (555) 345-6789',
    position: 'Sales Representative',
    department: 'Sales',
    salary: 45000,
    joinDate: '2023-03-10',
    status: 'on-leave'
  },
  {
    id: 'EMP004',
    name: 'Emily Brown',
    email: 'emily.brown@company.com',
    phone: '+1 (555) 456-7890',
    position: 'HR Specialist',
    department: 'Human Resources',
    salary: 52000,
    joinDate: '2022-11-05',
    status: 'active'
  },
  {
    id: 'EMP005',
    name: 'David Wilson',
    email: 'david.wilson@company.com',
    phone: '+1 (555) 567-8901',
    position: 'Accountant',
    department: 'Finance',
    salary: 58000,
    joinDate: '2023-02-14',
    status: 'inactive'
  }
];

const EmployeesPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-8">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <Button className="sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Add Employee
        </Button>
      </header>

      <EmployeeSummaryCards employees={employees} />

      <EmployeeSearch 
        searchTerm={searchTerm} 
        onSearchChange={setSearchTerm} 
      />

      <EmployeeTable employees={filteredEmployees} />
    </div>
  );
};

export default EmployeesPage;
