import { BLOG_ITEMS } from "@/common/constant/blog";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import BackButton from "@/common/components/elements/BackButton";
import BlogDetail from "../_components/BlogDetail";



const BlogDetailPage = async ({ params }: {params:Promise<{slug:string}>}) => {
    const slug = (await params).slug
    const blog = BLOG_ITEMS.find((item) => item.slug === slug);
    
    if (!blog) {
        return <div>Blog not found</div>;
    }

    const PAGE_TITLE = blog.title;
    const PAGE_DESCRIPTION = blog.description;
    
    return(
        <Container data-aos='fade-up'>
            <BackButton url='/blog' />
            <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            <BlogDetail {...blog} />
        </Container>
    )
};

export default BlogDetailPage;