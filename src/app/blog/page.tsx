'use client';
import Container from '@/common/components/elements/Container';
import { NextSeo } from 'next-seo';

const PAGE_TITLE = 'Blog';

const Blog = () => {
    return (
        <>
          <NextSeo title={`${PAGE_TITLE} - Ryan Aulia`} />
          <Container className='xl:!-mt-5' data-aos='fade-up'>
            {/* <BlogListNew /> */}
            <div>Blog</div>
          </Container>
        </>
      );
};

export default Blog;
