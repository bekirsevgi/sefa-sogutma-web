import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.sefasogutma.com",
      priority: 1,
    },

    {
      url: "https://www.sefasogutma.com/urunler/surgulu-kapak",
    },

    {
      url: "https://www.sefasogutma.com/urunler/carpma-kapak",
    },

    {
      url: "https://www.sefasogutma.com/urunler/ozel-uretim",
    },

    {
      url: "https://www.sefasogutma.com/urunler/soguk-hava-tunelleri",
    },

    {
      url: "https://www.sefasogutma.com/urunler/yedek-parca",
    },
  ];
}