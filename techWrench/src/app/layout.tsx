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
              url: "https://www.techwrench.co",
              telephone: "+1-412-965-8201",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1812 Tyburn Ln",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                postalCode: "15421",
                addressCountry: "US",
              },
              areaServed: [
                { "@type": "AdministrativeArea", name: "Pittsburgh, PA" },
                { "@type": "AdministrativeArea", name: "Pennsylvania" },
                { "@type": "Country", name: "United States" },
              ],
              serviceType: [
                "Website Development",
                "Custom Websites",
                "Lead Generation Websites",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}