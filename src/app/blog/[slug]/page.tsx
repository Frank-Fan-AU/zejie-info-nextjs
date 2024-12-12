import BackButton from '@/common/components/elements/BackButton';
import Container from '@/common/components/elements/Container';
import MDXComponent from '@/common/components/elements/MDXComponent';
import PageHeading from '@/common/components/elements/PageHeading';
import { fetchContentByName } from '@/common/libs/api';
interface BlogDetailPageProps {
  params: { slug: string }; // 动态路由参数
}

const BlogDetailPage = async ({ params }: BlogDetailPageProps) => {
  const { slug } = params;
  // 获取特定博客数据
  const blog = await fetchContentByName(slug);

  return (
    <Container data-aos='fade-up'>
      <BackButton url='/blog' />
      <PageHeading title={blog.title} description={blog.excerpt} />
      <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
        <MDXComponent>{blog.contentText}</MDXComponent>
      </div>
    </Container>

  );
};

export default BlogDetailPage;
