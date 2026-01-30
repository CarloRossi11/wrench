import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Custome Website Development Services | Tech Wrench",
  description: "Custom high performing websites developed just for you by Tech Wrench.",
  alternates: {
    canonical: "https://techwrench.netlify.app/",
  },

  openGraph: {
    title: "Custome Website Development Services | Tech Wrench",
    description:"Custom high performing websites developed just for you by Tech Wrench.",
    url: "https://techwrench.netlify.app/",
    siteName: "Tech Wrench",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
  },
};

export default function Page() {
  return <HomeClient />;
}
