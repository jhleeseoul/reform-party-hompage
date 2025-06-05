import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Download, Printer, Share2 } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getPressRelease = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "개혁신당, 주거안정 종합대책 발표",
    date: "2024-01-15",
    category: "정책발표",
    content: `
      <h2>개혁신당, 국민 주거안정을 위한 새로운 주택정책 발표</h2>
      
      <p><strong>일시:</strong> 2024년 1월 15일</p>
      <p><strong>장소:</strong> 개혁신당 중앙당사 대회의실</p>
      
      <p>개혁신당(대표 홍길동)은 오늘(15일) 당사에서 기자회견을 열고 '국민 주거안정을 위한 종합 주택정책'을 발표했다.</p>
      
      <p>이번에 발표된 주택정책은 ▲청년 주거 지원 확대 ▲공공임대주택 공급 확대 ▲주택시장 안정화 방안 등을 포함하고 있다.</p>
      
      <p>개혁신당은 청년들의 주거 부담을 완화하기 위해 청년 전용 임대주택 공급을 확대하고, 청년 주거 지원금을 현실화하는 방안을 제시했다. 특히, 대학가 주변 임대료 상승을 억제하기 위한 특별 대책도 포함되어 있다.</p>
      
      <p>또한, 서민들의 주거 안정을 위해 공공임대주택 공급을 대폭 확대하고, 기존 주택 매입을 통한 공공임대 전환 사업도 적극 추진할 계획이다. 노후 공공임대주택의 리모델링을 통해 주거 환경을 개선하는 방안도 포함되어 있다.</p>
      
      <p>아울러, 투기 수요를 억제하고 실수요자 중심의 주택 시장을 조성하기 위한 다양한 방안이 제시되었다. 다주택자에 대한 세제 개편, 주택 거래 투명성 강화, 주택 공급 확대 등의 정책이 포함되어 있다.</p>
      
      <p>개혁신당 홍길동 대표는 "이번 정책은 국민 모두가 안정적인 주거 환경에서 살 수 있도록 하는 것을 목표로 한다"며 "특히 청년과 서민들의 주거 부담을 완화하는 데 중점을 두었다"고 밝혔다.</p>
      
      <p>개혁신당은 이번 주택정책을 바탕으로 관련 법안을 마련하여 국회에 제출할 예정이다.</p>
      
      <p><strong>문의:</strong> 개혁신당 정책위원회 (02-1234-5678)</p>
    `,
    contactPerson: "김정책",
    contactEmail: "policy@reform-party.kr",
    contactPhone: "02-1234-5678",
    attachments: [
      {
        name: "주거안정_종합대책_보도자료.pdf",
        size: "2.4MB",
        url: "#",
      },
      {
        name: "주거안정_정책_상세안.pdf",
        size: "3.8MB",
        url: "#",
      },
    ],
  }
}

export default function PressReleasePage({ params }: { params: { id: string } }) {
  const pressRelease = getPressRelease(params.id)

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
            <Link href="/news?tab=press" className="hover:text-primary">
              보도자료
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{pressRelease.title}</span>
          </div>
        </div>
      </div>

      {/* Press Release Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-8">
              <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary pl-0">
                <Link href="/news?tab=press">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  보도자료 목록으로 돌아가기
                </Link>
              </Button>
            </div>

            {/* Press Release Header */}
            <div className="mb-8 pb-8 border-b border-slate-200">
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                {pressRelease.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{pressRelease.title}</h1>
              <div className="flex items-center text-sm text-slate-600 mb-6">
                <Calendar className="h-4 w-4 mr-1" />
                {pressRelease.date}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  PDF 다운로드
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Printer className="h-4 w-4" />
                  인쇄하기
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  공유하기
                </Button>
              </div>
            </div>

            {/* Press Release Content */}
            <div
              className="prose prose-slate max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: pressRelease.content }}
            />

            {/* Attachments */}
            <div className="bg-slate-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">첨부파일</h3>
              <div className="space-y-3">
                {pressRelease.attachments.map((attachment) => (
                  <div
                    key={attachment.name}
                    className="flex items-center justify-between p-3 bg-white rounded border border-slate-200"
                  >
                    <div className="flex items-center">
                      <div className="bg-primary/10 text-primary p-2 rounded mr-3">
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
                          className="h-5 w-5"
                        >
                          <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                          <polyline points="14 2 14 8 20 8" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">{attachment.name}</p>
                        <p className="text-sm text-slate-500">{attachment.size}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={attachment.url} download>
                        <Download className="h-4 w-4 mr-1" />
                        다운로드
                      </a>
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">문의처</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">담당자:</span> {pressRelease.contactPerson}
                </p>
                <p>
                  <span className="font-medium">이메일:</span>{" "}
                  <a href={`mailto:${pressRelease.contactEmail}`} className="text-primary hover:underline">
                    {pressRelease.contactEmail}
                  </a>
                </p>
                <p>
                  <span className="font-medium">전화:</span>{" "}
                  <a href={`tel:${pressRelease.contactPhone}`} className="text-primary hover:underline">
                    {pressRelease.contactPhone}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
