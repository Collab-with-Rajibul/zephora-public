
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, Edit, Trash, Mail } from "lucide-react";
import { customers } from "@/data/customers";
import { Customer } from "@/lib/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const statusColorMap: Record<Customer['status'], string> = {
  active: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
  new: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
  churned: "bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
};

export function CustomersTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Customer</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead className="text-right">Total Spent</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell className="font-medium">{customer.name}</TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("capitalize", statusColorMap[customer.status])}>
                  {customer.status}
                </Badge>
              </TableCell>
              <TableCell>{customer.email}</TableCell>
              <TableCell>{customer.phone}</TableCell>
              <TableCell className="text-right">
                {customer.total_spent.toLocaleString("en-US", {
                  style: "currency",
                  currency: "USD",
                })}
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
                    <DropdownMenuItem onClick={() => toast.info(`Viewing profile for ${customer.name}`)}><Eye className="mr-2 h-4 w-4" />View Profile</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Editing profile for ${customer.name}`)}><Edit className="mr-2 h-4 w-4" />Edit Customer</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => toast.info(`Sending email to ${customer.name}`)}><Mail className="mr-2 h-4 w-4" />Send Email</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/80" onClick={() => toast.error(`Deleting profile for ${customer.name}`)}><Trash className="mr-2 h-4 w-4" />Delete Customer</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
