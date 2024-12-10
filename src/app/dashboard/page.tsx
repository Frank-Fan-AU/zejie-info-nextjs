import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from './_components/Dashboard';
import Breakline from '@/common/components/elements/Breakline';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard,Fetching data from Github API by GraphQL.';

const DashboardPage = () => {
  return (
    <Container data-aos='fade-up'>
    <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
    <Dashboard />
    <Breakline className='mb-8 mt-10' />
    <p className='dark:text-neutral-400'>I have many other contributions beyond what is shown in the dashboard; however, some are in the company’s private GitLab repository, and others are private projects with code that cannot be made public.</p>
  </Container>
  );
};

export default DashboardPage;
