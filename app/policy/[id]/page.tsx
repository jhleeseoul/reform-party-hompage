import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Target, TrendingUp, MessageSquare, ThumbsUp, Share2 } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import { notFound } from "next/navigation"

const getPolicyById = (id: string) => {
  const policies = {
    "youth-housing-support": {
      id: "youth-housing-support",
      title: "청년 주거비 지원 확대",
      category: "주거",
      status: "진행중",
      description: "청년들의 주거 부담을 줄이기 위한 정부 지원 확대를 요구합니다.",
      fullDescription: `
        청년들의 주거 부담이 심각한 사회 문제로 대두되고 있습니다. 
        높은 전세금과 월세로 인해 많은 청년들이 경제적 어려움을 겪고 있으며, 
        이는 결혼, 출산, 경제활동에도 부정적인 영향을 미치고 있습니다.
        
        이 정책은 다음과 같은 방향으로 추진됩니다:
        
        1. 청년 월세 지원금 확대
        - 현행 월 20만원에서 30만원으로 인상
        - 지원 대상 연령을 만 34세까지 확대
        - 소득 기준 완화로 더 많은 청년 포함
        
        2. 청년 전용 임대주택 공급 확대
        - 연간 5만 호 신규 공급
        - 시세 대비 80% 수준의 임대료
        - 최대 6년간 거주 가능
        
        3. 청년 주택구입 지원
        - 무이자 전세자금 대출 한도 확대
        - 생애최초 주택구입 시 취득세 면제
        - 청년 우선 분양 물량 확대
      `,
      objectives: [
        "청년 주거비 부담 30% 감소",
        "청년 전용 임대주택 5만 호 공급",
        "월세 지원금 30만원으로 인상",
        "주거 안정성 향상으로 출산율 제고",
      ],
      timeline: [
        { phase: "1단계", period: "2024년 상반기", tasks: ["법안 발의", "예산 확보", "시범사업 시작"] },
        { phase: "2단계", period: "2024년 하반기", tasks: ["전국 확대", "지원금 인상", "임대주택 착공"] },
        { phase: "3단계", period: "2025년", tasks: ["효과 분석", "제도 개선", "추가 확대"] },
      ],
      budget: "연간 2조 5천억원",
      expectedImpact: "전국 50만 청년 혜택, 주거비 부담 30% 감소",
      supportRate: 78,
      relatedPolicies: ["education-reform", "economic-innovation"],
      documents: [
        { title: "청년 주거 정책 백서", type: "PDF", size: "2.3MB" },
        { title: "해외 사례 분석 보고서", type: "PDF", size: "1.8MB" },
        { title: "예산 계획서", type: "Excel", size: "0.5MB" },
      ],
    },
    "education-reform": {
      id: "education-reform",
      title: "공교육 정상화를 위한 교육개혁",
      category: "교육",
      status: "검토중",
      description: "사교육비 부담을 줄이고 공교육의 질을 높이기 위한 종합적인 교육개혁을 추진합니다.",
      fullDescription: `
        현재 우리나라의 교육 시스템은 과도한 사교육 의존, 입시 위주의 교육, 
        창의성 부족 등 여러 문제점을 안고 있습니다.
        
        이를 해결하기 위한 종합적인 교육개혁 방안을 제시합니다:
        
        1. 공교육 강화
        - 교사 1인당 학생 수 20명 이하로 감축
        - 방과후 프로그램 확대 및 질 향상
        - 개별 맞춤형 교육 시스템 도입
        
        2. 사교육비 경감
        - 온라인 무료 강의 플랫폼 구축
        - 공교육 내 심화 프로그램 확대
        - 사교육비 소득공제 한도 확대
        
        3. 창의적 교육과정
        - 암기 위주에서 사고력 중심으로 전환
        - 예술, 체육 교육 시간 확대
        - 진로 탐색 프로그램 강화
      `,
      objectives: ["사교육비 30% 감소", "교사 1인당 학생 수 20명 이하", "창의적 교육과정 도입", "교육 만족도 80% 이상"],
      timeline: [
        { phase: "1단계", period: "2024년", tasks: ["교육과정 개편", "교사 충원", "인프라 구축"] },
        { phase: "2단계", period: "2025년", tasks: ["시범 운영", "효과 분석", "제도 보완"] },
        { phase: "3단계", period: "2026년", tasks: ["전면 시행", "지속 개선", "성과 평가"] },
      ],
      budget: "연간 15조원",
      expectedImpact: "전국 학생 및 학부모 만족도 향상, 사교육비 부담 경감",
      supportRate: 85,
      relatedPolicies: ["youth-housing-support"],
      documents: [
        { title: "교육개혁 종합계획", type: "PDF", size: "5.2MB" },
        { title: "해외 교육제도 벤치마킹", type: "PDF", size: "3.1MB" },
      ],
    },
  }

  return policies[id as keyof typeof policies] || null
}

