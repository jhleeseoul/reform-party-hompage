import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  ArrowLeft,
  Search,
  Filter,
  Pin,
  Lock,
  ThumbsUp,
  MessageCircle,
  Eye,
  Clock,
  Shield,
  TrendingUp,
  Plus,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CategoryPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the category data based on the ID
  const categoryData = {
    general: {
      name: "자유게시판",
      description: "자유로운 의견 교환과 일상 이야기를 나누는 공간입니다.",
      icon: "💬",
      color: "bg-blue-500",
      topics: 1247,
      posts: 8934,
      moderators: ["관리자1", "관리자2"],
    },
    policy: {
      name: "정책토론",
      description: "정책 제안과 토론을 위한 전문적인 공간입니다.",
      icon: "🏛️",
      color: "bg-green-500",
      topics: 456,
      posts: 3421,
      moderators: ["정책위원회", "전문위원"],
    },
    news: {
      name: "시사토론",
      description: "시사 이슈와 뉴스에 대한 토론 공간입니다.",
      icon: "📰",
      color: "bg-purple-500",
      topics: 789,
      posts: 5672,
      moderators: ["시사위원회"],
    },
    local: {
      name: "지역게시판",
      description: "지역별 소식과 활동을 공유하는 공간입니다.",
      icon: "🏘️",
      color: "bg-orange-500",
      topics: 234,
      posts: 1876,
      moderators: ["지역위원회"],
    },
    volunteer: {
      name: "자원봉사",
      description: "자원봉사 모집과 후기를 공유하는 공간입니다.",
      icon: "🤝",
      color: "bg-red-500",
      topics: 123,
      posts: 567,
      moderators: ["봉사위원회"],
    },
    qa: {
      name: "Q&A",
      description: "질문과 답변을 주고받는 공간입니다.",
      icon: "❓",
      color: "bg-indigo-500",
      topics: 345,
      posts: 1234,
      moderators: ["도움위원회"],
    },
  }

  const category = categoryData[params.id as keyof typeof categoryData] || categoryData.general

  const topics = [
    {
      id: "topic-1",
      title: "개혁신당의 미래 비전에 대한 개인적인 생각",
      content: "최근 개혁신당의 정책 방향을 보면서 느낀 점들을 공유하고 싶습니다...",
      author: {
        name: "김시민",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "일반회원",
        verified: false,
      },
      replies: 23,
      views: 456,
      likes: 12,
      lastActivity: "5분 전",
      createdAt: "2024-01-15T14:30:00Z",
      isPinned: false,
      isLocked: false,
      hasNewReplies: true,
    },
    {
      id: "topic-2",
      title: "지역 발전을 위한 구체적인 제안사항",
      content: "우리 지역의 발전을 위해 다음과 같은 제안을 드리고 싶습니다...",
      author: {
        name: "지역활동가",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "지역위원",
        verified: true,
      },
      replies: 45,
      views: 789,
      likes: 28,
      lastActivity: "12분 전",
      createdAt: "2024-01-15T10:15:00Z",
      isPinned: true,
      isLocked: false,
      hasNewReplies: true,
    },
    {
      id: "topic-3",
      title: "청년 정책에 대한 현실적인 의견",
      content: "청년으로서 현재 정책들에 대해 느끼는 점들을 솔직하게 말씀드리겠습니다...",
      author: {
        name: "청년당원",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "청년위원",
        verified: true,
      },
      replies: 67,
      views: 1234,
      likes: 34,
      lastActivity: "25분 전",
      createdAt: "2024-01-14T16:45:00Z",
      isPinned: false,
      isLocked: false,
      hasNewReplies: false,
    },
    {
      id: "topic-4",
      title: "환경 정책 개선 방안에 대한 토론",
      content: "기후변화 대응을 위한 실질적인 정책 방안을 함께 논의해보면 좋겠습니다...",
      author: {
        name: "환경전문가",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "전문위원",
        verified: true,
      },
      replies: 89,
      views: 1567,
      likes: 56,
      lastActivity: "1시간 전",
      createdAt: "2024-01-14T09:20:00Z",
      isPinned: false,
      isLocked: false,
      hasNewReplies: true,
    },
    {
      id: "topic-5",
      title: "경제 정책의 실효성에 대한 분석",
      content: "현재 추진 중인 경제 정책들의 실효성을 데이터를 바탕으로 분석해보겠습니다...",
      author: {
        name: "경제연구원",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "전문위원",
        verified: true,
      },
      replies: 34,
      views: 892,
      likes: 19,
      lastActivity: "2시간 전",
      createdAt: "2024-01-13T14:10:00Z",
      isPinned: false,
      isLocked: true,
      hasNewReplies: false,
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

          {/* Category Header */}
          <div className="mb-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 ${category.color} rounded-xl flex items-center justify-center text-2xl`}>
                    {category.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl lg:text-3xl mb-2">{category.name}</CardTitle>
                    <CardDescription className="text-lg">{category.description}</CardDescription>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{category.topics}</div>
                    <div className="text-sm text-slate-500">토론 주제</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{category.posts}</div>
                    <div className="text-sm text-slate-500">총 게시글</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-slate-900">{category.moderators.length}</div>
                    <div className="text-sm text-slate-500">운영진</div>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-6">
              {/* Controls */}
              <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                <div className="flex items-center gap-4">
                  <Button className="bg-primary hover:bg-primary/90 text-white">
                    <Plus className="mr-2 h-4 w-4" />새 토론 시작
                  </Button>
                  <Button variant="outline">
                    <Filter className="mr-2 h-4 w-4" />
                    필터
                  </Button>
                </div>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
                    <Input placeholder="토론 검색..." className="pl-10 w-64" />
                  </div>
                  <Select defaultValue="latest">
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="latest">최신순</SelectItem>
                      <SelectItem value="popular">인기순</SelectItem>
                      <SelectItem value="replies">댓글순</SelectItem>
                      <SelectItem value="views">조회순</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Topics List */}
              <div className="space-y-4">
                {topics.map((topic) => (
                  <Card key={topic.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                          <AvatarFallback>{topic.author.name[0]}</AvatarFallback>
                        </Avatar>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-2">
                            {topic.isPinned && <Pin className="h-4 w-4 text-primary" />}
                            {topic.isLocked && <Lock className="h-4 w-4 text-slate-400" />}
                            {topic.hasNewReplies && (
                              <Badge variant="default" className="bg-green-500 text-xs">
                                새 댓글
                              </Badge>
                            )}
                          </div>

                          <Link href={`/community/topic/${topic.id}`}>
                            <h3 className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors mb-2">
                              {topic.title}
                            </h3>
                          </Link>

                          <p className="text-slate-600 text-sm mb-3 line-clamp-2">{topic.content}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <span className="font-medium">{topic.author.name}</span>
                                {topic.author.verified && <Shield className="h-3 w-3 text-blue-500" />}
                                <Badge variant="outline" className="text-xs">
                                  {topic.author.role}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {topic.lastActivity}
                              </div>
                            </div>

                            <div className="flex items-center gap-4 text-sm text-slate-500">
                              <div className="flex items-center gap-1">
                                <ThumbsUp className="h-4 w-4" />
                                {topic.likes}
                              </div>
                              <div className="flex items-center gap-1">
                                <MessageCircle className="h-4 w-4" />
                                {topic.replies}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {topic.views}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    이전
                  </Button>
                  <Button variant="default" size="sm" className="bg-primary">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    다음
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Category Stats */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">카테고리 통계</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>총 토론:</span>
                    <span className="font-medium">{category.topics}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>총 게시글:</span>
                    <span className="font-medium">{category.posts}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>오늘 새 글:</span>
                    <span className="font-medium text-green-600">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>활성 사용자:</span>
                    <span className="font-medium">89</span>
                  </div>
                </CardContent>
              </Card>

              {/* Moderators */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">운영진</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {category.moderators.map((moderator, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-8 h-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={moderator} />
                        <AvatarFallback className="text-xs">{moderator[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium text-sm">{moderator}</div>
                        <div className="text-xs text-slate-500">운영진</div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Category Rules */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">카테고리 규칙</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>주제에 맞는 내용만 게시해주세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>건설적인 토론을 지향합니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>중복 게시물은 삭제될 수 있습니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>근거 없는 주장은 자제해주세요</span>
                  </div>
                </CardContent>
              </Card>

              {/* Popular Topics */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <TrendingUp className="h-5 w-5" />
                    인기 토론
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["청년 정책의 실효성 검토", "지역 발전 방안 토론", "환경 정책 개선 제안", "경제 정책 분석"].map(
                    (title, index) => (
                      <Link key={index} href="#" className="block">
                        <div className="text-sm text-slate-700 hover:text-primary transition-colors line-clamp-2">
                          {title}
                        </div>
                      </Link>
                    ),
                  )}
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
