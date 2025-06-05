import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Share2,
  Bookmark,
  Flag,
  Pin,
  Lock,
  Shield,
  Clock,
  Eye,
  MoreHorizontal,
  Quote,
  Edit,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TopicPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the topic data based on the ID
  const topic = {
    id: params.id,
    title: "2024년 개혁신당 정책 로드맵 토론",
    category: "정책토론",
    content: `
      안녕하세요, 개혁신당 정책위원회입니다.

      2024년을 맞아 개혁신당의 주요 정책 방향에 대해 당원 여러분과 함께 토론하고자 합니다. 
      여러분의 소중한 의견이 정책 수립에 직접 반영될 예정이니 많은 참여 부탁드립니다.

      ## 주요 정책 분야

      ### 1. 경제 정책
      - 중소기업 지원 확대
      - 일자리 창출 방안
      - 경제 불평등 해소

      ### 2. 사회 정책
      - 복지 제도 개선
      - 교육 시스템 혁신
      - 의료 접근성 향상

      ### 3. 환경 정책
      - 탄소중립 실현 방안
      - 재생에너지 확대
      - 지속가능한 발전

      ### 4. 청년 정책
      - 주거비 지원 확대
      - 청년 일자리 창출
      - 창업 지원 강화

      각 분야별로 구체적인 의견이나 제안사항이 있으시면 댓글로 남겨주세요. 
      특히 실생활에서 체감하시는 문제점이나 개선 방안에 대한 아이디어를 환영합니다.

      토론 기간: 2024년 1월 15일 ~ 2월 15일
      결과 발표: 2024년 2월 말 예정

      많은 관심과 참여 부탁드립니다.
    `,
    author: {
      name: "정책위원회",
      avatar: "/placeholder.svg?height=48&width=48",
      role: "관리자",
      verified: true,
      joinDate: "2020-03-15",
      posts: 1247,
      reputation: 4.9,
    },
    stats: {
      views: 2847,
      likes: 89,
      dislikes: 3,
      replies: 156,
      bookmarks: 45,
    },
    createdAt: "2024-01-15T10:30:00Z",
    lastActivity: "10분 전",
    isPinned: true,
    isLocked: false,
    tags: ["정책", "2024", "로드맵", "토론"],
  }

  const replies = [
    {
      id: "reply-1",
      content: `
        정책위원회에서 이런 토론의 장을 마련해주셔서 감사합니다.

        특히 청년 정책 부분에 대해 의견을 드리고 싶습니다. 현재 청년들이 가장 어려워하는 부분은 주거비 부담인데, 
        단순히 지원금을 늘리는 것보다는 근본적인 해결책이 필요하다고 생각합니다.

        제안사항:
        1. 청년 전용 임대주택 공급 확대
        2. 대학가 주변 기숙사형 주택 건설
        3. 주거비 대출 이자 지원 확대

        이런 방향으로 정책을 추진해주시면 좋겠습니다.
      `,
      author: {
        name: "청년대표",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "청년위원",
        verified: true,
        joinDate: "2021-06-20",
        posts: 634,
        reputation: 4.7,
      },
      createdAt: "2024-01-15T14:20:00Z",
      likes: 23,
      dislikes: 1,
      replies: 8,
      isEdited: false,
    },
    {
      id: "reply-2",
      content: `
        환경 정책에 대해서도 의견을 드리고 싶습니다.

        탄소중립은 이제 선택이 아닌 필수가 되었습니다. 하지만 현실적인 로드맵이 필요하다고 생각합니다.

        - 재생에너지 전환 시 기존 산업 종사자들의 일자리 대책
        - 중소기업의 친환경 전환 지원 방안
        - 시민들의 환경 의식 개선을 위한 교육 프로그램

        이런 부분들도 함께 고려해주시면 좋겠습니다.
      `,
      author: {
        name: "환경지킴이",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "일반회원",
        verified: false,
        joinDate: "2022-01-10",
        posts: 234,
        reputation: 4.3,
      },
      createdAt: "2024-01-15T16:45:00Z",
      likes: 15,
      dislikes: 0,
      replies: 5,
      isEdited: true,
    },
    {
      id: "reply-3",
      content: `
        경제 정책 관련해서 중소기업 지원에 대한 구체적인 방안이 궁금합니다.

        현재 많은 중소기업들이 자금난과 인력난을 겪고 있는데, 이를 해결하기 위한 실질적인 정책이 필요합니다.

        특히 디지털 전환 지원과 관련해서 더 자세한 계획을 알고 싶습니다.
      `,
      author: {
        name: "소상공인",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "일반회원",
        verified: false,
        joinDate: "2023-03-05",
        posts: 89,
        reputation: 4.1,
      },
      createdAt: "2024-01-15T18:10:00Z",
      likes: 12,
      dislikes: 0,
      replies: 3,
      isEdited: false,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary p-0">
              <Link href="/community">
                <ArrowLeft className="h-4 w-4 mr-2" />
                커뮤니티로 돌아가기
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Topic Header */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-4">
                    {topic.isPinned && <Pin className="h-4 w-4 text-primary" />}
                    {topic.isLocked && <Lock className="h-4 w-4 text-slate-400" />}
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {topic.category}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-slate-500">
                      <Clock className="h-3 w-3" />
                      {topic.lastActivity}
                    </div>
                  </div>

                  <CardTitle className="text-2xl lg:text-3xl mb-4">{topic.title}</CardTitle>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                        <AvatarFallback>{topic.author.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold">{topic.author.name}</span>
                          {topic.author.verified && <Shield className="h-4 w-4 text-blue-500" />}
                          <Badge variant="outline" className="text-xs">
                            {topic.author.role}
                          </Badge>
                        </div>
                        <div className="text-sm text-slate-500">
                          {new Date(topic.createdAt).toLocaleDateString("ko-KR")}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {topic.stats.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageCircle className="h-4 w-4" />
                        {topic.stats.replies}
                      </div>
                      <div className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        {topic.stats.likes}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Topic Content */}
                  <div className="prose prose-slate max-w-none">
                    <div className="whitespace-pre-line text-slate-700 leading-relaxed">{topic.content}</div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-slate-600">
                        #{tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsUp className="h-4 w-4" />
                        좋아요 ({topic.stats.likes})
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <ThumbsDown className="h-4 w-4" />({topic.stats.dislikes})
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Bookmark className="h-4 w-4" />
                        북마크
                      </Button>
                    </div>

                    <div className="flex items-center gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Share2 className="h-4 w-4" />
                        공유
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Flag className="h-4 w-4" />
                        신고
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Replies */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-slate-900">댓글 ({topic.stats.replies})</h3>
                  <Button variant="outline" size="sm">
                    최신순
                  </Button>
                </div>

                {replies.map((reply) => (
                  <Card key={reply.id} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={reply.author.avatar || "/placeholder.svg"} alt={reply.author.name} />
                          <AvatarFallback>{reply.author.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-sm">{reply.author.name}</span>
                              {reply.author.verified && <Shield className="h-3 w-3 text-blue-500" />}
                              <Badge variant="outline" className="text-xs">
                                {reply.author.role}
                              </Badge>
                              <span className="text-xs text-slate-500">
                                {new Date(reply.createdAt).toLocaleDateString("ko-KR")}
                              </span>
                              {reply.isEdited && <span className="text-xs text-slate-400">(편집됨)</span>}
                            </div>

                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>

                          <div className="prose prose-sm prose-slate max-w-none mb-4">
                            <div className="whitespace-pre-line text-slate-700">{reply.content}</div>
                          </div>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                                <ThumbsUp className="h-3 w-3" />
                                {reply.likes}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                                <ThumbsDown className="h-3 w-3" />
                                {reply.dislikes}
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                                <Quote className="h-3 w-3" />
                                인용
                              </Button>
                              <Button variant="ghost" size="sm" className="flex items-center gap-1 text-xs">
                                <MessageCircle className="h-3 w-3" />
                                답글 ({reply.replies})
                              </Button>
                            </div>

                            <div className="flex items-center gap-1">
                              <Button variant="ghost" size="sm" className="text-xs">
                                <Edit className="h-3 w-3" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-xs">
                                <Flag className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                {/* Load More */}
                <div className="text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    더 많은 댓글 보기
                  </Button>
                </div>
              </div>

              {/* Reply Form */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">댓글 작성</CardTitle>
                  <CardDescription>건설적인 토론을 위해 예의를 지켜주세요.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="의견을 자유롭게 작성해주세요. 마크다운 문법을 지원합니다."
                    className="min-h-[120px]"
                  />
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-slate-500">
                      <span className="font-medium">Tip:</span> @사용자명으로 멘션할 수 있습니다.
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-white">댓글 작성</Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Author Info */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">작성자 정보</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                      <AvatarFallback className="text-lg">{topic.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">{topic.author.name}</span>
                        {topic.author.verified && <Shield className="h-4 w-4 text-blue-500" />}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {topic.author.role}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm text-slate-600">
                    <div className="flex justify-between">
                      <span>가입일:</span>
                      <span>{new Date(topic.author.joinDate).toLocaleDateString("ko-KR")}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>게시글:</span>
                      <span>{topic.author.posts.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>평점:</span>
                      <span className="flex items-center gap-1">
                        <span>{topic.author.reputation}</span>
                        <div className="flex">
                          {Array.from({ length: 5 }, (_, i) => (
                            <div
                              key={i}
                              className={`w-3 h-3 ${
                                i < Math.floor(topic.author.reputation) ? "text-yellow-400" : "text-slate-300"
                              }`}
                            >
                              ★
                            </div>
                          ))}
                        </div>
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full">
                    프로필 보기
                  </Button>
                </CardContent>
              </Card>

              {/* Topic Stats */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">토론 통계</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>조회수:</span>
                    <span className="font-medium">{topic.stats.views.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>댓글:</span>
                    <span className="font-medium">{topic.stats.replies}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>좋아요:</span>
                    <span className="font-medium">{topic.stats.likes}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>북마크:</span>
                    <span className="font-medium">{topic.stats.bookmarks}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>작성일:</span>
                    <span className="font-medium">{new Date(topic.createdAt).toLocaleDateString("ko-KR")}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Related Topics */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">관련 토론</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "청년 정책 제안 - 주거비 지원 확대",
                    "환경 정책 로드맵 논의",
                    "중소기업 지원 방안 토론",
                    "교육 개혁 방향성 논의",
                  ].map((title, index) => (
                    <Link key={index} href="#" className="block">
                      <div className="text-sm text-slate-700 hover:text-primary transition-colors line-clamp-2">
                        {title}
                      </div>
                    </Link>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">빠른 메뉴</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <MessageCircle className="mr-2 h-4 w-4" />새 토론 시작
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <Flag className="mr-2 h-4 w-4" />
                    신고하기
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-sm">
                    <Share2 className="mr-2 h-4 w-4" />
                    공유하기
                  </Button>
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
