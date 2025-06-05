import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Heart, Lightbulb } from "lucide-react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PartyPage() {
  const coreValues = [
    {
      icon: Target,
      title: "투명성",
      description: "모든 정치 활동을 투명하게 공개하고 국민에게 책임집니다.",
    },
    {
      icon: Heart,
      title: "포용성",
      description: "모든 계층과 세대를 아우르는 포용적 정치를 실현합니다.",
    },
    {
      icon: Lightbulb,
      title: "혁신성",
      description: "새로운 아이디어와 기술로 미래를 준비합니다.",
    },
    {
      icon: Users,
      title: "참여성",
      description: "국민과 함께하는 참여형 정치를 지향합니다.",
    },
  ]

  const keyFigures = [
    {
      name: "김개혁",
      position: "당 대표",
      description: "30년간 시민사회에서 활동하며 개혁과 혁신을 이끌어온 정치인입니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "이혁신",
      position: "정책위원장",
      description: "경제학 박사로 실용적이고 혁신적인 정책 개발을 담당하고 있습니다.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "박미래",
      position: "대변인",
      description: "언론계 출신으로 투명하고 소통하는 정치문화를 만들어가고 있습니다.",
      image: "/placeholder.svg?height=300&width=300",
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
              개혁신당 소개
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">국민과 함께하는 정치</h1>
            <p className="text-xl text-slate-600 leading-relaxed">
              개혁신당은 투명하고 책임감 있는 정치로 모든 국민이 행복한 사회를 만들어가는 정당입니다. 혁신과 개혁을 통해
              새로운 대한민국의 미래를 열어가겠습니다.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">우리의 역사와 비전</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  개혁신당은 2020년 시민사회의 다양한 목소리를 정치에 반영하고자 창당된 정당입니다. 기존 정치의 한계를
                  극복하고 국민 중심의 새로운 정치문화를 만들어가고 있습니다.
                </p>
                <p>
                  우리는 투명성, 포용성, 혁신성, 참여성이라는 네 가지 핵심 가치를 바탕으로 모든 정치 활동을 펼치고
                  있습니다. 국민의 목소리에 귀 기울이고, 실질적인 변화를 만들어내는 것이 우리의 사명입니다.
                </p>
                <p>앞으로도 개혁신당은 국민과 함께 걸어가며, 더 나은 대한민국을 만들기 위해 끊임없이 노력하겠습니다.</p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Party History"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">핵심 가치</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당이 추구하는 네 가지 핵심 가치입니다.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-slate-900">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">{value.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Key Figures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">주요 인물 소개</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당을 이끌어가는 주요 인물들을 소개합니다.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {keyFigures.map((figure, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image
                      src={figure.image || "/placeholder.svg"}
                      alt={figure.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{figure.name}</CardTitle>
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {figure.position}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-slate-600 leading-relaxed">
                    {figure.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Party Structure */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">당 조직 구조</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              민주적이고 투명한 당 운영을 위한 조직 구조입니다.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-8">
                  <div className="text-center">
                    <div className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold">당 대표</div>
                  </div>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="bg-slate-100 px-4 py-2 rounded-lg font-medium">정책위원회</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-100 px-4 py-2 rounded-lg font-medium">조직위원회</div>
                    </div>
                    <div className="text-center">
                      <div className="bg-slate-100 px-4 py-2 rounded-lg font-medium">홍보위원회</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="bg-slate-100 px-6 py-3 rounded-lg font-medium">지역 지부 (전국 17개 시도)</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
