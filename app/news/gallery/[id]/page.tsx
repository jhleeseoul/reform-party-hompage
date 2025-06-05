import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Download, LayoutGrid } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

// This would typically come from a database or CMS
const getGallery = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "청년 정책 포럼",
    date: "2024-01-12",
    description: "전국 각지에서 모인 청년들과 함께 미래 정책 방향을 논의하는 뜻깊은 시간을 가졌습니다.",
    location: "서울 중구 개혁신당 중앙당사",
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `photo-${i + 1}`,
      src: `/placeholder.svg?height=${400 + (i % 3) * 100}&width=${600 + (i % 3) * 100}`,
      alt: `청년 정책 포럼 사진 ${i + 1}`,
      caption: i % 3 === 0 ? "청년들의 열띤 토론 현장" : i % 3 === 1 ? "정책 제안 발표" : "참가자들의 단체 사진",
    })),
  }
}

export default function GalleryPage({ params }: { params: { id: string } }) {
  const gallery = getGallery(params.id)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-slate-50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center text-sm text-slate-600">
            <Link href="/" className="hover:text-primary">
              홈
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news" className="hover:text-primary">
              뉴스
            </Link>
            <span className="mx-2">/</span>
            <Link href="/news?tab=multimedia" className="hover:text-primary">
              미디어
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900 font-medium">{gallery.title}</span>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary pl-0">
              <Link href="/news?tab=multimedia">
                <ArrowLeft className="mr-2 h-4 w-4" />
                갤러리 목록으로 돌아가기
              </Link>
            </Button>
          </div>

          {/* Gallery Header */}
          <div className="max-w-4xl mx-auto mb-12">
            <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
              사진 갤러리
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{gallery.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {gallery.date}
              </div>
              <div>{gallery.location}</div>
            </div>
            <p className="text-lg text-slate-600">{gallery.description}</p>
          </div>

          {/* Gallery Controls */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-slate-600">총 {gallery.photos.length}장의 사진</div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                모든 사진 다운로드
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <LayoutGrid className="h-4 w-4" />
                그리드 보기
              </Button>
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.photos.map((photo) => (
              <div key={photo.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={photo.src || "/placeholder.svg"}
                    alt={photo.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button variant="secondary" size="sm">
                      크게 보기
                    </Button>
                  </div>
                </div>
                <div className="mt-2 text-sm text-slate-600">{photo.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
