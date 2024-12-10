import { Entry } from 'contentful';

export type AuthorProps = {
  name: string;
  picture: any;
};

export type BlogItemProps = {
  title: string;
  slug: string;
  date: string;
  author: AuthorProps;
  excerpt: string;
  tagsList: string[];
  coverImage: any;
  content: any;
};


export type BlogProps = {
  blogs: BlogItemProps[];
};

export type BlogFeaturedProps = {
  data: BlogItemProps[];
};

export const mapContentfulToBlogItem = (entry: Entry<any>): BlogItemProps => {
  const { fields } = entry;
  
  const picture = (fields.author as any)?.fields?.picture;
  const pictureUrl = picture?.fields?.file?.url;
  
  return {
    title: fields.title as string,
    slug: fields.slug as string,
    date: fields.date as string,
    author: {
      name: (fields.author as any)?.fields?.name || '',
      picture: {
        fields: {
          file: {
            url: pictureUrl ? `https:${pictureUrl}` : null
          }
        }
      }
    },
    excerpt: fields.excerpt as string,
    tagsList: (fields.tagsList as string[]) || [],
    coverImage: fields.coverImage,
    content: fields.content,
  };
};