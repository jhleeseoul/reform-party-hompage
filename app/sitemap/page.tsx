import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Home,
  Users,
  FileText,
  Newspaper,
  Heart,
  MessageSquare,
  Phone,
  Shield,
  Scale,
  Map,
  Eye,
  Download,
  ExternalLink,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SitemapPage() {
  const siteStructure = [
    {
      category: "메인 페이지",
      icon: Home,
      color: "bg-blue-500",
      pages: [{ name: "홈", url: "/", description: "개혁신당 메인 페이지" }],
    },
    {
      category: "당 소개",
      icon: Users,
      color: "bg-green-500",
      pages: [
        { name: "당 소개", url: "/party", description: "개혁신당 소개 및 핵심 가치" },
        { name: "당원 가입", url: "/membership", description: "당원 가입 신청 및 혜택 안내" },
      ],
    },
    {
      category: "정책",
      icon: FileText,
      color: "bg-purple-500",
      pages: [
        { name: "정책 개요", url: "/policy", description: "정책 분야별 개요" },
        { name: "정책 상세", url: "/policy/details", description: "상세 정책 내용 및 분석" },
        { name: "경제·일자리", url: "/policy/category/economy", description: "경제 및 일자리 정책" },
        { name: "교육", url: "/policy/category/education", description: "교육 정책" },
        { name: "복지·보건", url: "/policy/category/welfare", description: "복지 및 보건 정책" },
        { name: "환경·에너지", url: "/policy/category/environment", description: "환경 및 에너지 정책" },
        { name: "안전·국방", url: "/policy/category/security", description: "안전 및 국방 정책" },
        { name: "과학·기술", url: "/policy/category/technology", description: "과학 및 기술 정책" },
      ],
    },
    {
      category: "보도자료",
      icon: Newspaper,
      color: "bg-red-500",
      pages: [
        { name: "보도자료", url: "/news", description: "최신 보도자료 및 뉴스" },
        { name: "보도자료 상세", url: "/news/[id]", description: "개별 보도자료 내용" },
        { name: "사진 갤러리", url: "/news/gallery/[id]", description: "행사 및 활동 사진" },
        { name: "동영상", url: "/news/video/[id]", description: "영상 자료" },
        { name: "논평", url: "/news/press/[id]", description: "당 논평 및 성명서" },
      ],
    },
    {
      category: "참여",
      icon: Heart,
      color: "bg-pink-500",
      pages: [
        { name: "참여 허브", url: "/participate", description: "시민 참여 종합 안내" },
        { name: "후원하기", url: "/donate", description: "개혁신당 후원 및 기부" },
        { name: "자원봉사 신청", url: "/participate/volunteer/[id]", description: "자원봉사 기회 및 신청" },
        { name: "청원 참여", url: "/participate/petition/[id]", description: "온라인 청원 참여" },
        { name: "행사 참가", url: "/participate/event/[id]", description: "당 행사 참가 신청" },
      ],
    },
    {
      category: "커뮤니티",
      icon: MessageSquare,
      color: "bg-indigo-500",
      pages: [
        { name: "자유게시판", url: "/community", description: "커뮤니티 메인 페이지" },
        { name: "토론 주제", url: "/community/topic/[id]", description: "개별 토론 주제" },
        { name: "분야별 토론", url: "/community/category/[id]", description: "분야별 토론 게시판" },
        { name: "새 주제 작성", url: "/community/new-topic", description: "새로운 토론 주제 작성" },
      ],
    },
    {
      category: "문의 및 지원",
      icon: Phone,
      color: "bg-orange-500",
      pages: [
        { name: "연락처", url: "/contact", description: "종합 연락처 및 문의" },
        { name: "일반 문의", url: "/contact#general", description: "일반적인 문의사항" },
        { name: "언론 문의", url: "/contact#media", description: "언론 관련 문의" },
        { name: "자원봉사 문의", url: "/contact#volunteer", description: "자원봉사 관련 문의" },
      ],
    },
    {
      category: "법적 정보",
      icon: Scale,
      color: "bg-gray-500",
      pages: [
        { name: "개인정보처리방침", url: "/privacy", description: "개인정보 보호 정책" },
        { name: "이용약관", url: "/terms", description: "서비스 이용 약관" },
        { name: "사이트맵", url: "/sitemap", description: "전체 사이트 구조" },
        { name: "접근성 정책", url: "/accessibility", description: "웹 접근성 정책" },
      ],
    },
  ]

  const quickStats = [
    { label: "총 페이지 수", value: "47", icon: FileText },
    { label: "주요 섹션", value: "8", icon: Map },
    { label: "정책 분야", value: "6", icon: Shield },
    { label: "서비스 기능", value: "15", icon: Eye },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              사이트맵
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">사이트맵</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당 웹사이트의 전체 구조를 한눈에 확인하실 수 있습니다. 원하는 정보를 빠르게 찾아보세요.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Download className="mr-2 h-5 w-5" />
                사이트맵 다운로드
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <ExternalLink className="mr-2 h-5 w-5" />
                XML 사이트맵
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Site Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">사이트 구조</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당 웹사이트의 모든 페이지를 카테고리별로 정리했습니다.
            </p>
          </div>

          <div className="space-y-8">
            {siteStructure.map((section, index) => {
              const Icon = section.icon
              return (
                <Card key={index} className="border-0 shadow-lg">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 ${section.color} rounded-lg flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-slate-900">{section.category}</CardTitle>
                        <p className="text-slate-600">{section.pages.length}개 페이지</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {section.pages.map((page, pageIndex) => (
                        <div key={pageIndex} className="group">
                          <Link
                            href={page.url.includes("[id]") ? page.url.replace("[id]", "1") : page.url}
                            className="block p-4 border border-slate-200 rounded-lg hover:border-primary hover:bg-primary/5 transition-all duration-200"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-medium text-slate-900 group-hover:text-primary">{page.name}</h4>
                              <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-primary" />
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed">{page.description}</p>
                            <div className="mt-2 text-xs text-slate-400 font-mono">{page.url}</div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Search Tips */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-slate-900 text-center">사이트 이용 팁</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">빠른 탐색</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">상단 메뉴를 통해 주요 섹션에 빠르게 접근</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">검색 기능을 활용하여 원하는 정보 검색</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">브레드크럼을 통해 현재 위치 확인</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-slate-900">접근성 기능</h4>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">키보드 탐색 지원</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">스크린 리더 호환</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-slate-600">고대비 모드 지원</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h4 className="font-semibold text-slate-900 mb-3">자주 찾는 페이지</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { name: "당원가입", url: "/membership" },
                      { name: "후원하기", url: "/donate" },
                      { name: "정책보기", url: "/policy/details" },
                      { name: "보도자료", url: "/news" },
                      { name: "자유게시판", url: "/community" },
                      { name: "연락처", url: "/contact" },
                    ].map((link, index) => (
                      <Button key={index} asChild variant="outline" size="sm">
                        <Link href={link.url}>{link.name}</Link>
                      </Button>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
