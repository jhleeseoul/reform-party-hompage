"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Heart, Shield, CreditCard, Smartphone, Building } from "lucide-react"

export default function DonationForm() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [customAmount, setCustomAmount] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  const presetAmounts = [
    { value: "10000", label: "1만원" },
    { value: "30000", label: "3만원" },
    { value: "50000", label: "5만원" },
    { value: "100000", label: "10만원" },
    { value: "300000", label: "30만원" },
    { value: "500000", label: "50만원" },
  ]

  const paymentMethods = [
    { value: "card", label: "신용카드", icon: CreditCard },
    { value: "bank", label: "계좌이체", icon: Building },
    { value: "mobile", label: "휴대폰 결제", icon: Smartphone },
  ]

  const donationBenefits = [
    "정기 뉴스레터 발송",
    "후원자 전용 행사 초대",
    "정책 브리핑 우선 제공",
    "연말 기부금 영수증 발급",
  ]

  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Donation Form */}
        <div className="lg:col-span-2">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                후원 정보
              </CardTitle>
              <CardDescription>
                개혁신당의 활동을 후원해주셔서 감사합니다. 모든 후원금은 투명하게 사용됩니다.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Donation Type */}
              <div className="space-y-3">
                <Label className="text-base font-medium">후원 유형</Label>
                <RadioGroup value={donationType} onValueChange={setDonationType} className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="one-time" id="one-time" />
                    <Label htmlFor="one-time">일시 후원</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="monthly" id="monthly" />
                    <Label htmlFor="monthly">정기 후원</Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Amount Selection */}
              <div className="space-y-3">
                <Label className="text-base font-medium">후원 금액</Label>
                <div className="grid grid-cols-3 gap-3">
                  {presetAmounts.map((preset) => (
                    <Button
                      key={preset.value}
                      variant={amount === preset.value ? "default" : "outline"}
                      className={amount === preset.value ? "bg-primary hover:bg-primary/90" : ""}
                      onClick={() => {
                        setAmount(preset.value)
                        setCustomAmount("")
                      }}
                    >
                      {preset.label}
                    </Button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Input
                    type="number"
                    placeholder="직접 입력"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value)
                      setAmount("")
                    }}
                    className="flex-1"
                  />
                  <span className="text-slate-500">원</span>
                </div>
              </div>

              {/* Payment Method */}
              <div className="space-y-3">
                <Label className="text-base font-medium">결제 방법</Label>
                <div className="grid grid-cols-3 gap-3">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <Button
                        key={method.value}
                        variant={paymentMethod === method.value ? "default" : "outline"}
                        className={`flex flex-col gap-2 h-auto py-4 ${
                          paymentMethod === method.value ? "bg-primary hover:bg-primary/90" : ""
                        }`}
                        onClick={() => setPaymentMethod(method.value)}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{method.label}</span>
                      </Button>
                    )
                  })}
                </div>
              </div>

              {/* Personal Information */}
              <div className="space-y-4">
                <Label className="text-base font-medium">후원자 정보</Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">이름 *</Label>
                    <Input id="name" placeholder="홍길동" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">연락처 *</Label>
                    <Input id="phone" placeholder="010-1234-5678" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">이메일 *</Label>
                  <Input id="email" type="email" placeholder="example@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">주소</Label>
                  <Input id="address" placeholder="서울특별시 영등포구..." />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message">응원 메시지 (선택)</Label>
                <Textarea
                  id="message"
                  placeholder="개혁신당에 전하고 싶은 메시지를 남겨주세요."
                  className="min-h-[100px]"
                />
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" required />
                  <Label htmlFor="terms" className="text-sm">
                    개인정보 수집 및 이용에 동의합니다. *
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="newsletter" />
                  <Label htmlFor="newsletter" className="text-sm">
                    뉴스레터 및 후원 관련 정보 수신에 동의합니다.
                  </Label>
                </div>
              </div>

              {/* Submit Button */}
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-lg"
                disabled={!amount && !customAmount}
              >
                <Heart className="mr-2 h-5 w-5" />
                {(amount || customAmount) && `${(amount || customAmount).toLocaleString()}원 `}
                후원하기
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Donation Info Sidebar */}
        <div className="space-y-6">
          {/* Security Info */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-lg">
                <Shield className="h-5 w-5 text-green-500" />
                안전한 후원
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-slate-600">
              <p>• SSL 암호화로 개인정보 보호</p>
              <p>• 정치자금법에 따른 투명한 관리</p>
              <p>• 기부금 영수증 자동 발급</p>
              <p>• 언제든지 정기후원 해지 가능</p>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">후원자 혜택</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {donationBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Supporters */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">최근 후원자</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { name: "김**", amount: "50,000", time: "5분 전" },
                { name: "이**", amount: "30,000", time: "12분 전" },
                { name: "박**", amount: "100,000", time: "23분 전" },
                { name: "최**", amount: "20,000", time: "1시간 전" },
              ].map((supporter, index) => (
                <div key={index} className="flex justify-between items-center text-sm">
                  <div>
                    <span className="font-medium">{supporter.name}</span>
                    <span className="text-slate-500 ml-2">{supporter.time}</span>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {supporter.amount}원
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-lg">후원 문의</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-slate-600">
              <p>전화: 02-1234-5678</p>
              <p>이메일: donation@reformparty.kr</p>
              <p>평일 09:00 - 18:00</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
