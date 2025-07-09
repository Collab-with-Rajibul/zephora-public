
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../../ui/button";
import { MoreHorizontal } from "lucide-react";
import { Supplier } from "@/lib/types";
import { format } from "date-fns";

interface SuppliersTableProps {
  suppliers: Supplier[];
}

export function SuppliersTable({ suppliers }: SuppliersTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Created At</TableHead>
          <TableHead>Last Order</TableHead>
          <TableHead className="text-right">Total Spent</TableHead>
          <TableHead><span className="sr-only">Actions</span></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {suppliers.map((supplier) => (
          <TableRow key={supplier.id}>
            <TableCell className="font-medium">{supplier.name}</TableCell>
            <TableCell>{supplier.email}</TableCell>
            <TableCell>{supplier.company}</TableCell>
            <TableCell>{format(new Date(supplier.created_at), "MM/dd/yyyy")}</TableCell>
            <TableCell>{supplier.last_order_date ? format(new Date(supplier.last_order_date), "MM/dd/yyyy") : '-'}</TableCell>
            <TableCell className="text-right">
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(supplier.total_spent)}
            </TableCell>
            <TableCell>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-8 w-8 p-0">
                    <span className="sr-only">Open menu</span>
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>View Supplier</DropdownMenuItem>
                  <DropdownMenuItem>Edit Supplier</DropdownMenuItem>
                  <DropdownMenuItem>Delete Supplier</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
