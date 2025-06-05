"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Users, Clock, MapPin, Target, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState } from "react"

const getVolunteerOpportunityById = (id: string) => {
  const opportunities = {
    "campaign-volunteer": {
      id: "campaign-volunteer",
      title: "선거 캠페인 자원봉사자",
      category: "캠페인",
      location: "전국",
      timeCommitment: "주 5-10시간",
      description: "선거 캠페인 활동을 도와주실 자원봉사자를 모집합니다.",
      fullDescription: `
        개혁신당의 선거 캠페인에 참여하여 민주주의 발전에 기여해보세요!
        
        **주요 활동:**
        - 유권자 접촉 및 정책 홍보
        - 선거 홍보물 배포
        - 선거 행사 지원
        - 전화 캠페인 참여
        - SNS 홍보 활동
        
        **활동 혜택:**
        - 정치 과정에 대한 실질적 경험
        - 민주주의 참여의 보람
        - 자원봉사 확인서 발급
        - 네트워킹 기회 제공
        
        **지원 자격:**
        - 만 18세 이상
        - 정치 활동에 대한 관심
        - 주말 활동 가능자 우대
        - 책임감 있는 활동 가능자
      `,
      requirements: ["만 18세 이상", "정치 활동에 대한 관심", "주말 활동 가능"],
      benefits: ["정치 경험 습득", "네트워킹 기회", "자원봉사 확인서 발급"],
      urgency: "high",
      spotsAvailable: 50,
      spotsApplied: 32,
      coordinator: "김민수 캠페인 매니저",
      contact: "02-1234-5679",
      email: "campaign@reformparty.kr",
    },
  }

  return opportunities[id as keyof typeof opportunities] || null
}

export default function VolunteerApplicationPage({ params }: { params: { id: string } }) {
  const opportunity = getVolunteerOpportunityById(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasApplied, setHasApplied] = useState(false)

  if (!opportunity) {
    notFound()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setHasApplied(true)
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/participate">
            <ArrowLeft className="mr-2 h-4 w-4" />
            참여 페이지로 돌아가기
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Opportunity Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {opportunity.category}
                </Badge>
                <Badge className="bg-red-100 text-red-800">긴급 모집</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{opportunity.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{opportunity.description}</p>
            </div>

            {/* Opportunity Details */}
            <Card>
              <CardHeader>
                <CardTitle>활동 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">활동 지역</div>
                      <div className="text-slate-600">{opportunity.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">시간 투입</div>
                      <div className="text-slate-600">{opportunity.timeCommitment}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-medium">모집 현황</div>
                      <div className="text-slate-600">
                        {opportunity.spotsApplied}/{opportunity.spotsAvailable}명
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Full Description */}
            <Card>
              <CardHeader>
                <CardTitle>상세 내용</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-slate-700 leading-relaxed">
                    {opportunity.fullDescription}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card>
              <CardHeader>
                <CardTitle>지원 자격</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.requirements.map((req, index) => (
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
                <CardTitle>활동 혜택</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {opportunity.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Target className="h-4 w-4 text-primary" />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Application Form */}
            <Card>
              <CardHeader>
                <CardTitle>자원봉사 신청</CardTitle>
                <CardDescription>아래 정보를 입력하여 자원봉사에 신청하세요.</CardDescription>
              </CardHeader>
              <CardContent>
                {hasApplied ? (
                  <div className="text-center py-6">
                    <div className="text-green-600 font-semibold mb-2">신청 완료!</div>
                    <p className="text-sm text-slate-600 mb-4">
                      신청해주셔서 감사합니다. 담당자가 연락드릴 예정입니다.
                    </p>
                    <Button variant="outline" className="w-full">
                      신청 내역 확인
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="홍길동" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일 *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">연락처 *</Label>
                      <Input id="phone" placeholder="010-1234-5678" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="age">나이</Label>
                      <Input id="age" type="number" placeholder="25" min="18" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="availability">활동 가능 시간</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="시간대 선택" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday">평일</SelectItem>
                          <SelectItem value="weekend">주말</SelectItem>
                          <SelectItem value="both">평일/주말 모두</SelectItem>
                          <SelectItem value="flexible">유동적</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">관련 경험</Label>
                      <Textarea id="experience" placeholder="자원봉사나 관련 활동 경험을 간략히 적어주세요." rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="motivation">지원 동기</Label>
                      <Textarea
                        id="motivation"
                        placeholder="이 활동에 참여하려는 이유를 적어주세요."
                        rows={3}
                        required
                      />
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="agree" required />
                      <Label htmlFor="agree" className="text-sm">
                        개인정보 수집 및 이용에 동의합니다.
                      </Label>
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          신청 중...
                        </>
                      ) : (
                        "자원봉사 신청하기"
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>문의처</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium text-slate-900">담당자</div>
                  <div className="text-slate-600">{opportunity.coordinator}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">연락처</div>
                  <div className="text-slate-600">{opportunity.contact}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">이메일</div>
                  <div className="text-slate-600">{opportunity.email}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
