import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://techwrench.netlify.app/",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.netlify.app/about",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.netlify.app/portfolio",
      lastModified: new Date(),
    },
    {
      url: "https://techwrench.netlify.app/contact",
      lastModified: new Date(),
    },
  ];
}
