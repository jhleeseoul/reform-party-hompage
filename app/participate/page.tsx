import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Heart,
  FileText,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Target,
  CheckCircle,
  UserPlus,
  Megaphone,
} from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import DonationForm from "@/components/donation-form"

export default function ParticipatePage() {
  const volunteerOpportunities = [
    {
      id: "campaign-volunteer",
      title: "선거 캠페인 자원봉사자",
      category: "캠페인",
      location: "전국",
      timeCommitment: "주 5-10시간",
      description:
        "선거 캠페인 활동을 도와주실 자원봉사자를 모집합니다. 유권자 접촉, 홍보물 배포, 행사 지원 등의 활동을 합니다.",
      requirements: ["만 18세 이상", "정치 활동에 대한 관심", "주말 활동 가능"],
      benefits: ["정치 경험 습득", "네트워킹 기회", "자원봉사 확인서 발급"],
      urgency: "high",
      spotsAvailable: 50,
      spotsApplied: 32,
    },
    {
      id: "policy-research",
      title: "정책 연구 보조",
      category: "정책",
      location: "서울",
      timeCommitment: "주 10-15시간",
      description:
        "정책 개발을 위한 연구 활동을 지원해주실 분을 찾습니다. 자료 조사, 분석, 보고서 작성 등의 업무를 담당합니다.",
      requirements: ["대학생 이상", "정책 분야 관심", "기본적인 연구 능력"],
      benefits: ["정책 전문성 향상", "추천서 제공", "인턴십 기회"],
      urgency: "medium",
      spotsAvailable: 10,
      spotsApplied: 7,
    },
    {
      id: "community-outreach",
      title: "지역사회 봉사활동",
      category: "봉사",
      location: "지역별",
      timeCommitment: "월 2-3회",
      description:
        "지역사회와 함께하는 봉사활동에 참여해주세요. 환경정화, 독거노인 돌봄, 교육봉사 등 다양한 활동이 있습니다.",
      requirements: ["봉사 정신", "지역사회 관심", "정기적 참여 가능"],
      benefits: ["사회공헌 기회", "지역 네트워크 구축", "봉사시간 인정"],
      urgency: "low",
      spotsAvailable: 100,
      spotsApplied: 45,
    },
    {
      id: "digital-marketing",
      title: "디지털 마케팅 지원",
      category: "홍보",
      location: "재택근무",
      timeCommitment: "주 5-8시간",
      description:
        "SNS 관리, 콘텐츠 제작, 온라인 홍보 활동을 도와주실 분을 모집합니다. 디지털 네이티브 세대의 참여를 환영합니다.",
      requirements: ["SNS 활용 능력", "콘텐츠 제작 경험", "창의적 사고"],
      benefits: ["디지털 마케팅 경험", "포트폴리오 구축", "유연한 근무"],
      urgency: "medium",
      spotsAvailable: 20,
      spotsApplied: 15,
    },
  ]

  const activePetitions = [
    {
      id: "youth-housing-support",
      title: "청년 주거비 지원 확대를 위한 청원",
      description:
        "청년들의 주거 부담을 줄이기 위한 정부 지원 확대를 요구합니다. 월세 지원금 인상과 청년 전용 임대주택 공급 확대가 필요합니다.",
      targetSignatures: 10000,
      currentSignatures: 7842,
      daysLeft: 23,
      category: "주거",
      status: "active",
      createdDate: "2024-01-01",
    },
    {
      id: "education-reform",
      title: "공교육 정상화를 위한 교육개혁 청원",
      description: "사교육비 부담을 줄이고 공교육의 질을 높이기 위한 종합적인 교육개혁을 요구합니다.",
      targetSignatures: 15000,
      currentSignatures: 12156,
      daysLeft: 15,
      category: "교육",
      status: "active",
      createdDate: "2023-12-15",
    },
    {
      id: "climate-action",
      title: "기후변화 대응 강화 청원",
      description:
        "탄소중립 목표 달성을 위한 구체적인 정책과 예산 확보를 요구합니다. 재생에너지 확대와 친환경 교통 인프라 구축이 시급합니다.",
      targetSignatures: 8000,
      currentSignatures: 5234,
      daysLeft: 31,
      category: "환경",
      status: "active",
      createdDate: "2024-01-10",
    },
    {
      id: "small-business-support",
      title: "소상공인 지원 정책 강화 청원",
      description: "코로나19 이후 어려움을 겪고 있는 소상공인들을 위한 실질적인 지원 정책 마련을 요구합니다.",
      targetSignatures: 12000,
      currentSignatures: 12000,
      daysLeft: 0,
      category: "경제",
      status: "completed",
      createdDate: "2023-11-20",
    },
  ]

  const upcomingEvents = [
    {
      id: "volunteer-orientation",
      title: "자원봉사자 오리엔테이션",
      date: "2024-01-25",
      time: "14:00",
      location: "개혁신당 본부",
      type: "교육",
      description: "새로운 자원봉사자들을 위한 오리엔테이션 및 교육 프로그램",
      capacity: 50,
      registered: 32,
    },
    {
      id: "policy-workshop",
      title: "시민 정책 워크숍",
      date: "2024-02-03",
      time: "10:00",
      location: "서울시민청",
      type: "워크숍",
      description: "시민들과 함께하는 정책 개발 워크숍",
      capacity: 100,
      registered: 67,
    },
    {
      id: "fundraising-gala",
      title: "후원의 밤 행사",
      date: "2024-02-14",
      time: "18:00",
      location: "그랜드 하얏트 서울",
      type: "후원",
      description: "개혁신당을 후원해주시는 분들을 위한 감사 행사",
      capacity: 200,
      registered: 145,
    },
  ]

  const impactStats = [
    {
      label: "활동 중인 자원봉사자",
      value: "1,247",
      icon: Users,
      change: "+15%",
    },
    {
      label: "진행 중인 청원",
      value: "8",
      icon: FileText,
      change: "+2",
    },
    {
      label: "이번 달 후원자",
      value: "3,456",
      icon: Heart,
      change: "+23%",
    },
    {
      label: "참여 행사",
      value: "42",
      icon: Calendar,
      change: "+8",
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
              시민 참여
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">함께 만들어가는 변화</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당과 함께 더 나은 대한민국을 만들어가세요. 자원봉사, 청원, 후원을 통해 정치에 직접 참여하고 변화를
              이끌어낼 수 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <UserPlus className="mr-2 h-5 w-5" />
                자원봉사 신청
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Heart className="mr-2 h-5 w-5" />
                후원하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
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

      {/* Main Content Tabs */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="volunteer" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-lg grid-cols-3">
                <TabsTrigger value="volunteer">자원봉사</TabsTrigger>
                <TabsTrigger value="petitions">청원</TabsTrigger>
                <TabsTrigger value="donate">후원</TabsTrigger>
              </TabsList>
            </div>

            {/* Volunteer Opportunities Tab */}
            <TabsContent value="volunteer" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">자원봉사 기회</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  개혁신당과 함께 의미 있는 변화를 만들어가세요. 다양한 자원봉사 기회가 여러분을 기다리고 있습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {volunteerOpportunities.map((opportunity) => (
                  <Card
                    key={opportunity.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <CardHeader>
                      <div className="flex justify-between items-start mb-3">
                        <Badge
                          variant={
                            opportunity.urgency === "high"
                              ? "destructive"
                              : opportunity.urgency === "medium"
                                ? "default"
                                : "secondary"
                          }
                          className={
                            opportunity.urgency === "high"
                              ? "bg-red-500"
                              : opportunity.urgency === "medium"
                                ? "bg-primary"
                                : "bg-slate-500"
                          }
                        >
                          {opportunity.category}
                        </Badge>
                        <div className="text-right text-sm text-slate-500">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 mr-1" />
                            {opportunity.spotsApplied}/{opportunity.spotsAvailable}
                          </div>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{opportunity.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-slate-500">
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {opportunity.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {opportunity.timeCommitment}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-slate-600 leading-relaxed">
                        {opportunity.description}
                      </CardDescription>

                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">요구사항:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {opportunity.requirements.map((req, index) => (
                            <li key={index} className="flex items-center">
                              <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-slate-900 mb-2">혜택:</h4>
                        <ul className="text-sm text-slate-600 space-y-1">
                          {opportunity.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-center">
                              <Target className="h-3 w-3 text-primary mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4">
                        <Progress
                          value={(opportunity.spotsApplied / opportunity.spotsAvailable) * 100}
                          className="mb-2"
                        />
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-slate-500">
                            {opportunity.spotsAvailable - opportunity.spotsApplied}자리 남음
                          </span>
                          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                            <Link href={`/participate/volunteer/${opportunity.id}`}>
                              신청하기
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                  <Link href="/participate/volunteer">모든 자원봉사 기회 보기</Link>
                </Button>
              </div>
            </TabsContent>

            {/* Petitions Tab */}
            <TabsContent value="petitions" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">온라인 청원</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  여러분의 목소리로 정책을 바꿔보세요. 온라인 청원을 통해 사회 문제에 대한 해결책을 제시하고 지지를
                  모아보세요.
                </p>
              </div>

              <div className="space-y-6">
                {activePetitions.map((petition) => (
                  <Card key={petition.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="grid lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2 space-y-4">
                          <div className="flex items-center gap-3">
                            <Badge
                              variant={petition.status === "completed" ? "default" : "secondary"}
                              className={
                                petition.status === "completed" ? "bg-green-500" : "bg-primary/10 text-primary"
                              }
                            >
                              {petition.category}
                            </Badge>
                            {petition.status === "completed" && (
                              <Badge variant="default" className="bg-green-500">
                                목표 달성
                              </Badge>
                            )}
                          </div>
                          <Link href={`/participate/petition/${petition.id}`}>
                            <h3 className="text-xl font-bold text-slate-900 hover:text-primary transition-colors">
                              {petition.title}
                            </h3>
                          </Link>
                          <p className="text-slate-600 leading-relaxed">{petition.description}</p>
                          <div className="flex items-center gap-4 text-sm text-slate-500">
                            <span>시작일: {petition.createdDate}</span>
                            {petition.status === "active" && (
                              <span className="text-primary font-medium">{petition.daysLeft}일 남음</span>
                            )}
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-slate-900 mb-1">
                              {petition.currentSignatures.toLocaleString()}
                            </div>
                            <div className="text-sm text-slate-500">
                              목표: {petition.targetSignatures.toLocaleString()}명
                            </div>
                          </div>

                          <Progress
                            value={(petition.currentSignatures / petition.targetSignatures) * 100}
                            className="mb-4"
                          />

                          {petition.status === "active" ? (
                            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                              <Link href={`/participate/petition/${petition.id}`}>
                                <Megaphone className="mr-2 h-4 w-4" />
                                서명하기
                              </Link>
                            </Button>
                          ) : (
                            <Button variant="outline" className="w-full" disabled>
                              <CheckCircle className="mr-2 h-4 w-4" />
                              완료됨
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center space-y-4">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                  <Link href="/participate/petitions">모든 청원 보기</Link>
                </Button>
                <div>
                  <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
                    <Link href="/participate/petition/new">새 청원 시작하기</Link>
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Donation Tab */}
            <TabsContent value="donate" className="space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">후원하기</h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  개혁신당의 활동을 후원해주세요. 여러분의 후원이 더 나은 정치, 더 나은 사회를 만드는 원동력이 됩니다.
                </p>
              </div>

              <DonationForm />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">참여 가능한 행사</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당이 주최하는 다양한 행사에 참여하여 직접 정치에 참여해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-3">
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      {event.type}
                    </Badge>
                    <div className="text-right text-sm text-slate-500">
                      <div>
                        {event.registered}/{event.capacity}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <div className="space-y-1 text-sm text-slate-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date} {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-slate-600">{event.description}</CardDescription>
                  <Progress value={(event.registered / event.capacity) * 100} className="mb-4" />
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white">
                    <Link href={`/participate/event/${event.id}`}>
                      참가 신청
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
