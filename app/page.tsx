import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Users, MessageSquare, Heart, ChevronRight } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function HomePage() {
  const latestNews = [
    {
      id: 1,
      title: "개혁신당, 2024년 주요 정책 발표",
      excerpt: "경제 활성화와 사회 안전망 강화를 위한 종합 정책안을 공개했습니다.",
      date: "2024-01-15",
      category: "정책",
    },
    {
      id: 2,
      title: "지역 순회 간담회 성료",
      excerpt: "전국 주요 도시에서 시민들과의 소통의 시간을 가졌습니다.",
      date: "2024-01-12",
      category: "활동",
    },
    {
      id: 3,
      title: "청년 정책 토론회 개최",
      excerpt: "청년들의 목소리를 정책에 반영하기 위한 토론회가 열렸습니다.",
      date: "2024-01-10",
      category: "행사",
    },
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: "시민과의 대화",
      date: "2024-01-20",
      location: "서울시청 대강당",
      type: "공개행사",
    },
    {
      id: 2,
      title: "정책 설명회",
      date: "2024-01-25",
      location: "부산 벡스코",
      type: "설명회",
    },
  ]

  const keyPolicies = [
    {
      title: "경제 혁신",
      description: "중소기업 지원과 일자리 창출을 통한 경제 활성화",
      icon: "💼",
    },
    {
      title: "교육 개혁",
      description: "미래 인재 양성을 위한 교육 시스템 혁신",
      icon: "📚",
    },
    {
      title: "복지 확대",
      description: "모든 국민이 안심할 수 있는 사회 안전망 구축",
      icon: "🤝",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-50 to-white py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="border-primary text-primary">
                  개혁신당 Reform Party
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  새로운 대한민국을 위한
                  <span className="text-primary block">혁신과 개혁</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed">
                  국민과 함께하는 정치, 미래를 향한 변화를 만들어갑니다. 투명하고 책임감 있는 정치로 모든 국민이 행복한
                  사회를 구현하겠습니다.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  정책 알아보기
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  당원 가입하기
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Reform Party Vision"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Messages */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">핵심 가치와 비전</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당이 추구하는 핵심 가치와 정책 방향을 소개합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyPolicies.map((policy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-4xl mb-4">{policy.icon}</div>
                  <CardTitle className="text-xl text-slate-900">{policy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    {policy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">최신 소식</h2>
              <p className="text-lg text-slate-600">개혁신당의 최근 활동과 소식을 확인하세요.</p>
            </div>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
              전체 보기
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {latestNews.map((news) => (
              <Card
                key={news.id}
                className="bg-white border-0 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {news.category}
                    </Badge>
                    <span className="text-sm text-slate-500">{news.date}</span>
                  </div>
                  <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                    {news.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600 leading-relaxed">{news.excerpt}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">예정된 행사</h2>
            <p className="text-lg text-slate-600">개혁신당과 함께하는 다양한 행사에 참여하세요.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-l-4 border-l-primary shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <Badge variant="outline" className="border-primary text-primary">
                      {event.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-slate-600">
                    <p>
                      <strong>일시:</strong> {event.date}
                    </p>
                    <p>
                      <strong>장소:</strong> {event.location}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">함께 만들어가는 새로운 대한민국</h2>
            <p className="text-xl text-white/90 leading-relaxed">
              개혁신당과 함께 더 나은 미래를 만들어가세요. 여러분의 참여가 변화의 시작입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-white/90">
                <Users className="mr-2 h-5 w-5" />
                당원 가입하기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Heart className="mr-2 h-5 w-5" />
                후원하기
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <MessageSquare className="mr-2 h-5 w-5" />
                의견 제안하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
