
'use client';

import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { PROJECT_ITEMS } from '@/common/constant/project';

import Projects from './_compontents/Projects';
import PageHeading from '@/common/components/elements/PageHeading';
import Container from '@/common/components/elements/Container';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const Project = () => {
  
  const projects = PROJECT_ITEMS;

  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;



  return (
    <>
      <NextSeo title={`${PAGE_TITLE} - Zejie Fan`}  description={PAGE_DESCRIPTION} />
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects
          projects={projects.slice(0, visibleProjects)}
          loadMore={loadMore}
          hasMore={hasMore}
        />
      </Container>
    </>
  );
};

export default Project;
