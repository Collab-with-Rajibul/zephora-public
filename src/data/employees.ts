
export interface Employee {
  id: string;
  name: string;
  position: string;
  department: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive';
  salary: number;
  hireDate: string;
}

export const employees: Employee[] = [
  {
    id: 'EMP001',
    name: 'John Smith',
    position: 'Software Engineer',
    department: 'Technology',
    email: 'john.smith@company.com',
    phone: '+1 (555) 123-4567',
    status: 'active',
    salary: 75000,
    hireDate: '2023-01-15'
  },
  {
    id: 'EMP002',
    name: 'Sarah Johnson',
    position: 'Marketing Manager',
    department: 'Marketing',
    email: 'sarah.johnson@company.com',
    phone: '+1 (555) 234-5678',
    status: 'active',
    salary: 68000,
    hireDate: '2022-08-20'
  },
  {
    id: 'EMP003',
    name: 'Michael Brown',
    position: 'Sales Representative',
    department: 'Sales',
    email: 'michael.brown@company.com',
    phone: '+1 (555) 345-6789',
    status: 'active',
    salary: 55000,
    hireDate: '2023-03-10'
  },
  {
    id: 'EMP004',
    name: 'Emily Davis',
    position: 'HR Coordinator',
    department: 'Human Resources',
    email: 'emily.davis@company.com',
    phone: '+1 (555) 456-7890',
    status: 'inactive',
    salary: 50000,
    hireDate: '2021-11-05'
  }
];
