"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Plus, Edit2, Trash2, SettingsIcon, FileText, Database, Shield, LogOut, X } from "lucide-react"

interface SettingsPageProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function SettingsPage({ currentPage, onNavigate }: SettingsPageProps) {
  const [activeSection, setActiveSection] = useState("Templates")
  const [activeSubSection, setActiveSubSection] = useState("WhatsApp")
  const [searchQuery, setSearchQuery] = useState("")

  // Sample data for email templates
  const emailTemplates = [
    { id: 1, title: "festival_offer", category: "Marketing", preview: "Lorem ipsum dolor lorem ipsum dolor" },
    { id: 2, title: "festival_offer", category: "Marketing", preview: "Lorem ipsum dolor lorem ipsum dolor" },
    { id: 3, title: "festival_offer", category: "Marketing", preview: "Lorem ipsum dolor lorem ipsum dolor" },
    { id: 4, title: "festival_offer", category: "Marketing", preview: "Lorem ipsum dolor lorem ipsum dolor" },
    { id: 5, title: "festival_offer", category: "Marketing", preview: "Lorem ipsum dolor lorem ipsum dolor" },
  ]

  const whatsappTemplates = [
    {
      id: 1,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 2,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 3,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 4,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 5,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 6,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 7,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 8,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 9,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 10,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 11,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
    {
      id: 12,
      title: "festival_offer",
      category: "Marketing",
      preview: "Lorem ipsum dolor lorem ipsum dolor",
      status: "Approved",
    },
  ]

  // Sample data for organization auth details
  const authDetails = [
    { id: 1, name: "Lorem ipsum dolor lorem ipsum dolor", description: "WhatsApp API Token", value: "4647" },
    { id: 2, name: "Lorem ipsum dolor lorem ipsum dolor", description: "WhatsApp API Token", value: "4647" },
    { id: 3, name: "Lorem ipsum dolor lorem ipsum dolor", description: "WhatsApp API Token", value: "4647" },
    { id: 4, name: "Lorem ipsum dolor lorem ipsum dolor", description: "WhatsApp API Token", value: "4647" },
    { id: 5, name: "Lorem ipsum dolor lorem ipsum dolor", description: "WhatsApp API Token", value: "4647" },
  ]

  const sidebarItems = [
    {
      icon: FileText,
      label: "Templates",
      subItems: [
        { label: "WhatsApp", value: "WhatsApp" },
        { label: "Email", value: "Email" },
      ],
    },
    {
      icon: Database,
      label: "Database Fields",
      subItems: [
        { label: "Contacts", value: "Contacts" },
        { label: "Companies", value: "Companies" },
        { label: "Users", value: "Users" },
      ],
    },
    {
      icon: Shield,
      label: "Admin Panel",
      subItems: [
        { label: "Organization Auth Details", value: "Organization Auth Details" },
        { label: "Permissions", value: "Permissions" },
      ],
    },
    {
      icon: LogOut,
      label: "Logout",
      subItems: [],
    },
  ]

  const renderTemplatesSection = () => {
    const isWhatsApp = activeSubSection === "WhatsApp"
    const templates = isWhatsApp ? whatsappTemplates : emailTemplates
    const title = isWhatsApp ? "WhatsApp Templates" : "Email Templates"

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            New Template
          </Button>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Preview
                  </th>
                  {isWhatsApp && (
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                  )}
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {templates.map((template) => (
                  <tr key={template.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{template.title}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{template.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{template.preview}</td>
                    {isWhatsApp && "status" in template && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{template.status}</td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Edit2 className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }

  const renderDatabaseFieldsSection = () => {
    // Example fields for each section
    const contactFields = ["First Name", "Last Name", "Email", "Phone", "WhatsApp"];
    const companyFields = ["Company Name", "Industry", "Size", "Address", "Website"];
    const userFields = ["Full Name", "Email", "Role", "Status", "Permissions"];

    let title = "";
    let defaultFields: string[] = [];
    let customLabel = "";
    switch (activeSubSection) {
      case "Contacts":
        title = "Contacts Database Fields";
        defaultFields = contactFields;
        customLabel = "Contact";
        break;
      case "Companies":
        title = "Companies Database Fields";
        defaultFields = companyFields;
        customLabel = "Company";
        break;
      case "Users":
        title = "Users Database Fields";
        defaultFields = userFields;
        customLabel = "User";
        break;
      default:
        title = "Database Fields";
        defaultFields = [];
        customLabel = "Field";
    }

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Default Fields</h3>
            <div className="grid grid-cols-3 gap-3">
              {defaultFields.map((field) => (
                <div key={field} className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="text-sm font-medium text-blue-700">{field}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-3">Custom Details</h3>
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-medium text-blue-700">{customLabel} Custom Field</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="text-blue-600 border-blue-200 hover:bg-blue-50 bg-transparent"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add New Field
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderAdminPanelSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Organization Auth Details</h1>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          New Detail
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Value
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {authDetails.map((detail) => (
                <tr key={detail.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{detail.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{detail.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderPermissionsSection = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Permissions</h1>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="w-4 h-4 mr-2" />
          Add Permission
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {["Admin", "Manager", "User", "Viewer"].map((role) => (
          <Card key={role}>
            <CardHeader>
              <CardTitle className="text-lg">{role}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {["Read", "Write", "Delete", "Manage Users"].map((permission) => (
                  <div key={permission} className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">{permission}</span>
                    <input
                      type="checkbox"
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      defaultChecked={role === "Admin" || (role === "Manager" && permission !== "Manage Users")}
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderMainContent = () => {
    if (activeSection === "Templates") {
      return renderTemplatesSection()
    } else if (activeSection === "Database Fields") {
      return renderDatabaseFieldsSection()
    } else if (activeSection === "Admin Panel") {
      if (activeSubSection === "Organization Auth Details") {
        return renderAdminPanelSection()
      } else if (activeSubSection === "Permissions") {
        return renderPermissionsSection()
      }
    }
    return renderTemplatesSection()
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar currentPage={currentPage} onNavigate={onNavigate} />

      {/* Settings Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
            <Button variant="ghost" size="sm" onClick={() => onNavigate("Dashboard")}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 space-y-2">
            {sidebarItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => {
                    setActiveSection(item.label)
                    if (item.subItems.length > 0) {
                      setActiveSubSection(item.subItems[0].value)
                    }
                  }}
                  className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.label ? "bg-blue-50 text-blue-700" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </button>

                {item.subItems.length > 0 && activeSection === item.label && (
                  <div className="ml-7 mt-2 space-y-1">
                    {item.subItems.map((subItem) => (
                      <button
                        key={subItem.value}
                        onClick={() => setActiveSubSection(subItem.value)}
                        className={`w-full text-left px-3 py-1 text-sm rounded-md transition-colors ${
                          activeSubSection === subItem.value
                            ? "bg-blue-100 text-blue-700 font-medium"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <SettingsIcon className="w-4 h-4" />
            <span>{activeSection}</span>
            {activeSubSection && activeSubSection !== activeSection && (
              <>
                <span>\</span>
                <span>{activeSubSection}</span>
              </>
            )}
          </div>

          {renderMainContent()}
        </div>
      </div>
    </div>
  )
}
