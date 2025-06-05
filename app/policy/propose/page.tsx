"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, FileText, Users, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PolicyProposePage() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    problem: "",
    solution: "",
    budget: "",
    timeline: "",
    impact: "",
    name: "",
    email: "",
    phone: "",
    organization: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const categories = [
    "경제·일자리",
    "교육",
    "복지·보건",
    "환경·에너지",
    "안전·국방",
    "과학·기술",
    "문화·체육",
    "농업·농촌",
    "기타",
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-slate-900 mb-4">정책 제안이 접수되었습니다</h1>
            <p className="text-lg text-slate-600 mb-8">
              소중한 의견을 주셔서 감사합니다. 제안해주신 정책은 전문가 검토를 거쳐 당정책위원회에서 논의될 예정입니다.
            </p>
            <div className="space-y-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/policy/details">정책 목록 보기</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/policy/propose">새 정책 제안하기</Link>
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link href="/policy/details">
            <ArrowLeft className="mr-2 h-4 w-4" />
            정책 목록으로 돌아가기
          </Link>
        </Button>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">
              정책 제안
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">새로운 정책을 제안해주세요</h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              국민 여러분의 아이디어가 실제 정책으로 만들어질 수 있습니다. 구체적이고 실현 가능한 정책을 제안해주세요.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>정책 제안서</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="title">정책 제목 *</Label>
                        <Input
                          id="title"
                          value={formData.title}
                          onChange={(e) => handleInputChange("title", e.target.value)}
                          placeholder="정책의 핵심을 나타내는 제목을 입력하세요"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">정책 분야 *</Label>
                        <Select
                          value={formData.category}
                          onValueChange={(value) => handleInputChange("category", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="분야를 선택하세요" />
                          </SelectTrigger>
                          <SelectContent>
                            {categories.map((category) => (
                              <SelectItem key={category} value={category}>
                                {category}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="description">정책 개요 *</Label>
                      <Textarea
                        id="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange("description", e.target.value)}
                        placeholder="정책의 전반적인 내용을 간략히 설명해주세요"
                        rows={3}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="problem">해결하고자 하는 문제 *</Label>
                      <Textarea
                        id="problem"
                        value={formData.problem}
                        onChange={(e) => handleInputChange("problem", e.target.value)}
                        placeholder="현재 어떤 문제가 있으며, 왜 이 정책이 필요한지 설명해주세요"
                        rows={4}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="solution">구체적인 해결 방안 *</Label>
                      <Textarea
                        id="solution"
                        value={formData.solution}
                        onChange={(e) => handleInputChange("solution", e.target.value)}
                        placeholder="문제를 해결하기 위한 구체적인 방법과 실행 계획을 제시해주세요"
                        rows={5}
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="budget">예상 예산</Label>
                        <Input
                          id="budget"
                          value={formData.budget}
                          onChange={(e) => handleInputChange("budget", e.target.value)}
                          placeholder="예: 연간 1,000억원"
                        />
                      </div>
                      <div>
                        <Label htmlFor="timeline">추진 일정</Label>
                        <Input
                          id="timeline"
                          value={formData.timeline}
                          onChange={(e) => handleInputChange("timeline", e.target.value)}
                          placeholder="예: 2024년~2026년"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="impact">기대 효과</Label>
                      <Textarea
                        id="impact"
                        value={formData.impact}
                        onChange={(e) => handleInputChange("impact", e.target.value)}
                        placeholder="이 정책이 시행되면 어떤 긍정적인 변화가 있을지 설명해주세요"
                        rows={3}
                      />
                    </div>

                    <div className="border-t pt-6">
                      <h3 className="text-lg font-semibold mb-4">제안자 정보</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">이름 *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">이메일 *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">연락처</Label>
                          <Input
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => handleInputChange("phone", e.target.value)}
                          />
                        </div>
                        <div>
                          <Label htmlFor="organization">소속 (선택)</Label>
                          <Input
                            id="organization"
                            value={formData.organization}
                            onChange={(e) => handleInputChange("organization", e.target.value)}
                            placeholder="직장, 단체 등"
                          />
                        </div>
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>
                      {isSubmitting ? "제출 중..." : "정책 제안 제출하기"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    제안 가이드
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">좋은 정책 제안의 조건</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• 구체적이고 실현 가능한 내용</li>
                      <li>• 명확한 문제 인식과 해결 방안</li>
                      <li>• 예산과 일정의 현실성</li>
                      <li>• 국민에게 미치는 긍정적 영향</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    검토 과정
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        1
                      </div>
                      <span className="text-sm">접수 및 1차 검토</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        2
                      </div>
                      <span className="text-sm">전문가 자문</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        3
                      </div>
                      <span className="text-sm">당정책위원회 논의</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-xs font-bold text-primary">
                        4
                      </div>
                      <span className="text-sm">결과 통보</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    최근 채택 정책
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-sm">청년 주거비 지원 확대</h4>
                      <p className="text-xs text-slate-600 mt-1">김○○님 제안 → 정책 채택</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-sm">소상공인 디지털 전환 지원</h4>
                      <p className="text-xs text-slate-600 mt-1">이○○님 제안 → 검토 중</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
