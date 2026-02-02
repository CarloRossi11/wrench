import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Tech Wrench Services",
  description:
    "View the services offered by Tech Wrench, specializing in custom web development for small businesses.",
  alternates: {
    canonical: "https://techwrench.netlify.app/services",
  },
  openGraph: {
    title: "Tech Wrench Services",
    description:
      "View the services offered by Tech Wrench, specializing in custom web development for small businesses.",
    url: "https://techwrench.netlify.app/services",
  },
};

export default function Page() {
  return <ServicesClient />;
}
