import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, FileText, Eye, Lock, Download, Mail, Phone } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
  const privacyPrinciples = [
    {
      icon: Shield,
      title: "개인정보 보호",
      description: "개인정보보호법에 따라 엄격하게 개인정보를 보호합니다.",
    },
    {
      icon: Eye,
      title: "투명한 처리",
      description: "개인정보 처리 현황을 투명하게 공개하고 관리합니다.",
    },
    {
      icon: Lock,
      title: "안전한 보관",
      description: "최신 보안 기술로 개인정보를 안전하게 보관합니다.",
    },
    {
      icon: FileText,
      title: "목적 제한",
      description: "수집 목적 범위 내에서만 개인정보를 이용합니다.",
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
              개인정보처리방침
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">개인정보처리방침</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당은 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의
              고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다.
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

      {/* Privacy Principles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">개인정보 보호 원칙</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">개혁신당의 개인정보 보호 기본 원칙입니다.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyPrinciples.map((principle, index) => {
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

      {/* Privacy Policy Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Section 1 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제1조 (개인정보의 처리목적)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의
                    용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보보호법 제18조에 따라 별도의 동의를
                    받는 등 필요한 조치를 이행할 예정입니다.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>당원 가입 및 관리:</strong> 당원 자격 확인, 당원증 발급, 당비 관리, 각종 고지사항 전달
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>후원 관리:</strong> 후원금 접수, 영수증 발급, 후원자 관리, 감사 인사
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>정보 제공:</strong> 정책 자료 제공, 뉴스레터 발송, 행사 안내
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>
                        <strong>민원 처리:</strong> 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지,
                        처리결과 통보
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 2 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제2조 (개인정보의 처리 및 보유기간)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은
                    개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-300">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="border border-slate-300 p-3 text-left">처리목적</th>
                          <th className="border border-slate-300 p-3 text-left">보유기간</th>
                          <th className="border border-slate-300 p-3 text-left">근거법령</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-3">당원 가입 및 관리</td>
                          <td className="border border-slate-300 p-3">탈당 시까지</td>
                          <td className="border border-slate-300 p-3">정당법</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3">후원 관리</td>
                          <td className="border border-slate-300 p-3">5년</td>
                          <td className="border border-slate-300 p-3">정치자금법</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3">민원 처리</td>
                          <td className="border border-slate-300 p-3">3년</td>
                          <td className="border border-slate-300 p-3">공공기록물 관리에 관한 법률</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3">마케팅 정보 제공</td>
                          <td className="border border-slate-300 p-3">동의철회 시까지</td>
                          <td className="border border-slate-300 p-3">정보통신망법</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Section 3 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제3조 (개인정보의 제3자 제공)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 개인정보를 제1조(개인정보의 처리목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                    법률의 특별한 규정 등 개인정보보호법 제17조 및 제18조에 해당하는 경우에만 개인정보를 제3자에게
                    제공합니다.
                  </p>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <p className="text-slate-700 font-medium">
                      현재 개혁신당은 개인정보를 제3자에게 제공하고 있지 않습니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 4 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제4조 (개인정보처리의 위탁)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 원활한 개인정보 업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고 있습니다.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-slate-300">
                      <thead>
                        <tr className="bg-slate-50">
                          <th className="border border-slate-300 p-3 text-left">위탁업무</th>
                          <th className="border border-slate-300 p-3 text-left">수탁업체</th>
                          <th className="border border-slate-300 p-3 text-left">위탁업무 내용</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-3">웹사이트 운영</td>
                          <td className="border border-slate-300 p-3">(주)웹호스팅업체</td>
                          <td className="border border-slate-300 p-3">웹사이트 시스템 운영 및 관리</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3">결제 처리</td>
                          <td className="border border-slate-300 p-3">(주)결제대행업체</td>
                          <td className="border border-slate-300 p-3">후원금 결제 처리</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-3">이메일 발송</td>
                          <td className="border border-slate-300 p-3">(주)이메일서비스업체</td>
                          <td className="border border-slate-300 p-3">뉴스레터 및 안내메일 발송</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>

              {/* Section 5 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제5조 (정보주체의 권리·의무 및 행사방법)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    정보주체는 개혁신당에 대해 언제든지 다음 각 호의 개인정보 보호 관련 권리를 행사할 수 있습니다.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>개인정보 처리현황 통지요구</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>개인정보 열람요구</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>개인정보 정정·삭제요구</div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <div>개인정보 처리정지요구</div>
                    </div>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-medium">
                      권리 행사는 개인정보보호법 시행령 제41조제1항에 따라 서면, 전자우편, 모사전송(FAX) 등을 통하여
                      하실 수 있으며 개혁신당은 이에 대해 지체없이 조치하겠습니다.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Section 6 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제6조 (개인정보의 안전성 확보조치)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적/관리적 및 물리적
                    조치를 하고 있습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">기술적 조치</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">개인정보 암호화</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">해킹 등에 대비한 기술적 대책</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">보안프로그램 설치 및 갱신</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-slate-900">관리적 조치</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">개인정보 취급직원의 최소화</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">정기적인 자체 감사</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-sm text-slate-600">직원 교육 실시</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 7 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제7조 (개인정보 보호책임자)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    개혁신당은 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리
                    및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-3">개인정보 보호책임자</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>성명:</strong> 김개혁
                        </div>
                        <div>
                          <strong>직책:</strong> 사무총장
                        </div>
                        <div>
                          <strong>연락처:</strong> 02-1234-5678
                        </div>
                        <div>
                          <strong>이메일:</strong> privacy@reformparty.kr
                        </div>
                      </div>
                    </div>
                    <div className="bg-slate-50 p-6 rounded-lg">
                      <h4 className="font-semibold text-slate-900 mb-3">개인정보 보호담당자</h4>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong>성명:</strong> 이보안
                        </div>
                        <div>
                          <strong>직책:</strong> 정보보안팀장
                        </div>
                        <div>
                          <strong>연락처:</strong> 02-1234-5679
                        </div>
                        <div>
                          <strong>이메일:</strong> security@reformparty.kr
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Section 8 */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">제8조 (개인정보 처리방침 변경)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이
                    있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
                  </p>
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
            <h2 className="text-3xl font-bold text-white mb-4">개인정보 관련 문의</h2>
            <p className="text-xl text-white/90">개인정보 처리에 관한 문의사항이 있으시면 언제든 연락주세요.</p>
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
                <p className="text-white/80">privacy@reformparty.kr</p>
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
