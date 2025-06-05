import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  MessageSquare,
  Users,
  TrendingUp,
  Clock,
  Pin,
  Lock,
  Eye,
  ThumbsUp,
  MessageCircle,
  Plus,
  Filter,
  Star,
  Shield,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CommunityPage() {
  const forumStats = [
    {
      label: "총 회원",
      value: "12,847",
      icon: Users,
      change: "+234",
    },
    {
      label: "활성 토론",
      value: "1,456",
      icon: MessageSquare,
      change: "+89",
    },
    {
      label: "이번 주 게시글",
      value: "342",
      icon: TrendingUp,
      change: "+15%",
    },
    {
      label: "온라인 사용자",
      value: "156",
      icon: Eye,
      change: "현재",
    },
  ]

  const categories = [
    {
      id: "general",
      name: "자유게시판",
      description: "자유로운 의견 교환과 일상 이야기",
      icon: MessageSquare,
      topics: 1247,
      posts: 8934,
      lastPost: {
        title: "개혁신당의 미래 비전에 대해",
        author: "김시민",
        time: "5분 전",
      },
      color: "bg-blue-500",
    },
    {
      id: "policy",
      name: "정책토론",
      description: "정책 제안과 토론",
      icon: Shield,
      topics: 456,
      posts: 3421,
      lastPost: {
        title: "청년 주거 정책 개선 방안",
        author: "이정책",
        time: "12분 전",
      },
      color: "bg-green-500",
    },
    {
      id: "news",
      name: "시사토론",
      description: "시사 이슈와 뉴스 토론",
      icon: TrendingUp,
      topics: 789,
      posts: 5672,
      lastPost: {
        title: "최근 경제 정책 분석",
        author: "박경제",
        time: "23분 전",
      },
      color: "bg-purple-500",
    },
    {
      id: "local",
      name: "지역게시판",
      description: "지역별 소식과 활동",
      icon: Users,
      topics: 234,
      posts: 1876,
      lastPost: {
        title: "서울 지역 모임 안내",
        author: "최지역",
        time: "1시간 전",
      },
      color: "bg-orange-500",
    },
    {
      id: "volunteer",
      name: "자원봉사",
      description: "자원봉사 모집과 후기",
      icon: Star,
      topics: 123,
      posts: 567,
      lastPost: {
        title: "환경정화 봉사활동 후기",
        author: "정봉사",
        time: "2시간 전",
      },
      color: "bg-red-500",
    },
    {
      id: "qa",
      name: "Q&A",
      description: "질문과 답변",
      icon: MessageCircle,
      topics: 345,
      posts: 1234,
      lastPost: {
        title: "당원 가입 절차 문의",
        author: "신입당원",
        time: "3시간 전",
      },
      color: "bg-indigo-500",
    },
  ]

  const featuredTopics = [
    {
      id: "featured-1",
      title: "2024년 개혁신당 정책 로드맵 토론",
      category: "정책토론",
      author: {
        name: "정책위원회",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "관리자",
        verified: true,
      },
      replies: 156,
      views: 2847,
      likes: 89,
      lastActivity: "10분 전",
      isPinned: true,
      isLocked: false,
      excerpt: "2024년 개혁신당의 주요 정책 방향에 대해 함께 토론해보세요. 여러분의 의견이 정책 수립에 반영됩니다.",
    },
    {
      id: "featured-2",
      title: "청년 정책 제안 - 주거비 지원 확대",
      category: "정책토론",
      author: {
        name: "청년위원회",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "위원회",
        verified: true,
      },
      replies: 234,
      views: 4521,
      likes: 167,
      lastActivity: "25분 전",
      isPinned: true,
      isLocked: false,
      excerpt: "청년들의 주거 부담을 줄이기 위한 구체적인 정책 제안을 논의합니다.",
    },
    {
      id: "featured-3",
      title: "지역 발전을 위한 아이디어 공모",
      category: "지역게시판",
      author: {
        name: "지역발전위원회",
        avatar: "/placeholder.svg?height=40&width=40",
        role: "위원회",
        verified: true,
      },
      replies: 89,
      views: 1876,
      likes: 45,
      lastActivity: "1시간 전",
      isPinned: false,
      isLocked: false,
      excerpt: "우리 지역의 발전을 위한 창의적인 아이디어를 함께 나누어보세요.",
    },
  ]

  const recentTopics = [
    {
      id: "recent-1",
      title: "개혁신당 당원으로서 자부심을 느끼는 순간",
      category: "자유게시판",
      author: {
        name: "김자부심",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "일반회원",
        verified: false,
      },
      replies: 23,
      views: 456,
      likes: 12,
      lastActivity: "15분 전",
      isPinned: false,
      isLocked: false,
    },
    {
      id: "recent-2",
      title: "환경 정책에 대한 의견 나눔",
      category: "정책토론",
      author: {
        name: "환경지킴이",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "일반회원",
        verified: false,
      },
      replies: 45,
      views: 789,
      likes: 28,
      lastActivity: "32분 전",
      isPinned: false,
      isLocked: false,
    },
    {
      id: "recent-3",
      title: "부산 지역 정기 모임 공지",
      category: "지역게시판",
      author: {
        name: "부산지부",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "지부관리자",
        verified: true,
      },
      replies: 67,
      views: 1234,
      likes: 34,
      lastActivity: "1시간 전",
      isPinned: false,
      isLocked: false,
    },
    {
      id: "recent-4",
      title: "자원봉사 활동 후기 - 독거노인 돌봄",
      category: "자원봉사",
      author: {
        name: "따뜻한마음",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "일반회원",
        verified: false,
      },
      replies: 18,
      views: 345,
      likes: 25,
      lastActivity: "2시간 전",
      isPinned: false,
      isLocked: false,
    },
    {
      id: "recent-5",
      title: "당원 가입 절차에 대한 질문",
      category: "Q&A",
      author: {
        name: "신규가입희망",
        avatar: "/placeholder.svg?height=32&width=32",
        role: "비회원",
        verified: false,
      },
      replies: 8,
      views: 123,
      likes: 5,
      lastActivity: "3시간 전",
      isPinned: false,
      isLocked: false,
    },
  ]

  const activeMembers = [
    {
      name: "정책연구원",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "전문위원",
      posts: 1247,
      reputation: 4.8,
      verified: true,
    },
    {
      name: "시민참여자",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "활동회원",
      posts: 856,
      reputation: 4.6,
      verified: false,
    },
    {
      name: "청년대표",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "청년위원",
      posts: 634,
      reputation: 4.7,
      verified: true,
    },
    {
      name: "지역활동가",
      avatar: "/placeholder.svg?height=40&width=40",
      role: "지역위원",
      posts: 523,
      reputation: 4.5,
      verified: true,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              커뮤니티 포럼
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">함께 소통하는 공간</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당 커뮤니티에서 정책을 토론하고, 의견을 나누며, 함께 더 나은 미래를 만들어가세요. 모든 시민의
              목소리가 소중합니다.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="토론 주제나 키워드를 검색해보세요..."
                  className="pl-12 pr-4 py-3 text-lg border-2 border-slate-200 focus:border-primary"
                />
                <Button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90"
                  size="sm"
                >
                  검색
                </Button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Plus className="mr-2 h-5 w-5" />새 토론 시작하기
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Users className="mr-2 h-5 w-5" />
                회원가입하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {forumStats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-sm text-slate-600 mb-2">{stat.label}</div>
                    <div className="text-xs text-green-600 font-medium">{stat.change}</div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Forum Content */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Categories Overview */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">토론 카테고리</h2>
                  <Button variant="outline" size="sm" className="border-slate-200">
                    <Filter className="mr-2 h-4 w-4" />
                    필터
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {categories.map((category) => {
                    const Icon = category.icon
                    return (
                      <Card
                        key={category.id}
                        className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                      >
                        <Link href={`/community/category/${category.id}`}>
                          <CardHeader className="pb-3">
                            <div className="flex items-center gap-3 mb-2">
                              <div
                                className={`w-10 h-10 ${category.color} rounded-lg flex items-center justify-center`}
                              >
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <CardTitle className="text-lg">{category.name}</CardTitle>
                                <CardDescription className="text-sm">{category.description}</CardDescription>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0">
                            <div className="flex justify-between text-sm text-slate-500 mb-3">
                              <span>{category.topics} 주제</span>
                              <span>{category.posts} 게시글</span>
                            </div>
                            <div className="text-xs text-slate-600">
                              <div className="font-medium">{category.lastPost.title}</div>
                              <div className="flex justify-between mt-1">
                                <span>{category.lastPost.author}</span>
                                <span>{category.lastPost.time}</span>
                              </div>
                            </div>
                          </CardContent>
                        </Link>
                      </Card>
                    )
                  })}
                </div>
              </div>

              {/* Featured Topics */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">주요 토론</h2>
                <div className="space-y-4">
                  {featuredTopics.map((topic) => (
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
                              <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                                {topic.category}
                              </Badge>
                            </div>

                            <Link href={`/community/topic/${topic.id}`}>
                              <h3 className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors mb-2">
                                {topic.title}
                              </h3>
                            </Link>

                            <p className="text-slate-600 text-sm mb-3 line-clamp-2">{topic.excerpt}</p>

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
              </div>

              {/* Recent Topics */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">최근 토론</h2>
                <div className="space-y-3">
                  {recentTopics.map((topic) => (
                    <Card key={topic.id} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src={topic.author.avatar || "/placeholder.svg"} alt={topic.author.name} />
                            <AvatarFallback className="text-xs">{topic.author.name[0]}</AvatarFallback>
                          </Avatar>

                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                                {topic.category}
                              </Badge>
                            </div>

                            <Link href={`/community/topic/${topic.id}`}>
                              <h4 className="font-medium text-slate-900 hover:text-primary transition-colors text-sm mb-1">
                                {topic.title}
                              </h4>
                            </Link>

                            <div className="flex items-center gap-3 text-xs text-slate-500">
                              <div className="flex items-center gap-1">
                                <span>{topic.author.name}</span>
                                {topic.author.verified && <Shield className="h-3 w-3 text-blue-500" />}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {topic.lastActivity}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-500">
                            <div className="flex items-center gap-1">
                              <ThumbsUp className="h-3 w-3" />
                              {topic.likes}
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3" />
                              {topic.replies}
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-3 w-3" />
                              {topic.views}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    더 많은 토론 보기
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Active Members */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">활발한 회원</CardTitle>
                  <CardDescription>이번 주 가장 활발하게 참여한 회원들</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {activeMembers.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                        <AvatarFallback>{member.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1">
                          <span className="font-medium text-sm">{member.name}</span>
                          {member.verified && <Shield className="h-3 w-3 text-blue-500" />}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-500">
                          <Badge variant="outline" className="text-xs">
                            {member.role}
                          </Badge>
                          <span>{member.posts} 게시글</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 text-xs text-slate-500">
                          <Star className="h-3 w-3 text-yellow-500" />
                          {member.reputation}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Forum Rules */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">커뮤니티 규칙</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>상호 존중과 예의를 지켜주세요</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>건설적인 토론과 비판을 환영합니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>개인정보나 사생활 침해는 금지됩니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>스팸이나 광고성 게시물은 삭제됩니다</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span>허위사실 유포는 엄격히 금지됩니다</span>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">빠른 메뉴</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/community/new-topic">
                      <Plus className="mr-2 h-4 w-4" />새 토론 시작
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/community/my-posts">
                      <MessageSquare className="mr-2 h-4 w-4" />내 게시글
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/community/bookmarks">
                      <Star className="mr-2 h-4 w-4" />
                      북마크
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start">
                    <Link href="/community/notifications">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      알림
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Online Users */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">현재 접속자</CardTitle>
                  <CardDescription>지금 온라인인 회원들</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {Array.from({ length: 8 }, (_, i) => (
                      <Avatar key={i} className="w-8 h-8">
                        <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={`User ${i + 1}`} />
                        <AvatarFallback className="text-xs">U{i + 1}</AvatarFallback>
                      </Avatar>
                    ))}
                  </div>
                  <div className="mt-3 text-sm text-slate-500">총 156명이 온라인 (회원 89명, 방문자 67명)</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
