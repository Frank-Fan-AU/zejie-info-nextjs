import Container from '@/common/components/elements/Container';
import client from '@/common/libs/contentful/client';
import BlogCardNew from './_components/BlogCardNew';
import { getBlogItems } from '@/common/libs/blog';
import { getAllPosts } from '@/common/libs/api';




const Blog = async() => {
  // 从 Contentful 获取博客文章
  const allPosts = await getAllPosts(false);

  console.log(allPosts);
    return (
        <>
      
          <Container className='xl:!-mt-5' data-aos='fade-up'>
            {/* <BlogListNew /> */}
            <div>
      <h1>博客文章</h1>
      {/* {allPosts.map((item,index) => (
        <BlogCardNew 
          key={index} 
          {...item}
        />
      ))} */}
    </div>
          </Container>
        </>
      );
};

export default Blog;
