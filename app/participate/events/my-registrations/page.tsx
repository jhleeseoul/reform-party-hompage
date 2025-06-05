"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Search, X, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { getEventRegistration, cancelEventRegistration } from "@/lib/actions/event-actions"

export default function MyRegistrationsPage() {
  const [searchData, setSearchData] = useState({ registrationId: "", email: "" })
  const [registration, setRegistration] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage(null)

    try {
      const result = await getEventRegistration(searchData.registrationId, searchData.email)
      if (result.success) {
        setRegistration(result.registration)
      } else {
        setMessage({ type: "error", text: result.message || "등록 정보를 찾을 수 없습니다." })
        setRegistration(null)
      }
    } catch (error) {
      setMessage({ type: "error", text: "조회 중 오류가 발생했습니다." })
    } finally {
      setIsLoading(false)
    }
  }

  const handleCancel = async () => {
    if (!registration || !confirm("정말로 참가 신청을 취소하시겠습니까?")) return

    setIsLoading(true)
    try {
      const result = await cancelEventRegistration(registration.id, registration.email)
      if (result.success) {
        setMessage({ type: "success", text: result.message })
        setRegistration({ ...registration, status: "cancelled" })
      } else {
        setMessage({ type: "error", text: result.message || "취소 처리 중 오류가 발생했습니다." })
      }
    } catch (error) {
      setMessage({ type: "error", text: "취소 처리 중 오류가 발생했습니다." })
    } finally {
      setIsLoading(false)
    }
  }

  // Mock event data for display
  const getEventInfo = (eventId: string) => {
    const events: Record<string, any> = {
      "1": {
        title: "시민과의 대화",
        date: "2024-01-20",
        time: "14:00 - 16:00",
        location: "서울시청 대강당",
        address: "서울특별시 중구 세종대로 110",
      },
    }
    return (
      events[eventId] || {
        title: "행사 정보",
        date: "2024-01-20",
        time: "14:00 - 16:00",
        location: "미정",
        address: "주소 미정",
      }
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">내 참가 신청 조회</h1>
            <p className="text-slate-600">등록 번호와 이메일을 입력하여 참가 신청 내역을 확인하고 관리하세요.</p>
          </div>

          {/* Search Form */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                참가 신청 조회
              </CardTitle>
              <CardDescription>참가 신청 시 받은 등록 번호와 이메일 주소를 입력해주세요.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="registrationId">등록 번호 *</Label>
                  <Input
                    id="registrationId"
                    value={searchData.registrationId}
                    onChange={(e) => setSearchData({ ...searchData, registrationId: e.target.value })}
                    placeholder="REG-1-1001"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일 주소 *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={searchData.email}
                    onChange={(e) => setSearchData({ ...searchData, email: e.target.value })}
                    placeholder="example@email.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      조회 중...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      조회하기
                    </>
                  )}
                </Button>
              </form>
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

          {/* Registration Details */}
          {registration && (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>참가 신청 정보</CardTitle>
                    <CardDescription>등록 번호: {registration.id}</CardDescription>
                  </div>
                  <Badge
                    className={
                      registration.status === "confirmed" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                    }
                  >
                    {registration.status === "confirmed" ? "신청 완료" : "신청 취소"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Event Information */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">행사 정보</h3>
                  <div className="bg-slate-50 p-4 rounded-lg space-y-3">
                    <div>
                      <div className="font-medium text-slate-900">{getEventInfo(registration.eventId).title}</div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{getEventInfo(registration.eventId).date}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{getEventInfo(registration.eventId).time}</span>
                      </div>
                      <div className="flex items-center gap-2 md:col-span-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{getEventInfo(registration.eventId).location}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Information */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">신청자 정보</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-slate-500">이름</div>
                      <div className="font-medium">{registration.name}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">이메일</div>
                      <div className="font-medium">{registration.email}</div>
                    </div>
                    <div>
                      <div className="text-slate-500">연락처</div>
                      <div className="font-medium">{registration.phone}</div>
                    </div>
                    {registration.organization && (
                      <div>
                        <div className="text-slate-500">소속</div>
                        <div className="font-medium">{registration.organization}</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Question */}
                {registration.question && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">사전 질문</h3>
                    <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-700">{registration.question}</div>
                  </div>
                )}

                {/* Registration Details */}
                <div>
                  <h3 className="font-semibold text-slate-900 mb-3">신청 내역</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">신청일시</span>
                      <span>{new Date(registration.registeredAt).toLocaleString("ko-KR")}</span>
                    </div>
                    {registration.cancelledAt && (
                      <div className="flex justify-between">
                        <span className="text-slate-500">취소일시</span>
                        <span>{new Date(registration.cancelledAt).toLocaleString("ko-KR")}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-500">확인 이메일</span>
                      <span className="flex items-center gap-1">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        발송 완료
                      </span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                {registration.status === "confirmed" && (
                  <div className="pt-4 border-t">
                    <Button variant="destructive" onClick={handleCancel} disabled={isLoading} className="w-full">
                      <X className="mr-2 h-4 w-4" />
                      참가 신청 취소
                    </Button>
                    <p className="text-xs text-slate-500 mt-2 text-center">취소 시 다시 신청하실 수 있습니다.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Help Information */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-lg">도움말</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <div>
                <strong>등록 번호를 잊으셨나요?</strong>
                <p>참가 신청 완료 시 발송된 확인 이메일을 확인해주세요.</p>
              </div>
              <div>
                <strong>이메일을 받지 못하셨나요?</strong>
                <p>스팸 폴더를 확인하시거나 고객센터(02-1234-5678)로 문의해주세요.</p>
              </div>
              <div>
                <strong>정보 수정이 필요하신가요?</strong>
                <p>기존 신청을 취소하고 새로 신청하시거나 고객센터로 연락해주세요.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
