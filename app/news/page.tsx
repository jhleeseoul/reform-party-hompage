import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Search, Calendar, ArrowRight, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsletterSignup from "@/components/newsletter-signup"

export default function NewsPage() {
  const featuredNews = {
    id: "reform-party-new-policy",
    title: "개혁신당, 국민 주거안정을 위한 새로운 주택정책 발표",
    excerpt:
      "개혁신당은 오늘 국민 주거안정을 위한 종합 주택정책을 발표했습니다. 이번 정책은 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등을 포함하고 있습니다.",
    date: "2024-01-15",
    category: "정책발표",
    image: "/placeholder.svg?height=600&width=1200",
    author: "개혁신당 정책위원회",
  }

  const latestNews = [
    {
      id: "youth-forum-success",
      title: "청년 정책 포럼 성황리에 마쳐",
      excerpt: "전국 각지에서 모인 청년들과 함께 미래 정책 방향을 논의하는 뜻깊은 시간을 가졌습니다.",
      date: "2024-01-12",
      category: "행사",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "economic-reform-plan",
      title: "경제 개혁 로드맵 제시",
      excerpt: "중소기업 중심의 경제 생태계 구축과 일자리 창출을 위한 종합 계획을 발표했습니다.",
      date: "2024-01-10",
      category: "정책발표",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "regional-meeting",
      title: "지역 순회 간담회 개최",
      excerpt: "지역 주민들의 목소리를 직접 듣고 지역 맞춤형 정책을 개발하기 위한 간담회를 진행했습니다.",
      date: "2024-01-08",
      category: "활동",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "education-reform",
      title: "교육 개혁안 국회 제출",
      excerpt: "미래 인재 양성을 위한 교육 시스템 혁신안을 국회에 제출했습니다.",
      date: "2024-01-05",
      category: "정책발표",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "party-leader-interview",
      title: "당 대표 언론 인터뷰",
      excerpt: "주요 언론과의 인터뷰에서 개혁신당의 비전과 향후 계획을 밝혔습니다.",
      date: "2024-01-03",
      category: "인터뷰",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: "new-year-statement",
      title: "신년 성명 발표",
      excerpt: "새해를 맞아 국민과 함께 만들어갈 새로운 대한민국의 청사진을 제시했습니다.",
      date: "2024-01-01",
      category: "성명서",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  const pressReleases = [
    {
      id: "housing-policy-press",
      title: "개혁신당, 주거안정 종합대책 발표",
      date: "2024-01-15",
      category: "정책발표",
    },
    {
      id: "youth-forum-press",
      title: "전국 청년 정책 포럼 개최 결과",
      date: "2024-01-12",
      category: "행사",
    },
    {
      id: "economic-plan-press",
      title: "경제 개혁 로드맵 발표 관련 보도자료",
      date: "2024-01-10",
      category: "정책발표",
    },
    {
      id: "regional-meeting-press",
      title: "지역 순회 간담회 개최 안내",
      date: "2024-01-07",
      category: "활동",
    },
    {
      id: "education-reform-press",
      title: "교육 개혁안 국회 제출 관련 보도자료",
      date: "2024-01-05",
      category: "정책발표",
    },
    {
      id: "new-year-press",
      title: "개혁신당 신년 성명",
      date: "2024-01-01",
      category: "성명서",
    },
    {
      id: "year-end-press",
      title: "개혁신당 연말 활동 결산",
      date: "2023-12-28",
      category: "활동",
    },
    {
      id: "welfare-policy-press",
      title: "복지정책 개선안 발표",
      date: "2023-12-20",
      category: "정책발표",
    },
  ]

  const photoGalleries = [
    {
      id: "youth-forum-photos",
      title: "청년 정책 포럼",
      date: "2024-01-12",
      count: 24,
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "regional-tour-photos",
      title: "지역 순회 간담회",
      date: "2024-01-08",
      count: 36,
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "new-year-event-photos",
      title: "신년 행사",
      date: "2024-01-01",
      count: 42,
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "party-conference-photos",
      title: "당 전국대회",
      date: "2023-12-15",
      count: 56,
      thumbnail: "/placeholder.svg?height=300&width=400",
    },
  ]

  const videos = [
    {
      id: "housing-policy-video",
      title: "주거안정 정책 설명회",
      date: "2024-01-15",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "18:24",
      youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
    },
    {
      id: "party-leader-interview-video",
      title: "당 대표 인터뷰",
      date: "2024-01-03",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "24:15",
      youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
    },
    {
      id: "economic-plan-video",
      title: "경제 개혁 로드맵 설명",
      date: "2024-01-10",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "15:42",
      youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
    },
    {
      id: "education-reform-video",
      title: "교육 개혁안 브리핑",
      date: "2024-01-05",
      thumbnail: "/placeholder.svg?height=300&width=400",
      duration: "21:37",
      youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
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
              보도자료 및 미디어
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">뉴스룸</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당의 최신 소식, 보도자료, 사진 및 영상을 확인하세요. 당의 활동과 정책을 투명하게 공개합니다.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="뉴스 및 보도자료 검색..."
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
          </div>
        </div>
      </section>

      {/* News & Media Tabs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="news" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-3">
                <TabsTrigger value="news">뉴스</TabsTrigger>
                <TabsTrigger value="press">보도자료</TabsTrigger>
                <TabsTrigger value="multimedia">미디어</TabsTrigger>
              </TabsList>
            </div>

            {/* News Tab */}
            <TabsContent value="news" className="space-y-12">
              {/* Featured News */}
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6">주요 뉴스</h2>
                <Card className="border-0 shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative aspect-[16/9] md:aspect-auto">
                      <Image
                        src={featuredNews.image || "/placeholder.svg"}
                        alt={featuredNews.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-6 md:p-8 flex flex-col justify-between">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {featuredNews.category}
                          </Badge>
                          <div className="flex items-center text-sm text-slate-500">
                            <Calendar className="h-4 w-4 mr-1" />
                            {featuredNews.date}
                          </div>
                        </div>
                        <Link href={`/news/${featuredNews.id}`}>
                          <h3 className="text-2xl font-bold text-slate-900 hover:text-primary transition-colors">
                            {featuredNews.title}
                          </h3>
                        </Link>
                        <p className="text-slate-600 leading-relaxed">{featuredNews.excerpt}</p>
                        <p className="text-sm text-slate-500">{featuredNews.author}</p>
                      </div>
                      <div className="mt-6">
                        <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                          <Link href={`/news/${featuredNews.id}`}>
                            자세히 보기
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>

              {/* Latest News */}
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">최신 뉴스</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-slate-200">
                      최신순
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-200">
                      카테고리
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {latestNews.map((news) => (
                    <Card
                      key={news.id}
                      className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      <div className="relative aspect-[16/9]">
                        <Image
                          src={news.image || "/placeholder.svg"}
                          alt={news.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      </div>
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-center mb-2">
                          <Badge variant="secondary" className="bg-primary/10 text-primary">
                            {news.category}
                          </Badge>
                          <span className="text-sm text-slate-500">{news.date}</span>
                        </div>
                        <Link href={`/news/${news.id}`}>
                          <CardTitle className="text-lg hover:text-primary transition-colors">{news.title}</CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="text-slate-600">{news.excerpt}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/90 p-0">
                          <Link href={`/news/${news.id}`}>
                            자세히 보기
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    더 보기
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Press Releases Tab */}
            <TabsContent value="press" className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-slate-900">보도자료</h2>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-slate-200">
                      최신순
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-200">
                      카테고리
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  {pressReleases.map((press) => (
                    <Card key={press.id} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center">
                          <div className="space-y-2">
                            <div className="flex items-center gap-3">
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {press.category}
                              </Badge>
                              <span className="text-sm text-slate-500">{press.date}</span>
                            </div>
                            <Link href={`/news/press/${press.id}`}>
                              <h3 className="text-lg font-semibold text-slate-900 hover:text-primary transition-colors">
                                {press.title}
                              </h3>
                            </Link>
                          </div>
                          <Button variant="ghost" size="sm" asChild className="text-primary hover:text-primary/90">
                            <Link href={`/news/press/${press.id}`}>
                              <span className="sr-only">자세히 보기</span>
                              <ArrowRight className="h-5 w-5" />
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    더 보기
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Multimedia Tab */}
            <TabsContent value="multimedia" className="space-y-12">
              {/* Photo Galleries */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">사진 갤러리</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {photoGalleries.map((gallery) => (
                    <Card
                      key={gallery.id}
                      className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                    >
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={gallery.thumbnail || "/placeholder.svg"}
                          alt={gallery.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button variant="secondary" size="sm" asChild>
                            <Link href={`/news/gallery/${gallery.id}`}>갤러리 보기</Link>
                          </Button>
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <Link href={`/news/gallery/${gallery.id}`}>
                          <CardTitle className="text-lg hover:text-primary transition-colors">
                            {gallery.title}
                          </CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <div className="flex justify-between items-center text-sm text-slate-500">
                          <span>{gallery.date}</span>
                          <span>{gallery.count}장의 사진</span>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    모든 갤러리 보기
                  </Button>
                </div>
              </div>

              {/* Videos */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-6">영상</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {videos.map((video) => (
                    <Card
                      key={video.id}
                      className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={video.thumbnail || "/placeholder.svg"}
                          alt={video.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center text-white group-hover:bg-primary transition-colors duration-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                              className="w-6 h-6"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                          {video.duration}
                        </div>
                      </div>
                      <CardHeader className="pb-2">
                        <Link href={`/news/video/${video.id}`}>
                          <CardTitle className="text-lg hover:text-primary transition-colors">{video.title}</CardTitle>
                        </Link>
                      </CardHeader>
                      <CardContent>
                        <span className="text-sm text-slate-500">{video.date}</span>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    모든 영상 보기
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <NewsletterSignup />

      <Footer />
    </div>
  )
}
