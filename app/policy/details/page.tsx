import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import {
  Briefcase,
  GraduationCap,
  Heart,
  Leaf,
  Shield,
  Smartphone,
  Users,
  TrendingUp,
  FileText,
  Download,
  Share2,
  ThumbsUp,
  MessageCircle,
  Eye,
  Search,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PolicyDetailsPage() {
  const policyCategories = [
    {
      id: "economy",
      icon: Briefcase,
      title: "경제·일자리",
      description: "지속가능한 경제성장과 양질의 일자리 창출",
      policies: 15,
      color: "bg-blue-500",
      featured: true,
    },
    {
      id: "education",
      icon: GraduationCap,
      title: "교육",
      description: "미래형 교육시스템과 평등한 교육기회",
      policies: 12,
      color: "bg-green-500",
      featured: true,
    },
    {
      id: "welfare",
      icon: Heart,
      title: "복지·보건",
      description: "전 국민 건강보장과 사회안전망 강화",
      policies: 18,
      color: "bg-red-500",
      featured: true,
    },
    {
      id: "environment",
      icon: Leaf,
      title: "환경·에너지",
      description: "탄소중립과 지속가능한 에너지 전환",
      policies: 10,
      color: "bg-emerald-500",
      featured: false,
    },
    {
      id: "security",
      icon: Shield,
      title: "안전·국방",
      description: "국민안전과 평화통일 기반 조성",
      policies: 8,
      color: "bg-purple-500",
      featured: false,
    },
    {
      id: "technology",
      icon: Smartphone,
      title: "과학·기술",
      description: "디지털 혁신과 4차 산업혁명 대응",
      policies: 11,
      color: "bg-orange-500",
      featured: false,
    },
  ]

  const featuredPolicies = [
    {
      id: "youth-startup-support",
      category: "경제·일자리",
      title: "청년 창업 생태계 혁신",
      subtitle: "창업 성공률 2배 향상을 위한 종합 지원책",
      description:
        "청년들의 창업 성공률을 높이고 혁신적인 아이디어가 사업으로 연결될 수 있도록 자금, 멘토링, 인프라를 종합적으로 지원합니다.",
      keyPoints: [
        "창업 자금 지원 한도 1억원으로 확대",
        "전국 50개 창업 허브 설립",
        "성공 창업가 멘토링 프로그램 운영",
        "창업 실패 시 재기 지원 시스템 구축",
      ],
      timeline: "2024년 하반기 시행",
      budget: "연간 5,000억원",
      expectedImpact: "연간 2만개 청년 창업기업 지원",
      supportRate: 87,
      views: 15420,
      likes: 892,
      comments: 156,
      lastUpdated: "2024-01-15",
    },
    {
      id: "future-education-system",
      category: "교육",
      title: "미래형 교육 시스템 구축",
      subtitle: "개인 맞춤형 학습과 창의성 중심 교육",
      description:
        "4차 산업혁명 시대에 맞는 창의적이고 실용적인 교육 시스템을 구축하여 학생 개개인의 잠재력을 최대한 발휘할 수 있도록 지원합니다.",
      keyPoints: [
        "AI 기반 개인 맞춤형 학습 시스템 도입",
        "창의성과 문제해결력 중심 교육과정 개편",
        "교사 1인당 학생 수 20명 이하로 단계적 축소",
        "전국 모든 학교 스마트 교육 인프라 구축",
      ],
      timeline: "2024년~2027년 단계적 시행",
      budget: "연간 3조원",
      expectedImpact: "전국 1만 2천개 학교 교육 혁신",
      supportRate: 92,
      views: 23150,
      likes: 1247,
      comments: 298,
      lastUpdated: "2024-01-12",
    },
    {
      id: "universal-healthcare",
      category: "복지·보건",
      title: "전 국민 건강보험 확대",
      subtitle: "의료비 걱정 없는 건강한 사회 실현",
      description:
        "의료비 부담을 대폭 줄이고 모든 국민이 경제적 부담 없이 양질의 의료 서비스를 받을 수 있는 보편적 의료보장 시스템을 구축합니다.",
      keyPoints: [
        "비급여 항목의 80% 급여화 추진",
        "의료비 본인부담금 상한제 강화",
        "예방 중심 의료 시스템 구축",
        "지역 간 의료 격차 해소",
      ],
      timeline: "2024년~2026년 단계적 확대",
      budget: "연간 15조원",
      expectedImpact: "의료비 본인부담률 50% 감소",
      supportRate: 89,
      views: 31280,
      likes: 1856,
      comments: 423,
      lastUpdated: "2024-01-10",
    },
  ]

  const policyStats = [
    {
      label: "총 정책 수",
      value: "74",
      icon: FileText,
      change: "+12",
    },
    {
      label: "시민 의견 반영",
      value: "2,847",
      icon: Users,
      change: "+156",
    },
    {
      label: "정책 지지율",
      value: "89%",
      icon: TrendingUp,
      change: "+3%",
    },
    {
      label: "전문가 검토",
      value: "156",
      icon: Eye,
      change: "+8",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              정책 상세 정보
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">국민과 함께 만드는 정책</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당의 모든 정책을 투명하게 공개하고, 시민 여러분의 의견을 적극 반영하여 더 나은 대한민국을 만들어가는
              실질적인 정책을 제시합니다.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/policy/propose">
                  <FileText className="mr-2 h-5 w-5" />
                  정책 제안하기
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Download className="mr-2 h-5 w-5" />
                정책집 다운로드
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {policyStats.map((stat, index) => {
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

      {/* Policy Categories */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">정책 분야별 탐색</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              6개 주요 분야의 정책을 체계적으로 분류하여 제시합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {policyCategories.map((category) => {
              const Icon = category.icon
              return (
                <Card
                  key={category.id}
                  className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                    category.featured ? "ring-2 ring-primary/20" : ""
                  }`}
                >
                  <CardHeader className="text-center">
                    {category.featured && (
                      <Badge className="absolute top-4 right-4 bg-primary text-white">주요 정책</Badge>
                    )}
                    <div
                      className={`mx-auto w-16 h-16 ${category.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-primary transition-colors">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-3">
                    <p className="text-slate-600 text-sm leading-relaxed">{category.description}</p>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                      {category.policies}개 정책
                    </Badge>
                    <Button variant="ghost" className="w-full mt-4 text-primary hover:bg-primary/5" asChild>
                      <Link href={`/policy/category/${category.id}`}>자세히 보기 →</Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Policies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">핵심 정책 상세</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당의 대표 정책들을 상세히 알아보세요.</p>
          </div>

          <div className="space-y-8">
            {featuredPolicies.map((policy, index) => (
              <Card key={policy.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-4 gap-8">
                    <div className="lg:col-span-3 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {policy.category}
                          </Badge>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4" />
                              {policy.views.toLocaleString()}
                            </div>
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-4 w-4" />
                              {policy.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-4 w-4" />
                              {policy.comments}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Share2 className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{policy.title}</h3>
                        <p className="text-lg text-primary font-medium mb-4">{policy.subtitle}</p>
                        <p className="text-slate-600 leading-relaxed">{policy.description}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-3">주요 추진 내용</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {policy.keyPoints.map((point, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{point}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                        <div>
                          <div className="text-sm text-slate-500 mb-1">시행 일정</div>
                          <div className="font-medium text-slate-900">{policy.timeline}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 mb-1">소요 예산</div>
                          <div className="font-medium text-slate-900">{policy.budget}</div>
                        </div>
                        <div>
                          <div className="text-sm text-slate-500 mb-1">최종 업데이트</div>
                          <div className="font-medium text-slate-900">{policy.lastUpdated}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-slate-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-slate-900 mb-3">예상 효과</h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-4">{policy.expectedImpact}</p>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-slate-500">시민 지지율</span>
                            <span className="font-medium">{policy.supportRate}%</span>
                          </div>
                          <Progress value={policy.supportRate} className="h-2" />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                          <Link href={`/policy/${policy.id}`}>전체 내용 보기</Link>
                        </Button>
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                          의견 제시하기
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Development Process */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">정책 개발 과정</h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              투명하고 민주적인 정책 개발 과정을 통해 국민의 목소리를 정책에 반영합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "문제 발굴", desc: "시민 제안 및 현장 조사" },
              { step: "2", title: "연구 분석", desc: "전문가 자문 및 데이터 분석" },
              { step: "3", title: "의견 수렴", desc: "공청회 및 온라인 토론" },
              { step: "4", title: "정책 확정", desc: "당내 심의 및 최종 결정" },
            ].map((process, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold">{process.step}</span>
                  </div>
                  <h3 className="font-semibold mb-2">{process.title}</h3>
                  <p className="text-sm text-white/80">{process.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
