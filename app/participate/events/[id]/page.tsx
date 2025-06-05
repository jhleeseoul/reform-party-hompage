"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, MapPin, Users, Clock, Share2, Heart, ArrowLeft, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState } from "react"
import { registerForEvent } from "@/lib/actions/event-actions"

// This would typically come from a database or API
const getEventById = (id: string) => {
  const events = {
    "1": {
      id: 1,
      title: "시민과의 대화",
      description: "개혁신당 대표와 함께하는 시민 소통의 시간입니다. 정책에 대한 의견을 나누고 질문할 수 있습니다.",
      fullDescription: `
        개혁신당 대표와 직접 만나 대화할 수 있는 소중한 기회입니다. 
        
        이번 행사에서는 다음과 같은 주제들을 다룰 예정입니다:
        • 2024년 주요 정책 방향
        • 시민들의 정책 제안 및 의견 수렴
        • 지역 현안에 대한 논의
        • 질의응답 시간
        
        참가자 여러분께서는 사전에 질문을 제출하실 수 있으며, 
        현장에서도 자유롭게 의견을 나누실 수 있습니다.
      `,
      date: "2024-01-20",
      time: "14:00 - 16:00",
      location: "서울시청 대강당",
      address: "서울특별시 중구 세종대로 110",
      type: "공개행사",
      capacity: 500,
      registered: 342,
      status: "모집중",
      category: "대화",
      organizer: "개혁신당 서울시당",
      contact: "02-1234-5678",
      email: "seoul@reformparty.kr",
      requirements: ["만 18세 이상", "사전 신청 필수", "신분증 지참"],
      agenda: [
        { time: "14:00-14:10", item: "개회 및 인사말" },
        { time: "14:10-14:50", item: "정책 발표 및 설명" },
        { time: "14:50-15:00", item: "휴식" },
        { time: "15:00-15:40", item: "시민 질의응답" },
        { time: "15:40-16:00", item: "자유 토론 및 마무리" },
      ],
      benefits: ["정책 자료집 제공", "다과 제공", "주차 지원", "참가 인증서 발급"],
    },
  }

  return events[id as keyof typeof events] || null
}

function EventRegistrationForm({ eventId, eventStatus }: { eventId: string; eventStatus: string }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [result, setResult] = useState<{ success: boolean; message: string } | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setResult(null)

    // Add eventId to form data
    formData.append("eventId", eventId)

    try {
      const response = await registerForEvent(formData)
      setResult(response)

      if (response.success) {
        // Reset form on success
        const form = document.getElementById("registration-form") as HTMLFormElement
        form?.reset()
      }
    } catch (error) {
      setResult({
        success: false,
        message: "등록 중 오류가 발생했습니다.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>참가 신청</CardTitle>
        <CardDescription>아래 정보를 입력하여 행사에 참가 신청하세요.</CardDescription>
      </CardHeader>
      <CardContent>
        {result && (
          <div
            className={`mb-4 p-3 rounded-lg ${
              result.success
                ? "bg-green-50 text-green-800 border border-green-200"
                : "bg-red-50 text-red-800 border border-red-200"
            }`}
          >
            {result.message}
          </div>
        )}

        <form id="registration-form" action={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">이름 *</Label>
            <Input id="name" name="name" placeholder="홍길동" required disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">이메일 *</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
              required
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">연락처 *</Label>
            <Input id="phone" name="phone" placeholder="010-1234-5678" required disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="organization">소속 (선택)</Label>
            <Input id="organization" name="organization" placeholder="회사명 또는 단체명" disabled={isSubmitting} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="question">사전 질문 (선택)</Label>
            <Textarea
              id="question"
              name="question"
              placeholder="행사에서 논의하고 싶은 질문이나 의견을 적어주세요."
              rows={3}
              disabled={isSubmitting}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="agreePrivacy" name="agreePrivacy" value="true" required disabled={isSubmitting} />
            <Label htmlFor="agreePrivacy" className="text-sm">
              개인정보 수집 및 이용에 동의합니다. *
            </Label>
          </div>
          <Button type="submit" className="w-full" disabled={eventStatus === "마감" || isSubmitting}>
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                신청 중...
              </>
            ) : eventStatus === "마감" ? (
              "신청 마감"
            ) : (
              "참가 신청하기"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = getEventById(params.id)

  if (!event) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "모집중":
        return "bg-green-100 text-green-800"
      case "마감임박":
        return "bg-yellow-100 text-yellow-800"
      case "마감":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/participate/events">
              <ArrowLeft className="mr-2 h-4 w-4" />
              행사 목록으로 돌아가기
            </Link>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Event Header */}
            <div>
              <div className="flex flex-wrap gap-3 mb-4">
                <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                <Badge variant="outline">{event.type}</Badge>
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {event.category}
                </Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{event.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{event.description}</p>
            </div>

            {/* Event Details */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  행사 정보
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">날짜</div>
                      <div className="text-slate-600">{event.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">시간</div>
                      <div className="text-slate-600">{event.time}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">장소</div>
                      <div className="text-slate-600">{event.location}</div>
                      <div className="text-sm text-slate-500">{event.address}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">참가 현황</div>
                      <div className="text-slate-600">
                        {event.registered}/{event.capacity}명
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <Card>
              <CardHeader>
                <CardTitle>행사 상세 내용</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-slate-700 leading-relaxed">{event.fullDescription}</div>
                </div>
              </CardContent>
            </Card>

            {/* Agenda */}
            <Card>
              <CardHeader>
                <CardTitle>행사 일정</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.agenda.map((item, index) => (
                    <div key={index} className="flex gap-4 p-3 rounded-lg bg-slate-50">
                      <div className="font-mono text-sm text-primary font-medium min-w-[80px]">{item.time}</div>
                      <div className="text-slate-700">{item.item}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>참가 요건</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.requirements.map((req, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-slate-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card>
              <CardHeader>
                <CardTitle>참가 혜택</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Registration Form */}
            <EventRegistrationForm eventId={params.id} eventStatus={event.status} />

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>문의처</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium text-slate-900">주최</div>
                  <div className="text-slate-600">{event.organizer}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">연락처</div>
                  <div className="text-slate-600">{event.contact}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">이메일</div>
                  <div className="text-slate-600">{event.email}</div>
                </div>
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>공유하기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  링크 복사
                </Button>
                <Button variant="outline" className="w-full">
                  <Heart className="mr-2 h-4 w-4" />
                  관심 행사 등록
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
