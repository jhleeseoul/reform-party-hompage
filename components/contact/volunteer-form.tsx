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
import { Send, Heart, Users, Star } from "lucide-react"

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    address: "",
    occupation: "",
    volunteerType: "",
    availability: "",
    weekdayTime: "",
    weekendTime: "",
    skills: "",
    experience: "",
    motivation: "",
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const volunteerTypes = [
    { value: "campaign", label: "선거 캠페인" },
    { value: "policy", label: "정책 연구" },
    { value: "community", label: "지역 봉사" },
    { value: "digital", label: "디지털 마케팅" },
    { value: "event", label: "행사 운영" },
    { value: "education", label: "교육 프로그램" },
    { value: "translation", label: "번역/통역" },
    { value: "design", label: "디자인/영상" },
    { value: "other", label: "기타" },
  ]

  const availabilityOptions = [
    { value: "weekday", label: "평일만 가능" },
    { value: "weekend", label: "주말만 가능" },
    { value: "both", label: "평일/주말 모두 가능" },
    { value: "flexible", label: "유동적" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Volunteer form submitted:", formData)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Heart className="h-5 w-5 text-primary" />
          자원봉사 신청
        </CardTitle>
        <CardDescription>
          개혁신당과 함께 의미 있는 변화를 만들어가세요. 여러분의 재능과 시간을 나누어주시면 감사하겠습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Users className="h-5 w-5" />
              개인정보
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
                <Label htmlFor="age">나이</Label>
                <Input
                  id="age"
                  type="number"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  placeholder="25"
                  min="18"
                  max="100"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
              <Label htmlFor="address">주소</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="서울특별시 영등포구..."
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="occupation">직업</Label>
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                placeholder="예: 회사원, 학생, 자영업 등"
              />
            </div>
          </div>

          {/* Volunteer Preferences */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Star className="h-5 w-5" />
              봉사 활동 선호도
            </h3>

            <div className="space-y-2">
              <Label htmlFor="volunteerType">희망 봉사 분야 *</Label>
              <Select
                value={formData.volunteerType}
                onValueChange={(value) => setFormData({ ...formData, volunteerType: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="봉사 분야를 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  {volunteerTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>활동 가능 시간 *</Label>
              <RadioGroup
                value={formData.availability}
                onValueChange={(value) => setFormData({ ...formData, availability: value })}
              >
                {availabilityOptions.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value}>{option.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="weekdayTime">평일 가능 시간</Label>
                <Select
                  value={formData.weekdayTime}
                  onValueChange={(value) => setFormData({ ...formData, weekdayTime: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="시간대 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">오전 (09:00-12:00)</SelectItem>
                    <SelectItem value="afternoon">오후 (13:00-17:00)</SelectItem>
                    <SelectItem value="evening">저녁 (18:00-21:00)</SelectItem>
                    <SelectItem value="flexible">유동적</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="weekendTime">주말 가능 시간</Label>
                <Select
                  value={formData.weekendTime}
                  onValueChange={(value) => setFormData({ ...formData, weekendTime: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="시간대 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">오전 (09:00-12:00)</SelectItem>
                    <SelectItem value="afternoon">오후 (13:00-17:00)</SelectItem>
                    <SelectItem value="evening">저녁 (18:00-21:00)</SelectItem>
                    <SelectItem value="all-day">종일 가능</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Skills and Experience */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">경험 및 기술</h3>

            <div className="space-y-2">
              <Label htmlFor="skills">보유 기술 및 특기</Label>
              <Textarea
                id="skills"
                value={formData.skills}
                onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
                placeholder="예: 컴퓨터 활용, 외국어, 디자인, 사진/영상, 운전, 요리 등"
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">자원봉사 경험</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="이전 자원봉사 경험이나 사회 활동 경험을 간략히 작성해주세요."
                className="min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="motivation">봉사 동기 *</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="자원봉사에 참여하려는 이유와 기대하는 점을 작성해주세요."
                className="min-h-[120px]"
                required
              />
            </div>
          </div>

          {/* Volunteer Benefits */}
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <Heart className="h-4 w-4" />
              자원봉사자 혜택
            </h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                자원봉사 확인서 발급
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                정치 교육 프로그램 참여 기회
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                네트워킹 및 인맥 형성
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                정책 개발 과정 참여
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                우수 봉사자 포상 및 추천서 제공
              </li>
            </ul>
          </div>

          {/* Agreements */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy-volunteer"
                checked={formData.agreePrivacy}
                onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                required
              />
              <Label htmlFor="privacy-volunteer" className="text-sm">
                개인정보 수집 및 이용에 동의합니다. *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing-volunteer"
                checked={formData.agreeMarketing}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeMarketing: checked as boolean })}
              />
              <Label htmlFor="marketing-volunteer" className="text-sm">
                자원봉사 관련 정보 수신에 동의합니다. (선택)
              </Label>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            <Send className="mr-2 h-4 w-4" />
            자원봉사 신청
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
