import { Invoice, Customer, InvoiceStatus } from '@/lib/types';
import { customers } from './customers';

const descriptions = [
  "Web design and development services",
  "Monthly retainer for marketing services",
  "Cloud infrastructure setup and configuration",
  "Annual software license subscription",
  "Consulting services for Q2 2025",
  "Hardware purchase: 2x Laptops, 1x Monitor",
];

const statuses: InvoiceStatus[] = ['paid', 'sent', 'overdue', 'draft', 'partially-paid', 'paid', 'sent', 'paid'];

export const invoices: Invoice[] = Array.from({ length: 15 }, (_, i) => {
  const customer = customers[i % customers.length];
  const amount = Math.floor(Math.random() * (15000 - 50 + 1)) + 50;
  const date = new Date(2025, 5 - Math.floor(i / 2), 28 - i);
  const dueDate = new Date(date);
  dueDate.setDate(date.getDate() + 30);
  
  return {
    id: `INV-${2025 - i}`,
    invoiceNumber: `INV-2025-${String(1001 + i).padStart(4, '0')}`,
    customer,
    amount,
    date: date.toLocaleDateString('en-US'),
    dueDate: dueDate.toLocaleDateString('en-US'),
    status: statuses[i % statuses.length],
    description: descriptions[i % descriptions.length],
  };
});
