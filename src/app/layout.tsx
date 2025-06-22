import { Montserrat, Roboto, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import Monitoring from '@/components/Monitoring';

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'] 
});

export const metadata: Metadata = {
  title: "ImagiNative AI Studios | Digital Agency",
  description: "Innovative digital solutions for forward-thinking businesses",
  keywords: ["AI", "Design", "Development", "Digital Agency", "Innovation"],
  authors: [{ name: "ImagiNative AI Studios" }],
  creator: "ImagiNative AI Studios",
  publisher: "ImagiNative AI Studios",
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
    title: "ImagiNative AI Studios",
    description: "Innovative digital solutions for forward-thinking businesses",
    siteName: "ImagiNative AI Studios",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "ImagiNative AI Studios - Digital Agency",
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
    <html lang="en" className={`${montserrat.variable} ${roboto.variable}`}>
      <body className={jetbrainsMono.className}>
        <Monitoring />
        {children}
      </body>
    </html>
  );
}