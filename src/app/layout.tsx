import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { Helmet } from "react-helmet-async";
import "./globals.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Helmet>
        <title>{`${DATA.name} | Cloud & DevOps Engineer`}</title>
        <meta name="description" content={DATA.description} />
        <meta name="keywords" content="Sahil Muliya, Cloud Engineer, DevOps Engineer, AWS, Linux, Docker, Portfolio, Cloud Infrastructure" />
        <meta property="og:title" content={DATA.name} />
        <meta property="og:description" content={DATA.description} />
        <meta property="og:url" content={DATA.url} />
        <meta property="og:site_name" content={DATA.name} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/my-avtar.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={`${DATA.name} - Cloud & DevOps Engineer`} />
        <meta name="twitter:title" content={DATA.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/my-avtar.png" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={DATA.url} />
        <link rel="icon" href="/my-avtar.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/android-chrome-192x192.png" sizes="192x192" type="image/png" />
        <link rel="icon" href="/android-chrome-512x512.png" sizes="512x512" type="image/png" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: DATA.name,
            jobTitle: "Cloud & DevOps Engineer",
            description: DATA.description,
            url: DATA.url,
            image: `${DATA.url}/my-avtar.png`,
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
              name: "Cloud & DevOps Engineer",
              occupationalCategory: "Cloud Computing & DevOps",
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
              endDate: company.end === "Present" ? undefined : company.end,
            })),
            knowsAbout: DATA.skills,
          })}
        </script>
      </Helmet>
      <div
        className={cn(
          "antialiased bg-background min-h-screen font-sans max-w-2xl mx-auto py-12 sm:py-24 px-6"
        )}
      >
        <ThemeProvider defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="">
              {children}
            </div>
            <Toaster />
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </div>
    </>
  );
}
