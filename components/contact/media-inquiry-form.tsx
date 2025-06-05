"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { FileText, Send, Clock, Building } from "lucide-react"

export default function MediaInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    position: "",
    email: "",
    phone: "",
    mediaType: "",
    inquiryType: "",
    subject: "",
    deadline: "",
    urgency: "",
    details: "",
    interviewRequest: false,
    photoRequest: false,
    agreePrivacy: false,
  })

  const mediaTypes = [
    { value: "newspaper", label: "신문" },
    { value: "magazine", label: "잡지" },
    { value: "tv", label: "TV" },
    { value: "radio", label: "라디오" },
    { value: "online", label: "온라인 매체" },
    { value: "youtube", label: "유튜브" },
    { value: "podcast", label: "팟캐스트" },
    { value: "other", label: "기타" },
  ]

  const inquiryTypes = [
    { value: "interview", label: "인터뷰 요청" },
    { value: "statement", label: "입장문 요청" },
    { value: "press-release", label: "보도자료 요청" },
    { value: "fact-check", label: "팩트체크 문의" },
    { value: "background", label: "배경 설명 요청" },
    { value: "photo", label: "사진 자료 요청" },
    { value: "video", label: "영상 자료 요청" },
    { value: "other", label: "기타 문의" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Media inquiry submitted:", formData)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <FileText className="h-5 w-5 text-primary" />
          언론 문의
        </CardTitle>
        <CardDescription>언론 관련 문의사항을 남겨주세요. 홍보위원회에서 신속하게 대응해드리겠습니다.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Reporter Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Building className="h-5 w-5" />
              기자 정보
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">성명 *</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="홍길동"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="position">직책</Label>
                <Input
                  id="position"
                  value={formData.position}
                  onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                  placeholder="기자, 편집자, PD 등"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">소속 기관 *</Label>
              <Input
                id="organization"
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="신문사, 방송사, 온라인 매체명"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="email">이메일 *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="reporter@media.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">연락처 *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="010-1234-5678"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mediaType">매체 유형 *</Label>
              <Select
                value={formData.mediaType}
                onValueChange={(value) => setFormData({ ...formData, mediaType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="매체 유형을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {mediaTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Inquiry Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">문의 내용</h3>

            <div className="space-y-2">
              <Label htmlFor="inquiryType">문의 유형 *</Label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="문의 유형을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {inquiryTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject">제목 *</Label>
              <Input
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="기사 제목 또는 문의 제목"
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="deadline">마감일</Label>
                <Input
                  id="deadline"
                  type="datetime-local"
                  value={formData.deadline}
                  onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label>긴급도</Label>
                <RadioGroup
                  value={formData.urgency}
                  onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="low" id="low-urgency" />
                    <Label htmlFor="low-urgency">일반</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium-urgency" />
                    <Label htmlFor="medium-urgency">보통</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="high" id="high-urgency" />
                    <Label htmlFor="high-urgency">긴급</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="details">상세 내용 *</Label>
              <Textarea
                id="details"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                placeholder="문의하실 내용을 구체적으로 작성해주세요. 필요한 정보, 인터뷰 대상, 질문 내용 등을 포함해주세요."
                className="min-h-[150px]"
                required
              />
            </div>
          </div>

          {/* Additional Requests */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">추가 요청사항</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="interview"
                  checked={formData.interviewRequest}
                  onCheckedChange={(checked) => setFormData({ ...formData, interviewRequest: checked as boolean })}
                />
                <Label htmlFor="interview" className="text-sm">
                  인터뷰 요청 (대면/화상/전화)
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="photo"
                  checked={formData.photoRequest}
                  onCheckedChange={(checked) => setFormData({ ...formData, photoRequest: checked as boolean })}
                />
                <Label htmlFor="photo" className="text-sm">
                  사진 자료 요청
                </Label>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Clock className="h-4 w-4" />
              언론 대응 시간
            </h4>
            <div className="text-sm text-slate-600 space-y-1">
              <div>• 일반 문의: 영업일 기준 24시간 내 답변</div>
              <div>• 긴급 문의: 2-4시간 내 답변</div>
              <div>• 24시간 언론 핫라인: 02-1234-5681</div>
              <div>• 이메일: media@reformparty.kr</div>
            </div>
          </div>

          {/* Agreement */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy-media"
                checked={formData.agreePrivacy}
                onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                required
              />
              <Label htmlFor="privacy-media" className="text-sm">
                개인정보 수집 및 이용에 동의합니다. *
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            <Send className="mr-2 h-4 w-4" />
            언론 문의 제출
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
