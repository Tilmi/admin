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
import { Eye, Trash2 } from "lucide-react";

// Define data structure
type TeamMember = {
  id: string;
  name: string;
  email: string;
  department: string;
  position: string;
  avatarUrl: string;
  status: "Active" | "Offline";
};

// Dummy team member data
const teamData: TeamMember[] = [
  {
    id: "1",
    name: "Marry Jane",
    email: "jane@untitledui.com",
    department: "Technology Information",
    position: "SVP",
    avatarUrl: "/jane.svg",
    status: "Active",
  },
  {
    id: "2",
    name: "Xavier Chua",
    email: "xavier@untitledui.com",
    department: "Technology Information",
    position: "VP",
    avatarUrl: "/xavier.svg",
    status: "Active",
  },
  {
    id: "3",
    name: "Jordan Smith",
    email: "jordan@untitledui.com",
    department: "Technology Information",
    position: "Officer",
    avatarUrl: "/jordan.svg",
    status: "Offline",
  },
  {
    id: "4",
    name: "Mathew",
    email: "mathew@untitledui.com",
    department: "Technology Information",
    position: "Staff",
    avatarUrl: "/mathew.svg",
    status: "Active",
  },
  {
    id: "5",
    name: "Jhon Doe",
    email: "jhondoe@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/jhon doe.svg",
    status: "Active",
  },
  {
    id: "6",
    name: "Madison Beer",
    email: "madison@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/madison.svg",
    status: "Offline",
  },
  {
    id: "1",
    name: "Marry Jane",
    email: "jane@untitledui.com",
    department: "Technology Information",
    position: "SVP",
    avatarUrl: "/jane.svg",
    status: "Active",
  },
  {
    id: "2",
    name: "Xavier Chua",
    email: "xavier@untitledui.com",
    department: "Technology Information",
    position: "VP",
    avatarUrl: "/xavier.svg",
    status: "Active",
  },
  {
    id: "3",
    name: "Jordan Smith",
    email: "jordan@untitledui.com",
    department: "Technology Information",
    position: "Officer",
    avatarUrl: "/jordan.svg",
    status: "Offline",
  },
  {
    id: "4",
    name: "Mathew",
    email: "mathew@untitledui.com",
    department: "Technology Information",
    position: "Staff",
    avatarUrl: "/mathew.svg",
    status: "Active",
  },
  {
    id: "5",
    name: "Jhon Doe",
    email: "jhondoe@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/jhon doe.svg",
    status: "Active",
  },
  {
    id: "6",
    name: "Madison Beer",
    email: "madison@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/madison.svg",
    status: "Offline",
  },
  {
    id: "1",
    name: "Marry Jane",
    email: "jane@untitledui.com",
    department: "Technology Information",
    position: "SVP",
    avatarUrl: "/jane.svg",
    status: "Active",
  },
  {
    id: "2",
    name: "Xavier Chua",
    email: "xavier@untitledui.com",
    department: "Technology Information",
    position: "VP",
    avatarUrl: "/xavier.svg",
    status: "Active",
  },
  {
    id: "3",
    name: "Jordan Smith",
    email: "jordan@untitledui.com",
    department: "Technology Information",
    position: "Officer",
    avatarUrl: "/jordan.svg",
    status: "Offline",
  },
  {
    id: "4",
    name: "Mathew",
    email: "mathew@untitledui.com",
    department: "Technology Information",
    position: "Staff",
    avatarUrl: "/mathew.svg",
    status: "Active",
  },
  {
    id: "5",
    name: "Jhon Doe",
    email: "jhondoe@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/jhon doe.svg",
    status: "Active",
  },
  {
    id: "6",
    name: "Madison Beer",
    email: "madison@untitledui.com",
    department: "Technology Information",
    position: "Internship",
    avatarUrl: "/madison.svg",
    status: "Offline",
  },
  // Additional dummy data can go here
];

// Columns definition
const teamColumns: ColumnDef<TeamMember>[] = [
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
    header: "Name",
    cell: ({ row }) => {
      const member = row.original;
      return (
        <div className="flex items-center gap-3">
          <img
            src={member.avatarUrl}
            alt={member.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-medium">{member.name}</span>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Mails",
    cell: ({ row }) => (
      <div className="truncate max-w-[300px]">{row.getValue("email")}</div>
    ),
  },
  {
    accessorKey: "department",
    header: "Department",
    cell: ({ row }) => row.getValue("department"),
  },
  {
    accessorKey: "position",
    header: "Position",
    cell: ({ row }) => row.getValue("position"),
  },
  {
    id: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;
      return (
        <span
          className={`inline-flex items-center justify-center px-2 py-1 text-xs font-semibold rounded-full ${
            status === "Active"
              ? "bg-green-100 text-green-500"
              : "bg-red-100 text-red-500 "
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
      const member = row.original;

      const handlePreview = () => {
        alert(`Previewing profile of: ${member.name}`);
      };

      const handleDelete = () => {
        alert(`Deleting member ID: ${member.id}`);
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

// Table component
export function TeamTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data: teamData,
    columns: teamColumns,
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
          placeholder="Search by email"
          value={(table.getColumn("email")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
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
                  data-state={row.getIsSelected() ? "selected" : ""}
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
                  colSpan={teamColumns.length}
                  className="text-center h-24"
                >
                  No members found.
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

export default TeamTable;
