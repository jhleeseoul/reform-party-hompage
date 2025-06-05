"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Megaphone, Share2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"
import { useState } from "react"

const getPetitionById = (id: string) => {
  const petitions = {
    "youth-housing-support": {
      id: "youth-housing-support",
      title: "청년 주거비 지원 확대를 위한 청원",
      description: "청년들의 주거 부담을 줄이기 위한 정부 지원 확대를 요구합니다.",
      fullDescription: `
        현재 우리나라 청년들은 높은 주거비로 인해 심각한 경제적 부담을 겪고 있습니다. 
        
        **현재 상황:**
        - 청년 가구의 평균 주거비 부담률 30% 초과
        - 월세 지원금 현행 20만원으로 실질적 도움 부족
        - 청년 전용 임대주택 공급 부족
        
        **요구사항:**
        1. 청년 월세 지원금을 30만원으로 인상
        2. 지원 대상 연령을 만 34세까지 확대
        3. 청년 전용 임대주택 연간 5만 호 공급
        4. 생애최초 주택구입 시 취득세 면제
        
        **기대효과:**
        - 청년 주거비 부담 30% 감소
        - 청년 경제활동 활성화
        - 출산율 제고 및 사회 안정성 향상
        
        여러분의 서명으로 청년들의 주거권을 보장해주세요!
      `,
      targetSignatures: 10000,
      currentSignatures: 7842,
      daysLeft: 23,
      category: "주거",
      status: "active",
      createdDate: "2024-01-01",
      creator: "청년주거권연대",
      supporters: [
        { name: "김**", location: "서울", date: "2024-01-15" },
        { name: "이**", location: "부산", date: "2024-01-15" },
        { name: "박**", location: "대구", date: "2024-01-14" },
      ],
    },
  }

  return petitions[id as keyof typeof petitions] || null
}

export default function PetitionDetailPage({ params }: { params: { id: string } }) {
  const petition = getPetitionById(params.id)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasSigned, setHasSigned] = useState(false)

  if (!petition) {
    notFound()
  }

  const handleSign = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setHasSigned(true)
    setIsSubmitting(false)
  }

  const progressPercentage = (petition.currentSignatures / petition.targetSignatures) * 100

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
            {/* Petition Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {petition.category}
                </Badge>
                <Badge className="bg-green-100 text-green-800">진행중</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{petition.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{petition.description}</p>
            </div>

            {/* Progress */}
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {petition.currentSignatures.toLocaleString()}명
                  </div>
                  <div className="text-slate-600">목표: {petition.targetSignatures.toLocaleString()}명</div>
                </div>
                <Progress value={progressPercentage} className="mb-4" />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>{petition.daysLeft}일 남음</span>
                  <span>{Math.round(progressPercentage)}% 달성</span>
                </div>
              </CardContent>
            </Card>

            {/* Petition Content */}
            <Card>
              <CardHeader>
                <CardTitle>청원 내용</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose max-w-none">
                  <div className="whitespace-pre-line text-slate-700 leading-relaxed">{petition.fullDescription}</div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Supporters */}
            <Card>
              <CardHeader>
                <CardTitle>최근 서명자</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {petition.supporters.map((supporter, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                      <div>
                        <div className="font-medium">{supporter.name}</div>
                        <div className="text-sm text-slate-600">{supporter.location}</div>
                      </div>
                      <div className="text-sm text-slate-500">{supporter.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Sign Petition */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Megaphone className="h-5 w-5" />
                  청원 서명하기
                </CardTitle>
                <CardDescription>이 청원에 서명하여 변화를 만들어보세요.</CardDescription>
              </CardHeader>
              <CardContent>
                {hasSigned ? (
                  <div className="text-center py-6">
                    <div className="text-green-600 font-semibold mb-2">서명 완료!</div>
                    <p className="text-sm text-slate-600">소중한 참여에 감사드립니다.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSign} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">이름 *</Label>
                      <Input id="name" placeholder="홍길동" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">이메일 *</Label>
                      <Input id="email" type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">지역</Label>
                      <Input id="location" placeholder="서울특별시" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="comment">응원 메시지 (선택)</Label>
                      <Textarea id="comment" placeholder="청원에 대한 의견을 남겨주세요." rows={3} />
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
                          서명 중...
                        </>
                      ) : (
                        <>
                          <Megaphone className="mr-2 h-4 w-4" />
                          서명하기
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Share */}
            <Card>
              <CardHeader>
                <CardTitle>청원 공유하기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  링크 복사
                </Button>
                <div className="text-sm text-slate-600 text-center">더 많은 사람들에게 알려주세요!</div>
              </CardContent>
            </Card>

            {/* Petition Info */}
            <Card>
              <CardHeader>
                <CardTitle>청원 정보</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <div className="font-medium text-slate-900">청원인</div>
                  <div className="text-slate-600">{petition.creator}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">시작일</div>
                  <div className="text-slate-600">{petition.createdDate}</div>
                </div>
                <div>
                  <div className="font-medium text-slate-900">마감일</div>
                  <div className="text-slate-600">{petition.daysLeft}일 후</div>
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
