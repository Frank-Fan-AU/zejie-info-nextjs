import { ProjectItemProps } from '@/common/types/projects';

export const PROJECT_ITEMS: ProjectItemProps[] = [
  {
    title: "visa-dashboard",
    slug: "visa-dashboard",
    description: "Tracking visa progress and sharing visa-related information, offering insights, guides, and community support.",
    image: "/images/projectImages/visa-dashoard.png",
    link_demo: "https://visadashboard.top",
    link_github: "https://github.com/FanZejie/visa-dashboard",
    stacks: "Next.js,TypeScript,TailwindCSS,MongoDB,AwsAmplify,Amazon S3",
    is_show: true,
    is_featured: true,
    updated_at: new Date("2024-03-15")
  },
  {
    title: "monitor-mobile",
    slug: "monitor-mobile",
    description: "A responsive monitoring tool that adapts to both mobile and desktop platforms, supporting various types of monitoring metric displays.",
    image: "/images/projectImages/monitor-mobile-web-preview.png",
    link_demo: "https://master.d198b3fe2208q6.amplifyapp.com",
    link_github: "https://github.com/FanZejie/mobile-web-vue2",
    stacks: "Vue.js,TailwindCSS,Ant Design,Element UI,AntV|G6",
    is_show: true,
    is_featured: false,
    updated_at: new Date("2024-03-15")
  },
];

