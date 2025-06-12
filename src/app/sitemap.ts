import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";
import { BLOG_ITEMS } from "@/common/constant/blog";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

async function getLastModifiedDate(filePath: string): Promise<Date> {
  filePath = path.join(process.cwd(), filePath);
  const stats = await fs.promises.stat(filePath);
  return stats.mtime;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pageRoutes = ["", "about"];
  const staticRoutes = await Promise.all(
    pageRoutes.map(async (pageRoute) => {
      const lastModified = await getLastModifiedDate(
        `src/app/${pageRoute}/page.tsx`
      );
      const page = pageRoute.replace(/\/?\(.*?\)/g, "").replace(/^\/+/, "");
      return {
        url: `${BASE_URL}/${page}`,
        lastModified,
      };
    })
  );

  const artistPageLastModified = await getLastModifiedDate(
    "src/app/artists/[id]/page.tsx"
  );
  const blogRoutes = BLOG_ITEMS.map(({ slug }) => {
    return {
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: artistPageLastModified,
    };
  });

  const sitemap = [...staticRoutes, ...blogRoutes];

  return sitemap;
}