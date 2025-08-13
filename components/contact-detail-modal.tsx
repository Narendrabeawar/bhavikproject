"use client"

import { useState } from "react"
// Removed Dialog imports for full page rendering
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronRight, MessageSquare, Mail, Phone, Plus, ExternalLink } from "lucide-react"

interface ContactDetailModalProps {
  isOpen: boolean
  onCloseAction: () => void
  contactName: string
  forceNoDialog?: boolean // if true, render as content, not modal
}

export function ContactDetailModal({ isOpen, onCloseAction, contactName, forceNoDialog }: ContactDetailModalProps) {
  const [contactDetailsExpanded, setContactDetailsExpanded] = useState(false)

  const contactData = {
    name: "Tara Shareef",
    avatar: "/professional-woman-diverse.png",
    createdAt: "Created 61 ago",
    company: "Company",
    details: [
      { label: "Company", value: "Company" },
      { label: "Details", value: "Details details" },
      { label: "Details", value: "Details details" },
      { label: "Details", value: "Details details" },
      { label: "Details", value: "Details details" },
      { label: "Details", value: "Details details" },
    ],
  }

  const timelineData = [
    {
      id: 1,
      type: "email",
      sender: "@Hitesh Chaudhary",
      action: "sent an Email containing the following contents.",
      subject: "Regarding termination of contract and new contract formation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: "5 mins",
      avatar: "/professional-man.png",
    },
    {
      id: 2,
      type: "email",
      sender: "@Hitesh Chaudhary",
      action: "sent an Email containing the following contents.",
      subject: "Regarding termination of contract and new contract formation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      timestamp: "5 mins",
      avatar: "/professional-man.png",
    },
  ]

  if (forceNoDialog) {
    return (
      <div className="flex h-full w-full">
        {/* Left Panel - Contact Details */}
        <div className="w-1/3 border-r bg-white p-6 overflow-y-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Contact Details</span>
              <ChevronRight className="h-4 w-4 text-gray-400" />
            </div>
          </div>

          {/* Contact Profile */}
          <div className="text-center mb-6">
            <Avatar className="h-20 w-20 mx-auto mb-4">
              <AvatarImage src={contactData.avatar || "/placeholder.svg"} />
              <AvatarFallback className="text-lg">TS</AvatarFallback>
            </Avatar>
            <h2 className="text-xl font-semibold text-gray-900">{contactData.name}</h2>
            <p className="text-sm text-gray-500">{contactData.createdAt}</p>
          </div>
          {/* Contact Actions */}
          <div className="flex justify-center space-x-4 mb-6">
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Mail className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
          </div>
          {/* Contact Details */}
          <Card>
            <CardHeader className="cursor-pointer" onClick={() => setContactDetailsExpanded(!contactDetailsExpanded)}>
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">Contact Details</CardTitle>
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${contactDetailsExpanded ? "rotate-180" : ""}`}
                />
              </div>
            </CardHeader>
            {contactDetailsExpanded && (
              <CardContent className="space-y-3">
                {contactData.details.map((detail, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">{detail.label}</span>
                    <span className="text-gray-900">{detail.value}</span>
                  </div>
                ))}
              </CardContent>
            )}
          </Card>
        </div>
        {/* Right Panel - Timeline */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="border-b p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <span className="text-gray-700">Follow up call with</span>
                <Avatar className="h-5 w-5">
                  <AvatarImage src="/professional-woman-diverse.png" />
                  <AvatarFallback className="text-xs">TS</AvatarFallback>
                </Avatar>
                <span className="text-blue-600 font-medium">@Tara Shareef</span>
              </div>
              <span className="text-sm text-gray-500">Due by 12 Jan, 2025</span>
            </div>
          </div>

          {/* Timeline Content */}
          <div className="flex-1 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Timeline</h3>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add an Activity
              </Button>
            </div>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="calls">Call logs</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="mt-6">
                <div className="space-y-6">
                  {timelineData.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <Avatar className="h-8 w-8 mt-1">
                            <AvatarImage src={item.avatar || "/placeholder.svg"} />
                            <AvatarFallback>HC</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center space-x-2">
                              <span className="text-blue-600 font-medium">{item.sender}</span>
                              <span className="text-gray-600 text-sm">{item.action}</span>
                              <ExternalLink className="h-3 w-3 text-gray-400" />
                            </div>
                            <div className="bg-gray-50 rounded-lg p-3">
                              <h4 className="font-medium text-gray-900 mb-2">{item.subject}</h4>
                              <p className="text-sm text-gray-600 leading-relaxed">{item.content}</p>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-xs text-gray-500">{item.timestamp}</span>
                              <ChevronRight className="h-4 w-4 text-gray-400" />
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="whatsapp" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-man.png" />
                          <AvatarFallback>HC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 font-medium">@Hitesh Chaudhary</span>
                            <span className="text-gray-600 text-sm">sent a WhatsApp message</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">WhatsApp Demo Message</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Hi, this is a WhatsApp demo message for Tara Shareef. Please review the contract and let me know your thoughts.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">2 mins ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-woman-diverse.png" />
                          <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-600 font-medium">@Tara Shareef</span>
                            <span className="text-gray-600 text-sm">replied on WhatsApp</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">WhatsApp Reply</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Thank you for the update. I will check and get back to you soon.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">1 min ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="email" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-man.png" />
                          <AvatarFallback>HC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-600 font-medium">@Hitesh Chaudhary</span>
                            <span className="text-gray-600 text-sm">sent an Email</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-gray-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">Regarding contract update</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">This is a demo email message for Tara Shareef. Please review the attached document and let us know if you have any questions.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">5 mins ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-woman-diverse.png" />
                          <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 font-medium">@Tara Shareef</span>
                            <span className="text-gray-600 text-sm">replied via Email</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">Re: Regarding contract update</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">Thank you for the email. I have received the document and will review it by tomorrow.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">3 mins ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
              <TabsContent value="calls" className="mt-6">
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-man.png" />
                          <AvatarFallback>HC</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-blue-600 font-medium">@Hitesh Chaudhary</span>
                            <span className="text-gray-600 text-sm">made a call</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-blue-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">Call Log</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">This is a demo call log for Tara Shareef. The call lasted 12 minutes and covered project updates.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">10 mins ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8 mt-1">
                          <AvatarImage src="/professional-woman-diverse.png" />
                          <AvatarFallback>TS</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center space-x-2">
                            <span className="text-green-600 font-medium">@Tara Shareef</span>
                            <span className="text-gray-600 text-sm">received a call</span>
                            <ExternalLink className="h-3 w-3 text-gray-400" />
                          </div>
                          <div className="bg-green-50 rounded-lg p-3">
                            <h4 className="font-medium text-gray-900 mb-2">Call Log</h4>
                            <p className="text-sm text-gray-600 leading-relaxed">This is a demo call log for Tara Shareef. The call lasted 8 minutes and covered contract details.</p>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-xs text-gray-500">7 mins ago</span>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    )
  }
  // fallback to modal for legacy usage (should not be used)
  return null
}
