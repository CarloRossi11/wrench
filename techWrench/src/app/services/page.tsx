import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Web Development Services | Tech Wrench",
  description:
    "Explore Tech Wrench's custom web development services for small businesses — from responsive design and SEO to hosting, maintenance, and brand refresh.",
  alternates: {
    canonical: "https://www.techwrench.co/services",
  },
  openGraph: {
    title: "Web Development Services | Tech Wrench",
    description:
      "Explore Tech Wrench's custom web development services for small businesses — from responsive design and SEO to hosting, maintenance, and brand refresh.",
    url: "https://www.techwrench.co/services",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Wrench Web Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services | Tech Wrench",
    description:
      "Explore Tech Wrench's custom web development services for small businesses — from responsive design and SEO to hosting, maintenance, and brand refresh.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Website Development",
            provider: {
              "@type": "LocalBusiness",
              name: "Tech Wrench",
              url: "https://www.techwrench.co",
            },
            areaServed: {
              "@type": "Country",
              name: "United States",
            },
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
          }),
        }}
      />
      <ServicesClient />
    </>
  );
}
