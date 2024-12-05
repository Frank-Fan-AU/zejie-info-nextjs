import client from '@/common/libs/contentful/client';
import { mapContentfulToBlogItem } from '../types/blog';
import { BlogItemProps } from '../types/blog';

export const getBlogItems = async (): Promise<BlogItemProps[]> => {
  const { items } = await client.getEntries({ content_type: 'blog' });

  return items.map(mapContentfulToBlogItem);
};