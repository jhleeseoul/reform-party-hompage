import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Eye,
  Keyboard,
  Volume2,
  MousePointer,
  Smartphone,
  Monitor,
  Users,
  CheckCircle,
  Download,
  Mail,
  Phone,
  Settings,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AccessibilityPage() {
  const accessibilityFeatures = [
    {
      icon: Eye,
      title: "시각 접근성",
      description: "시각 장애인을 위한 스크린 리더 지원 및 고대비 모드",
      features: ["스크린 리더 완전 호환", "고대비 색상 모드", "텍스트 크기 조절", "이미지 대체 텍스트 제공"],
    },
    {
      icon: Volume2,
      title: "청각 접근성",
      description: "청각 장애인을 위한 자막 및 시각적 알림 제공",
      features: ["동영상 자막 제공", "시각적 알림 시스템", "수화 통역 영상", "텍스트 기반 안내"],
    },
    {
      icon: Keyboard,
      title: "키보드 접근성",
      description: "마우스 없이 키보드만으로 모든 기능 이용 가능",
      features: ["Tab 키 순차 탐색", "키보드 단축키 지원", "포커스 표시 명확화", "건너뛰기 링크 제공"],
    },
    {
      icon: MousePointer,
      title: "운동 접근성",
      description: "운동 장애인을 위한 대안적 입력 방법 지원",
      features: ["큰 클릭 영역", "드래그 앤 드롭 대안", "시간 제한 조절", "음성 인식 지원"],
    },
    {
      icon: Smartphone,
      title: "모바일 접근성",
      description: "모바일 기기에서의 접근성 최적화",
      features: ["터치 제스처 지원", "화면 회전 대응", "확대/축소 기능", "모바일 스크린 리더 호환"],
    },
    {
      icon: Monitor,
      title: "인지 접근성",
      description: "인지 장애인을 위한 명확하고 단순한 인터페이스",
      features: ["명확한 네비게이션", "일관된 레이아웃", "단순한 언어 사용", "오류 방지 및 안내"],
    },
  ]

  const wcagCompliance = [
    {
      level: "A",
      title: "기본 준수",
      description: "웹 접근성의 기본 요구사항을 충족",
      status: "완료",
      color: "bg-green-500",
    },
    {
      level: "AA",
      title: "향상된 준수",
      description: "대부분의 사용자가 접근 가능한 수준",
      status: "완료",
      color: "bg-green-500",
    },
    {
      level: "AAA",
      title: "최고 수준",
      description: "가장 높은 수준의 접근성 제공",
      status: "진행중",
      color: "bg-yellow-500",
    },
  ]

  const accessibilityTools = [
    {
      name: "화면 확대",
      shortcut: "Ctrl + Plus",
      description: "텍스트와 이미지를 확대합니다",
    },
    {
      name: "화면 축소",
      shortcut: "Ctrl + Minus",
      description: "텍스트와 이미지를 축소합니다",
    },
    {
      name: "원래 크기",
      shortcut: "Ctrl + 0",
      description: "기본 크기로 되돌립니다",
    },
    {
      name: "고대비 모드",
      shortcut: "Alt + Shift + H",
      description: "고대비 색상으로 전환합니다",
    },
    {
      name: "메인 콘텐츠로 이동",
      shortcut: "Alt + S",
      description: "메인 콘텐츠 영역으로 바로 이동합니다",
    },
    {
      name: "메뉴로 이동",
      shortcut: "Alt + M",
      description: "주 메뉴로 바로 이동합니다",
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
              웹 접근성 정책
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">모든 사람을 위한 웹사이트</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당은 장애인, 고령자 등 모든 사용자가 차별 없이 웹사이트를 이용할 수 있도록 웹 접근성 지침을 준수하고
              지속적으로 개선하고 있습니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Download className="mr-2 h-5 w-5" />
                접근성 가이드 다운로드
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Settings className="mr-2 h-5 w-5" />
                접근성 설정
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WCAG Compliance */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">WCAG 2.1 준수 현황</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              국제 웹 접근성 지침(WCAG 2.1)을 기준으로 접근성을 구현하고 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {wcagCompliance.map((level, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div
                    className={`w-16 h-16 ${level.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-white font-bold text-lg">{level.level}</span>
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{level.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{level.description}</p>
                  <Badge
                    variant={level.status === "완료" ? "default" : "secondary"}
                    className={level.status === "완료" ? "bg-green-500" : "bg-yellow-500"}
                  >
                    {level.status}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Accessibility Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">접근성 기능</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              다양한 사용자의 요구를 충족하는 접근성 기능을 제공합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessibilityFeatures.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                    <div className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">키보드 단축키</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              키보드만으로 웹사이트를 효율적으로 이용할 수 있는 단축키를 제공합니다.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  {accessibilityTools.map((tool, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-medium text-slate-900 mb-1">{tool.name}</h4>
                        <p className="text-sm text-slate-600">{tool.description}</p>
                      </div>
                      <div className="ml-4">
                        <Badge variant="outline" className="font-mono text-xs">
                          {tool.shortcut}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Accessibility Statement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-slate-900 text-center">접근성 선언문</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">우리의 약속</h3>
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 모든 사람이 정보에 평등하게 접근할 수 있는 권리를 보장하기 위해 노력합니다. 우리는
                    장애인차별금지법과 웹 접근성 지침을 준수하여 누구나 차별 없이 우리의 웹사이트를 이용할 수 있도록
                    지속적으로 개선하고 있습니다.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">준수 기준</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">웹 콘텐츠 접근성 지침(WCAG) 2.1 AA 수준 준수</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">한국형 웹 콘텐츠 접근성 지침(K-WCAG) 2.1 준수</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-slate-600">장애인차별금지 및 권리구제 등에 관한 법률 준수</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">지속적인 개선</h3>
                  <p className="text-slate-600 leading-relaxed">
                    우리는 접근성을 일회성 작업이 아닌 지속적인 과정으로 인식하고 있습니다. 정기적인 접근성 점검, 사용자
                    피드백 수집, 최신 기술 도입을 통해 접근성을 지속적으로 향상시켜 나가겠습니다.
                  </p>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-slate-900 mb-3">접근성 관련 문의</h4>
                  <p className="text-slate-600 text-sm mb-4">
                    웹사이트 이용 중 접근성 관련 문제를 발견하시거나 개선 사항이 있으시면 언제든 연락주세요.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-slate-900">이메일</div>
                        <div className="text-sm text-slate-600">accessibility@reformparty.kr</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <div>
                        <div className="font-medium text-slate-900">전화</div>
                        <div className="text-sm text-slate-600">02-1234-5678</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center pt-6 border-t">
                  <p className="text-sm text-slate-500">
                    최종 업데이트: 2024년 1월 15일 | 다음 점검 예정일: 2024년 7월 15일
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">접근성 지원</h2>
            <p className="text-xl text-white/90">접근성 관련 도움이 필요하시면 언제든 연락주세요.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">전화 지원</h3>
                <p className="text-white/80">02-1234-5678</p>
                <p className="text-sm text-white/60">평일 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">이메일 지원</h3>
                <p className="text-white/80">accessibility@reformparty.kr</p>
                <p className="text-sm text-white/60">24시간 접수</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Users className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">원격 지원</h3>
                <p className="text-white/80">화면 공유 지원</p>
                <p className="text-sm text-white/60">사전 예약 필요</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
