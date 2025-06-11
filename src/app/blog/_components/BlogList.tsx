import Link from "next/link";
import { HiOutlineArrowSmRight as ViewIcon } from "react-icons/hi";
import { AiFillPushpin as PinIcon } from "react-icons/ai";
import Card from "@/common/components/elements/Card";
import Image from "@/common/components/elements/Image";
import { BlogItemProps } from "@/common/types/blog";

interface BlogListProps {
  blogs: BlogItemProps[];
}

export default function BlogList({ blogs }: BlogListProps) {
  return (
    <div className="grid gap-5 px-1 pt-2 sm:grid-cols-2">
      {blogs.map((blog) => (
        <Link key={blog.slug} href={`/blog/${blog.slug}`}>
          <Card className="group relative cursor-pointer border border-neutral-200 dark:border-neutral-900 lg:hover:scale-[102%]">
            {blog.is_featured && (
              <div className="absolute right-0 top-0 z-[2] flex items-center gap-1 rounded-bl-xl rounded-tr-xl bg-lime-300 px-2 py-1 text-[13px] font-medium text-emerald-950">
                <PinIcon size={15} />
                <span>Featured</span>
              </div>
            )}
            <div className="relative">
              {blog.image && (
                <Image
                  src={blog.image}
                  width={400}
                  height={160}
                  alt={blog.title}
                  className="h-48 rounded-t-xl object-cover object-left"
                />
              )}
              <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-80">
                <span>View Article</span>
                <ViewIcon size={20} />
              </div>
            </div>
            <div className="space-y-2 p-5">
              <div className="flex justify-between">
                <div className="cursor-pointer text-lg text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600">
                  {blog.title}
                </div>
              </div>
              <p className="text-[15px] leading-relaxed text-neutral-700 dark:text-neutral-400">
                {blog.description}
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">
                {new Date(blog.updated_at).toLocaleDateString()}
              </div>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
} 