import type { Metadata } from 'next';
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Contact from "@/app/pages/Contact";

export const metadata: Metadata = {
  title: 'Contact Us - Zapeera',
  description: 'Get in touch with Zapeera. Contact our team for sales inquiries, support, partnerships, or general questions about our business management solutions.',
  keywords: [
    'contact zapeera',
    'business software support',
    'POS system contact',
    'software inquiry',
    'customer support'
  ],
  authors: [{ name: 'Zapeera Team' }],
  creator: 'Zapeera',
  publisher: 'Zapeera',
  metadataBase: new URL('https://zapeera.com'),
  openGraph: {
    title: 'Contact Us - Zapeera',
    description: 'Get in touch with Zapeera for sales inquiries, support, partnerships, or general questions.',
    url: 'https://zapeera.com/contact',
    siteName: 'Zapeera',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://zapeera.com/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact Us - Zapeera',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Zapeera',
    description: 'Get in touch with Zapeera for support and inquiries.',
    images: ['https://zapeera.com/og-home.jpg'],
    creator: '@zapeera',
  },
  alternates: {
    canonical: 'https://zapeera.com/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Contact />
      <Footer />
    </div>
  );
}
