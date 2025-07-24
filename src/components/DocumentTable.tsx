"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
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
import { Eye, Pen, Trash2, Ellipsis } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DocumentSheet } from "./DocumentSheet";

// Define data structure
type Document = {
  id: string;
  name: string;
  type: string;
  size: number; // in bytes
  date: string; // formatted date
  status: "Completed" | "Pending";
  url: string; // document URL or file path
};

// Dummy document data
const documents: Document[] = [
  {
    id: "1",
    name: "Document 1",
    type: "PDF",
    size: 102400, // 100 KB
    date: "2025-07-22T14:35:00",
    status: "Completed",
    url: "/documents/doc1.pdf",
  },
  {
    id: "2",
    name: "Presentation Slides",
    type: "PPT",
    size: 512000, // 500 KB
    date: "2025-07-20T10:25:00",
    status: "Pending",
    url: "/documents/presentation.ppt",
  },
  {
    id: "3",
    name: "Document 2",
    type: "PDF",
    size: 102400, // 100 KB
    date: "2025-07-22T14:35:00",
    status: "Completed",
    url: "/documents/doc2.pdf",
  },
  {
    id: "4",
    name: "Presentation Slides 2",
    type: "PPT",
    size: 512000, // 500 KB
    date: "2025-07-20T10:25:00",
    status: "Pending",
    url: "/documents/presentation2.ppt",
  },
  {
    id: "5",
    name: "Document 3",
    type: "PDF",
    size: 102400, // 100 KB
    date: "2025-07-22T14:35:00",
    status: "Completed",
    url: "/documents/doc3.pdf",
  },
  {
    id: "6",
    name: "Presentation Slides 3",
    type: "PPT",
    size: 512000, // 500 KB
    date: "2025-07-20T10:25:00",
    status: "Pending",
    url: "/documents/presentation3.ppt",
  },
  {
    id: "7",
    name: "Document 4",
    type: "PDF",
    size: 102400, // 100 KB
    date: "2025-07-22T14:35:00",
    status: "Completed",
    url: "/documents/doc4.pdf",
  },
  {
    id: "8",
    name: "Presentation Slides 4",
    type: "PPT",
    size: 512000, // 500 KB
    date: "2025-07-20T10:25:00",
    status: "Pending",
    url: "/documents/presentation4.ppt",
  },
  {
    id: "9",
    name: "Document 5",
    type: "PDF",
    size: 102400, // 100 KB
    date: "2025-07-22T14:35:00",
    status: "Completed",
    url: "/documents/doc5.pdf",
  },
  {
    id: "10",
    name: "Presentation Slides 5",
    type: "PPT",
    size: 512000, // 500 KB
    date: "2025-07-20T10:25:00",
    status: "Pending",
    url: "/documents/presentation5.ppt",
  },
];

// Columns definition
const documentColumns: ColumnDef<Document>[] = [
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
    accessorKey: "name",
    header: "Document Name",
    cell: ({ row }) => {
      const document = row.original;
      return (
        <div className="flex items-center gap-3">
          <img
            src="/document.svg" // Example file icon
            alt={document.name}
            className="w-6 h-6 object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{document.name}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => row.getValue("type"),
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ row }) => {
      const sizeInMB = (Number(row.getValue("size")) / 1024 / 1024).toFixed(2); // Convert bytes to MB
      return `${sizeInMB} MB`;
    },
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => row.getValue("date"),
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full ${
            status === "Completed"
              ? "bg-green-100 text-green-500"
              : "bg-yellow-100 text-yellow-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const document = row.original;

      const handlePreview = () => {
        alert(`Previewing: ${document.name}`);
      };

      const handleDelete = () => {
        alert(`Deleting document ID: ${document.id}`);
      };

      const handleApproval = () => {
        alert(`Approving document ID: ${document.id}`);
      };

      const handleEdit = () => {
        alert(`Editing document ID: ${document.id}`);
      };

      return (
        <div className="flex gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="p-1">
                <Ellipsis className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40" align="start">
              <DropdownMenuLabel>Action</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={handlePreview}>
                  <Eye className="w-4 h-4 mr-2" />
                  View
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleEdit}>
                  <Pen className="w-4 h-4 mr-2" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleDelete} variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleApproval}>
                  <Pen className="w-4 h-4 mr-2" />
                  Approve
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];

export function DocumentTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: documents,
    columns: documentColumns,
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
      <div className="flex flex-row justify-between items-center py-4">
        <Input
          placeholder="Search by document name"
          value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <DocumentSheet />
      </div>

      {/* Table */}
      <div className="rounded-md border overflow-x-auto">
        <Table className="table-auto min-w-full">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className="px-4 py-2">
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
                  data-state={row.getIsSelected() ? "selected" : ""}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-4 py-2">
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
                  colSpan={documentColumns.length}
                  className="text-center h-24"
                >
                  No documents found.
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
        >
          Previous
        </Button>
        <Button variant="outline" size="sm" onClick={() => table.nextPage()}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default DocumentTable;
