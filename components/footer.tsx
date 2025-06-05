import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Youtube, Instagram, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "당 소개", href: "/party" },
    { name: "정책", href: "/policy" },
    { name: "보도자료", href: "/news" },
    { name: "참여", href: "/participate" },
  ]

  const legalLinks = [
    { name: "개인정보처리방침", href: "/privacy" },
    { name: "이용약관", href: "/terms" },
    { name: "사이트맵", href: "/sitemap" },
    { name: "접근성 정책", href: "/accessibility" },
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1 space-y-4">
            <Image
              src="/logo.svg"
              alt="Reform Party Logo"
              width={150}
              height={50}
              className="h-12 w-auto brightness-0 invert"
            />
            <p className="text-slate-300 leading-relaxed">
              국민과 함께하는 정치, 미래를 향한 변화를 만들어가는 개혁신당입니다.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-slate-400 hover:text-primary transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">빠른 링크</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-slate-300 hover:text-primary transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">연락처</h3>
            <div className="space-y-3 text-slate-300">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">서울특별시 영등포구 국회대로 1길 1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="text-sm">info@reformparty.kr</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">뉴스레터</h3>
            <p className="text-slate-300 text-sm">개혁신당의 최신 소식을 이메일로 받아보세요.</p>
            <div className="flex space-x-2">
              <Input
                type="email"
                placeholder="이메일 주소"
                className="bg-slate-800 border-slate-700 text-white placeholder:text-slate-400"
              />
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                구독
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap gap-6 text-sm text-slate-400">
              {legalLinks.map((link) => (
                <Link key={link.name} href={link.href} className="hover:text-primary transition-colors duration-200">
                  {link.name}
                </Link>
              ))}
            </div>
            <p className="text-sm text-slate-400">© {new Date().getFullYear()} 개혁신당. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
