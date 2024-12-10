'use client';
import { getAllPosts } from '@/common/libs/api';
import BlogCardNew from './BlogCardNew';
import { motion } from 'framer-motion';
import { BlogItemProps } from '@/common/types/blog';
import { useEffect, useState } from 'react';


const Blog = () => {
  // 从 Contentful 获取博客文章
 const [blogData, setBlogData] = useState<BlogItemProps[]>([]);
 const fetchBlogData = async () => {
  const blogData = await getAllPosts(false);
  console.log(blogData);
  setBlogData(blogData);
 }
useEffect(() => {
  fetchBlogData();
}, []);
  return (
    <>

     <div className='space-y-10'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2'>

          {blogData.map((item: BlogItemProps, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <BlogCardNew {...item} />
                </motion.div>
              ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
