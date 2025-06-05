import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Shield, Users, AlertTriangle, Download, Mail, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function TermsPage() {
  const termsPrinciples = [
    {
      icon: Users,
      title: "이용자 권리",
      description: "모든 이용자의 권리와 의무를 명확히 규정합니다.",
    },
    {
      icon: Shield,
      title: "서비스 보호",
      description: "안전하고 신뢰할 수 있는 서비스 환경을 제공합니다.",
    },
    {
      icon: FileText,
      title: "투명한 운영",
      description: "서비스 운영 정책을 투명하게 공개합니다.",
    },
    {
      icon: AlertTriangle,
      title: "책임 한계",
      description: "서비스 이용에 따른 책임 범위를 명확히 합니다.",
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
              이용약관
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">이용약관</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당 웹사이트 및 관련 서비스 이용에 관한 약관입니다. 서비스를 이용하시기 전에 반드시 확인해주시기
              바랍니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Download className="mr-2 h-5 w-5" />
                PDF 다운로드
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                <Mail className="mr-2 h-5 w-5" />
                문의하기
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Terms Principles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">약관의 기본 원칙</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당 서비스 이용약관의 기본 원칙입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {termsPrinciples.map((principle, index) => {
              const Icon = principle.icon
              return (
                <Card key={index} className="border-0 shadow-lg text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{principle.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Section 1 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제1조 (목적)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    이 약관은 개혁신당(이하 "당")이 운영하는 웹사이트 및 관련 서비스(이하 "서비스")의 이용조건 및 절차,
                    당과 이용자의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
                  </p>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제2조 (정의)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">이 약관에서 사용하는 용어의 정의는 다음과 같습니다.</p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>"서비스"</strong>란 개혁신당이 운영하는 웹사이트(www.reformparty.kr) 및 관련 모바일
                        애플리케이션을 통해 제공하는 모든 서비스를 의미합니다.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>"이용자"</strong>란 이 약관에 따라 당의 서비스를 받는 회원 및 비회원을 말합니다.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>"회원"</strong>이란 당에 개인정보를 제공하여 회원등록을 한 자로서, 당의 정보를
                        지속적으로 제공받으며 당의 서비스를 계속적으로 이용할 수 있는 자를 말합니다.
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>"비회원"</strong>이란 회원에 가입하지 않고 당의 서비스를 이용하는 자를 말합니다.
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제3조 (약관의 효력 및 변경)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 약관의 효력</h4>
                      <p className="text-slate-600 leading-relaxed">
                        이 약관은 당의 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 약관의 게시</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당은 이 약관의 내용을 이용자가 쉽게 알 수 있도록 서비스 초기화면에 게시합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">③ 약관의 변경</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당은 필요하다고 인정되는 경우 이 약관을 변경할 수 있으며, 변경된 약관은 서비스 화면에 공지하거나
                        기타의 방법으로 이용자에게 공지함으로써 효력을 발생합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제4조 (서비스의 제공 및 변경)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 서비스 내용</h4>
                      <p className="text-slate-600 leading-relaxed">당이 제공하는 서비스는 다음과 같습니다.</p>
                      <div className="space-y-2 ml-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">정책 정보 제공 서비스</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">당원 가입 및 관리 서비스</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">후원 및 기부 서비스</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">커뮤니티 및 토론 서비스</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">기타 당이 정하는 서비스</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 서비스 변경</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당은 운영상, 기술상의 필요에 따라 제공하고 있는 전부 또는 일부 서비스를 변경할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제5조 (서비스 이용)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 서비스 이용 시간</h4>
                      <p className="text-slate-600 leading-relaxed">
                        서비스 이용은 당의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴, 1일 24시간 운영을 원칙으로
                        합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 서비스 중단</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당은 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신두절 등의 사유가 발생한 경우에는
                        서비스의 제공을 일시적으로 중단할 수 있습니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제6조 (회원가입)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 가입 신청</h4>
                      <p className="text-slate-600 leading-relaxed">
                        회원가입을 희망하는 자는 당이 정한 가입 양식에 따라 회원정보를 기입한 후 이 약관에 동의한다는
                        의사표시를 함으로서 회원가입을 신청합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 가입 승낙</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당은 제1항과 같이 회원으로 가입할 것을 신청한 자가 다음 각 호에 해당하지 않는 한 회원가입을
                        승낙합니다.
                      </p>
                      <div className="space-y-2 ml-4">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">
                            가입신청자가 이 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우
                          </span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">등록 내용에 허위, 기재누락, 오기가 있는 경우</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-600">
                            기타 회원으로 등록하는 것이 당의 기술상 현저히 지장이 있다고 판단되는 경우
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제7조 (이용자의 의무)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">이용자는 다음 행위를 하여서는 안 됩니다.</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">신청 또는 변경 시 허위 내용의 등록</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">타인의 정보 도용</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">당에 게시된 정보의 변경</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">
                        당이 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">당 기타 제3자의 저작권 등 지적재산권에 대한 침해</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">당 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-600">
                        외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 당에 공개 또는 게시하는
                        행위
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 8 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제8조 (저작권의 귀속 및 이용제한)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 저작권의 귀속</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당이 작성한 저작물에 대한 저작권 기타 지적재산권은 당에 귀속합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 이용제한</h4>
                      <p className="text-slate-600 leading-relaxed">
                        이용자는 당을 이용함으로써 얻은 정보 중 당에게 지적재산권이 귀속된 정보를 당의 사전 승낙 없이
                        복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리목적으로 이용하거나 제3자에게 이용하게
                        하여서는 안됩니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 9 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제9조 (손해배상)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    당은 무료로 제공되는 서비스와 관련하여 회원에게 어떠한 손해가 발생하더라도 당이 고의 또는 중과실로
                    인한 손해의 경우를 제외하고 이에 대하여 책임을 부담하지 아니합니다.
                  </p>
                </CardContent>
              </Card>

              {/* Section 10 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제10조 (분쟁해결)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">① 준거법</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당과 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 대한민국 법을 적용합니다.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-2">② 관할법원</h4>
                      <p className="text-slate-600 leading-relaxed">
                        당과 이용자 간에 발생한 분쟁에 관한 소송은 서울중앙지방법원을 관할 법원으로 합니다.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Effective Date */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">부칙</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-600">
                      <div>
                        <strong>시행일자:</strong> 2024년 1월 1일
                      </div>
                      <div>
                        <strong>최종 수정일:</strong> 2024년 1월 15일
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">이용약관 관련 문의</h2>
            <p className="text-xl text-white/90">이용약관에 관한 문의사항이 있으시면 언제든 연락주세요.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Phone className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">전화 문의</h3>
                <p className="text-white/80">02-1234-5678</p>
                <p className="text-sm text-white/60">평일 9:00-18:00</p>
              </CardContent>
            </Card>
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="p-6 text-center">
                <Mail className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">이메일 문의</h3>
                <p className="text-white/80">legal@reformparty.kr</p>
                <p className="text-sm text-white/60">24시간 접수</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
