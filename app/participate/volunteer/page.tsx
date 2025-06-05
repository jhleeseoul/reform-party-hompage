import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Search, Filter, Users, Clock, MapPin, ArrowRight } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function VolunteerListPage() {
  const allOpportunities = [
    {
      id: "campaign-volunteer",
      title: "선거 캠페인 자원봉사자",
      category: "캠페인",
      location: "전국",
      timeCommitment: "주 5-10시간",
      description: "선거 캠페인 활동을 도와주실 자원봉사자를 모집합니다.",
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
      description: "정책 개발을 위한 연구 활동을 지원해주실 분을 찾습니다.",
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
      description: "지역사회와 함께하는 봉사활동에 참여해주세요.",
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
      description: "SNS 관리, 콘텐츠 제작, 온라인 홍보 활동을 도와주실 분을 모집합니다.",
      urgency: "medium",
      spotsAvailable: 20,
      spotsApplied: 15,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">자원봉사 기회</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            개혁신당과 함께 의미 있는 변화를 만들어가세요. 다양한 자원봉사 기회가 여러분을 기다리고 있습니다.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input placeholder="자원봉사 활동 검색..." className="pl-10 h-12" />
          </div>
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="campaign">캠페인</SelectItem>
                <SelectItem value="policy">정책</SelectItem>
                <SelectItem value="community">봉사</SelectItem>
                <SelectItem value="marketing">홍보</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="지역" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="seoul">서울</SelectItem>
                <SelectItem value="busan">부산</SelectItem>
                <SelectItem value="remote">재택근무</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Opportunities Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {allOpportunities.map((opportunity) => (
            <Card key={opportunity.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                <CardDescription className="text-slate-600 leading-relaxed">{opportunity.description}</CardDescription>

                <div className="pt-4">
                  <Progress value={(opportunity.spotsApplied / opportunity.spotsAvailable) * 100} className="mb-2" />
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
      </div>

      <Footer />
    </div>
  )
}
