import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, Eye, ThumbsUp, MessageCircle, Calendar, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const getCategoryData = (id: string) => {
  const categories = {
    economy: {
      id: "economy",
      title: "경제·일자리",
      description: "지속가능한 경제성장과 양질의 일자리 창출을 위한 정책들",
      color: "bg-blue-500",
      policies: [
        {
          id: "youth-startup-support",
          title: "청년 창업 생태계 혁신",
          description: "창업 성공률 2배 향상을 위한 종합 지원책",
          status: "시행중",
          supportRate: 87,
          views: 15420,
          likes: 892,
          comments: 156,
          lastUpdated: "2024-01-15",
        },
        {
          id: "small-business-digital",
          title: "소상공인 디지털 전환 지원",
          description: "디지털 기술 도입으로 소상공인 경쟁력 강화",
          status: "검토중",
          supportRate: 78,
          views: 8920,
          likes: 445,
          comments: 89,
          lastUpdated: "2024-01-10",
        },
        {
          id: "green-new-deal",
          title: "한국형 그린뉴딜 2.0",
          description: "탄소중립과 경제성장을 동시에 달성하는 정책",
          status: "준비중",
          supportRate: 82,
          views: 12340,
          likes: 678,
          comments: 134,
          lastUpdated: "2024-01-08",
        },
      ],
    },
    education: {
      id: "education",
      title: "교육",
      description: "미래형 교육시스템과 평등한 교육기회 제공을 위한 정책들",
      color: "bg-green-500",
      policies: [
        {
          id: "future-education-system",
          title: "미래형 교육 시스템 구축",
          description: "개인 맞춤형 학습과 창의성 중심 교육",
          status: "시행중",
          supportRate: 92,
          views: 23150,
          likes: 1247,
          comments: 298,
          lastUpdated: "2024-01-12",
        },
        {
          id: "private-education-reform",
          title: "사교육비 경감 대책",
          description: "공교육 강화를 통한 사교육 의존도 감소",
          status: "검토중",
          supportRate: 85,
          views: 18760,
          likes: 934,
          comments: 187,
          lastUpdated: "2024-01-09",
        },
      ],
    },
    welfare: {
      id: "welfare",
      title: "복지·보건",
      description: "전 국민 건강보장과 사회안전망 강화를 위한 정책들",
      color: "bg-red-500",
      policies: [
        {
          id: "universal-healthcare",
          title: "전 국민 건강보험 확대",
          description: "의료비 걱정 없는 건강한 사회 실현",
          status: "시행중",
          supportRate: 89,
          views: 31280,
          likes: 1856,
          comments: 423,
          lastUpdated: "2024-01-10",
        },
      ],
    },
  }

  return categories[id as keyof typeof categories] || null
}

export default function PolicyCategoryPage({ params }: { params: { id: string } }) {
  const category = getCategoryData(params.id)

  if (!category) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "시행중":
        return "bg-green-100 text-green-800"
      case "검토중":
        return "bg-yellow-100 text-yellow-800"
      case "준비중":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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

        {/* Category Header */}
        <div className="text-center mb-12">
          <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
            <Target className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{category.title}</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{category.description}</p>
        </div>

        {/* Policy List */}
        <div className="space-y-6">
          {category.policies.map((policy) => (
            <Card key={policy.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
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
                      <div className="flex items-center gap-1 text-sm text-slate-500">
                        <Calendar className="h-4 w-4" />
                        {policy.lastUpdated}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{policy.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{policy.description}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-50 p-4 rounded-lg">
                      <div className="text-center mb-3">
                        <div className="text-2xl font-bold text-primary">{policy.supportRate}%</div>
                        <p className="text-sm text-slate-600">지지율</p>
                      </div>
                      <Progress value={policy.supportRate} className="h-2" />
                    </div>

                    <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                      <Link href={`/policy/${policy.id}`}>자세히 보기</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">이 분야에 새로운 정책을 제안해보세요</h3>
              <p className="text-slate-600 mb-6">
                {category.title} 분야에서 개선이 필요한 부분이나 새로운 아이디어가 있으시다면 언제든 제안해주세요.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                <Link href="/policy/propose">정책 제안하기</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
