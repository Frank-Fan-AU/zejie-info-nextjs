import Container from '@/common/components/elements/Container';
import PageHeading from '@/common/components/elements/PageHeading';
import Dashboard from './_components/Dashboard';
import Breakline from '@/common/components/elements/Breakline';

const PAGE_TITLE = 'Dashboard';
const PAGE_DESCRIPTION =
  'This is my personal dashboard, Fetching data from Github API by GraphQL.';

const DashboardPage = () => {
  return (
    <Container data-aos='fade-up'>
    <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
    <Dashboard />
    <Breakline className='mb-8 mt-10' />
    <p className='dark:text-neutral-400'>I move to Australia in March 2025, I was very busy in those days, so you can see it's blank in March. 😂</p>
  </Container>
  );
};

export default DashboardPage;
