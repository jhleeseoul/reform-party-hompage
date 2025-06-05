import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, MessageSquare, Save, Send } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NewTopicPage() {
  const categories = [
    { id: "general", name: "자유게시판", description: "자유로운 의견 교환" },
    { id: "policy", name: "정책토론", description: "정책 제안과 토론" },
    { id: "news", name: "시사토론", description: "시사 이슈와 뉴스 토론" },
    { id: "local", name: "지역게시판", description: "지역별 소식과 활동" },
    { id: "volunteer", name: "자원봉사", description: "자원봉사 모집과 후기" },
    { id: "qa", name: "Q&A", description: "질문과 답변" },
  ]

  const popularTags = [
    "정책제안",
    "청년정책",
    "환경",
    "경제",
    "교육",
    "복지",
    "지역발전",
    "자원봉사",
    "토론",
    "의견수렴",
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary p-0">
              <Link href="/community">
                <ArrowLeft className="h-4 w-4 mr-2" />
                커뮤니티로 돌아가기
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">새 토론 시작하기</h1>
            <p className="text-lg text-slate-600">
              건설적인 토론을 통해 더 나은 정책과 사회를 만들어가세요. 여러분의 의견이 소중합니다.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>토론 작성</CardTitle>
                  <CardDescription>명확하고 구체적인 제목과 내용으로 토론을 시작해보세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Selection */}
                  <div className="space-y-2">
                    <Label htmlFor="category">카테고리 *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="토론 카테고리를 선택해주세요" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            <div>
                              <div className="font-medium">{category.name}</div>
                              <div className="text-sm text-slate-500">{category.description}</div>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Title */}
                  <div className="space-y-2">
                    <Label htmlFor="title">제목 *</Label>
                    <Input
                      id="title"
                      placeholder="토론 주제를 명확하게 작성해주세요 (최소 10자 이상)"
                      className="text-lg"
                    />
                    <div className="text-sm text-slate-500">0/100자</div>
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <Label htmlFor="content">내용 *</Label>
                    <Textarea
                      id="content"
                      placeholder="토론 내용을 자세히 작성해주세요. 마크다운 문법을 지원합니다.

예시:
## 주요 논점
1. 첫 번째 논점
2. 두 번째 논점

### 제안사항
- 구체적인 제안 1
- 구체적인 제안 2

**참고자료**: 관련 링크나 자료가 있다면 첨부해주세요."
                      className="min-h-[300px] font-mono text-sm"
                    />
                    <div className="text-sm text-slate-500">마크다운 문법 지원 • 0/5000자</div>
                  </div>

                  {/* Tags */}
                  <div className="space-y-2">
                    <Label htmlFor="tags">태그</Label>
                    <Input id="tags" placeholder="관련 태그를 입력하세요 (쉼표로 구분)" className="mb-2" />
                    <div className="space-y-2">
                      <div className="text-sm text-slate-600">인기 태그:</div>
                      <div className="flex flex-wrap gap-2">
                        {popularTags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="cursor-pointer hover:bg-primary/10 hover:border-primary"
                          >
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Options */}
                  <div className="space-y-4">
                    <Label className="text-base font-medium">토론 설정</Label>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="allow-anonymous" />
                        <Label htmlFor="allow-anonymous" className="text-sm">
                          익명 댓글 허용
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="notify-replies" defaultChecked />
                        <Label htmlFor="notify-replies" className="text-sm">
                          댓글 알림 받기
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="pin-topic" />
                        <Label htmlFor="pin-topic" className="text-sm">
                          중요 토론으로 고정 (관리자만)
                        </Label>
                      </div>
                    </div>
                  </div>

                  {/* Terms */}
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" required />
                      <Label htmlFor="terms" className="text-sm">
                        커뮤니티 규칙을 준수하며 건설적인 토론을 진행하겠습니다. *
                      </Label>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4 pt-4">
                    <Button className="bg-primary hover:bg-primary/90 text-white flex-1">
                      <Send className="mr-2 h-4 w-4" />
                      토론 시작하기
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Save className="h-4 w-4" />
                      임시저장
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      미리보기
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Writing Tips */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">작성 가이드</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>명확하고 구체적인 제목을 작성하세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>논점을 정리하여 체계적으로 작성하세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>근거나 참고자료를 함께 제시하세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>상대방을 존중하는 언어를 사용하세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>관련 태그를 활용해 검색성을 높이세요</span>
                  </div>
                </CardContent>
              </Card>

              {/* Markdown Guide */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">마크다운 문법</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="font-mono bg-slate-50 p-2 rounded">
                    <div># 제목 1</div>
                    <div>## 제목 2</div>
                    <div>**굵게**</div>
                    <div>*기울임*</div>
                    <div>- 목록</div>
                    <div>1. 번호 목록</div>
                    <div>[링크](URL)</div>
                    <div>`코드`</div>
                  </div>
                </CardContent>
              </Card>

              {/* Community Rules */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">커뮤니티 규칙</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>개인 공격이나 모욕적 언어 금지</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>허위사실 유포 금지</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>스팸이나 광고성 게시물 금지</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <span>개인정보 노출 금지</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <span>건설적이고 예의 바른 토론 권장</span>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Topics */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">최근 인기 토론</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "청년 주거 정책 개선 방안",
                    "환경 보호를 위한 실천 방안",
                    "지역 경제 활성화 아이디어",
                    "교육 제도 개혁 논의",
                  ].map((title, index) => (
                    <Link key={index} href="#" className="block">
                      <div className="text-sm text-slate-700 hover:text-primary transition-colors line-clamp-2 flex items-center gap-2">
                        <MessageSquare className="h-3 w-3 flex-shrink-0" />
                        {title}
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
