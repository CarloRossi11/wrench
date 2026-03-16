import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Custom Website Development Services | Tech Wrench",
  description:
    "Custom high performing websites developed just for you by Tech Wrench.",
  alternates: {
    canonical: "https://www.techwrench.co/",
  },

  openGraph: {
    title: "Custom Website Development Services | Tech Wrench",
    description:
      "Custom high performing websites developed just for you by Tech Wrench.",
    url: "https://www.techwrench.co/",
    siteName: "Tech Wrench",
    type: "website",
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
    title: "Custom Website Development Services | Tech Wrench",
    description:
      "Custom high performing websites developed just for you by Tech Wrench.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <HomeClient />;
}