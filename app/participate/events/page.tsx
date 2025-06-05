import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto py-10">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">참여 행사</h1>
          <p className="text-lg text-slate-600">개혁신당이 주최하는 다양한 행사에 참여하여 정치 발전에 기여하세요.</p>
        </div>
        <Button asChild variant="outline">
          <Link href="/participate/events/my-registrations">내 신청 조회</Link>
        </Button>
      </div>

      {/* Rest of the page content (e.g., search form, event list) would go here */}
      <div>
        {/* Example placeholder content */}
        <p>Search form and event list will be implemented here.</p>
      </div>
    </div>
  )
}
