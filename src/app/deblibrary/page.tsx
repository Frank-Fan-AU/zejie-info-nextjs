import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import LibraryList from "./_components/LibraryList";

const PAGE_TITLE = 'DevLibrary';
const PAGE_DESCRIPTION =
  'here are some things that I like to use in my projects';

const DevLibrary = () => {
    return (
        <>
        <Container className='xl:!-mt-5' data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <LibraryList/>
        </Container>
      </>
    )
}

export default DevLibrary;