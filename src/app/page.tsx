import Breakline from '@/common/components/elements/Breakline';
import Container from '@/common/components/elements/Container';
import Introduction from '@/common/components/elements/Introduction';
import SkillsSection from './about/_components/SkillsSection';


export default function Home() {
  return (
    <>

    <Container data-aos='fade-up'>
      <Introduction/>
      <Breakline className='mb-7 mt-8' />
      <SkillsSection />
    </Container>
  </>
  );
}
