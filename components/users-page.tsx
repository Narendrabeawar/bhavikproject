"use client"

import { useState, useMemo } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  createColumnHelper,
  type ColumnDef,
} from "@tanstack/react-table"
import { ChevronDown, ChevronUp, Search, Plus, Users } from "lucide-react"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { ContactDetailModal } from "./contact-detail-modal"

interface User {
  id: string
  name: string
  whatsappNo: string
  email: string
  role: string
  link: string
  createdOn: string
}

interface UsersPageProps {
  currentPage: string
  onNavigate: (page: string) => void
}

const columnHelper = createColumnHelper<User>()

export function UsersPage({ currentPage, onNavigate }: UsersPageProps) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [selectedContact, setSelectedContact] = useState<string | null>(null)

  const data: User[] = useMemo(
    () => [
      {
        id: "1",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "2",
        name: "@Mukesh Mukherjee",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "3",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "4",
        name: "@Hitesh Chaudhary",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "5",
        name: "@Mukesh Mukherjee",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "6",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "7",
        name: "@Hitesh Chaudhary",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "8",
        name: "@Mukesh Mukherjee",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "9",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "10",
        name: "@Hitesh Chaudhary",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "11",
        name: "@Mukesh Mukherjee",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "12",
        name: "@Hitesh Chaudhary",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "13",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "14",
        name: "@Harshita Singh",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
      {
        id: "15",
        name: "@Hitesh Chaudhary",
        whatsappNo: "+91 57585 85858",
        email: "email@email.com",
        role: "Manager",
        link: "company.com",
        createdOn: "12-08-25",
      },
    ],
    [],
  )

  const columns = useMemo<ColumnDef<User>[]>(
    () => [
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
      },
      columnHelper.accessor("name", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            <Users className="mr-2 h-4 w-4" />
            User
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => (
          <button
            onClick={() => setSelectedContact(getValue())}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            {getValue()}
          </button>
        ),
      }),
      columnHelper.accessor("whatsappNo", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            WhatsApp No.
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => <span className="text-gray-900">{getValue()}</span>,
      }),
      columnHelper.accessor("email", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            Email
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => <span className="text-blue-600">{getValue()}</span>,
      }),
      columnHelper.accessor("role", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            Role
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => <span className="text-gray-900">{getValue()}</span>,
      }),
      columnHelper.accessor("link", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            Link
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => <span className="text-blue-600">{getValue()}</span>,
      }),
      columnHelper.accessor("createdOn", {
        header: ({ column }) => (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-auto p-0 font-medium text-gray-600 hover:text-gray-900"
          >
            Created on
            {column.getIsSorted() === "asc" ? (
              <ChevronUp className="ml-2 h-4 w-4" />
            ) : column.getIsSorted() === "desc" ? (
              <ChevronDown className="ml-2 h-4 w-4" />
            ) : null}
          </Button>
        ),
        cell: ({ getValue }) => <span className="text-gray-900">{getValue()}</span>,
      }),
    ],
    [],
  )

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    globalFilterFn: "includesString",
    state: {
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  })

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Users className="h-6 w-6 text-blue-600" />
              <h1 className="text-2xl font-semibold text-gray-900">Users</h1>
            </div>
            <div className="flex items-center space-x-2">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="mr-2 h-4 w-4" />
                Add User
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            {/* Search and Controls */}
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search..."
                      value={globalFilter ?? ""}
                      onChange={(e) => setGlobalFilter(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="name">Name</SelectItem>
                      <SelectItem value="role">Role</SelectItem>
                      <SelectItem value="created">Created</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="border-b border-gray-200">
                      {headerGroup.headers.map((header) => (
                        <TableHead key={header.id} className="text-left py-3 px-4">
                          {header.isPlaceholder
                            ? null
                            : flexRender(header.column.columnDef.header, header.getContext())}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows?.length ? (
                    table.getRowModel().rows.map((row) => (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && "selected"}
                        className="border-b border-gray-100 hover:bg-gray-50"
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id} className="py-3 px-4">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                          </TableCell>
                        ))}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={columns.length} className="h-24 text-center">
                        No results.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <p className="text-sm text-gray-700">
                  {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
                  selected
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2">
                  <p className="text-sm text-gray-700">Rows per page</p>
                  <Select
                    value={`${table.getState().pagination.pageSize}`}
                    onValueChange={(value) => {
                      table.setPageSize(Number(value))
                    }}
                  >
                    <SelectTrigger className="h-8 w-[70px]">
                      <SelectValue placeholder={table.getState().pagination.pageSize} />
                    </SelectTrigger>
                    <SelectContent side="top">
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <SelectItem key={pageSize} value={`${pageSize}`}>
                          {pageSize}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                  >
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                  >
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Detail Modal */}
      <ContactDetailModal
        isOpen={!!selectedContact}
        onClose={() => setSelectedContact(null)}
        contactName={selectedContact || ""}
      />
    </div>
  )
}
