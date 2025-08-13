"use client"

import { useState } from "react"
import { DashboardPage } from "@/components/dashboard-page"
import { ContactsPage } from "@/components/contacts-page"
import { ReviewLeadsPage } from "@/components/review-leads-page"
import { CompaniesPage } from "@/components/companies-page"
import { UsersPage } from "@/components/users-page"
import { ActivitiesPage } from "@/components/activities-page"
import { CampaignsPage } from "@/components/campaigns-page"
import { SettingsPage } from "@/components/settings-page"

export default function Home() {
  const [currentPage, setCurrentPage] = useState("Dashboard")

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "Contacts":
  return <ContactsPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Review Leads":
  return <ReviewLeadsPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Activities":
  return <ActivitiesPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Companies":
  return <CompaniesPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Users":
  return <UsersPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Campaigns":
  return <CampaignsPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Settings":
  return <SettingsPage currentPage={currentPage} onNavigateAction={handleNavigate} />
      case "Dashboard":
      default:
  return <DashboardPage currentPage={currentPage} onNavigateAction={handleNavigate} />
    }
  }

  return renderCurrentPage()
}
