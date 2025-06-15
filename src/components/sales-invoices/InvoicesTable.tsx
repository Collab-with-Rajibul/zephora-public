
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
import { Copy, Download, Edit, Eye, MoreHorizontal, Printer, Send, Trash, X, DollarSign } from "lucide-react";
import { invoices } from "@/data/sales-invoices";
import { InvoiceStatus } from "@/lib/types";
import { cn } from "@/lib/utils";

const statusColorMap: Record<InvoiceStatus, string> = {
  paid: "bg-green-100 text-green-800 border-green-200 dark:bg-green-900/50 dark:text-green-300 dark:border-green-700",
  sent: "bg-blue-100 text-blue-800 border-blue-200 dark:bg-blue-900/50 dark:text-blue-300 dark:border-blue-700",
  overdue: "bg-red-100 text-red-800 border-red-200 dark:bg-red-900/50 dark:text-red-300 dark:border-red-700",
  draft: "bg-gray-100 text-gray-800 border-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-600",
  "partially-paid": "bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900/50 dark:text-yellow-300 dark:border-yellow-700",
  cancelled: "bg-gray-100 text-gray-500 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700",
};

export function InvoicesTable() {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[120px]">Invoice #</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Amount</TableHead>
            <TableHead className="w-[80px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map((invoice) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{invoice.invoiceNumber}</TableCell>
              <TableCell>{invoice.customer.name}</TableCell>
              <TableCell>{invoice.date}</TableCell>
              <TableCell>
                <Badge variant="outline" className={cn("capitalize", statusColorMap[invoice.status])}>
                  {invoice.status.replace('-', ' ')}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                {invoice.amount.toLocaleString("en-US", {
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
                    <DropdownMenuItem><Eye className="mr-2 h-4 w-4" />View Invoice</DropdownMenuItem>
                    <DropdownMenuItem><Edit className="mr-2 h-4 w-4" />Edit Invoice</DropdownMenuItem>
                    <DropdownMenuItem><Copy className="mr-2 h-4 w-4" />Duplicate Invoice</DropdownMenuItem>
                    <DropdownMenuItem><Send className="mr-2 h-4 w-4" />Send Invoice</DropdownMenuItem>
                    <DropdownMenuItem><DollarSign className="mr-2 h-4 w-4" />Record Payment</DropdownMenuItem>
                    <DropdownMenuItem><Download className="mr-2 h-4 w-4" />Download PDF</DropdownMenuItem>
                    <DropdownMenuItem><Printer className="mr-2 h-4 w-4" />Print Invoice</DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="text-red-600 focus:text-red-600 focus:bg-red-50 dark:focus:bg-red-900/80"><X className="mr-2 h-4 w-4" />Cancel Invoice</DropdownMenuItem>
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
