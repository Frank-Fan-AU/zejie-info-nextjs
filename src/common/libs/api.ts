const BLOG_GRAPHQL_FIELDS = `
  slug
  title
  coverImage {
    url
  }
  date
  author {
    name
    picture {
      url
    }
  }
  excerpt
  content {
    json
  }
`;
async function fetchGraphQL(query: string, preview = false): Promise<any> {
    return fetch(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${
            preview
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
          }`,
        },
        body: JSON.stringify({ query }),
      }
    ).then((response) => response.json());
  }

  function extractPostEntries(fetchResponse: any): any[] {
    return fetchResponse?.data?.postCollection?.items;
  }
  
  export async function getAllPosts(isDraftMode: boolean): Promise<any[]> {
    const entries = await fetchGraphQL(
      `query {
        blogCollection(where: { slug_exists: true }, order: date_DESC, preview: ${
          isDraftMode ? "true" : "false"
        }) {
          items {
            ${BLOG_GRAPHQL_FIELDS}
          }
        }
      }`,
      isDraftMode,
    );
    console.log('entries',entries);
    return extractPostEntries(entries);
  }
