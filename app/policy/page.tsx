import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Briefcase, GraduationCap, Heart, Leaf, Shield, Smartphone, Search, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PolicyPage() {
  const policyCategories = [
    {
      icon: Briefcase,
      title: "경제·일자리",
      count: 12,
      color: "bg-blue-500",
    },
    {
      icon: GraduationCap,
      title: "교육",
      count: 8,
      color: "bg-green-500",
    },
    {
      icon: Heart,
      title: "복지·보건",
      count: 10,
      color: "bg-red-500",
    },
    {
      icon: Leaf,
      title: "환경·에너지",
      count: 6,
      color: "bg-emerald-500",
    },
    {
      icon: Shield,
      title: "안전·국방",
      count: 5,
      color: "bg-purple-500",
    },
    {
      icon: Smartphone,
      title: "과학·기술",
      count: 7,
      color: "bg-orange-500",
    },
  ]

  const featuredPolicies = [
    {
      category: "경제·일자리",
      title: "청년 창업 지원 확대",
      description:
        "청년들의 창업을 위한 자금 지원과 멘토링 프로그램을 대폭 확대하여 일자리 창출과 경제 활성화를 도모합니다.",
      objectives: ["창업 자금 지원 한도 확대", "멘토링 프로그램 운영", "창업 교육 강화"],
      impact: "연간 1만개 청년 창업 기업 지원 목표",
    },
    {
      category: "교육",
      title: "미래형 교육 시스템 구축",
      description: "4차 산업혁명 시대에 맞는 창의적이고 실용적인 교육 시스템을 구축하여 미래 인재를 양성합니다.",
      objectives: ["디지털 교육 인프라 확충", "창의성 중심 교육과정 개편", "교사 역량 강화 프로그램"],
      impact: "전국 모든 학교에 스마트 교육 환경 구축",
    },
    {
      category: "복지·보건",
      title: "전 국민 건강보험 확대",
      description: "의료비 부담을 줄이고 모든 국민이 양질의 의료 서비스를 받을 수 있도록 건강보험 보장성을 확대합니다.",
      objectives: ["비급여 항목 급여화 확대", "의료비 본인부담금 상한제 강화", "예방 중심 의료 시스템 구축"],
      impact: "의료비 본인부담률 50% 감소 목표",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              정책 허브
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">국민을 위한 정책</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당의 모든 정책을 한눈에 확인하고, 여러분의 의견을 제안해주세요. 국민과 함께 만들어가는 정책으로 더
              나은 미래를 준비합니다.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="정책을 검색해보세요..."
                  className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-primary"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
                  size="sm"
                >
                  검색
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">정책 분야별 탐색</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">관심 있는 분야의 정책을 자세히 살펴보세요.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {category.count}개 정책
                    </Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Policies */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">주요 정책 소개</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당의 핵심 정책들을 자세히 알아보세요.</p>
          </div>
          <div className="space-y-8">
            {featuredPolicies.map((policy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          {policy.category}
                        </Badge>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-3">{policy.title}</h3>
                      <p className="text-slate-600 leading-relaxed mb-6">{policy.description}</p>
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">주요 목표:</h4>
                        <ul className="space-y-2">
                          {policy.objectives.map((objective, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-slate-600">
                              <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                              {objective}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="space-y-6">
                      <div className="bg-primary/5 p-6 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-3">예상 효과</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{policy.impact}</p>
                      </div>
                      <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                        <Link
                          href={`/policy/${policy.category === "경제·일자리" ? "economic-innovation" : policy.category === "교육" ? "education-reform" : "youth-housing-support"}`}
                        >
                          자세히 보기
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Feedback */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">정책에 대한 의견을 들려주세요</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              여러분의 소중한 의견이 더 나은 정책을 만드는 밑거름이 됩니다. 정책 제안이나 개선 사항을 자유롭게
              제안해주세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90" asChild>
                <Link href="/policy/propose">정책 제안하기</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <Link href="/community">토론 참여하기</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
