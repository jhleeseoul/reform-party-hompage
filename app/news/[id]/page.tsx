import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, Printer, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the article data based on the ID
  // For this example, we'll use mock data
  const article = {
    id: params.id,
    title: "개혁신당, 국민 주거안정을 위한 새로운 주택정책 발표",
    date: "2024-01-15",
    author: "개혁신당 정책위원회",
    category: "정책발표",
    image: "/placeholder.svg?height=600&width=1200",
    content: `
      <p>개혁신당은 오늘 국민 주거안정을 위한 종합 주택정책을 발표했습니다. 이번 정책은 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등을 포함하고 있습니다.</p>
      
      <h2>청년 주거 지원 확대</h2>
      <p>청년들의 주거 부담을 줄이기 위해 다음과 같은 정책을 시행합니다:</p>
      <ul>
        <li>청년 전용 임대주택 공급 확대 (연간 5만호)</li>
        <li>청년 주거비 지원 프로그램 강화</li>
        <li>대학가 주변 기숙사형 임대주택 확충</li>
      </ul>
      
      <h2>공공임대주택 공급 확대</h2>
      <p>서민들의 주거 안정을 위해 다음과 같은 정책을 추진합니다:</p>
      <ul>
        <li>공공임대주택 연간 10만호 공급</li>
        <li>노후 주택 리모델링을 통한 임대주택 확보</li>
        <li>도심 내 유휴 부지 활용 방안 마련</li>
      </ul>
      
      <h2>주택시장 안정화 방안</h2>
      <p>주택 가격 안정화를 위한 정책 방향은 다음과 같습니다:</p>
      <ul>
        <li>투기 수요 억제를 위한 제도 개선</li>
        <li>실수요자 중심의 주택 공급 체계 구축</li>
        <li>주택 금융 지원 확대</li>
      </ul>
      
      <p>개혁신당 김개혁 대표는 "모든 국민이 안정적인 주거 환경에서 살 수 있도록 하는 것이 우리 당의 목표"라며, "이번 정책을 통해 주거 불안 문제를 해소하고 국민 삶의 질을 높이는 데 기여하겠다"고 밝혔습니다.</p>
      
      <p>이번 정책은 향후 국회에 제출될 예정이며, 개혁신당은 여야 협력을 통해 관련 법안이 신속히 처리될 수 있도록 노력할 계획입니다.</p>
    `,
    tags: ["주택정책", "청년주거", "공공임대주택", "주거안정"],
    relatedArticles: [
      {
        id: "economic-reform-plan",
        title: "경제 개혁 로드맵 제시",
        date: "2024-01-10",
        category: "정책발표",
      },
      {
        id: "youth-forum-success",
        title: "청년 정책 포럼 성황리에 마쳐",
        date: "2024-01-12",
        category: "행사",
      },
      {
        id: "education-reform",
        title: "교육 개혁안 국회 제출",
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

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {article.category}
              </Badge>
              <div className="flex items-center text-sm text-slate-500">
                <Calendar className="h-4 w-4 mr-1" />
                {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>
            <p className="text-slate-600">작성자: {article.author}</p>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
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

          {/* Article Content */}
          <div className="prose prose-slate max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Tags */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">태그</h3>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-slate-600">
                  #{tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-slate-900 mb-4">관련 기사</h3>
            <div className="space-y-4">
              {article.relatedArticles.map((related) => (
                <div key={related.id} className="border-b border-slate-200 pb-4 last:border-0">
                  <div className="flex items-center gap-3 mb-1">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {related.category}
                    </Badge>
                    <span className="text-xs text-slate-500">{related.date}</span>
                  </div>
                  <Link href={`/news/${related.id}`}>
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

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  )
}
