import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  FileText,
  HelpCircle,
  Send,
  Building,
  Globe,
  Facebook,
  Twitter,
  Youtube,
  Instagram,
} from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import GeneralInquiryForm from "@/components/contact/general-inquiry-form"
import MembershipForm from "@/components/contact/membership-form"
import MediaInquiryForm from "@/components/contact/media-inquiry-form"
import VolunteerForm from "@/components/contact/volunteer-form"

export default function ContactPage() {
  const contactMethods = [
    {
      icon: Phone,
      title: "전화 문의",
      description: "직접 통화를 원하시는 경우",
      details: "02-1234-5678",
      hours: "평일 09:00 - 18:00",
      color: "bg-blue-500",
    },
    {
      icon: Mail,
      title: "이메일 문의",
      description: "자세한 문의사항이 있으신 경우",
      details: "info@reformparty.kr",
      hours: "24시간 접수 (48시간 내 답변)",
      color: "bg-green-500",
    },
    {
      icon: MessageSquare,
      title: "온라인 상담",
      description: "실시간 채팅 상담",
      details: "웹사이트 채팅",
      hours: "평일 10:00 - 17:00",
      color: "bg-purple-500",
    },
    {
      icon: MapPin,
      title: "방문 상담",
      description: "직접 방문하여 상담",
      details: "서울특별시 영등포구 국회대로 1길 1",
      hours: "평일 09:00 - 18:00 (예약 필수)",
      color: "bg-orange-500",
    },
  ]

  const departments = [
    {
      name: "당무국",
      description: "당 운영 및 조직 관련 업무",
      phone: "02-1234-5679",
      email: "admin@reformparty.kr",
      responsibilities: ["당원 관리", "조직 운영", "내부 행정"],
    },
    {
      name: "정책위원회",
      description: "정책 개발 및 연구",
      phone: "02-1234-5680",
      email: "policy@reformparty.kr",
      responsibilities: ["정책 연구", "공약 개발", "정책 자문"],
    },
    {
      name: "홍보위원회",
      description: "대외 홍보 및 언론 대응",
      phone: "02-1234-5681",
      email: "media@reformparty.kr",
      responsibilities: ["언론 대응", "홍보 기획", "SNS 관리"],
    },
    {
      name: "청년위원회",
      description: "청년 정책 및 활동",
      phone: "02-1234-5682",
      email: "youth@reformparty.kr",
      responsibilities: ["청년 정책", "청년 활동", "대학 연계"],
    },
    {
      name: "지역위원회",
      description: "지역 조직 및 활동",
      phone: "02-1234-5683",
      email: "local@reformparty.kr",
      responsibilities: ["지역 조직", "지역 활동", "지방 정치"],
    },
    {
      name: "자원봉사센터",
      description: "자원봉사 및 시민 참여",
      phone: "02-1234-5684",
      email: "volunteer@reformparty.kr",
      responsibilities: ["자원봉사", "시민 참여", "캠페인 지원"],
    },
  ]

  const regionalOffices = [
    {
      region: "서울특별시",
      address: "서울특별시 영등포구 국회대로 1길 1",
      phone: "02-1234-5678",
      email: "seoul@reformparty.kr",
      manager: "김서울",
    },
    {
      region: "부산광역시",
      address: "부산광역시 해운대구 센텀중앙로 79",
      phone: "051-1234-5678",
      email: "busan@reformparty.kr",
      manager: "이부산",
    },
    {
      region: "대구광역시",
      address: "대구광역시 중구 동성로 1가 1",
      phone: "053-1234-5678",
      email: "daegu@reformparty.kr",
      manager: "박대구",
    },
    {
      region: "인천광역시",
      address: "인천광역시 남동구 구월동 1138",
      phone: "032-1234-5678",
      email: "incheon@reformparty.kr",
      manager: "최인천",
    },
    {
      region: "광주광역시",
      address: "광주광역시 서구 치평동 1200",
      phone: "062-1234-5678",
      email: "gwangju@reformparty.kr",
      manager: "정광주",
    },
    {
      region: "대전광역시",
      address: "대전광역시 서구 둔산동 1400",
      phone: "042-1234-5678",
      email: "daejeon@reformparty.kr",
      manager: "강대전",
    },
  ]

  const faqCategories = [
    {
      category: "당원가입",
      questions: [
        {
          question: "개혁신당 당원이 되려면 어떤 조건이 필요한가요?",
          answer: `개혁신당 당원 가입 조건은 다음과 같습니다:

• 만 18세 이상의 대한민국 국민
• 다른 정당의 당원이 아닌 자
• 개혁신당의 강령과 정책에 동의하는 자
• 정신적, 신체적으로 당원의 의무를 수행할 수 있는 자

가입 절차는 온라인 또는 오프라인으로 진행할 수 있으며, 신분증 확인과 서약서 작성이 필요합니다.`,
        },
        {
          question: "당원 가입비나 당비는 얼마인가요?",
          answer: `개혁신당의 당비 체계는 다음과 같습니다:

• 가입비: 10,000원 (최초 1회)
• 월 당비: 10,000원 (일반당원 기준)
• 학생당원: 월 5,000원
• 경제적 어려움이 있는 경우 당비 감면 신청 가능

당비는 당 운영과 정치 활동에 투명하게 사용되며, 사용 내역은 정기적으로 공개됩니다.`,
        },
        {
          question: "당원 탈퇴는 어떻게 하나요?",
          answer: `당원 탈퇴 절차는 다음과 같습니다:

1. 탈퇴 신청서 작성 (온라인 또는 서면)
2. 신분 확인 절차
3. 탈퇴 사유 확인 (선택사항)
4. 최종 승인 및 처리

탈퇴 신청 후 7일 이내에 처리되며, 탈퇴 후에도 개인정보는 관련 법령에 따라 적절히 처리됩니다.`,
        },
      ],
    },
    {
      category: "정책 및 활동",
      questions: [
        {
          question: "개혁신당의 주요 정책은 무엇인가요?",
          answer: `개혁신당의 핵심 정책 분야는 다음과 같습니다:

• 경제 정책: 중소기업 지원, 일자리 창출, 경제 불평등 해소
• 사회 정책: 복지 제도 개선, 교육 혁신, 의료 접근성 향상
• 환경 정책: 탄소중립 실현, 재생에너지 확대, 지속가능한 발전
• 청년 정책: 주거비 지원, 청년 일자리, 창업 지원

자세한 정책 내용은 홈페이지의 정책 섹션에서 확인하실 수 있습니다.`,
        },
        {
          question: "정책 제안은 어떻게 할 수 있나요?",
          answer: `시민 여러분의 정책 제안을 환영합니다:

• 온라인 정책 제안: 홈페이지 정책 제안 게시판 이용
• 이메일 제안: policy@reformparty.kr
• 오프라인 제안: 지역 사무소 방문 또는 우편 발송
• 정책 토론회 참여: 정기적으로 개최되는 시민 토론회

모든 제안은 정책위원회에서 검토하며, 우수한 제안은 당 정책에 반영됩니다.`,
        },
        {
          question: "개혁신당의 활동에 참여하려면 어떻게 해야 하나요?",
          answer: `다양한 방법으로 개혁신당 활동에 참여할 수 있습니다:

• 자원봉사: 선거 캠페인, 정책 홍보, 지역 활동 등
• 정책 연구: 정책 개발 및 연구 활동 참여
• 교육 프로그램: 정치 교육 및 리더십 프로그램 참여
• 지역 활동: 지역 지부 활동 및 지역 사회 봉사

관심 분야에 따라 적합한 활동을 안내해드리니 연락 주시기 바랍니다.`,
        },
      ],
    },
    {
      category: "후원 및 기부",
      questions: [
        {
          question: "개혁신당을 후원하려면 어떻게 해야 하나요?",
          answer: `개혁신당 후원 방법은 다음과 같습니다:

• 온라인 후원: 홈페이지 후원 페이지에서 신용카드, 계좌이체
• 정기 후원: 월 정기 후원 신청 (최소 1만원부터)
• 일시 후원: 원하는 금액으로 일회성 후원
• 오프라인 후원: 지역 사무소 방문 또는 계좌 입금

모든 후원금은 정치자금법에 따라 투명하게 관리되며, 기부금 영수증을 발급해드립니다.`,
        },
        {
          question: "후원금은 어떻게 사용되나요?",
          answer: `후원금은 다음과 같은 용도로 투명하게 사용됩니다:

• 정책 연구 및 개발 (30%)
• 당 운영 및 조직 관리 (25%)
• 홍보 및 소통 활동 (20%)
• 지역 활동 및 시민 참여 (15%)
• 교육 및 인재 양성 (10%)

분기별로 후원금 사용 내역을 홈페이지에 공개하며, 중앙선거관리위원회에 정기 보고합니다.`,
        },
        {
          question: "기부금 영수증은 어떻게 받나요?",
          answer: `기부금 영수증 발급 절차는 다음과 같습니다:

• 온라인 후원: 후원 완료 후 즉시 이메일로 발송
• 오프라인 후원: 신청 시 우편 또는 이메일로 발송
• 연말정산용: 매년 1월 말까지 일괄 발송
• 분실 시 재발급: 고객센터 연락 후 재발급 가능

기부금 영수증은 연말정산 시 소득공제 혜택을 받을 수 있습니다.`,
        },
      ],
    },
    {
      category: "행사 및 모임",
      questions: [
        {
          question: "개혁신당 행사는 어떻게 참여할 수 있나요?",
          answer: `개혁신당 행사 참여 방법은 다음과 같습니다:

• 홈페이지 행사 안내: 정기적으로 업데이트되는 행사 일정 확인
• 이메일 뉴스레터: 구독 시 행사 정보 우선 안내
• SNS 팔로우: 페이스북, 트위터, 인스타그램에서 실시간 정보
• 지역 사무소: 지역별 행사 정보 및 참가 신청

대부분의 행사는 무료이며, 일부 행사는 사전 신청이 필요할 수 있습니다.`,
        },
        {
          question: "지역별 모임은 어떻게 운영되나요?",
          answer: `지역별 모임은 다음과 같이 운영됩니다:

• 정기 모임: 월 1-2회 정기 모임 개최
• 정책 토론: 지역 현안 및 정책 이슈 토론
• 봉사 활동: 지역 사회 봉사 및 환경 정화 활동
• 문화 행사: 지역 주민과 함께하는 문화 행사

참여를 원하시면 해당 지역 사무소로 연락하시거나 온라인으로 신청하실 수 있습니다.`,
        },
      ],
    },
    {
      category: "기타 문의",
      questions: [
        {
          question: "개혁신당의 역사와 창당 배경은 무엇인가요?",
          answer: `개혁신당은 2020년 3월 15일 창당되었습니다:

• 창당 배경: 기존 정치의 한계를 극복하고 국민 중심의 새로운 정치 실현
• 핵심 가치: 투명성, 포용성, 혁신성, 참여성
• 주요 성과: 지방선거 참여, 다양한 정책 제안, 시민 참여 확대
• 미래 비전: 더 나은 대한민국을 위한 지속적인 개혁과 혁신

자세한 역사는 홈페이지의 '당 소개' 섹션에서 확인하실 수 있습니다.`,
        },
        {
          question: "언론 인터뷰나 취재 요청은 어떻게 하나요?",
          answer: `언론 관련 문의는 다음과 같이 진행해주세요:

• 홍보위원회 연락: media@reformparty.kr
• 전화 문의: 02-1234-5681 (홍보위원회 직통)
• 공식 보도자료: 홈페이지 보도자료 섹션 참조
• 긴급 연락: 24시간 언론 대응 핫라인 운영

취재 요청 시 목적, 일정, 필요한 정보를 명시해주시면 신속하게 대응해드립니다.`,
        },
        {
          question: "개인정보는 어떻게 보호되나요?",
          answer: `개혁신당은 개인정보보호법에 따라 엄격하게 개인정보를 관리합니다:

• 수집 목적: 당원 관리, 소통, 행사 안내 등 명확한 목적으로만 수집
• 보관 기간: 법정 보관 기간 준수, 불필요 시 즉시 삭제
• 보안 조치: 암호화, 접근 제한, 정기 보안 점검 실시
• 제3자 제공: 법적 요구 외에는 절대 제공하지 않음

개인정보 처리방침은 홈페이지에서 상세히 확인하실 수 있습니다.`,
        },
      ],
    },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, url: "#", followers: "12.5K" },
    { name: "Twitter", icon: Twitter, url: "#", followers: "8.9K" },
    { name: "YouTube", icon: Youtube, url: "#", followers: "15.2K" },
    { name: "Instagram", icon: Instagram, url: "#", followers: "6.7K" },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="border-primary text-primary mb-6">
              연락처 및 문의
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">언제든 연락주세요</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              개혁신당은 항상 시민 여러분의 목소리에 귀 기울이고 있습니다. 궁금한 점이나 제안사항이 있으시면 언제든
              연락해주세요.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">연락 방법</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              다양한 방법으로 개혁신당과 소통하실 수 있습니다. 편리한 방법을 선택해주세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => {
              const Icon = method.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto w-16 h-16 ${method.color} rounded-full flex items-center justify-center mb-4`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center space-y-2">
                    <div className="font-semibold text-slate-900">{method.details}</div>
                    <div className="text-sm text-slate-500 flex items-center justify-center gap-1">
                      <Clock className="h-3 w-3" />
                      {method.hours}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contact Forms */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">온라인 문의</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              목적에 맞는 문의 양식을 선택하여 빠르고 정확한 답변을 받으세요.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <MessageSquare className="h-4 w-4" />
                  일반 문의
                </TabsTrigger>
                <TabsTrigger value="membership" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  당원 가입
                </TabsTrigger>
                <TabsTrigger value="media" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  언론 문의
                </TabsTrigger>
                <TabsTrigger value="volunteer" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  자원봉사
                </TabsTrigger>
              </TabsList>

              <TabsContent value="general" className="mt-6">
                <GeneralInquiryForm />
              </TabsContent>

              <TabsContent value="membership" className="mt-6">
                <MembershipForm />
              </TabsContent>

              <TabsContent value="media" className="mt-6">
                <MediaInquiryForm />
              </TabsContent>

              <TabsContent value="volunteer" className="mt-6">
                <VolunteerForm />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">부서별 연락처</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              업무 분야에 따라 해당 부서로 직접 연락하실 수 있습니다.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Building className="h-5 w-5 text-primary" />
                    {dept.name}
                  </CardTitle>
                  <CardDescription>{dept.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="h-4 w-4 text-slate-500" />
                      <span>{dept.phone}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="h-4 w-4 text-slate-500" />
                      <span>{dept.email}</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm mb-2">주요 업무:</h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {dept.responsibilities.map((resp, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Regional Offices */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">지역 사무소</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              전국 주요 도시에 위치한 개혁신당 지역 사무소를 방문해보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalOffices.map((office, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    {office.region}
                  </CardTitle>
                  <CardDescription>지역 담당자: {office.manager}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm text-slate-600">
                    <div className="font-medium mb-1">주소:</div>
                    <div>{office.address}</div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-slate-500" />
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-slate-500" />
                    <span>{office.email}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    <MapPin className="mr-2 h-4 w-4" />
                    지도에서 보기
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">자주 묻는 질문</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당에 대해 자주 묻는 질문들을 정리했습니다. 궁금한 내용을 찾아보세요.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="당원가입" className="w-full">
              <TabsList className="grid w-full grid-cols-5">
                {faqCategories.map((category) => (
                  <TabsTrigger key={category.category} value={category.category} className="text-sm">
                    {category.category}
                  </TabsTrigger>
                ))}
              </TabsList>

              {faqCategories.map((category) => (
                <TabsContent key={category.category} value={category.category} className="mt-6">
                  <Card className="border-0 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <HelpCircle className="h-5 w-5 text-primary" />
                        {category.category} 관련 질문
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Accordion type="single" collapsible className="w-full">
                        {category.questions.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent>
                              <div className="prose prose-slate max-w-none">
                                <div className="whitespace-pre-line text-slate-600">{faq.answer}</div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">소셜 미디어</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              개혁신당의 소셜 미디어를 팔로우하여 최신 소식을 받아보세요.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const Icon = social.icon
              return (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{social.name}</h3>
                    <div className="text-sm text-slate-500 mb-4">{social.followers} 팔로워</div>
                    <Button variant="outline" className="w-full">
                      <Globe className="mr-2 h-4 w-4" />
                      팔로우하기
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
