
import { Customer } from '@/lib/types';

export const customers: Customer[] = [
    { id: '1', name: 'Innovate LLC', email: 'contact@innovatellc.com', phone: '123-456-7890', company: 'Innovate LLC', created_at: '2024-01-15', total_spent: 12500, last_order_date: '2025-05-20', status: 'active' },
    { id: '2', name: 'Quantum Solutions', email: 'sales@quantum.com', phone: '234-567-8901', company: 'Quantum Solutions', created_at: '2024-02-20', total_spent: 8200, last_order_date: '2025-05-18', status: 'active' },
    { id: '3', name: 'Vertex Designs', email: 'support@vertex.com', phone: '345-678-9012', company: 'Vertex Designs', created_at: '2023-11-10', total_spent: 23450, last_order_date: '2025-04-10', status: 'active' },
    { id: '4', name: 'Nexus Group', email: 'info@nexus.com', phone: '456-789-0123', company: 'Nexus Group', created_at: '2024-03-05', total_spent: 5600, last_order_date: '2025-05-01', status: 'new' },
    { id: '5', name: 'Apex Industries', email: 'hello@apex.com', phone: '567-890-1234', company: 'Apex Industries', created_at: '2023-09-21', total_spent: 17800, last_order_date: '2025-03-15', status: 'active' },
    { id: '6', name: 'Luna Tech', email: 'support@luna.tech', phone: '678-901-2345', company: 'Luna Tech', created_at: '2024-04-12', total_spent: 2500, last_order_date: '2025-04-12', status: 'new' },
    { id: '7', name: 'Solaris Inc.', email: 'contact@solaris.com', phone: '789-012-3456', company: 'Solaris Inc.', created_at: '2023-05-30', total_spent: 31200, last_order_date: '2025-02-28', status: 'churned' },
];
