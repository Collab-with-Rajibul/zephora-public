
import { PurchaseBill } from '@/lib/types';
import { suppliers } from './suppliers';
import { subDays, formatISO } from 'date-fns';

const now = new Date();

export const purchaseBills: PurchaseBill[] = [
  {
    id: 'bill-001',
    billNumber: 'PB-2025-001',
    supplier: suppliers[0],
    date: formatISO(subDays(now, 5)),
    dueDate: formatISO(subDays(now, -25)),
    amount: 750.00,
    status: 'paid',
    description: 'Quarterly office supplies',
  },
  {
    id: 'bill-002',
    billNumber: 'PB-2025-002',
    supplier: suppliers[1],
    date: formatISO(subDays(now, 10)),
    dueDate: formatISO(subDays(now, -20)),
    amount: 5200.00,
    status: 'unpaid',
    description: 'Micro-controller units',
  },
  {
    id: 'bill-003',
    billNumber: 'PB-2025-003',
    supplier: suppliers[2],
    date: formatISO(subDays(now, 40)),
    dueDate: formatISO(subDays(now, -10)),
    amount: 1250.50,
    status: 'overdue',
    description: 'Business card printing',
  },
  {
    id: 'bill-004',
    billNumber: 'PB-2025-004',
    supplier: suppliers[3],
    date: formatISO(subDays(now, 1)),
    dueDate: formatISO(subDays(now, -29)),
    amount: 500.00,
    status: 'paid',
    description: 'Monthly web hosting',
  },
  {
    id: 'bill-005',
    billNumber: 'PB-2025-005',
    supplier: suppliers[0],
    date: formatISO(subDays(now, 2)),
    dueDate: formatISO(subDays(now, -28)),
    amount: 320.75,
    status: 'draft',
    description: 'Ergonomic chairs',
  },
];
