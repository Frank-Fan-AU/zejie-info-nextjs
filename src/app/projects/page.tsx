import { PROJECT_ITEMS } from '@/common/constant/project';
import Projects from './_components/Projects';
import PageHeading from '@/common/components/elements/PageHeading';
import Container from '@/common/components/elements/Container';

const PAGE_TITLE = 'Projects';
const PAGE_DESCRIPTION =
  'Several projects that I have worked on, both private and open source.';

const Project = () => {
  const projects = PROJECT_ITEMS;

  return (
    <>
      <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Projects projects={projects} />
      </Container>
    </>
  );
};

export default Project;
