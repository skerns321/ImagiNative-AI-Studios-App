import { Montserrat, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Monitoring from '@/components/Monitoring';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
  preload: true,
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ImagiNative Studios | Digital Agency",
  description: "Innovative digital solutions for forward-thinking businesses",
  keywords: ["AI", "Design", "Development", "Digital Agency", "Innovation"],
  authors: [{ name: "ImagiNative Studios" }],
  creator: "ImagiNative Studios",
  publisher: "ImagiNative Studios",
  metadataBase: new URL("https://imaginative-aistudios.ai"),
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://imaginative-ai.com",
    title: "ImagiNative Studios",
    description: "Innovative digital solutions for forward-thinking businesses",
    siteName: "ImagiNative Studios",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ImagiNative Studios - Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@ImagiNativeAI",
    site: "@ImagiNativeAI",
    images: ["/og-image.svg"],
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
  verification: {
    google: "your-google-site-verification",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
    { media: '(prefers-color-scheme: light)', color: '#000000' }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`} suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        {process.env.NODE_ENV === 'production' && <Monitoring />}
        {children}
      </body>
    </html>
  );
}