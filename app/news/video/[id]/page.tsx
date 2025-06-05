import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Share2, ThumbsUp } from "lucide-react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function VideoPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the video data based on the ID
  // For this example, we'll use mock data
  const video = {
    id: params.id,
    title: "주거안정 정책 설명회",
    date: "2024-01-15",
    description:
      "개혁신당의 주거안정 종합대책에 대한 상세 설명회입니다. 청년 주거 지원 확대, 공공임대주택 공급 확대, 주택시장 안정화 방안 등 주요 정책을 소개합니다.",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder YouTube ID
    presenter: "김개혁 대표, 이혁신 정책위원장",
    tags: ["주택정책", "청년주거", "공공임대주택"],
    relatedVideos: [
      {
        id: "economic-plan-video",
        title: "경제 개혁 로드맵 설명",
        date: "2024-01-10",
        thumbnail: "/placeholder.svg?height=300&width=400",
        duration: "15:42",
      },
      {
        id: "education-reform-video",
        title: "교육 개혁안 브리핑",
        date: "2024-01-05",
        thumbnail: "/placeholder.svg?height=300&width=400",
        duration: "21:37",
      },
      {
        id: "party-leader-interview-video",
        title: "당 대표 인터뷰",
        date: "2024-01-03",
        thumbnail: "/placeholder.svg?height=300&width=400",
        duration: "24:15",
      },
    ],
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

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="mb-8">
                <div className="relative aspect-video rounded-lg overflow-hidden bg-slate-900">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  ></iframe>
                </div>
              </div>

              {/* Video Info */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    영상
                  </Badge>
                  <span className="text-sm text-slate-500">{video.date}</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">{video.title}</h1>
                <p className="text-slate-600 mb-4">발표자: {video.presenter}</p>
                <p className="text-slate-600 leading-relaxed">{video.description}</p>
              </div>

              {/* Actions */}
              <div className="flex gap-4 mb-12">
                <Button variant="outline" className="flex items-center gap-2">
                  <ThumbsUp className="h-4 w-4" />
                  좋아요
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Share2 className="h-4 w-4" />
                  공유하기
                </Button>
              </div>

              {/* Tags */}
              <div className="mb-12">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">태그</h3>
                <div className="flex flex-wrap gap-2">
                  {video.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-slate-600">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Videos */}
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">관련 영상</h3>
              <div className="space-y-4">
                {video.relatedVideos.map((related) => (
                  <Card key={related.id} className="border-0 shadow-md overflow-hidden">
                    <Link href={`/news/video/${related.id}`} className="block">
                      <div className="relative aspect-video">
                        <img
                          src={related.thumbnail || "/placeholder.svg"}
                          alt={related.title}
                          className="w-full h-full object-cover"
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
                    </Link>
                    <CardContent className="p-4">
                      <Link href={`/news/video/${related.id}`}>
                        <h4 className="font-medium text-slate-900 hover:text-primary transition-colors line-clamp-2">
                          {related.title}
                        </h4>
                      </Link>
                      <p className="text-xs text-slate-500 mt-1">{related.date}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
