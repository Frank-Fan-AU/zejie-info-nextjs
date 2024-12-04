import { PROJECT_ITEMS } from "@/common/constant/project";
import Container from "@/common/components/elements/Container";
import PageHeading from "@/common/components/elements/PageHeading";
import BackButton from "@/common/components/elements/BackButton";
import ProjectDetail from "../_components/ProjectDetail";



const ProjectDetailPage = async ({ params }: {params:Promise<{slug:string}>}) => {
    const slug = (await params).slug
    const project = PROJECT_ITEMS.find((item) => item.slug === slug);
    
    if (!project) {
        return <div>Project not found</div>;
    }

    const PAGE_TITLE = project.title;
    const PAGE_DESCRIPTION = project.description;
    
    return(
        <Container data-aos='fade-up'>
            <BackButton url='/projects' />
            <PageHeading title={PAGE_TITLE} description={PAGE_DESCRIPTION} />
            <ProjectDetail {...project} />
        </Container>
    )
};

export default ProjectDetailPage;