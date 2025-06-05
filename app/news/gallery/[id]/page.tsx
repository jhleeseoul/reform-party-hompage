import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GalleryPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the gallery data based on the ID
  // For this example, we'll use mock data
  const gallery = {
    id: params.id,
    title: "청년 정책 포럼",
    date: "2024-01-12",
    description: "전국 각지에서 모인 청년들과 함께 미래 정책 방향을 논의하는 뜻깊은 시간을 가졌습니다.",
    location: "서울 중앙대학교 대강당",
    photos: Array.from({ length: 12 }, (_, i) => ({
      id: `photo-${i + 1}`,
      src: `/placeholder.svg?height=800&width=1200`,
      alt: `청년 정책 포럼 사진 ${i + 1}`,
      caption: i % 3 === 0 ? "청년들과의 토론 시간" : i % 3 === 1 ? "정책 제안 발표" : "참가자들의 열띤 토론",
    })),
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary p-0">
              <Link href="/news">
                <ArrowLeft className="h-4 w-4 mr-2" />
                뉴스 목록으로 돌아가기
              </Link>
            </Button>
          </div>

          {/* Gallery Header */}
          <div className="mb-12 text-center">
            <Badge variant="outline" className="border-primary text-primary mb-4">
              사진 갤러리
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{gallery.title}</h1>
            <div className="flex justify-center gap-4 text-slate-600 mb-6">
              <span>{gallery.date}</span>
              <span>•</span>
              <span>{gallery.location}</span>
            </div>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">{gallery.description}</p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {gallery.photos.map((photo) => (
              <div
                key={photo.id}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <p className="text-white text-sm">{photo.caption}</p>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-fit"
                  >
                    <Download className="h-4 w-4 mr-1" />
                    다운로드
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Download All Button */}
          <div className="text-center">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              <Download className="h-5 w-5 mr-2" />
              모든 사진 다운로드
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
