import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from "@/app/components/ui/toaster";
import { Toaster as Sonner } from "@/app/components/ui/sonner";
import { TooltipProvider } from "@/app/components/ui/tooltip";
import { ReactQueryProvider } from './providers'
import Loading from './components/ui/loading'
import PerformanceMonitor from './components/PerformanceMonitor'
import GoogleVerification from './components/GoogleVerification'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Zapeera - Unified Business Management Solutions',
    template: '%s | Zapeera'
  },
  description: 'Transform your business with Zapeera\'s comprehensive management platform. POS, inventory, staff management, and analytics - all in one solution. Start your free trial today!',
  keywords: [
    'business management software',
    'POS system',
    'inventory management',
    'staff management',
    'retail management',
    'pharmacy management',
    'restaurant management',
    'business analytics',
    'cloud-based solution',
    'unified platform'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zapeera.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/logo.png',
    apple: '/logo.png',
    shortcut: '/logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zapeera.com',
    title: 'Zapeera - Unified Business Management Solutions',
    description: 'Transform your business with Zapeera\'s comprehensive management platform. POS, inventory, staff management, and analytics - all in one solution.',
    siteName: 'Zapeera',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zapeera - Unified Business Management Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zapeera - Unified Business Management Solutions',
    description: 'Transform your business with Zapeera\'s comprehensive management platform.',
    images: ['/og-image.jpg'],
    creator: '@zapeera',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'q021Kxdt-XlMmlEMsW8LMeSppqPXjr3IfMw1llhujFI',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <GoogleVerification />
        <ReactQueryProvider>
          <TooltipProvider>
            <Loading>
              <PerformanceMonitor />
              <Toaster />
              <Sonner />
              {children}
            </Loading>
          </TooltipProvider>
        </ReactQueryProvider>
      </body>
    </html>
  )
}
