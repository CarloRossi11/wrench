import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { Inter } from "next/font/google";

const pressura = localFont({
  src: "./fonts/GT-Pressura-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-pressura",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techwrench.co"),
  title:
    "Tech Wrench | Customer Acquisition Systems for Local Service Businesses",
  description:
    "Tech Wrench helps local service businesses get found online, capture every lead, and win more customers through high-performance websites, Google Business optimization, lead automation, and customer acquisition systems.",
  keywords: [
    "customer acquisition",
    "lead generation",
    "Google Business Profile optimization",
    "local SEO",
    "website development",
    "Next.js websites",
    "CRM",
    "lead management",
    "marketing automation",
    "Google Local Services Ads",
    "small business marketing",
    "Pittsburgh web design",
    "Pittsburgh SEO",
  ],

  authors: [
    {
      name: "Tech Wrench",
      url: "https://www.techwrench.co",
    },
  ],

  creator: "Tech Wrench",

  publisher: "Tech Wrench",

  alternates: {
    canonical: "https://www.techwrench.co",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },

  openGraph: {
    title: "Tech Wrench | Customer Acquisition Systems",
    description:
      "Tech Wrench helps local service businesses get found online, capture every lead, and win more customers through high-performance websites, Google Business optimization, lead automation, and customer acquisition systems.",
    url: "https://www.techwrench.co",
    siteName: "Tech Wrench",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Wrench | Customer Acquisition Systems",
    description:
      "Tech Wrench helps local service businesses get found online, capture every lead, and win more customers through high-performance websites, Google Business optimization, lead automation, and customer acquisition systems.",
    images: [
      {
        url: "/og-image.png",
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressura.variable} ${inter.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tech Wrench",
              alternateName: "Tech Wrench Web Solutions",
              url: "https://www.techwrench.co",
              logo: "https://www.techwrench.co/twsVerticalWhite.svg",
              image: "https://www.techwrench.co/og-image.png",
              description:
                "Tech Wrench helps local service businesses get found online, capture every lead, and win more customers through high-performance websites, Google Business optimization, lead automation, and customer acquisition systems.",
              priceRange: "$$",
              telephone: "+1-412-965-8201",
              email: "carlo@techwrench.co",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-412-965-8201",
                contactType: "sales",
                email: "carlo@techwrench.co",
              },
              serviceType: [
                "Customer Acquisition",
                "Website Development",
                "Google Business Profile Optimization",
                "Local SEO",
                "Lead Management",
                "CRM Implementation",
                "Marketing Automation",
                "Reputation Management",
                "Google Local Services Ads",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                postalCode: "15241",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Pittsburgh, PA" },
                { "@type": "AdministrativeArea", name: "Pennsylvania" },
                { "@type": "Country", name: "United States" },
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Customer Acquisition & Growth Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Essential Presence",
                      description:
                        "Professional website, Google Business Profile optimization, local SEO foundation, hosting, maintenance, and missed-call text back automation for local service businesses.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Growth Engine",
                      description:
                        "Lead management, automated review generation, CRM, pipeline tracking, unified inbox, and automated follow-up systems that convert more inquiries into customers.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Local Authority",
                      description:
                        "Google Local Services Ads management, database reactivation campaigns, referral automation, and ROI reporting for businesses focused on predictable growth.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Website Development",
                      description:
                        "Fast, SEO-optimized Next.js websites built to help local service businesses generate more leads.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Google Business Profile Optimization",
                      description:
                        "Optimization and ongoing management of Google Business Profiles to improve local visibility and attract more customers.",
                    },
                  },
                ],
              },
              sameAs: [
                "https://www.facebook.com/people/Tech-Wrench/61582078050775/",
                "https://www.instagram.com/techwrenchco",
                "https://www.linkedin.com/company/tech-wrench/",
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Tech Wrench",
              url: "https://www.techwrench.co",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.techwrench.co/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
