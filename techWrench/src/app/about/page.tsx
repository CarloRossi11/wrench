import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Tech Wrench | Custom Web Development",
  description:
    "Meet the team behind Tech Wrench — a Pittsburgh-based web development company specializing in custom, high-performing websites for small businesses.",
  alternates: {
    canonical: "https://www.techwrench.co/about",
  },
  openGraph: {
    title: "About Tech Wrench | Custom Web Development",
    description:
      "Meet the team behind Tech Wrench — a Pittsburgh-based web development company specializing in custom, high-performing websites for small businesses.",
    url: "https://www.techwrench.co/about",
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
    title: "About Tech Wrench | Custom Web Development",
    description:
      "Meet the team behind Tech Wrench — a Pittsburgh-based web development company specializing in custom, high-performing websites for small businesses.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <AboutClient />;
}