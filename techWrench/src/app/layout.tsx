import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const pressura = localFont({
  src: "./fonts/GT-Pressura-Bold.ttf",
  weight: "700",
  style: "normal",
  variable: "--font-pressura",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.techwrench.co"),
  title: "Tech Wrench - Website Development Services",
  description:
    "Tech Wrench offers professional website development services, specializing in custom and lead generation websites to help your business grow online.",
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
    title: "Tech Wrench - Website Development Services",
    description:
      "Professional website development services specializing in custom and lead generation websites.",
    url: "https://www.techwrench.co",
    siteName: "Tech Wrench",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Wrench Web Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Tech Wrench - Website Development Services",
    description:
      "Professional website development services specializing in custom and lead generation websites.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${pressura.variable}`}>
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
                "Tech Wrench builds custom websites and lead generation websites for small businesses across Pittsburgh, PA and the United States.",
              priceRange: "$$",
              telephone: "+1-412-965-8201",
              email: "carlo@techwrench.co",
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
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Custom Website Development",
                      description:
                        "Fully custom websites designed and built to reflect your brand and convert visitors into customers.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lead Generation Websites",
                      description:
                        "Performance-focused websites built to capture leads and grow your small business.",
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
