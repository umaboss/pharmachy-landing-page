import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Careers from "@/app/pages/Careers";

export const metadata: Metadata = {
  title: 'Careers - Join the Zapeera Team',
  description: 'Join Zapeera and help transform business management. Explore career opportunities in software development, sales, marketing, and customer support.',
  keywords: [
    'zapeera careers',
    'software jobs',
    'tech careers',
    'business software jobs',
    'software development careers'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Careers - Join the Zapeera Team',
    description: 'Join Zapeera and help transform business management. Explore career opportunities.',
    url: 'https://zapeera.com/careers',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Careers - Join the Zapeera Team',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers - Join the Zapeera Team',
    description: 'Explore career opportunities at Zapeera.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/careers',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Careers />
      <Footer />
    </div>
  );
}
