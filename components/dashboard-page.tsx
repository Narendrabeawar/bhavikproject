"use client"

import { useState } from "react" // Removed duplicate import
import { Sidebar } from "@/components/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Bell, ChevronRight } from "lucide-react"
import { ActivitiesChart } from "@/components/activities-chart"
import { ContactDetailModal as ContactDetailContent } from "@/components/contact-detail-modal"
import { motion, AnimatePresence } from "framer-motion" // Corrected import
// Reusable CollapseRow component
type CollapseRowProps = {
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
  collapsedContent: React.ReactNode;
  label?: React.ReactNode;
};

function CollapseRow({ isOpen, onToggle, children, collapsedContent, label }: CollapseRowProps) {
  return (
    <div className="w-full">
      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            key="open"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {label ? (
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4 mb-4">{label}</div>
                <button onClick={onToggle} className="rounded-full p-1 hover:bg-gray-100 transition">
                  <ChevronRight className="h-6 w-6 text-gray-500 rotate-90" />
                </button>
              </div>
            ) : null}
            {children}
          </motion.div>
        ) : (
          <motion.div
            key="collapsed"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full"
          >
            {collapsedContent}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

interface DashboardPageProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function DashboardPage({ currentPage, onNavigateAction }: DashboardPageProps) {
  const [selectedContact, setSelectedContact] = useState<string | null>(null)
  const [showContactDetail, setShowContactDetail] = useState(false)

  const handleContactClick = (contactName: string) => {
    setSelectedContact(contactName)
    setShowContactDetail(true)
  }

  const handleCloseContactDetail = () => {
    setShowContactDetail(false)
    setSelectedContact(null)
  }

  const statsData = [
    { label: "Pending Tasks", value: "23", color: "text-orange-600" },
    { label: "Scheduled Tasks", value: "21", color: "text-blue-600" },
    { label: "Completed Tasks", value: "123", color: "text-green-600" },
  ]

  const [selectedWeek, setSelectedWeek] = useState<number>(0);
  const [collapsed, setCollapsed] = useState(false);
  const weeklyOverview = [
    {
      dateRange: "Jun 12 - Jun 19",
      activities: 6,
      pending: 2,
      avatars: [
        { name: "Tara Shareef", image: "/professional-woman-diverse.png" },
        { name: "Hitesh Chaudhary", image: "/professional-man.png" },
        { name: "Mukesh Mukherjee", image: "/diverse-business-person.png" },
        { name: "Harshita Singh", image: "/professional-woman-diverse.png" },
      ],
      highlighted: true,
    },
    {
      dateRange: "Jun 12 - Jun 19",
      activities: 6,
      pending: 2,
      avatars: [
        { name: "Tara Shareef", image: "/professional-woman-diverse.png" },
        { name: "Hitesh Chaudhary", image: "/professional-man.png" },
        { name: "Mukesh Mukherjee", image: "/diverse-business-person.png" },
        { name: "Harshita Singh", image: "/professional-woman-diverse.png" },
      ],
    },
    {
      dateRange: "Jun 12 - Jun 19",
      activities: 6,
      pending: 2,
      avatars: [
        { name: "Tara Shareef", image: "/professional-woman-diverse.png" },
        { name: "Hitesh Chaudhary", image: "/professional-man.png" },
        { name: "Mukesh Mukherjee", image: "/diverse-business-person.png" },
        { name: "Harshita Singh", image: "/professional-woman-diverse.png" },
      ],
    },
    {
      dateRange: "Jun 12 - Jun 19",
      activities: 6,
      pending: 2,
      avatars: [
        { name: "Tara Shareef", image: "/professional-woman-diverse.png" },
        { name: "Hitesh Chaudhary", image: "/professional-man.png" },
        { name: "Mukesh Mukherjee", image: "/diverse-business-person.png" },
        { name: "Harshita Singh", image: "/professional-woman-diverse.png" },
      ],
    },
  ]

  const activities = [
    {
      id: 1,
      title: "Follow up call with",
      contact: "@Tara Shareef",
      dueDate: "12 Jan, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      activityId: "#CR45",
    },
    {
      id: 2,
      title: "Follow up call with",
      contact: "@Tara Shareef",
      dueDate: "12 Jan, 2025",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      activityId: "#CR45",
    },
  ]

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Hide sidebar and main dashboard when contact detail is open */}
  <Sidebar currentPage={currentPage} onNavigateAction={onNavigateAction} />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-blue-600 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-sm"></div>
                </div>
                <span className="text-blue-600 font-medium">Dashboard</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>HS</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Harshita Singh</span>
                <ChevronRight className="h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </header>
        {/* Main Content */}
        <main className="flex-1 overflow-auto p-6 relative">
          <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8 4xl:px-16">
            {/* Combined Welcome, Chart, and Stats Card */}
            <div className="mb-8">
              <Card className="overflow-x-auto">
                <div className="flex flex-col sm:flex-row w-full divide-y sm:divide-y-0 sm:divide-x divide-gray-200 min-h-[260px] overflow-x-auto" style={{height: '320px', maxHeight: '340px'}}>
                  {/* Left: Welcome (1/4) */}
                  <div className="w-full sm:w-1/4 p-4 flex flex-col justify-center min-w-[180px] overflow-hidden">
                    <p className="text-gray-600 text-sm mb-1 whitespace-normal break-words max-w-full">Hi there,</p>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2 whitespace-normal break-words max-w-full">Harshita!</h1>
                    <p className="text-gray-600 text-sm whitespace-normal break-words max-w-full">
                      This page gives you a snapshot of your weekly performance — track activities, review progress, and see key contact insights at a glance
                    </p>
                  </div>
                  {/* Center: Chart (1/2) */}
                  <div className="w-full sm:w-2/4 p-4 flex flex-col items-center justify-center min-w-[260px] overflow-hidden">
                    <div className="w-full flex flex-col h-full">
                      <span className="text-xl font-bold mb-3 self-start text-blue-700">Activities completed over time</span>
                      <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] 4xl:h-[36rem]">
                        <ActivitiesChart />
                      </div>
                    </div>
                  </div>
                  {/* Right: Stats (1/4) */}
                  <div className="w-full sm:w-1/4 flex flex-col justify-center items-center p-4 min-w-[160px] bg-gray-50 overflow-hidden">
                    <span className="text-lg font-semibold mb-4 self-start whitespace-normal break-words max-w-full">Stats</span>
                    <div className="space-y-4 w-full">
                      {statsData.map((stat, index) => {
                        let bg = "";
                        if (stat.label === "Pending Tasks") bg = "bg-red-50";
                        if (stat.label === "Scheduled Tasks") bg = "bg-blue-50";
                        if (stat.label === "Completed Tasks") bg = "bg-green-50";
                        return (
                          <div
                            key={index}
                            className={`flex items-center justify-between w-full whitespace-normal break-words max-w-full rounded-lg px-3 py-2 ${bg}`}
                          >
                            <span className="text-gray-600 text-sm">{stat.label}</span>
                            <span className={`text-2xl font-bold ${stat.color}`}>{stat.value}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
            <CollapseRow
              isOpen={showContactDetail}
              onToggle={() => setShowContactDetail((v) => !v)}
              label={showContactDetail ? (
                <>
                  {/* Blue week button */}
                  <button className="bg-blue-600 text-white rounded-lg px-6 py-2 flex items-center font-semibold text-base shadow">
                    {weeklyOverview[0]?.dateRange}
                    <span className="ml-3 bg-white text-blue-600 rounded-full px-2 py-0.5 text-xs font-bold">
                      {weeklyOverview[0]?.activities} activities
                    </span>
                  </button>
                  {/* Activity summary card */}
                  <div className="bg-white rounded-lg px-6 py-2 flex items-center shadow border border-gray-200">
                    <span className="text-gray-700 font-medium mr-2">Follow up call with</span>
                    <span className="text-blue-600 font-semibold">@Tara Shareef</span>
                    <span className="ml-4 text-xs text-gray-500">Due by 12 Jan, 2025</span>
                  </div>
                </>
              ) : null}
              collapsedContent={
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Weekly Overview */}
                  <div className="lg:col-span-1">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">Weekly Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {weeklyOverview.map((week, index) => {
                          const isActive = selectedWeek === index && !collapsed;
                          return (
                            <button
                              key={index}
                              className={`w-full text-left p-4 rounded-lg border transition-all duration-200 flex flex-col gap-2 focus:outline-none ${
                                isActive ? "bg-blue-600 text-white border-blue-600 shadow" : "bg-gray-50 border-gray-200 hover:bg-blue-100"
                              }`}
                              onClick={() => {
                                if (selectedWeek === index) {
                                  setCollapsed((prev) => !prev);
                                } else {
                                  setSelectedWeek(index);
                                  setCollapsed(false);
                                }
                              }}
                            >
                              <div className="flex items-center justify-between mb-3">
                                <span className="font-medium">{week.dateRange}</span>
                                <ChevronRight className={`h-4 w-4 transform transition-transform duration-200 ${isActive ? "rotate-90" : "rotate-0"}`} />
                              </div>
                              <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                  <div className="flex -space-x-2">
                                    {week.avatars.map((avatar, avatarIndex) => (
                                      <Avatar
                                        key={avatarIndex}
                                        className="h-6 w-6 border-2 border-white cursor-pointer hover:scale-110 transition-transform"
                                        onClick={e => { e.stopPropagation(); handleContactClick(avatar.name); }}
                                      >
                                        <AvatarImage src={avatar.image || "/placeholder.svg"} />
                                        <AvatarFallback className="text-xs">
                                          {avatar.name
                                            .split(" ")
                                            .map((n) => n[0])
                                            .join("")}
                                        </AvatarFallback>
                                      </Avatar>
                                    ))}
                                    <div className="h-6 w-6 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center">
                                      <span className="text-xs text-gray-600">+4</span>
                                    </div>
                                  </div>
                                  <span className="text-sm">{week.activities} activities</span>
                                </div>
                                <Badge variant={isActive ? "secondary" : "outline"} className="text-xs">
                                  {week.pending} pending
                                </Badge>
                              </div>
                            </button>
                          );
                        })}
                      </CardContent>
                    </Card>
                  </div>
                  {/* Activities */}
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold">Activities</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {activities.map((activity) => (
                          <div key={activity.id} className="space-y-3">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center space-x-2">
                                <span className="text-gray-700">{activity.title}</span>
                                <Avatar className="h-5 w-5">
                                  <AvatarImage src="/professional-woman-diverse.png" />
                                  <AvatarFallback className="text-xs">TS</AvatarFallback>
                                </Avatar>
                                <span
                                  className="text-blue-600 font-medium cursor-pointer hover:underline"
                                  onClick={() => handleContactClick(activity.contact.replace("@", ""))}
                                >
                                  {activity.contact}
                                </span>
                              </div>
                              <span className="text-sm text-gray-500">Due by {activity.dueDate}</span>
                            </div>
                            <div className="space-y-2">
                              <p className="text-sm font-medium text-gray-700">Task Description</p>
                              <p className="text-sm text-gray-600 leading-relaxed">{activity.description}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-500">Activity {activity.activityId}</span>
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                                Complete task
                                <ChevronRight className="h-4 w-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </div>
              }
            >
              <div className="w-full bg-white rounded-xl shadow-xl overflow-hidden flex flex-col border border-gray-200">
                <div className="flex flex-1 h-full">
                  <ContactDetailContent
                    isOpen={true}
                    contactName={selectedContact || ""}
                    forceNoDialog
                    onCloseAction={() => {}}
                  />
                </div>
              </div>
            </CollapseRow>
          </div>
        </main>
      </div>
    </div>
  )
}
