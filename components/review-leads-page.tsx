"use client"

import { useState, useMemo } from "react"
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  flexRender,
  type ColumnDef,
  type SortingState,
  type ColumnFiltersState,
} from "@tanstack/react-table"
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Bell, ArrowUpDown, ChevronLeft, ChevronRight } from "lucide-react"
import { ContactDetailModal } from "@/components/contact-detail-modal"

interface ReviewLeadsPageProps {
  currentPage: string
  onNavigateAction: (page: string) => void
}

interface Lead {
  id: number
  company: string
  link: string
  createdBy: { name: string; avatar: string }
  whatsappNo: string
  headContact: { name: string; avatar: string }
}

const leadsData: Lead[] = [
  {
    id: 1,
    company: "Companies",
    link: "company.com",
    createdBy: { name: "Harshita Singh", avatar: "/placeholder.svg?height=32&width=32" },
    whatsappNo: "+91 57585 85858",
    headContact: { name: "Tara Shareef", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 2,
    company: "Companies",
    link: "company.com",
    createdBy: { name: "Mukesh Mukherjee", avatar: "/placeholder.svg?height=32&width=32" },
    whatsappNo: "+91 57585 85858",
    headContact: { name: "Tara Shareef", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 3,
    company: "Companies",
    link: "company.com",
    createdBy: { name: "Harshita Singh", avatar: "/placeholder.svg?height=32&width=32" },
    whatsappNo: "+91 57585 85858",
    headContact: { name: "Tara Shareef", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 4,
    company: "Companies",
    link: "company.com",
    createdBy: { name: "Hitesh Chaudhary", avatar: "/placeholder.svg?height=32&width=32" },
    whatsappNo: "+91 57585 85858",
    headContact: { name: "Tara Shareef", avatar: "/placeholder.svg?height=32&width=32" },
  },
  {
    id: 5,
    company: "Companies",
    link: "company.com",
    createdBy: { name: "Mukesh Mukherjee", avatar: "/placeholder.svg?height=32&width=32" },
    whatsappNo: "+91 57585 85858",
    headContact: { name: "Tara Shareef", avatar: "/placeholder.svg?height=32&width=32" },
  },
]

export function ReviewLeadsPage({ currentPage, onNavigateAction }: ReviewLeadsPageProps) {
  const [activeTab, setActiveTab] = useState("Companies")
  const [selectedContact, setSelectedContact] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState("")
  const [rowSelection, setRowSelection] = useState({})

  const handleContactClick = (contact: any) => {
    setSelectedContact({
      name: contact.name,
      avatar: contact.avatar,
      company: "Company",
      email: "email@email.com",
      phone: "+91 57585 85858",
      jobTitle: "CEO",
      createdDate: "12-08-25",
    })
    setIsModalOpen(true)
  }

  const handleAction = (action: string, leadId: number) => {
    console.log(`${action} action for lead ${leadId}`)
  }

  const columns = useMemo<ColumnDef<Lead>[]>(
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
      {
        accessorKey: "company",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="h-auto p-0 font-medium text-gray-600"
            >
              Companies
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="font-medium">{row.getValue("company")}</div>,
      },
      {
        accessorKey: "link",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="h-auto p-0 font-medium text-gray-600"
            >
              Link
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <span className="text-blue-600 hover:underline cursor-pointer">{row.getValue("link")}</span>,
      },
      {
        accessorKey: "createdBy",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="h-auto p-0 font-medium text-gray-600"
            >
              Created by
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => {
          const createdBy = row.original.createdBy
          return (
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={createdBy.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {createdBy.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => handleContactClick(createdBy)}
              >
                @{createdBy.name}
              </span>
            </div>
          )
        },
      },
      {
        accessorKey: "whatsappNo",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="h-auto p-0 font-medium text-gray-600"
            >
              WhatsApp No.
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => <div className="text-gray-600">{row.getValue("whatsappNo")}</div>,
      },
      {
        accessorKey: "headContact",
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
              className="h-auto p-0 font-medium text-gray-600"
            >
              Head Contact
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
        cell: ({ row }) => {
          const headContact = row.original.headContact
          return (
            <div className="flex items-center gap-2">
              <Avatar className="w-6 h-6">
                <AvatarImage src={headContact.avatar || "/placeholder.svg"} />
                <AvatarFallback>
                  {headContact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <span
                className="text-blue-600 hover:underline cursor-pointer"
                onClick={() => handleContactClick(headContact)}
              >
                @{headContact.name}
              </span>
            </div>
          )
        },
      },
      {
        id: "actions",
        header: "Actions",
        cell: ({ row }) => {
          const lead = row.original
          return (
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="text-green-600 border-green-600 hover:bg-green-50 bg-transparent"
                onClick={() => handleAction("Approve", lead.id)}
              >
                Approve
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                onClick={() => handleAction("Reject", lead.id)}
              >
                Reject
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="text-gray-600 border-gray-300 hover:bg-gray-50 bg-transparent"
                onClick={() => handleAction("Later", lead.id)}
              >
                Later
              </Button>
            </div>
          )
        },
      },
    ],
    [],
  )

  const table = useReactTable({
    data: leadsData,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      rowSelection,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
  })

  return (
    <div className="flex h-screen bg-gray-50">
  <Sidebar currentPage={currentPage} onNavigateAction={onNavigateAction} />

      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm"></div>
              </div>
              <span className="text-blue-600 font-medium">Review Leads</span>
            </div>
            <div className="flex items-center gap-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <div className="flex items-center gap-2">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Harshita Singh</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-6">Review Leads</h1>

            {/* Search and Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search..."
                    value={globalFilter ?? ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="pl-10 w-80"
                  />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center gap-2">
                  <Button
                    variant={activeTab === "Companies" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("Companies")}
                    className={activeTab === "Companies" ? "bg-blue-600 text-white" : ""}
                  >
                    Companies
                  </Button>
                  <Button
                    variant={activeTab === "Contacts" ? "default" : "outline"}
                    size="sm"
                    onClick={() => setActiveTab("Contacts")}
                    className={activeTab === "Contacts" ? "bg-blue-600 text-white" : ""}
                  >
                    Contacts
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View Archive
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" size="sm">
                  + Add Lead
                </Button>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-white rounded-lg border border-gray-200">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="border-b border-gray-200">
                      {headerGroup.headers.map((header) => {
                        return (
                          <TableHead key={header.id}>
                            {header.isPlaceholder
                              ? null
                              : flexRender(header.column.columnDef.header, header.getContext())}
                          </TableHead>
                        )
                      })}
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
                          <TableCell key={cell.id}>
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

              {/* Pagination */}
              <div className="flex items-center justify-between space-x-2 py-4 px-4">
                <div className="flex-1 text-sm text-muted-foreground">
                  {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s)
                  selected.
                </div>
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-medium">Rows per page</p>
                    <select
                      value={table.getState().pagination.pageSize}
                      onChange={(e) => {
                        table.setPageSize(Number(e.target.value))
                      }}
                      className="h-8 w-[70px] rounded border border-input bg-background px-3 py-1 text-sm"
                    >
                      {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                          {pageSize}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 bg-transparent"
                      onClick={() => table.previousPage()}
                      disabled={!table.getCanPreviousPage()}
                    >
                      <span className="sr-only">Go to previous page</span>
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0 bg-transparent"
                      onClick={() => table.nextPage()}
                      disabled={!table.getCanNextPage()}
                    >
                      <span className="sr-only">Go to next page</span>
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Contact Detail Modal */}
  <ContactDetailModal contactName={selectedContact} isOpen={isModalOpen} onCloseAction={() => setIsModalOpen(false)} />
    </div>
  )
}
