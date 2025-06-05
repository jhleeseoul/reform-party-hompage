import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterSignup() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">뉴스레터 구독하기</h2>
          <p className="text-lg text-slate-600">
            개혁신당의 최신 소식과 정책 업데이트를 이메일로 받아보세요. 언제든지 구독을 취소할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="이메일 주소" className="bg-white border-slate-200" />
            <Button className="bg-primary hover:bg-primary/90 text-white">구독하기</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
