"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Users,
  Heart,
  Shield,
  Award,
  CheckCircle,
  FileText,
  CreditCard,
  UserPlus,
  Vote,
  Megaphone,
  Calendar,
  Gift,
  Star,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function MembershipPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    membershipType: "",
    personalInfo: {},
    motivation: "",
    agreements: {},
  })

  const membershipTypes = [
    {
      id: "regular",
      name: "정당원",
      price: "월 10,000원",
      description: "개혁신당의 정식 당원으로 모든 권리와 의무를 갖습니다.",
      benefits: [
        "당내 선거 참여권",
        "정책 결정 과정 참여",
        "당원 대회 참석권",
        "지역 활동 우선 참여",
        "당원 전용 교육 프로그램",
        "정책 자료 우선 제공",
      ],
      requirements: ["만 18세 이상 대한민국 국민", "타 정당 비가입자", "당헌·당규 준수 서약", "월 당비 납부"],
      color: "bg-primary",
      popular: true,
    },
    {
      id: "supporter",
      name: "후원회원",
      price: "월 5,000원",
      description: "개혁신당의 활동을 후원하며 주요 정보를 제공받습니다.",
      benefits: [
        "정책 자료 제공",
        "행사 초청 및 할인",
        "뉴스레터 구독",
        "온라인 토론 참여",
        "후원회원 모임 참석",
        "정치 교육 프로그램 참여",
      ],
      requirements: ["만 16세 이상", "개혁신당 가치 동의", "월 후원금 납부", "개인정보 제공 동의"],
      color: "bg-blue-500",
      popular: false,
    },
    {
      id: "youth",
      name: "청년당원",
      price: "월 5,000원",
      description: "만 39세 이하 청년을 위한 특별 당원 제도입니다.",
      benefits: [
        "청년 정책 우선 참여",
        "청년 위원회 활동",
        "멘토링 프로그램",
        "취업 지원 서비스",
        "청년 네트워킹 행사",
        "정치 인턴십 기회",
      ],
      requirements: ["만 18~39세 대한민국 국민", "타 정당 비가입자", "청년 활동 참여 의지", "월 당비 납부"],
      color: "bg-green-500",
      popular: false,
    },
  ]

  const membershipStats = [
    {
      label: "총 당원 수",
      value: "47,892",
      icon: Users,
      change: "+1,247",
    },
    {
      label: "청년 당원",
      value: "18,456",
      icon: Star,
      change: "+892",
    },
    {
      label: "후원회원",
      value: "23,567",
      icon: Heart,
      change: "+567",
    },
    {
      label: "활동 참여율",
      value: "89%",
      icon: Award,
      change: "+5%",
    },
  ]

  const memberBenefits = [
    {
      icon: Vote,
      title: "정치 참여권",
      description: "당내 선거 참여 및 정책 결정 과정에 직접 참여할 수 있습니다.",
    },
    {
      icon: Megaphone,
      title: "정책 제안권",
      description: "정책 아이디어를 제안하고 당의 정책 방향에 영향을 미칠 수 있습니다.",
    },
    {
      icon: Calendar,
      title: "행사 참여",
      description: "당원 전용 행사, 교육 프로그램, 네트워킹 기회에 참여할 수 있습니다.",
    },
    {
      icon: FileText,
      title: "정보 접근",
      description: "정책 자료, 내부 소식, 전문 분석 자료를 우선적으로 제공받습니다.",
    },
    {
      icon: Gift,
      title: "특별 혜택",
      description: "당원 할인, 기념품, 특별 이벤트 등 다양한 혜택을 제공합니다.",
    },
    {
      icon: Shield,
      title: "권익 보호",
      description: "당원의 권리 보호 및 정치 활동 지원을 받을 수 있습니다.",
    },
  ]

  const applicationSteps = [
    { step: 1, title: "가입 유형 선택", description: "원하는 당원 유형을 선택해주세요" },
    { step: 2, title: "개인정보 입력", description: "기본 정보를 입력해주세요" },
    { step: 3, title: "가입 동기 작성", description: "가입 동기와 활동 계획을 작성해주세요" },
    { step: 4, title: "약관 동의", description: "당헌·당규 및 개인정보 처리방침에 동의해주세요" },
    { step: 5, title: "결제 정보", description: "당비 결제 정보를 입력해주세요" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              당원 가입
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">개혁신당과 함께하세요</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              더 나은 대한민국을 만들어가는 개혁신당의 당원이 되어 정치 변화의 주역이 되어보세요. 여러분의 참여가
              민주주의를 더욱 발전시킵니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <UserPlus className="mr-2 h-5 w-5" />
                지금 가입하기
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <FileText className="mr-2 h-5 w-5" />
                가입 안내서 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {membershipStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600 mb-2">{stat.label}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Membership Types */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">당원 유형 선택</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              여러분의 상황과 참여 의지에 맞는 당원 유형을 선택해주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {membershipTypes.map((type) => (
              <Card
                key={type.id}
                className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 relative ${
                  type.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {type.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white">
                    인기
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`mx-auto w-16 h-16 ${type.color} rounded-full flex items-center justify-center mb-4`}>
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{type.name}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{type.price}</div>
                  <CardDescription className="text-slate-600 leading-relaxed">{type.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">혜택</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-3">가입 요건</h4>
                    <ul className="space-y-2">
                      {type.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-center text-sm text-slate-600">
                          <Shield className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${type.popular ? "bg-primary hover:bg-primary/90" : "bg-slate-600 hover:bg-slate-700"} text-white`}
                    onClick={() => setFormData({ ...formData, membershipType: type.id })}
                  >
                    {type.name} 가입하기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Member Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">당원 혜택</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당 당원이 되시면 다양한 혜택과 권리를 누리실 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {memberBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">당원 가입 신청</h2>
              <p className="text-lg text-slate-600">간단한 절차를 통해 개혁신당의 당원이 되실 수 있습니다.</p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {applicationSteps.map((step) => (
                  <div key={step.step} className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        currentStep >= step.step ? "bg-primary text-white" : "bg-slate-200 text-slate-500"
                      }`}
                    >
                      {currentStep > step.step ? <CheckCircle className="h-5 w-5" /> : step.step}
                    </div>
                    <div className="text-xs text-slate-600 mt-2 text-center max-w-20">{step.title}</div>
                  </div>
                ))}
              </div>
              <Progress value={(currentStep / applicationSteps.length) * 100} className="mt-4" />
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Tabs value={`step-${currentStep}`} className="w-full">
                  {/* Step 1: Membership Type Selection */}
                  <TabsContent value="step-1" className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">가입 유형 선택</h3>
                      <p className="text-slate-600">원하시는 당원 유형을 선택해주세요.</p>
                    </div>

                    <RadioGroup
                      value={formData.membershipType}
                      onValueChange={(value) => setFormData({ ...formData, membershipType: value })}
                    >
                      {membershipTypes.map((type) => (
                        <div
                          key={type.id}
                          className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-slate-50"
                        >
                          <RadioGroupItem value={type.id} id={type.id} />
                          <Label htmlFor={type.id} className="flex-1 cursor-pointer">
                            <div className="flex justify-between items-center">
                              <div>
                                <div className="font-medium">{type.name}</div>
                                <div className="text-sm text-slate-600">{type.description}</div>
                              </div>
                              <div className="text-primary font-semibold">{type.price}</div>
                            </div>
                          </Label>
                        </div>
                      ))}
                    </RadioGroup>

                    <div className="flex justify-end">
                      <Button
                        onClick={() => setCurrentStep(2)}
                        disabled={!formData.membershipType}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        다음 단계
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 2: Personal Information */}
                  <TabsContent value="step-2" className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">개인정보 입력</h3>
                      <p className="text-slate-600">기본 정보를 입력해주세요.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">성명 *</Label>
                        <Input id="name" placeholder="홍길동" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="birth">생년월일 *</Label>
                        <Input id="birth" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">휴대폰 번호 *</Label>
                        <Input id="phone" placeholder="010-1234-5678" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">이메일 *</Label>
                        <Input id="email" type="email" placeholder="example@email.com" required />
                      </div>
                      <div className="space-y-2 md:col-span-2">
                        <Label htmlFor="address">주소 *</Label>
                        <Input id="address" placeholder="서울특별시 영등포구..." required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="occupation">직업</Label>
                        <Input id="occupation" placeholder="직업을 입력해주세요" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="education">학력</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="최종 학력 선택" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="high-school">고등학교 졸업</SelectItem>
                            <SelectItem value="college">전문대학 졸업</SelectItem>
                            <SelectItem value="university">대학교 졸업</SelectItem>
                            <SelectItem value="graduate">대학원 졸업</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(1)}>
                        이전 단계
                      </Button>
                      <Button onClick={() => setCurrentStep(3)} className="bg-primary hover:bg-primary/90 text-white">
                        다음 단계
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 3: Motivation */}
                  <TabsContent value="step-3" className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">가입 동기 및 활동 계획</h3>
                      <p className="text-slate-600">개혁신당 가입 동기와 향후 활동 계획을 작성해주세요.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="motivation">가입 동기 *</Label>
                        <Textarea
                          id="motivation"
                          placeholder="개혁신당에 가입하시는 이유를 자유롭게 작성해주세요. (최소 100자)"
                          className="min-h-32"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="activities">참여하고 싶은 활동</Label>
                        <div className="grid md:grid-cols-2 gap-3">
                          {[
                            "정책 연구 및 개발",
                            "선거 캠페인 활동",
                            "지역사회 봉사",
                            "청년 활동",
                            "홍보 및 마케팅",
                            "교육 및 강연",
                            "국제 교류",
                            "기타",
                          ].map((activity) => (
                            <div key={activity} className="flex items-center space-x-2">
                              <Checkbox id={activity} />
                              <Label htmlFor={activity} className="text-sm">
                                {activity}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="experience">정치 활동 경험</Label>
                        <Textarea
                          id="experience"
                          placeholder="이전 정치 활동 경험이나 사회 활동 경험을 작성해주세요. (선택사항)"
                          className="min-h-24"
                        />
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(2)}>
                        이전 단계
                      </Button>
                      <Button onClick={() => setCurrentStep(4)} className="bg-primary hover:bg-primary/90 text-white">
                        다음 단계
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 4: Agreements */}
                  <TabsContent value="step-4" className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">약관 동의</h3>
                      <p className="text-slate-600">당헌·당규 및 개인정보 처리방침에 동의해주세요.</p>
                    </div>

                    <div className="space-y-4">
                      {[
                        { id: "constitution", title: "당헌·당규 동의 (필수)", required: true },
                        { id: "privacy", title: "개인정보 처리방침 동의 (필수)", required: true },
                        { id: "marketing", title: "마케팅 정보 수신 동의 (선택)", required: false },
                        { id: "newsletter", title: "뉴스레터 구독 동의 (선택)", required: false },
                      ].map((agreement) => (
                        <div key={agreement.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Checkbox id={agreement.id} required={agreement.required} />
                            <Label htmlFor={agreement.id} className="font-medium">
                              {agreement.title}
                            </Label>
                          </div>
                          <Button variant="ghost" size="sm" className="text-primary">
                            전문 보기
                          </Button>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(3)}>
                        이전 단계
                      </Button>
                      <Button onClick={() => setCurrentStep(5)} className="bg-primary hover:bg-primary/90 text-white">
                        다음 단계
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </TabsContent>

                  {/* Step 5: Payment */}
                  <TabsContent value="step-5" className="space-y-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">결제 정보</h3>
                      <p className="text-slate-600">당비 결제 정보를 입력해주세요.</p>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-4">결제 요약</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span>가입 유형</span>
                            <span className="font-medium">
                              {membershipTypes.find((t) => t.id === formData.membershipType)?.name}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span>월 당비</span>
                            <span className="font-medium">
                              {membershipTypes.find((t) => t.id === formData.membershipType)?.price}
                            </span>
                          </div>
                          <div className="border-t pt-2 flex justify-between font-semibold">
                            <span>첫 달 결제 금액</span>
                            <span className="text-primary">
                              {membershipTypes.find((t) => t.id === formData.membershipType)?.price}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>결제 방법</Label>
                          <RadioGroup defaultValue="card">
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="card" id="card" />
                              <Label htmlFor="card">신용카드</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="bank" id="bank" />
                              <Label htmlFor="bank">계좌이체</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="cardNumber">카드 번호</Label>
                            <Input id="cardNumber" placeholder="1234-5678-9012-3456" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="expiry">유효기간</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cvc">CVC</Label>
                            <Input id="cvc" placeholder="123" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="cardName">카드 소유자명</Label>
                            <Input id="cardName" placeholder="홍길동" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" onClick={() => setCurrentStep(4)}>
                        이전 단계
                      </Button>
                      <Button className="bg-primary hover:bg-primary/90 text-white">
                        <CreditCard className="mr-2 h-4 w-4" />
                        가입 완료 및 결제
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">가입 문의</h2>
            <p className="text-xl text-white/90">당원 가입에 대한 궁금한 점이 있으시면 언제든 연락주세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">전화 문의</h3>
                <p className="text-white/80">02-1234-5678</p>
                <p className="text-sm text-white/60">평일 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">이메일 문의</h3>
                <p className="text-white/80">member@reformparty.kr</p>
                <p className="text-sm text-white/60">24시간 접수</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <MapPin className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">방문 상담</h3>
                <p className="text-white/80">서울 영등포구 국회대로 1길 1</p>
                <p className="text-sm text-white/60">사전 예약 필수</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
