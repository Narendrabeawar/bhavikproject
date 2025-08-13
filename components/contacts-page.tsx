"use client"

import { useState } from "react"
import { Sidebar } from "@/components/sidebar"
import { ContactsTable } from "@/components/contacts-table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Plus, Users } from "lucide-react"

interface ContactsPageProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function ContactsPage({ currentPage, onNavigate }: ContactsPageProps) {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />
      <main className="flex-1 overflow-hidden">
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="bg-white border-b px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2 bg-transparent">
                  <Users className="h-4 w-4" />
                  Add Group
                </Button>
                <Button className="gap-2 bg-blue-600 hover:bg-blue-700">
                  <Plus className="h-4 w-4" />
                  Add Contact
                </Button>
              </div>
            </div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white border-b px-6 py-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" className="gap-2 bg-transparent">
                Group
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Button>
            </div>
          </div>

          {/* Table */}
          <div className="flex-1 overflow-auto bg-white">
            <ContactsTable searchQuery={searchQuery} />
          </div>
        </div>
      </main>
    </div>
  )
}
