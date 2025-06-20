import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Image from '@/common/components/elements/Image';
import GiscusComments from '@/common/components/elements/Giscus';
import { GISCUS_CONFIG } from '@/common/constant/giscus';
import MDXComponent from '@/common/components/elements/MDXComponent';
import { BlogItemProps } from '@/common/types/blog';

const BlogDetail = (
    {
        title,
        image,
        slug
    }: BlogItemProps
) => {
    console.log(slug);
    const docDir = path.join(process.cwd(), 'src', 'blogContent');
    const filePath = path.join(docDir, `${slug}.mdx`);
    const source = fs.readFileSync(filePath, 'utf8');
    const { content } = matter(source);
  return (
    <div className='space-y-8'>
      {image && (
        <Image
          src={image}
          width={800}
          height={400}
          alt={title}
          className='hover:scale-105'
        />
      )}
      {content && (
        <div className='mt-5 space-y-6 leading-[1.8] dark:text-neutral-300'>
          <MDXComponent>{content}</MDXComponent>
        </div>
      )}
      
      {/* 评论系统 */}
      <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold mb-6 dark:text-white">评论</h3>
        <GiscusComments {...GISCUS_CONFIG} />
      </div>
    </div>
  );
};

export default BlogDetail;
