import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Printer, ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PressReleasePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the press release data based on the ID
  // For this example, we'll use mock data
  const pressRelease = {
    id: params.id,
    title: "개혁신당, 주거안정 종합대책 발표",
    date: "2024-01-15",
    category: "정책발표",
    content: `
      <p><strong>보도자료</strong></p>
      <p><strong>배포일시:</strong> 2024년 1월 15일</p>
      <p><strong>담당부서:</strong> 개혁신당 정책위원회</p>
      <p><strong>담당자:</strong> 홍보팀 김홍보 (02-1234-5678)</p>
      
      <h2>개혁신당, 국민 주거안정을 위한 종합대책 발표</h2>
      
      <p>개혁신당(당대표 김개혁)은 오늘(15일) 당사에서 기자회견을 열고 '국민 주거안정을 위한 종합대책'을 발표했다.</p>
      
      <p>이번 대책은 ▲청년 주거 지원 확대 ▲공공임대주택 공급 확대 ▲주택시장 안정화 방안 등 세 가지 핵심 축으로 구성되어 있다.</p>
      
      <p>첫째, 청년 주거 지원 확대를 위해 청년 전용 임대주택을 연간 5만호 공급하고, 청년 주거비 지원 프로그램을 강화하며, 대학가 주변 기숙사형 임대주택을 확충할 계획이다.</p>
      
      <p>둘째, 서민들의 주거 안정을 위해 공공임대주택을 연간 10만호 공급하고, 노후 주택 리모델링을 통한 임대주택 확보, 도심 내 유휴 부지 활용 방안을 마련할 예정이다.</p>
      
      <p>셋째, 주택 가격 안정화를 위해 투기 수요 억제를 위한 제도를 개선하고, 실수요자 중심의 주택 공급 체계를 구축하며, 주택 금융 지원을 확대할 방침이다.</p>
      
      <p>김개혁 대표는 "모든 국민이 안정적인 주거 환경에서 살 수 있도록 하는 것이 우리 당의 목표"라며, "이번 정책을 통해 주거 불안 문제를 해소하고 국민 삶의 질을 높이는 데 기여하겠다"고 밝혔다.</p>
      
      <p>이번 정책은 향후 국회에 제출될 예정이며, 개혁신당은 여야 협력을 통해 관련 법안이 신속히 처리될 수 있도록 노력할 계획이다.</p>
      
      <p><strong>첨부:</strong> 국민 주거안정을 위한 종합대책 전문</p>
    `,
    attachments: [
      {
        name: "국민 주거안정을 위한 종합대책 전문.pdf",
        size: "2.4MB",
      },
      {
        name: "보도자료 사진.zip",
        size: "15.8MB",
      },
    ],
    relatedPressReleases: [
      {
        id: "economic-plan-press",
        title: "경제 개혁 로드맵 발표 관련 보도자료",
        date: "2024-01-10",
        category: "정책발표",
      },
      {
        id: "youth-forum-press",
        title: "전국 청년 정책 포럼 개최 결과",
        date: "2024-01-12",
        category: "행사",
      },
      {
        id: "education-reform-press",
        title: "교육 개혁안 국회 제출 관련 보도자료",
        date: "2024-01-05",
        category: "정책발표",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary p-0">
              <Link href="/news">
                <ArrowLeft className="h-4 w-4 mr-2" />
                뉴스 목록으로 돌아가기
              </Link>
            </Button>
          </div>

          {/* Press Release Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {pressRelease.category}
              </Badge>
              <div className="flex items-center text-sm text-slate-500">
                <Calendar className="h-4 w-4 mr-1" />
                {pressRelease.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{pressRelease.title}</h1>
          </div>

          {/* Share & Print */}
          <div className="flex justify-end gap-4 mb-8">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Share2 className="h-4 w-4" />
              공유하기
            </Button>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              인쇄하기
            </Button>
          </div>

          {/* Press Release Content */}
          <div
            className="prose prose-slate max-w-none mb-12 border-t border-b border-slate-200 py-8"
            dangerouslySetInnerHTML={{ __html: pressRelease.content }}
          />

          {/* Attachments */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">첨부파일</h3>
            <div className="space-y-3">
              {pressRelease.attachments.map((attachment, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center">
                    <div className="bg-slate-100 p-2 rounded mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-slate-600"
                      >
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                        <line x1="16" y1="13" x2="8" y2="13" />
                        <line x1="16" y1="17" x2="8" y2="17" />
                        <line x1="10" y1="9" x2="8" y2="9" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">{attachment.name}</p>
                      <p className="text-sm text-slate-500">{attachment.size}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary/90">
                    <Download className="h-4 w-4 mr-1" />
                    다운로드
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {/* Related Press Releases */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">관련 보도자료</h3>
            <div className="space-y-4">
              {pressRelease.relatedPressReleases.map((related) => (
                <div key={related.id} className="border-b border-slate-200 pb-4 last:border-0">
                  <div className="flex items-center gap-3 mb-1">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {related.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{related.date}</span>
                  </div>
                  <Link href={`/news/press/${related.id}`}>
                    <h4 className="text-lg font-medium text-slate-900 hover:text-primary transition-colors">
                      {related.title}
                    </h4>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
