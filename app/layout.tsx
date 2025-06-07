import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lashed by Deedee - Where Beauty Meets Precision",
  description:
    "Professional lash and brow services in Port Harcourt. Ombré brows, classic lashes, volume lashes, and training services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="pt-32">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
