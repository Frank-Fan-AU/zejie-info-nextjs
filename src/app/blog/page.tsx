import Container from '@/common/components/elements/Container';
import Blog from './_components/Blog';
import PageHeading from '@/common/components/elements/PageHeading';

const PAGE_TITLE = 'Blogs';
const PAGE_DESCRIPTION =
  'Study Blog powered by contentful, a headless CMS';


const BlogPage = async () => {
  return (
    <>
      <Container className='xl:!-mt-5' data-aos='fade-up'>
      <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Blog />
      </Container>
    </>
  );
};

export default BlogPage;
