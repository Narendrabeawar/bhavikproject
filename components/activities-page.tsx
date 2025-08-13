"use client"

import { useState } from "react"
import { Sidebar } from "./sidebar"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ContactDetailModal } from "./contact-detail-modal"

interface ActivitiesPageProps {
  currentPage: string
  onNavigateAction: (page: string) => void
}

interface Activity {
  id: string
  title: string
  description: string
  dueDate: string
  contact: string
  activityId: string
  status: "pending" | "completed"
}

const activities: Activity[] = [
  {
    id: "1",
    title: "Follow-up call with client lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    dueDate: "12 Jan, 2025",
    contact: "@Tara Shareef",
    activityId: "#CR45",
    status: "pending",
  },
  {
    id: "2",
    title: "Follow-up call with client lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "12 Jan, 2025",
    contact: "@Tara Shareef",
    activityId: "#CR46",
    status: "pending",
  },
  {
    id: "3",
    title: "Follow-up call with client lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "12 Jan, 2025",
    contact: "@Tara Shareef",
    activityId: "#CR47",
    status: "pending",
  },
  {
    id: "4",
    title: "Follow-up call with client lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "12 Jan, 2025",
    contact: "@Tara Shareef",
    activityId: "#CR48",
    status: "pending",
  },
  {
    id: "5",
    title: "Follow-up call with client lorem ipsum",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    dueDate: "12 Jan, 2025",
    contact: "@Tara Shareef",
    activityId: "#CR49",
    status: "pending",
  },
]

