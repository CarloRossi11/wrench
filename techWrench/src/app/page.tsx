import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Customer Acquisition for Local Service Businesses | Tech Wrench",

  description:
    "Tech Wrench helps local service businesses get found online, capture every lead, automate customer follow-up, and turn more inquiries into paying customers through high-performance websites, Google Business Profile optimization, CRM, and customer acquisition systems.",

  keywords: [
    "customer acquisition",
    "lead generation",
    "Google Business Profile optimization",
    "local SEO",
    "website development",
    "lead management",
    "CRM",
    "marketing automation",
    "Google Local Services Ads",
    "contractor marketing",
    "marketing for landscapers",
    "marketing for plumbers",
    "marketing for HVAC companies",
    "marketing for electricians",
  ],

  alternates: {
    canonical: "https://www.techwrench.co",
  },

  openGraph: {
    title: "Customer Acquisition for Local Service Businesses | Tech Wrench",

    description:
      "Tech Wrench helps local service businesses get found online, capture every lead, automate customer follow-up, and turn more inquiries into paying customers through high-performance websites, Google Business Profile optimization, CRM, and customer acquisition systems.",

    url: "https://www.techwrench.co",
    siteName: "Tech Wrench",
    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Customer Acquisition for Local Service Businesses | Tech Wrench",

    description:
      "Tech Wrench helps local service businesses get found online, capture every lead, automate customer follow-up, and turn more inquiries into paying customers through high-performance websites, Google Business Profile optimization, CRM, and customer acquisition systems.",

    images: [
      {
        url: "/og-image.png",
        alt: "Tech Wrench helps local service businesses get found online and win more customers.",
      },
    ],
  },
};

export default function Page() {
  return <HomeClient />;
}
