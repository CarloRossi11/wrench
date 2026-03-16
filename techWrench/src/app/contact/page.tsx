import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Tech Wrench Web Development",
  description:
    "Get in touch with Tech Wrench to discuss your project or request a free quote. Based in Pittsburgh, PA — serving small businesses nationwide.",
  alternates: {
    canonical: "https://www.techwrench.co/contact",
  },
  openGraph: {
    title: "Contact Us | Tech Wrench Web Development",
    description:
      "Get in touch with Tech Wrench to discuss your project or request a free quote. Based in Pittsburgh, PA — serving small businesses nationwide.",
    url: "https://www.techwrench.co/contact",
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
    title: "Contact Us | Tech Wrench Web Development",
    description:
      "Get in touch with Tech Wrench to discuss your project or request a free quote. Based in Pittsburgh, PA — serving small businesses nationwide.",
    images: ["/og-image.png"],
  },
};

export default function Page() {
  return <ContactClient />;
}