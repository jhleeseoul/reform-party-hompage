"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface ScrollToTopLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ScrollToTopLink({ href, children, className }: ScrollToTopLinkProps) {
  const pathname = usePathname()

  const handleClick = () => {
    // Small delay to ensure navigation happens first
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }, 100)
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
