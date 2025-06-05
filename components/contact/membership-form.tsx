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
import { Users, UserPlus, Briefcase } from "lucide-react"

export default function MembershipForm() {
  const [formData, setFormData] = useState({
    name: "",
    birthDate: "",
    gender: "",
    phone: "",
    email: "",
    address: "",
    occupation: "",
    education: "",
    experience: "",
    motivation: "",
    agreeTerms: false,
    agreePrivacy: false,
    agreeMarketing: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Membership form submitted:", formData)
  }

  return (
    <Card className="border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          당원 가입 신청
        </CardTitle>
        <CardDescription>
          개혁신당과 함께 더 나은 대한민국을 만들어가세요. 당원 가입을 통해 정치 참여의 기회를 얻으실 수 있습니다.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
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
                <Label htmlFor="birthDate">생년월일 *</Label>
                <Input
                  id="birthDate"
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>성별 *</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData({ ...formData, gender: value })}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">남성</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">여성</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">기타</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
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
              <Label htmlFor="address">주소 *</Label>
              <Input
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="서울특별시 영등포구..."
                required
              />
            </div>
          </div>

          {/* Background Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-2">
              <Briefcase className="h-5 w-5" />
              배경 정보
            </h3>

            <div className="space-y-2">
              <Label htmlFor="occupation">직업</Label>
              <Input
                id="occupation"
                value={formData.occupation}
                onChange={(e) => setFormData({ ...formData, occupation: e.target.value })}
                placeholder="예: 회사원, 학생, 자영업 등"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="education">최종 학력</Label>
              <Select
                value={formData.education}
                onValueChange={(value) => setFormData({ ...formData, education: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="최종 학력을 선택해주세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="high-school">고등학교 졸업</SelectItem>
                  <SelectItem value="college">전문대학 졸업</SelectItem>
                  <SelectItem value="university">대학교 졸업</SelectItem>
                  <SelectItem value="graduate">대학원 졸업</SelectItem>
                  <SelectItem value="other">기타</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience">정치 활동 경험</Label>
              <Textarea
                id="experience"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                placeholder="이전 정치 활동 경험이나 사회 활동 경험을 간략히 작성해주세요. (선택사항)"
                className="min-h-[100px]"
              />
            </div>
          </div>

          {/* Motivation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900">가입 동기</h3>
            <div className="space-y-2">
              <Label htmlFor="motivation">개혁신당 가입 이유 *</Label>
              <Textarea
                id="motivation"
                value={formData.motivation}
                onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                placeholder="개혁신당에 가입하려는 이유와 기대하는 활동에 대해 작성해주세요."
                className="min-h-[120px]"
                required
              />
            </div>
          </div>

          {/* Membership Benefits */}
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-3">당원 혜택</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />당 정책 결정 과정 참여
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                정기 당원 모임 및 교육 프로그램 참여
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />당 내부 선거 참여권
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                정책 제안 및 의견 개진 기회
              </li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                당원 전용 뉴스레터 및 자료 제공
              </li>
            </ul>
          </div>

          {/* Agreements */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.agreeTerms}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeTerms: checked as boolean })}
                required
              />
              <Label htmlFor="terms" className="text-sm">
                개혁신당 당헌·당규 및 이용약관에 동의합니다. *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="privacy-membership"
                checked={formData.agreePrivacy}
                onCheckedChange={(checked) => setFormData({ ...formData, agreePrivacy: checked as boolean })}
                required
              />
              <Label htmlFor="privacy-membership" className="text-sm">
                개인정보 수집 및 이용에 동의합니다. *
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="marketing-membership"
                checked={formData.agreeMarketing}
                onCheckedChange={(checked) => setFormData({ ...formData, agreeMarketing: checked as boolean })}
              />
              <Label htmlFor="marketing-membership" className="text-sm">
                당 활동 관련 정보 수신에 동의합니다. (선택)
              </Label>
            </div>
          </div>

          {/* Membership Fee Info */}
          <div className="bg-slate-50 p-4 rounded-lg">
            <h4 className="font-semibold text-slate-900 mb-2">당비 안내</h4>
            <div className="text-sm text-slate-600 space-y-1">
              <div>• 가입비: 10,000원 (최초 1회)</div>
              <div>• 월 당비: 10,000원 (일반당원)</div>
              <div>• 학생당원: 월 5,000원</div>
              <div>• 경제적 어려움 시 당비 감면 신청 가능</div>
            </div>
          </div>

          <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
            <UserPlus className="mr-2 h-4 w-4" />
            당원 가입 신청
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
