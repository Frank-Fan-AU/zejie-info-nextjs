
import Container from '@/common/components/elements/Container';
import client from '@/common/libs/contentful/client';


interface BlogPost {
    fields: {
        title: string;
        slug: string;
        author: any;
        excerpt: string;
        coverImage: any;
        content: any;
    };
    sys: {
        id: string;
    };
    contentTypeId: string;
}

const Blog = async() => {
  console.log(process.env.CONTENTFUL_ACCESS_TOKEN);
  // 从 Contentful 获取博客文章
  const { items } = await client.getEntries<BlogPost>({ content_type: 'blog' });

  console.log(items);
    return (
        <>
      
          <Container className='xl:!-mt-5' data-aos='fade-up'>
            {/* <BlogListNew /> */}
            <div>
      <h1>博客文章</h1>
      <ul>
        {items.map((item) => (
          <li key={item.sys.id}>
            <h2>{item.fields.title}</h2>
            <p>{item.fields.excerpt}</p>
          </li>
        ))}
      </ul>
    </div>
          </Container>
        </>
      );
};

export default Blog;
