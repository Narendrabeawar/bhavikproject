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
} from "@tanstack/react-table"
import { Search, Plus } from "lucide-react"
import { Sidebar } from "./sidebar"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Checkbox } from "./ui/checkbox"

interface Campaign {
  id: string
  title: string
  status: "Sent" | "Draft" | "Scheduled"
  recipients: number
  delivered: string
  createdAt: string
}

const campaignsData: Campaign[] = [
  {
    id: "1",
    title: "Summer Sale Campaign",
    status: "Sent",
    recipients: 2500,
    delivered: "97.2%",
    createdAt: "12-08-25",
  },
  {
    id: "2",
    title: "New Product Launch",
    status: "Sent",
    recipients: 1800,
    delivered: "95.8%",
    createdAt: "12-08-25",
  },
  {
    id: "3",
    title: "Festival Greetings",
    status: "Draft",
    recipients: 3200,
    delivered: "-",
    createdAt: "12-08-25",
  },
  {
    id: "4",
    title: "Feedback Request",
    status: "Draft",
    recipients: 1500,
    delivered: "-",
    createdAt: "12-08-25",
  },
  {
    id: "5",
    title: "Year End Offers",
    status: "Draft",
    recipients: 2100,
    delivered: "-",
    createdAt: "12-08-25",
  },
  {
    id: "6",
    title: "Webinar Reminder",
    status: "Scheduled",
    recipients: 900,
    delivered: "-",
    createdAt: "12-08-25",
  },
  {
    id: "7",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Scheduled",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
  {
    id: "8",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Draft",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
  {
    id: "9",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Draft",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
  {
    id: "10",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Scheduled",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
  {
    id: "11",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Scheduled",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
  {
    id: "12",
    title: "Lorem ipsum dolor lorem ipsum dolor",
    status: "Sent",
    recipients: 4047,
    delivered: "98.6%",
    createdAt: "12-08-25",
  },
]

const columnHelper = createColumnHelper<Campaign>()

interface CampaignsPageProps {
  currentPage: string
  onNavigateAction: (page: string) => void
}

export function CampaignsPage({ currentPage, onNavigateAction }: CampaignsPageProps) {
  const [globalFilter, setGlobalFilter] = useState("")
  const [activeTab, setActiveTab] = useState("Email") // Email tab active by default
  const [rowSelection, setRowSelection] = useState({})

  // Filter campaigns by tab (for demo, WhatsApp = Sent, Email = Draft, Scheduled = Scheduled)
  const filteredCampaigns = useMemo(() => {
    if (activeTab === "WhatsApp") return campaignsData.filter(c => c.status === "Sent")
    if (activeTab === "Email") return campaignsData.filter(c => c.status === "Draft")
    if (activeTab === "Scheduled") return campaignsData.filter(c => c.status === "Scheduled")
    return campaignsData
  }, [activeTab])

  const columns = useMemo(
    () => [
      columnHelper.display({
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
      }),
      columnHelper.accessor("title", {
        header: "Title",
        cell: (info) => <div className="font-medium text-gray-900">{info.getValue()}</div>,
      }),
      columnHelper.accessor("status", {
        header: "Status",
        cell: (info) => {
          const status = info.getValue()
          const statusColors = {
            Sent: "bg-green-100 text-green-800",
            Draft: "bg-gray-100 text-gray-800",
            Scheduled: "bg-blue-100 text-blue-800",
          }
          return <Badge className={`${statusColors[status]} border-0`}>{status}</Badge>
        },
      }),
      columnHelper.accessor("recipients", {
        header: "Recipients",
        cell: (info) => <div className="text-gray-900">{info.getValue().toLocaleString()}</div>,
      }),
      columnHelper.accessor("delivered", {
        header: "Delivered",
        cell: (info) => <div className="text-gray-900">{info.getValue()}</div>,
      }),
      columnHelper.accessor("createdAt", {
        header: "Created at",
        cell: (info) => <div className="text-gray-500">{info.getValue()}</div>,
      }),
    ],
    [],
  )

  const table = useReactTable({
    data: filteredCampaigns,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onRowSelectionChange: setRowSelection,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: "includesString",
    state: {
      rowSelection,
      globalFilter,
    },
    initialState: {
      pagination: {
        pageSize: 15,
      },
    },
  })

  return (
    <div className="flex h-screen bg-gray-50">
  <Sidebar currentPage={currentPage} onNavigateAction={onNavigateAction} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <span className="text-sm text-blue-600 font-medium">Campaigns</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-orange-100 rounded-full">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <span className="text-sm font-medium text-gray-900">Harshita Singh</span>
              <div className="w-8 h-8 bg-orange-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-medium text-orange-800">H</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-blue-600 mb-6">Campaigns</h1>

            {/* Search and Actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Search..."
                    value={globalFilter ?? ""}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    className="pl-10 w-64"
                  />
                </div>

                {/* Filter Tabs */}
                <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => setActiveTab("WhatsApp")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "WhatsApp" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    onClick={() => setActiveTab("Email")}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === "Email" ? "bg-blue-600 text-white" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Email
                  </button>
                </div>
              </div>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                New Campaign
              </Button>
            </div>

            {/* Table */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <Table>
                <TableHeader>
                  {table.getHeaderGroups().map((headerGroup) => (
                    <TableRow key={headerGroup.id} className="border-b border-gray-200">
                      {headerGroup.headers.map((header) => (
                        <TableHead
                          key={header.id}
                          className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-4"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              className={
                                header.column.getCanSort()
                                  ? "cursor-pointer select-none flex items-center space-x-1"
                                  : ""
                              }
                              onClick={header.column.getToggleSortingHandler()}
                            >
                              {flexRender(header.column.columnDef.header, header.getContext())}
                              {{
                                asc: " 🔼",
                                desc: " 🔽",
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </TableHead>
                      ))}
                    </TableRow>
                  ))}
                </TableHeader>
                <TableBody>
                  {table.getRowModel().rows.map((row) => (
                    <TableRow key={row.id} className="border-b border-gray-100 hover:bg-gray-50">
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell.id} className="py-4 px-4">
                          {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-4">
              <div className="text-sm text-gray-700">
                Showing {table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1} to{" "}
                {Math.min(
                  (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
                  table.getFilteredRowModel().rows.length,
                )}{" "}
                of {table.getFilteredRowModel().rows.length} results
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
                <Button variant="outline" size="sm" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
