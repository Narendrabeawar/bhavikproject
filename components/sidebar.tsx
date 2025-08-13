"use client"

import { cn } from "@/lib/utils"
import { LayoutDashboard, Users, Activity, Building2, UserCheck, Megaphone, Settings, FileText } from "lucide-react"

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Review Leads", icon: FileText },
  { name: "Activities", icon: Activity },
  { name: "Contacts", icon: Users },
  { name: "Companies", icon: Building2 },
  { name: "Users", icon: UserCheck },
  { name: "Campaigns", icon: Megaphone },
  { name: "Settings", icon: Settings },
]

interface SidebarProps {
  currentPage: string
  onNavigateAction: (page: string) => void
}

import { useState } from "react"

export function Sidebar({ currentPage, onNavigateAction }: SidebarProps) {
  const [open, setOpen] = useState(false)
  return (
    <>
      {/* Mobile menu button */}
      <button
        className="fixed top-4 left-4 z-40 bg-blue-600 text-white rounded-full p-2 shadow-lg sm:hidden"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Sidebar for desktop, drawer for mobile */}
      <div className="hidden sm:flex w-64 bg-gray-50/50 border-r border-gray-100 flex-col h-full">
        {/* Logo */}
        <div className="p-6 border-b border-gray-100 bg-white/60">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-white font-bold text-sm">Z</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">zensight</span>
          </div>
        </div>
        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon
              const isCurrent = currentPage === item.name
              return (
                <li key={item.name}>
                  <button
                    onClick={() => onNavigateAction(item.name)}
                    className={cn(
                      "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left",
                      isCurrent
                        ? "bg-blue-50/80 text-blue-600 shadow-sm border border-blue-100/50"
                        : "text-gray-500 hover:bg-white/80 hover:text-gray-700 hover:shadow-sm",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="w-64 bg-white h-full shadow-xl flex flex-col">
            <div className="p-6 border-b border-gray-100 bg-white/60 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-sm">Z</span>
                </div>
                <span className="text-xl font-semibold text-gray-800">zensight</span>
              </div>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="ml-2 text-gray-400 hover:text-gray-700">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="flex-1 p-4">
              <ul className="space-y-1">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isCurrent = currentPage === item.name
                  return (
                    <li key={item.name}>
                      <button
                        onClick={() => {
                          setOpen(false)
                          onNavigateAction(item.name)
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 text-left",
                          isCurrent
                            ? "bg-blue-50/80 text-blue-600 shadow-sm border border-blue-100/50"
                            : "text-gray-500 hover:bg-white/80 hover:text-gray-700 hover:shadow-sm",
                        )}
                      >
                        <Icon className="h-5 w-5" />
                        {item.name}
                      </button>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </div>
          {/* Overlay */}
          <div className="flex-1 bg-black/30" onClick={() => setOpen(false)} />
        </div>
      )}
    </>
  )
}
