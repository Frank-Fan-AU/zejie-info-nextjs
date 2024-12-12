import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import Contact from "./_components/Contact";


const PAGE_TITLE = 'Contact';
const PAGE_DESCRIPTION =
  "Feel free to get in touch and let's have a discussion about how we can work together.";


const ContactPage = () => {
  return(
    <Container data-aos='fade-up'>
        <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
        <Contact />
      </Container>
  )
};

export default ContactPage;
