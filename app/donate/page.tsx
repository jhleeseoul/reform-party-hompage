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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import {
  Heart,
  CreditCard,
  Shield,
  Award,
  Users,
  Gift,
  Star,
  Target,
  DollarSign,
  FileText,
  Phone,
  Mail,
  Building,
  Banknote,
  Smartphone,
  Globe,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DonatePage() {
  const [donationType, setDonationType] = useState("one-time")
  const [donationAmount, setDonationAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("card")

  const donationStats = [
    {
      label: "총 후원 금액",
      value: "12.4억원",
      icon: DollarSign,
      change: "+2.3억원",
    },
    {
      label: "후원자 수",
      value: "23,567",
      icon: Users,
      change: "+1,247",
    },
    {
      label: "평균 후원액",
      value: "52,000원",
      icon: Heart,
      change: "+3,000원",
    },
    {
      label: "목표 달성률",
      value: "87%",
      icon: Target,
      change: "+12%",
    },
  ]

  const donationAmounts = [
    { value: "10000", label: "1만원", popular: false },
    { value: "30000", label: "3만원", popular: true },
    { value: "50000", label: "5만원", popular: false },
    { value: "100000", label: "10만원", popular: false },
    { value: "300000", label: "30만원", popular: false },
    { value: "custom", label: "직접 입력", popular: false },
  ]

  const donationPurposes = [
    {
      id: "general",
      title: "일반 후원",
      description: "개혁신당의 전반적인 활동을 지원합니다.",
      icon: Heart,
      color: "bg-red-500",
      percentage: 45,
    },
    {
      id: "policy",
      title: "정책 연구",
      description: "정책 개발과 연구 활동을 지원합니다.",
      icon: FileText,
      color: "bg-blue-500",
      percentage: 25,
    },
    {
      id: "campaign",
      title: "선거 캠페인",
      description: "선거 활동과 홍보를 지원합니다.",
      icon: Smartphone,
      color: "bg-green-500",
      percentage: 20,
    },
    {
      id: "education",
      title: "시민 교육",
      description: "정치 교육과 시민 참여 프로그램을 지원합니다.",
      icon: Award,
      color: "bg-purple-500",
      percentage: 10,
    },
  ]

  const donorBenefits = [
    {
      icon: Shield,
      title: "투명한 사용",
      description: "후원금 사용 내역을 투명하게 공개하고 정기적으로 보고합니다.",
    },
    {
      icon: FileText,
      title: "세액 공제",
      description: "정치자금법에 따라 연간 10만원까지 세액공제 혜택을 받을 수 있습니다.",
    },
    {
      icon: Gift,
      title: "후원자 혜택",
      description: "정기 후원자에게는 특별 행사 초청 및 기념품을 제공합니다.",
    },
    {
      icon: Star,
      title: "우선 정보",
      description: "정책 자료와 당 소식을 후원자에게 우선적으로 제공합니다.",
    },
    {
      icon: Users,
      title: "후원자 모임",
      description: "후원자 전용 모임과 네트워킹 기회를 제공합니다.",
    },
    {
      icon: Award,
      title: "감사 인증",
      description: "후원 기간과 금액에 따른 감사 인증서를 발급합니다.",
    },
  ]

  const paymentMethods = [
    {
      id: "card",
      name: "신용카드",
      icon: CreditCard,
      description: "간편하고 안전한 카드 결제",
    },
    {
      id: "bank",
      name: "계좌이체",
      icon: Building,
      description: "은행 계좌를 통한 직접 이체",
    },
    {
      id: "mobile",
      name: "모바일 결제",
      icon: Smartphone,
      description: "카카오페이, 네이버페이 등",
    },
    {
      id: "crypto",
      name: "가상화폐",
      icon: Globe,
      description: "비트코인, 이더리움 등 암호화폐",
    },
  ]

  const monthlyGoals = [
    {
      month: "1월",
      target: 500000000,
      current: 435000000,
      percentage: 87,
    },
    {
      month: "2월",
      target: 500000000,
      current: 312000000,
      percentage: 62,
    },
    {
      month: "3월",
      target: 600000000,
      current: 0,
      percentage: 0,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-red-500 text-red-500 mb-6">
              후원하기
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">변화를 함께 만들어가세요</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당의 활동을 후원해주세요. 여러분의 소중한 후원이 더 나은 정치, 더 나은 사회를 만드는 원동력이
              됩니다. 투명하고 책임감 있는 정치를 위해 함께해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <Heart className="mr-2 h-5 w-5" />
                지금 후원하기
              </Button>
              <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                <FileText className="mr-2 h-5 w-5" />
                후원 안내서 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-red-500" />
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

      {/* Monthly Goals */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">월별 후원 목표</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">투명한 목표 설정과 달성 현황을 공개합니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {monthlyGoals.map((goal, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{goal.month} 목표</CardTitle>
                  <CardDescription>
                    {(goal.current / 100000000).toFixed(1)}억원 / {(goal.target / 100000000).toFixed(1)}억원
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Progress value={goal.percentage} className="h-3" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-500">{goal.percentage}%</div>
                    <div className="text-sm text-slate-600">달성률</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Purposes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">후원금 사용 용도</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">후원금이 어떻게 사용되는지 투명하게 공개합니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationPurposes.map((purpose) => {
              const Icon = purpose.icon
              return (
                <Card key={purpose.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 ${purpose.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{purpose.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">{purpose.description}</p>
                    <div className="space-y-2">
                      <Progress value={purpose.percentage} className="h-2" />
                      <div className="text-sm text-slate-500">{purpose.percentage}% 배분</div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">후원 신청</h2>
              <p className="text-lg text-slate-600">간단한 절차로 개혁신당을 후원하실 수 있습니다.</p>
            </div>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <Tabs value={donationType} onValueChange={setDonationType} className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-8">
                    <TabsTrigger value="one-time">일시 후원</TabsTrigger>
                    <TabsTrigger value="monthly">정기 후원</TabsTrigger>
                  </TabsList>

                  <TabsContent value="one-time" className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">일시 후원</h3>
                      <p className="text-slate-600">원하는 금액을 한 번만 후원합니다.</p>
                    </div>

                    {/* Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">후원 금액 선택</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {donationAmounts.map((amount) => (
                          <div key={amount.value} className="relative">
                            {amount.popular && (
                              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs">
                                인기
                              </Badge>
                            )}
                            <Button
                              variant={donationAmount === amount.value ? "default" : "outline"}
                              className={`w-full h-12 ${
                                donationAmount === amount.value
                                  ? "bg-red-500 hover:bg-red-600 text-white"
                                  : "border-slate-200 hover:border-red-500 hover:text-red-500"
                              }`}
                              onClick={() => setDonationAmount(amount.value)}
                            >
                              {amount.label}
                            </Button>
                          </div>
                        ))}
                      </div>
                      {donationAmount === "custom" && (
                        <div className="mt-4">
                          <Input
                            type="number"
                            placeholder="후원 금액을 입력해주세요"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="text-center text-lg"
                          />
                        </div>
                      )}
                    </div>

                    {/* Purpose Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">후원 용도 (선택)</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="후원 용도를 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {donationPurposes.map((purpose) => (
                            <SelectItem key={purpose.id} value={purpose.id}>
                              {purpose.title} - {purpose.description}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>

                  <TabsContent value="monthly" className="space-y-8">
                    <div className="text-center">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">정기 후원</h3>
                      <p className="text-slate-600">매월 일정 금액을 자동으로 후원합니다.</p>
                    </div>

                    {/* Monthly Amount Selection */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">월 후원 금액</Label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {donationAmounts.slice(0, 5).map((amount) => (
                          <div key={amount.value} className="relative">
                            {amount.popular && (
                              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-red-500 text-white text-xs">
                                추천
                              </Badge>
                            )}
                            <Button
                              variant={donationAmount === amount.value ? "default" : "outline"}
                              className={`w-full h-12 ${
                                donationAmount === amount.value
                                  ? "bg-red-500 hover:bg-red-600 text-white"
                                  : "border-slate-200 hover:border-red-500 hover:text-red-500"
                              }`}
                              onClick={() => setDonationAmount(amount.value)}
                            >
                              월 {amount.label}
                            </Button>
                          </div>
                        ))}
                        <Button
                          variant={donationAmount === "custom" ? "default" : "outline"}
                          className={`w-full h-12 ${
                            donationAmount === "custom"
                              ? "bg-red-500 hover:bg-red-600 text-white"
                              : "border-slate-200 hover:border-red-500 hover:text-red-500"
                          }`}
                          onClick={() => setDonationAmount("custom")}
                        >
                          직접 입력
                        </Button>
                      </div>
                      {donationAmount === "custom" && (
                        <div className="mt-4">
                          <Input
                            type="number"
                            placeholder="월 후원 금액을 입력해주세요"
                            value={customAmount}
                            onChange={(e) => setCustomAmount(e.target.value)}
                            className="text-center text-lg"
                          />
                        </div>
                      )}
                    </div>

                    {/* Billing Date */}
                    <div className="space-y-4">
                      <Label className="text-base font-medium">결제일</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="매월 결제일을 선택해주세요" />
                        </SelectTrigger>
                        <SelectContent>
                          {Array.from({ length: 28 }, (_, i) => i + 1).map((day) => (
                            <SelectItem key={day} value={day.toString()}>
                              매월 {day}일
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Payment Method */}
                <div className="space-y-4 mt-8">
                  <Label className="text-base font-medium">결제 방법</Label>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="grid md:grid-cols-2 gap-4">
                      {paymentMethods.map((method) => {
                        const Icon = method.icon
                        return (
                          <div
                            key={method.id}
                            className="flex items-center space-x-3 p-4 border rounded-lg hover:bg-slate-50"
                          >
                            <RadioGroupItem value={method.id} id={method.id} />
                            <Label htmlFor={method.id} className="flex-1 cursor-pointer">
                              <div className="flex items-center space-x-3">
                                <Icon className="h-5 w-5 text-slate-600" />
                                <div>
                                  <div className="font-medium">{method.name}</div>
                                  <div className="text-sm text-slate-600">{method.description}</div>
                                </div>
                              </div>
                            </Label>
                          </div>
                        )
                      })}
                    </div>
                  </RadioGroup>
                </div>

                {/* Donor Information */}
                <div className="space-y-6 mt-8">
                  <h4 className="text-lg font-semibold text-slate-900">후원자 정보</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="donorName">성명 *</Label>
                      <Input id="donorName" placeholder="홍길동" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donorPhone">휴대폰 번호 *</Label>
                      <Input id="donorPhone" placeholder="010-1234-5678" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donorEmail">이메일 *</Label>
                      <Input id="donorEmail" type="email" placeholder="example@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="donorBirth">생년월일 *</Label>
                      <Input id="donorBirth" type="date" required />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="donorAddress">주소</Label>
                      <Input id="donorAddress" placeholder="서울특별시 영등포구..." />
                    </div>
                  </div>
                </div>

                {/* Payment Information */}
                {paymentMethod === "card" && (
                  <div className="space-y-6 mt-8">
                    <h4 className="text-lg font-semibold text-slate-900">결제 정보</h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber">카드 번호 *</Label>
                        <Input id="cardNumber" placeholder="1234-5678-9012-3456" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="expiry">유효기간 *</Label>
                        <Input id="expiry" placeholder="MM/YY" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvc">CVC *</Label>
                        <Input id="cvc" placeholder="123" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cardName">카드 소유자명 *</Label>
                        <Input id="cardName" placeholder="홍길동" required />
                      </div>
                    </div>
                  </div>
                )}

                {/* Message */}
                <div className="space-y-2 mt-8">
                  <Label htmlFor="message">후원 메시지 (선택)</Label>
                  <Textarea
                    id="message"
                    placeholder="개혁신당에 전하고 싶은 메시지를 작성해주세요."
                    className="min-h-24"
                  />
                </div>

                {/* Agreements */}
                <div className="space-y-4 mt-8">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" required />
                    <Label htmlFor="privacy" className="text-sm">
                      개인정보 처리방침에 동의합니다. (필수)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="marketing" />
                    <Label htmlFor="marketing" className="text-sm">
                      마케팅 정보 수신에 동의합니다. (선택)
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      뉴스레터 구독에 동의합니다. (선택)
                    </Label>
                  </div>
                </div>

                {/* Summary */}
                <div className="bg-slate-50 p-6 rounded-lg mt-8">
                  <h4 className="font-semibold text-slate-900 mb-4">후원 요약</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>후원 유형</span>
                      <span className="font-medium">{donationType === "one-time" ? "일시 후원" : "정기 후원"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>후원 금액</span>
                      <span className="font-medium">
                        {donationAmount === "custom"
                          ? `${customAmount || 0}원`
                          : `${Number.parseInt(donationAmount || "0").toLocaleString()}원`}
                        {donationType === "monthly" && " (월)"}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>결제 방법</span>
                      <span className="font-medium">{paymentMethods.find((m) => m.id === paymentMethod)?.name}</span>
                    </div>
                    {donationType === "one-time" && (
                      <div className="border-t pt-2 flex justify-between font-semibold text-lg">
                        <span>총 후원 금액</span>
                        <span className="text-red-500">
                          {donationAmount === "custom"
                            ? `${customAmount || 0}원`
                            : `${Number.parseInt(donationAmount || "0").toLocaleString()}원`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-8">
                  <Button className="w-full bg-red-500 hover:bg-red-600 text-white text-lg py-3">
                    <Heart className="mr-2 h-5 w-5" />
                    {donationType === "one-time" ? "후원하기" : "정기 후원 시작하기"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donor Benefits */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">후원자 혜택</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당을 후원해주시는 분들께 다양한 혜택을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {donorBenefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-red-500" />
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

      {/* Contact Information */}
      <section className="py-16 bg-red-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">후원 문의</h2>
            <p className="text-xl text-white/90">후원에 대한 궁금한 점이 있으시면 언제든 연락주세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">전화 문의</h3>
                <p className="text-white/80">02-1234-5679</p>
                <p className="text-sm text-white/60">평일 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">이메일 문의</h3>
                <p className="text-white/80">donate@reformparty.kr</p>
                <p className="text-sm text-white/60">24시간 접수</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Banknote className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">계좌 이체</h3>
                <p className="text-white/80">국민은행 123-456-789012</p>
                <p className="text-sm text-white/60">개혁신당</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