export default function PolicyDetailPage({ params }: { params: { id: string } }) {
  const policy = getPolicyById(params.id)

  if (!policy) {
    notFound()
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "진행중":
        return "bg-green-100 text-green-800"
      case "검토중":
        return "bg-yellow-100 text-yellow-800"
      case "완료":
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
          <Link href="/policy">
            <ArrowLeft className="mr-2 h-4 w-4" />
            정책 목록으로 돌아가기
          </Link>
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Policy Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="bg-primary/10 text-primary">
                  {policy.category}
                </Badge>
                <Badge className={getStatusColor(policy.status)}>{policy.status}</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{policy.title}</h1>
              <p className="text-lg text-slate-600 leading-relaxed">{policy.description}</p>
            </div>

            {/* Policy Content */}
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="overview">개요</TabsTrigger>
                <TabsTrigger value="timeline">추진일정</TabsTrigger>
                <TabsTrigger value="budget">예산</TabsTrigger>
                <TabsTrigger value="documents">자료</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>정책 상세 내용</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose max-w-none">
                      <div className="whitespace-pre-line text-slate-700 leading-relaxed">{policy.fullDescription}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>주요 목표</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {policy.objectives.map((objective, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <Target className="h-5 w-5 text-primary" />
                          <span>{objective}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="timeline">
                <Card>
                  <CardHeader>
                    <CardTitle>추진 일정</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {policy.timeline.map((phase, index) => (
                        <div key={index} className="relative">
                          <div className="flex items-center gap-4">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {index + 1}
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg">{phase.phase}</h3>
                              <p className="text-slate-600 mb-2">{phase.period}</p>
                              <ul className="space-y-1">
                                {phase.tasks.map((task, taskIndex) => (
                                  <li key={taskIndex} className="text-sm text-slate-700">
                                    • {task}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {index < policy.timeline.length - 1 && (
                            <div className="absolute left-4 top-8 w-0.5 h-16 bg-slate-200"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="budget">
                <Card>
                  <CardHeader>
                    <CardTitle>예산 계획</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary mb-2">{policy.budget}</div>
                      <p className="text-slate-600">총 소요 예산</p>
                    </div>

                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">기대 효과</h4>
                      <p className="text-slate-700">{policy.expectedImpact}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>관련 자료</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {policy.documents.map((doc, index) => (
                        <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                          <div>
                            <h4 className="font-medium">{doc.title}</h4>
                            <p className="text-sm text-slate-600">
                              {doc.type} • {doc.size}
                            </p>
                          </div>
                          <Button variant="outline" size="sm">
                            다운로드
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Support Rate */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  국민 지지율
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-primary">{policy.supportRate}%</div>
                  <p className="text-sm text-slate-600">찬성</p>
                </div>
                <Progress value={policy.supportRate} className="mb-4" />
                <div className="flex justify-between text-sm text-slate-600">
                  <span>반대 {100 - policy.supportRate}%</span>
                  <span>찬성 {policy.supportRate}%</span>
                </div>
              </CardContent>
            </Card>

            {/* Actions */}
            <Card>
              <CardHeader>
                <CardTitle>참여하기</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full">
                  <ThumbsUp className="mr-2 h-4 w-4" />
                  정책 지지하기
                </Button>
                <Button variant="outline" className="w-full">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  의견 남기기
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="mr-2 h-4 w-4" />
                  공유하기
                </Button>
              </CardContent>
            </Card>

            {/* Related Policies */}
            <Card>
              <CardHeader>
                <CardTitle>관련 정책</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {policy.relatedPolicies.map((relatedId, index) => (
                    <Link
                      key={index}
                      href={`/policy/${relatedId}`}
                      className="block p-2 rounded hover:bg-slate-50 text-sm text-primary hover:text-primary/80"
                    >
                      관련 정책 보기 →
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
