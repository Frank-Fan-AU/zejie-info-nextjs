import Container from '@/common/components/elements/Container';
// import { getAllPosts } from '@/common/libs/api';




const Blog = async() => {
  // 从 Contentful 获取博客文章
  // const allPosts = await getAllPosts(false);

    return (
        <>
      
          <Container className='xl:!-mt-5' data-aos='fade-up'>
            {/* <BlogListNew /> */}
            <div>
      <h1>blog developing... I will use contentful to get the posts</h1>
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
