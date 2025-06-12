import { BlogItemProps } from '@/common/types/blog';

export const BLOG_ITEMS: BlogItemProps[] = [
  {
    title: "How to make a simple SaaS project",
    slug: "how-to-make-a-simple-saas-project",
    description: "Use Next.js, TypeScript, Supabase, Stripe to build a simple SaaS project",
    updated_at: new Date("2025-06-01"),
    tags: ["Next.js", "TypeScript", "Supabase", "Stripe"],
    is_featured: false,
    is_show: true,
  },
  {
    title: "How to custom domain for your Vercel project",
    slug: "how-to-custom-domain-for-your-vercel-project",
    description: "This blog will tell you if you buy domain from another provider, how to custom domain for your Vercel project",
    updated_at: new Date("2025-06-04"),
    tags: ["Vercel", "Cloudflare", "Domain"],
    is_featured: false,
    is_show: true,
  }
]; 