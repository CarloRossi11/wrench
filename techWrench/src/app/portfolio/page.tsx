import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Web Development Portfolio",
  description:
    "View our web development portfolio showcasing our latest projects and success stories.",
  alternates: {
    canonical: "https://techwrench.co/portfolio",
  },
  openGraph: {
    title: "Web Development Portfolio",
    description:
      "View our web development portfolio showcasing our latest projects and success stories.",
    url: "https://techwrench.co/portfolio",
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
  return <PortfolioClient />;
}