import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, Share2, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

// This would typically come from a database or CMS
const getVideo = (id: string) => {
  // Mock data for demonstration
  return {
    id,
    title: "주거안정 정책 설명회",
    date: "2024-01-15",
    description:
      "개혁신당의 주거안정 정책 설명회 영상입니다. 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등에 대한 상세한 설명을 들으실 수 있습니다.",
    thumbnail: "/placeholder.svg?height=600&width=1200",
    duration: "18:24",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
    speaker: "김정책 정책위원장",
    views: 1245,
    likes: 89,
    tags: ["주택정책", "청년주거", "공공임대주택", "주택시장안정화"],
    relatedVideos: [
      {
        id: "party-leader-interview-video",
        title: "당 대표 인터뷰",
        date: "2024-01-03",
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "24:15",
      },
      {
        id: "economic-plan-video",
        title: "경제 개혁 로드맵 설명",
        date: "2024-01-10",
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "15:42",
      },
      {
        id: "education-reform-video",
        title: "교육 개혁안 브리핑",
        date: "2024-01-05",
        thumbnail: "/placeholder.svg?height=200&width=300",
        duration: "21:37",
      },
    ],
  }
}

export default function VideoPage({ params }: { params: { id: string } }) {
  const video = getVideo(params.id)

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
            <span className="text-slate-900 font-medium">{video.title}</span>
          </div>
        </div>
      </div>

      {/* Video Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild className="text-slate-600 hover:text-primary pl-0">
              <Link href="/news?tab=multimedia">
                <ArrowLeft className="mr-2 h-4 w-4" />
                영상 목록으로 돌아가기
              </Link>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Video Player */}
            <div className="relative aspect-video mb-8 bg-black rounded-lg overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.youtubeId}`}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="mb-8">
              <Badge variant="secondary" className="bg-primary/10 text-primary mb-4">
                영상
              </Badge>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">{video.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {video.date}
                </div>
                <div>발표자: {video.speaker}</div>
                <div>조회수: {video.views}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  좋아요 ({video.likes})
                </Button>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  공유하기
                </Button>
              </div>
            </div>

            {/* Video Description */}
            <div className="prose prose-slate max-w-none mb-12">
              <p>{video.description}</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {video.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-slate-600">
                  #{tag}
                </Badge>
              ))}
            </div>

            {/* Related Videos */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">관련 영상</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {video.relatedVideos.map((related) => (
                  <div key={related.id} className="group">
                    <div className="relative aspect-video mb-3 overflow-hidden rounded-lg">
                      <Image
                        src={related.thumbnail || "/placeholder.svg"}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                        {related.duration}
                      </div>
                    </div>
                    <Link href={`/news/video/${related.id}`}>
                      <h3 className="font-medium text-slate-900 hover:text-primary mb-1">{related.title}</h3>
                    </Link>
                    <span className="text-sm text-slate-500">{related.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
