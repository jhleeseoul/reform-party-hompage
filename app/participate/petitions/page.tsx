import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, Megaphone, CheckCircle } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"

export default function PetitionsListPage() {
  const allPetitions = [
    {
      id: "youth-housing-support",
      title: "청년 주거비 지원 확대를 위한 청원",
      description: "청년들의 주거 부담을 줄이기 위한 정부 지원 확대를 요구합니다.",
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
      description: "탄소중립 목표 달성을 위한 구체적인 정책과 예산 확보를 요구합니다.",
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

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">온라인 청원</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            여러분의 목소리로 정책을 바꿔보세요. 온라인 청원을 통해 사회 문제에 대한 해결책을 제시하고 지지를
            모아보세요.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 items-center mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input placeholder="청원 검색..." className="pl-10 h-12" />
          </div>
          <div className="flex gap-4">
            <Select defaultValue="all">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="카테고리" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="housing">주거</SelectItem>
                <SelectItem value="education">교육</SelectItem>
                <SelectItem value="environment">환경</SelectItem>
                <SelectItem value="economy">경제</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="active">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="상태" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">전체</SelectItem>
                <SelectItem value="active">진행중</SelectItem>
                <SelectItem value="completed">완료</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* New Petition Button */}
        <div className="text-center mb-8">
          <Button className="bg-primary hover:bg-primary/90 text-white" asChild>
            <Link href="/participate/petition/new">
              <Megaphone className="mr-2 h-4 w-4" />새 청원 시작하기
            </Link>
          </Button>
        </div>

        {/* Petitions List */}
        <div className="space-y-6">
          {allPetitions.map((petition) => (
            <Card key={petition.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge
                        variant={petition.status === "completed" ? "default" : "secondary"}
                        className={petition.status === "completed" ? "bg-green-500" : "bg-primary/10 text-primary"}
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
                      <div className="text-sm text-slate-500">목표: {petition.targetSignatures.toLocaleString()}명</div>
                    </div>

                    <Progress value={(petition.currentSignatures / petition.targetSignatures) * 100} className="mb-4" />

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
      </div>

      <Footer />
    </div>
  )
}
