'use client';

import { useState } from 'react';
import { ProjectItemProps } from '@/common/types/projects';
import InfiniteScroll from 'react-infinite-scroll-component';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
interface ProjectsProps {
  projects: ProjectItemProps[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const loadMore = () => setVisibleProjects((prev) => prev + 2);
  const hasMore = visibleProjects < projects.length;

  return (
    <InfiniteScroll
      dataLength={visibleProjects}
      next={loadMore}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      style={{ overflow: 'hidden' }}
    >
      <div className='grid gap-5 px-1 pt-2 sm:grid-cols-2'>
        {projects.slice(0, visibleProjects).map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Projects;
