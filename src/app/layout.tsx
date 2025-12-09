import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "MERN Stack",
    "Shopify",
    "Laravel",
    "Portfolio",
    "Nishant Patel",
    "Web Development",
    "Software Engineer",
  ],
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `/me.png`,
        width: 1200,
        height: 630,
        alt: `${DATA.name} - Full Stack Developer`,
      },
    ],
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
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
    images: [`/me.png`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: [
      { rel: 'icon', url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { rel: 'icon', url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
  verification: {
    google: "", // Add your Google Search Console verification code here
    yandex: "", // Add your Yandex verification code here
  },
  alternates: {
    canonical: DATA.url,
  },
  other: {
    "application/ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: DATA.name,
      jobTitle: "Full Stack Developer",
      description: DATA.description,
      url: DATA.url,
      image: `${DATA.url}/me.png`,
      sameAs: [
        DATA.contact.social.GitHub.url,
        DATA.contact.social.LinkedIn.url,
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: DATA.location,
      },
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        occupationalCategory: "Software Development",
        skills: DATA.skills.join(", "),
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: DATA.education[0].school,
      },
      worksFor: DATA.work.map(company => ({
        "@type": "Organization",
        name: company.company,
        jobTitle: company.title,
        startDate: company.start,
        endDate: company.end === "Freelancing" ? undefined : company.end,
      })),
      knowsAbout: DATA.skills,
    }),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "antialiased bg-background!   min-h-screen font-sans  max-w-2xl mx-auto py-12 sm:py-24 px-6",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            {/* Your Content/Components */}
            <div className="">
              {children}
            </div>
            <Toaster />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
