import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function NewsLoading() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Skeleton className="h-6 w-32 mx-auto mb-6" />
            <Skeleton className="h-12 w-3/4 mx-auto mb-6" />
            <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />

            {/* Search Bar Skeleton */}
            <div className="max-w-2xl mx-auto">
              <Skeleton className="h-14 w-full" />
            </div>
          </div>
        </div>
      </section>

      {/* News & Media Tabs Skeleton */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Skeleton className="h-10 w-full max-w-md" />
          </div>

          {/* Featured News Skeleton */}
          <div className="mb-12">
            <Skeleton className="h-8 w-48 mb-6" />
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2 gap-6">
                <Skeleton className="h-72 w-full" />
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-6 w-24" />
                    <Skeleton className="h-6 w-32" />
                  </div>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-24 w-full" />
                  <Skeleton className="h-6 w-40" />
                  <Skeleton className="h-10 w-32" />
                </div>
              </div>
            </Card>
          </div>

          {/* Latest News Skeleton */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <Skeleton className="h-8 w-32" />
              <div className="flex gap-2">
                <Skeleton className="h-9 w-24" />
                <Skeleton className="h-9 w-24" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="border-0 shadow-md overflow-hidden">
                  <Skeleton className="h-48 w-full" />
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <Skeleton className="h-5 w-20" />
                      <Skeleton className="h-5 w-24" />
                    </div>
                    <Skeleton className="h-6 w-full" />
                  </CardHeader>
                  <CardContent>
                    <Skeleton className="h-16 w-full" />
                  </CardContent>
                  <CardFooter>
                    <Skeleton className="h-6 w-24" />
                  </CardFooter>
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Skeleton className="h-10 w-32 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