export function ActivitiesPage({ currentPage, onNavigateAction }: ActivitiesPageProps) {
  const [selectedActivity, setSelectedActivity] = useState<Activity>(activities[0])
  const [contactModalOpen, setContactModalOpen] = useState(false)
  const [selectedContact, setSelectedContact] = useState("")

  const handleContactClick = (contactName: string) => {
    setSelectedContact(contactName)
    setContactModalOpen(true)
  }

  const handleMarkAsDone = (activityId: string) => {
    // Handle marking activity as done
    console.log("Marking activity as done:", activityId)
  }

  return (
    <div className="flex h-screen bg-gray-50">
  <Sidebar currentPage={currentPage} onNavigateAction={onNavigateAction} />

      <div className="flex-1 flex">
        <div className="w-full sm:w-1/3 p-6 border-r border-gray-200">
          <div className="mb-6">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">My Work</h1>
          </div>

          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className={`p-4 rounded-lg cursor-pointer transition-all ${
                  selectedActivity.id === activity.id
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => setSelectedActivity(activity)}
              >
                <h3
                  className={`font-medium mb-2 ${selectedActivity.id === activity.id ? "text-white" : "text-gray-900"}`}
                >
                  {activity.title}
                </h3>
                <p
                  className={`text-sm mb-3 ${selectedActivity.id === activity.id ? "text-blue-100" : "text-gray-600"}`}
                >
                  Due by {activity.dueDate}
                </p>
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs ${selectedActivity.id === activity.id ? "text-blue-100" : "text-gray-500"}`}
                  >
                    To call
                  </span>
                  <div className="flex items-center gap-1">
                    <img
                      src="/professional-woman-diverse.png"
                      alt="Tara Shareef"
                      className="w-4 h-4 rounded-full object-cover"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        handleContactClick(activity.contact)
                      }}
                      className={`text-xs px-2 py-1 rounded-full ${
                        selectedActivity.id === activity.id
                          ? "bg-blue-500 text-white hover:bg-blue-400"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                    >
                      {activity.contact}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Activity Detail */}
        <div className="w-2/3 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-lg font-medium text-gray-900">Follow up call with</h2>
                <button
                  onClick={() => handleContactClick(selectedActivity.contact)}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {selectedActivity.contact}
                </button>
              </div>
              <span className="text-sm text-gray-600">Due by {selectedActivity.dueDate}</span>
            </div>

            <div className="mb-4">
              <h3 className="text-sm font-medium text-gray-700 mb-2">Task Description</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{selectedActivity.description}</p>
            </div>

            <div className="flex items-center justify-between mb-6">
              <span className="text-sm text-gray-500">Activity {selectedActivity.activityId}</span>
              <Button onClick={() => handleMarkAsDone(selectedActivity.id)} className="bg-blue-600 hover:bg-blue-700">
                Mark as done
              </Button>
            </div>
          </div>

          {/* Contact Profile Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-4 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/professional-woman-diverse.png"
                alt="Tara Shareef"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="font-medium text-gray-900">Tara Shareef</h3>
                <p className="text-sm text-gray-500">Created on 6-10-20</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-500">Company:</span>
                <div className="flex items-center gap-1 mt-1">
                  <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs">C</span>
                  </div>
                  <span className="text-gray-900">Company</span>
                </div>
              </div>
              <div>
                <span className="text-gray-500">Phone number:</span>
                <p className="text-gray-900 mt-1">+91 85848 48848</p>
              </div>
              <div>
                <span className="text-gray-500">Status:</span>
                <p className="text-gray-900 mt-1">New Lead</p>
              </div>
              <div>
                <span className="text-gray-500">Manager:</span>
                <button
                  onClick={() => handleContactClick("@Hitesh Chaudhary")}
                  className="text-blue-600 hover:text-blue-700 mt-1 block"
                >
                  @Hitesh Chaudhary
                </button>
              </div>
            </div>
          </div>

          {/* Timeline Section */}
          <div className="bg-white rounded-lg border border-gray-200">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 rounded-none border-b">
                <TabsTrigger value="overview" className="rounded-none">
                  Overview
                </TabsTrigger>
                <TabsTrigger value="whatsapp" className="rounded-none text-blue-600">
                  WhatsApp
                </TabsTrigger>
                <TabsTrigger value="email" className="rounded-none">
                  Email
                </TabsTrigger>
                <TabsTrigger value="phone" className="rounded-none">
                  Phone
                </TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="p-4">
                <div className="space-y-4">
                  <div className="border-l-2 border-blue-200 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src="/professional-man.png"
                        alt="Hitesh Chaudhary"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <button
                        onClick={() => handleContactClick("@Hitesh Chaudhary")}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        @Hitesh Chaudhary
                      </button>
                      <span className="text-sm text-gray-500">
                        sent a WhatsApp message containing the following contents.
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>

                  <div className="border-l-2 border-blue-200 pl-4">
                    <div className="flex items-center gap-2 mb-2">
                      <img
                        src="/professional-man.png"
                        alt="Hitesh Chaudhary"
                        className="w-6 h-6 rounded-full object-cover"
                      />
                      <button
                        onClick={() => handleContactClick("@Hitesh Chaudhary")}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm"
                      >
                        @Hitesh Chaudhary
                      </button>
                      <span className="text-sm text-gray-500">sent an Email containing the following contents.</span>
                    </div>
                    <h4 className="font-medium text-sm text-gray-900 mb-2">
                      Regarding termination of contract and new contract formation
                    </h4>
                    <p className="text-sm text-gray-500 mb-2">
                      person@gmail.com, person@gmail.com, person@gmail.com, person@gmail.com +5 more
                    </p>
                    <p className="text-sm text-gray-600">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="whatsapp" className="p-4">
                <p className="text-sm text-gray-500">WhatsApp messages will appear here...</p>
              </TabsContent>

              <TabsContent value="email" className="p-4">
                <p className="text-sm text-gray-500">Email communications will appear here...</p>
              </TabsContent>

              <TabsContent value="phone" className="p-4">
                <p className="text-sm text-gray-500">Phone call logs will appear here...</p>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <ContactDetailModal
        isOpen={contactModalOpen}
        onCloseAction={() => setContactModalOpen(false)}
        contactName={selectedContact}
      />
    </div>
  )
}
