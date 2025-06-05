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
import { MessageSquare, Send, Phone, Mail } from "lucide-react"

export default function GeneralInquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    priority: "",
    message: "",
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const inquiryCategories = [
    { value: "policy", label: "정책 관련 문의" },
    { value: "membership", label: "당원 관련 문의" },
    { value: "event", label: "행사 및 모임 문의" },
    { value: "volunteer", label: "자원봉사 문의" },
    { value: "donation", label: "후원 관련 문의" },
    { value: "media", label: "언론 및 홍보 문의" },
    { value: "complaint", label: "불만 및 건의사항" },
    { value: "other", label: "기타 문의" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-primary" />
          일반 문의
        </CardTitle>
        <CardDescription>
          개혁신당에 대한 일반적인 문의사항을 남겨주세요. 영업일 기준 2-3일 내에 답변드리겠습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">이름 *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="홍길동"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">이메일 *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="example@email.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">연락처</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="010-1234-5678"
            />
          </div>

          {/* Inquiry Details */}
          <div className="space-y-2">
            <Label htmlFor="category">문의 분야 *</Label>
            <Select value={formData.category} onValueChange={(value) => setFormData({ ...formData, category: value })}>
              <SelectTrigger>
                <SelectValue placeholder="문의 분야를 선택해주세요" />
              </SelectTrigger>
              <SelectContent>
                {inquiryCategories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
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
              placeholder="문의 제목을 입력해주세요"
              required
            />
          </div>

          <div className="space-y-2">
            <Label>우선순위</Label>
            <RadioGroup
              value={formData.priority}
              onValueChange={(value) => setFormData({ ...formData, priority: value })}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="low" id="low" />
                <Label htmlFor="low">일반</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="medium" id="medium" />
                <Label htmlFor="medium">보통</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="high" id="high" />
                <Label htmlFor="high">긴급</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">문의 내용 *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="문의하실 내용을 자세히 작성해주세요."
              className="min-h-[150px]"
              required
            />
          </div>

          {/* Agreements */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy"
                checked={formData.agreePrivacy}
                onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                required
              />
              <Label htmlFor="privacy" className="text-sm">
                개인정보 수집 및 이용에 동의합니다. *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing"
                checked={formData.agreeMarketing}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeMarketing: checked as boolean })}
              />
              <Label htmlFor="marketing" className="text-sm">
                마케팅 정보 수신에 동의합니다. (선택)
              </Label>
            </div>
          </div>

          {/* Contact Preference */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <Label className="text-sm font-medium mb-3 block">선호하는 연락 방법</Label>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-slate-500" />
                <span className="text-sm">이메일 (기본)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-slate-500" />
                <span className="text-sm">전화 (긴급시)</span>
              </div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            <Send className="mr-2 h-4 w-4" />
            문의하기
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
