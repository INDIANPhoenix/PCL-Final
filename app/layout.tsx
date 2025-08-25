import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pro Concrete & Landscaping - Perth's Premier Outdoor Transformation Experts",
  description:
    "Professional concrete and landscaping services in Perth. Transform your outdoor space with quality workmanship, competitive pricing, and expert design. Free quotes available.",
  keywords: "concrete, landscaping, Perth, outdoor design, driveways, patios, artificial grass, exposed aggregate",
  authors: [{ name: "Pro Concrete & Landscaping" }],
  creator: "Pro Concrete & Landscaping",
  publisher: "Pro Concrete & Landscaping",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://proconcretelandscaping.com.au"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pro Concrete & Landscaping - Perth's Premier Outdoor Transformation Experts",
    description:
      "Professional concrete and landscaping services in Perth. Transform your outdoor space with quality workmanship.",
    url: "https://proconcretelandscaping.com.au",
    siteName: "Pro Concrete & Landscaping",
    locale: "en_AU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pro Concrete & Landscaping - Perth's Premier Outdoor Transformation Experts",
    description: "Professional concrete and landscaping services in Perth.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "Next.js",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#16a34a" },
    { media: "(prefers-color-scheme: dark)", color: "#16a34a" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-AU">
      <head>
        {/* Additional meta tags for better browser compatibility */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Pro Concrete & Landscaping" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <meta name="msapplication-tap-highlight" content="no" />

        {/* Preconnect to external domains for better performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      </head>
      <body className="antialiased" suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
