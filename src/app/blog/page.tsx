import { BLOG_ITEMS } from "@/common/constant/blog";
import BlogList from "@/app/blog/_components/BlogList";
import PageHeading from '@/common/components/elements/PageHeading';
import Container from '@/common/components/elements/Container';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION =
  'My technical blog and thoughts';

export default async function BlogPage() {
  const blogs = BLOG_ITEMS;

  return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <BlogList blogs={blogs} />
      </Container>
    </>
  );
} 