
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { PurchaseBill, BillStatus } from "@/lib/types";
import { format } from "date-fns";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { MoreHorizontal } from "lucide-react";

interface PurchaseBillsTableProps {
  bills: PurchaseBill[];
}

const statusVariant: { [key in BillStatus]: "default" | "secondary" | "destructive" | "outline" } = {
  paid: "default",
  unpaid: "secondary",
  overdue: "destructive",
  draft: "outline",
  cancelled: "destructive",
  'partially-paid': "secondary"
};

const statusColor: { [key in BillStatus]: string } = {
    paid: 'bg-green-500',
    unpaid: 'bg-blue-500',
    overdue: 'bg-red-500',
    draft: 'bg-gray-500',
    cancelled: 'bg-red-700',
    'partially-paid': 'bg-yellow-500',
}


export function PurchaseBillsTable({ bills }: PurchaseBillsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Bill #</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Supplier</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Due Date</TableHead>
          <TableHead><span className="sr-only">Actions</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {bills.map((bill) => (
          <TableRow key={bill.id}>
            <TableCell className="font-medium">{bill.billNumber}</TableCell>
            <TableCell>{format(new Date(bill.date), "MM/dd/yyyy")}</TableCell>
            <TableCell>{bill.supplier.name}</TableCell>
            <TableCell>{bill.description}</TableCell>
            <TableCell className="text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(bill.amount)}
            </TableCell>
            <TableCell>
              <Badge variant={statusVariant[bill.status]} className={statusColor[bill.status]}>
                {bill.status}
              </Badge>
            </TableCell>
            <TableCell>{format(new Date(bill.dueDate), "MM/dd/yyyy")}</TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Bill</DropdownMenuItem>
                  <DropdownMenuItem>Record Payment</DropdownMenuItem>
                  <DropdownMenuItem>Cancel Bill</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
