import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogItemProps } from "@/common/types/blog";

const blogDirectory = path.join(process.cwd(), "src/blogContent");

export async function getAllBlogs(): Promise<BlogItemProps[]> {
  const fileNames = fs.readdirSync(blogDirectory);
  const blogs = fileNames
    .filter((fileName) => fileName.endsWith(".mdx"))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, "");
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        description: data.description,
        image: data.image,
        content,
        is_show: data.is_show ?? true,
        is_featured: data.is_featured ?? false,
        updated_at: new Date(data.updated_at),
        tags: data.tags ?? [],
      };
    })
    .filter((blog) => blog.is_show)
    .sort((a, b) => b.updated_at.getTime() - a.updated_at.getTime());

  return blogs;
}

export async function getBlogBySlug(slug: string): Promise<BlogItemProps | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      image: data.image,
      content,
      is_show: data.is_show ?? true,
      is_featured: data.is_featured ?? false,
      updated_at: new Date(data.updated_at),
      tags: data.tags ?? [],
    };
  } catch (error) {
    return null;
  }
} 