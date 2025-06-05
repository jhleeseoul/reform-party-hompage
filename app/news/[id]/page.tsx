import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Share2, ArrowLeft } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"

// This would typically come from a database or CMS
const getNewsArticle = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "개혁신당, 국민 주거안정을 위한 새로운 주택정책 발표",
    excerpt:
      "개혁신당은 오늘 국민 주거안정을 위한 종합 주택정책을 발표했습니다. 이번 정책은 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등을 포함하고 있습니다.",
    content: `
      <p>개혁신당은 오늘 국민 주거안정을 위한 종합 주택정책을 발표했습니다. 이번 정책은 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등을 포함하고 있습니다.</p>
      
      <h2>청년 주거 지원 확대</h2>
      <p>청년들의 주거 부담을 완화하기 위해 청년 전용 임대주택 공급을 확대하고, 청년 주거 지원금을 현실화하는 방안을 제시했습니다. 특히, 대학가 주변 임대료 상승을 억제하기 위한 특별 대책도 포함되어 있습니다.</p>
      
      <h2>공공임대주택 공급 확대</h2>
      <p>서민들의 주거 안정을 위해 공공임대주택 공급을 대폭 확대하고, 기존 주택 매입을 통한 공공임대 전환 사업도 적극 추진할 계획입니다. 또한, 노후 공공임대주택의 리모델링을 통해 주거 환경을 개선하는 방안도 포함되어 있습니다.</p>
      
      <h2>주택시장 안정화 방안</h2>
      <p>투기 수요를 억제하고 실수요자 중심의 주택 시장을 조성하기 위한 다양한 방안이 제시되었습니다. 다주택자에 대한 세제 개편, 주택 거래 투명성 강화, 주택 공급 확대 등의 정책이 포함되어 있습니다.</p>
      
      <h2>전문가 평가</h2>
      <p>주택 정책 전문가들은 이번 정책이 주택 시장의 안정화와 서민 주거 안정에 기여할 것으로 평가하고 있습니다. 특히, 청년 주거 지원 확대와 공공임대주택 공급 확대는 주거 취약계층의 주거 안정에 큰 도움이 될 것으로 기대됩니다.</p>
    `,
    date: "2024-01-15",
    category: "정책발표",
    image: "/placeholder.svg?height=600&width=1200",
    author: "개혁신당 정책위원회",
    tags: ["주택정책", "청년주거", "공공임대주택", "주택시장안정화"],
    relatedArticles: [
      {
        id: "economic-reform-plan",
        title: "경제 개혁 로드맵 제시",
        excerpt: "중소기업 중심의 경제 생태계 구축과 일자리 창출을 위한 종합 계획을 발표했습니다.",
        date: "2024-01-10",
        category: "정책발표",
        image: "/placeholder.svg?height=200&width=300",
      },
      {
        id: "education-reform",
        title: "교육 개혁안 국회 제출",
        excerpt: "미래 인재 양성을 위한 교육 시스템 혁신안을 국회에 제출했습니다.",
        date: "2024-01-05",
        category: "정책발표",
        image: "/placeholder.svg?height=200&width=300",
      },
    ],
  }
}

export default function NewsArticlePage({ params }: { params: { id: string } }) {
  const article = getNewsArticle(params.id)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-primary">
              홈
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary">
              뉴스
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{article.title}</span>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary pl-0">
                <Link href="/news">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  뉴스 목록으로 돌아가기
                </Link>
              </Button>
            </div>

            {/* Article Header */}
            <div className="mb-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                {article.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {article.date}
                </div>
                <div>작성자: {article.author}</div>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-slate-600">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-[16/9] mb-8">
              <Image
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-slate max-w-none mb-12" dangerouslySetInnerHTML={{ __html: article.content }} />

            {/* Share */}
            <div className="border-t border-b border-slate-200 py-6 my-8">
              <div className="flex items-center justify-between">
                <div className="text-slate-600 font-medium">이 기사 공유하기</div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="h-4 w-4" />
                    <span className="sr-only">공유하기</span>
                  </Button>
                  {/* Add more social share buttons as needed */}
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">관련 기사</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {article.relatedArticles.map((related) => (
                  <div
                    key={related.id}
                    className="flex gap-4 p-4 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    <div className="relative w-24 h-24 flex-shrink-0">
                      <Image
                        src={related.image || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover rounded"
                        sizes="96px"
                      />
                    </div>
                    <div className="flex flex-col">
                      <Badge variant="secondary" className="bg-primary/10 text-primary w-fit mb-1">
                        {related.category}
                      </Badge>
                      <Link href={`/news/${related.id}`} className="font-medium text-slate-900 hover:text-primary mb-1">
                        {related.title}
                      </Link>
                      <span className="text-xs text-slate-500">{related.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  )
}
