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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${pressura.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tech Wrench",
              url: "https://techwrench.netlify.app",
              telephone: "+1-412-965-8201",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1812 Tyburn Ln",
                addressLocality: "Pittsburgh",
                addressRegion: "PA",
                postalCode: "15421",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "AdministrativeArea",
                name: "Pittsburgh, PA",
              },
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
