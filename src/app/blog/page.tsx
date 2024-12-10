import Container from '@/common/components/elements/Container';
import Blog from './_components/Blog';




const BlogPage = async () => {
  return (
    <>
      <Container className='xl:!-mt-5' data-aos='fade-up'>
        <Blog />
      </Container>
    </>
  );
};

export default BlogPage;
