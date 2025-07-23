"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, Trash2 } from "lucide-react";

// 1. EmailMessage Type
type EmailMessage = {
  id: string;
  senderName: string;
  senderEmail: string;
  subject: string;
  receivedAt: string;
  avatarUrl: string;
};

// 2. Dummy Email Data
const emailData: EmailMessage[] = [
  {
    id: "1",
    senderName: "John Doe",
    senderEmail: "john@example.com",
    subject: "Your invoice is ready",
    receivedAt: "2025-07-21T08:30:00Z",
    avatarUrl: "/jhon doe.svg",
  },
  {
    id: "2",
    senderName: "Jane Smith",
    senderEmail: "jane@example.com",
    subject: "Welcome to our service!",
    receivedAt: "2025-07-20T14:15:00Z",
    avatarUrl: "/jane.svg",
  },
  {
    id: "3",
    senderName: "Support Team",
    senderEmail: "support@domain.com",
    subject: "Password reset instructions",
    receivedAt: "2025-07-19T10:00:00Z",
    avatarUrl: "/support.svg",
  },
];

// 3. Columns Definition
const emailColumns: ColumnDef<EmailMessage>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 20,
  },
  {
    accessorKey: "senderEmail",
    header: "Email",
    cell: ({ row }) => {
      const message = row.original;
      return (
        <div className="flex items-center gap-3">
          <img
            src={message.avatarUrl}
            alt={message.senderName}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{message.senderName}</span>
            <span className="text-sm text-muted-foreground">
              {message.senderEmail}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: ({ row }) => (
      <div className="truncate max-w-[300px]">{row.getValue("subject")}</div>
    ),
  },
  {
    accessorKey: "receivedAt",
    header: "Received",
    /*************  ✨ Windsurf Command ⭐  *************/
    /**
     * A cell renderer that formats the received at date as a local time string.
     * The date is formatted using the browser's locale, and only the time (not date) is displayed.
     * The time is displayed in 24h format with two digits for the hour and minute.
     *
/*******  174c19e9-d5ab-4d98-acfb-04d3d47d3665  *******/ cell: ({ row }) => {
      const date = new Date(row.getValue("receivedAt"));
      return (
        <div className="text-sm text-muted-foreground">
          {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const message = row.original;

      const handlePreview = () => {
        alert(`Previewing email from: ${message.senderEmail}`);
      };

      const handleDelete = () => {
        alert(`Deleting email ID: ${message.id}`);
      };

      return (
        <div className="flex gap-2">
          <Button
            size="icon"
            variant="ghost"
            onClick={handlePreview}
            className="h-8 w-8"
          >
            <Eye className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="ghost"
            onClick={handleDelete}
            className="h-8 w-8 text-red-500"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      );
    },
  },
];

// 4. Inbox Table Component
export function CardInbox() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: emailData,
    columns: emailColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      {/* Search */}
      <div className="flex items-center py-4">
        <Input
          placeholder="Search email"
          value={
            (table.getColumn("senderEmail")?.getFilterValue() as string) ?? ""
          }
          onChange={(event) =>
            table.getColumn("senderEmail")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>

      {/* Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={emailColumns.length}
                  className="text-center h-24"
                >
                  No messages found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          // disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          // disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default CardInbox;
