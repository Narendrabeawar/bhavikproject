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
  onNavigate: (page: string) => void
}

export function Sidebar({ currentPage, onNavigate }: SidebarProps) {
  return (
    <div className="w-64 bg-gray-50/50 border-r border-gray-100 flex flex-col">
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
                  onClick={() => onNavigate(item.name)}
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
  )
}
