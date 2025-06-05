"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, TrendingUp, Mail, Download, BarChart3, UserCheck, UserX } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getEventRegistrations, getEventRegistrationStats, sendEventReminder } from "@/lib/actions/event-actions"

export default function EventAdminPage() {
  const [selectedEvent, setSelectedEvent] = useState("1")
  const [registrations, setRegistrations] = useState<any[]>([])
  const [stats, setStats] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [reminderMessage, setReminderMessage] = useState("")
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const events = [
    { id: "1", title: "시민과의 대화", date: "2024-01-20" },
    { id: "2", title: "정책 설명회", date: "2024-01-25" },
    { id: "3", title: "청년 정책 토론회", date: "2024-02-01" },
  ]

  useEffect(() => {
    loadEventData()
  }, [selectedEvent])

  const loadEventData = async () => {
    setIsLoading(true)
    try {
      const [regResult, statsResult] = await Promise.all([
        getEventRegistrations(selectedEvent),
        getEventRegistrationStats(selectedEvent),
      ])

      if (regResult.success) {
        setRegistrations(regResult.registrations || [])
      }
      if (statsResult.success) {
        setStats(statsResult.stats)
      }
    } catch (error) {
      console.error("Failed to load event data:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSendReminder = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!reminderMessage.trim()) return

    setIsLoading(true)
    try {
      const result = await sendEventReminder(selectedEvent, reminderMessage)
      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setReminderMessage("")
      } else {
        setMessage({ type: "error", text: result.message || "알림 발송에 실패했습니다." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "알림 발송 중 오류가 발생했습니다." })
    } finally {
      setIsLoading(false)
    }
  }

  const exportRegistrations = () => {
    const csvContent = [
      ["이름", "이메일", "연락처", "소속", "신청일시", "상태"].join(","),
      ...registrations.map((reg) =>
        [
          reg.name,
          reg.email,
          reg.phone,
          reg.organization || "",
          new Date(reg.registeredAt).toLocaleString("ko-KR"),
          reg.status === "confirmed" ? "신청완료" : "취소",
        ].join(","),
      ),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const link = document.createElement("a")
    link.href = URL.createObjectURL(blob)
    link.download = `event_${selectedEvent}_registrations.csv`
    link.click()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">행사 관리 대시보드</h1>
          <p className="text-slate-600">행사 참가자 관리 및 통계를 확인하세요.</p>
        </div>

        {/* Event Selection */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>행사 선택</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {events.map((event) => (
                <Button
                  key={event.id}
                  variant={selectedEvent === event.id ? "default" : "outline"}
                  onClick={() => setSelectedEvent(event.id)}
                >
                  {event.title} ({event.date})
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Message Display */}
        {message && (
          <div
            className={`mb-6 p-4 rounded-lg ${
              message.type === "success"
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Statistics Cards */}
        {stats && (
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">총 정원</p>
                    <p className="text-2xl font-bold text-slate-900">{stats.capacity}</p>
                  </div>
                  <Users className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">신청 완료</p>
                    <p className="text-2xl font-bold text-green-600">{stats.registered}</p>
                  </div>
                  <UserCheck className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">신청 취소</p>
                    <p className="text-2xl font-bold text-red-600">{stats.cancelled}</p>
                  </div>
                  <UserX className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-600">신청률</p>
                    <p className="text-2xl font-bold text-primary">{stats.registrationRate}%</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        <Tabs defaultValue="registrations" className="space-y-6">
          <TabsList>
            <TabsTrigger value="registrations">참가자 목록</TabsTrigger>
            <TabsTrigger value="communication">참가자 소통</TabsTrigger>
            <TabsTrigger value="analytics">분석</TabsTrigger>
          </TabsList>

          {/* Registrations Tab */}
          <TabsContent value="registrations">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>참가자 목록</CardTitle>
                    <CardDescription>총 {registrations.length}명의 참가자가 등록되었습니다.</CardDescription>
                  </div>
                  <Button onClick={exportRegistrations} variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    CSV 다운로드
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="text-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                    <p className="mt-2 text-slate-600">로딩 중...</p>
                  </div>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-2">이름</th>
                          <th className="text-left p-2">이메일</th>
                          <th className="text-left p-2">연락처</th>
                          <th className="text-left p-2">소속</th>
                          <th className="text-left p-2">신청일시</th>
                          <th className="text-left p-2">상태</th>
                        </tr>
                      </thead>
                      <tbody>
                        {registrations.map((reg, index) => (
                          <tr key={index} className="border-b">
                            <td className="p-2 font-medium">{reg.name}</td>
                            <td className="p-2 text-slate-600">{reg.email}</td>
                            <td className="p-2 text-slate-600">{reg.phone}</td>
                            <td className="p-2 text-slate-600">{reg.organization || "-"}</td>
                            <td className="p-2 text-slate-600">
                              {new Date(reg.registeredAt).toLocaleDateString("ko-KR")}
                            </td>
                            <td className="p-2">
                              <Badge
                                className={
                                  reg.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                                }
                              >
                                {reg.status === "confirmed" ? "신청완료" : "취소"}
                              </Badge>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Communication Tab */}
          <TabsContent value="communication">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  참가자 알림 발송
                </CardTitle>
                <CardDescription>등록된 참가자들에게 일괄 알림을 발송할 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSendReminder} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reminder">알림 메시지</Label>
                    <Textarea
                      id="reminder"
                      value={reminderMessage}
                      onChange={(e) => setReminderMessage(e.target.value)}
                      placeholder="참가자들에게 전달할 메시지를 입력하세요..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isLoading || !reminderMessage.trim()}>
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        발송 중...
                      </>
                    ) : (
                      <>
                        <Mail className="mr-2 h-4 w-4" />
                        알림 발송
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  등록 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {stats && (
                    <>
                      <div>
                        <h3 className="font-semibold mb-3">등록 현황</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>신청 완료</span>
                            <span>{stats.registered}명</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-green-600 h-2 rounded-full"
                              style={{ width: `${(stats.registered / stats.capacity) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-semibold mb-3">상세 통계</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>총 정원</span>
                              <span className="font-medium">{stats.capacity}명</span>
                            </div>
                            <div className="flex justify-between">
                              <span>신청 완료</span>
                              <span className="font-medium text-green-600">{stats.registered}명</span>
                            </div>
                            <div className="flex justify-between">
                              <span>신청 취소</span>
                              <span className="font-medium text-red-600">{stats.cancelled}명</span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span>잔여 좌석</span>
                              <span className="font-medium">{stats.available}명</span>
                            </div>
                            <div className="flex justify-between">
                              <span>신청률</span>
                              <span className="font-medium text-primary">{stats.registrationRate}%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  )
}
