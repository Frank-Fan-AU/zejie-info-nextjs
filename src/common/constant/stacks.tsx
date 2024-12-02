import { BsFillBootstrapFill, BsRobot } from 'react-icons/bs';
import { DiJava } from 'react-icons/di';
import { LiaElementor } from 'react-icons/lia';

import {

  SiGraphql,
  SiJavascript,
  SiJest,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPrisma,
  SiMongoose,
  SiMysql,
  SiMongodb,
  SiReact,
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
  SiWebpack,
  SiAwsamplify,
  SiDocker,
  SiKubernetes,
  SiJenkins,
  SiHarbor,
  SiSpring,
  SiShadcnui,
  SiAmazons3,
  SiApacheecharts,
  SiAwslambda,
  SiVercel
} from 'react-icons/si';

export type stacksProps = {
  [key: string]: JSX.Element;
};

const iconSize = 20;

export const STACKS: stacksProps = {
  JavaScript: <SiJavascript size={iconSize} className='text-yellow-400' />,
  TypeScript: <SiTypescript size={iconSize} className='text-blue-400' />,
  'React.js': <SiReact size={iconSize} className='text-sky-500' />,
  'Vue.js': <SiVuedotjs size={iconSize} className='text-green-500' />,
  'Node.js': <SiNodedotjs size={iconSize} className='text-green-600' />,
  'Next.js': <SiNextdotjs size={iconSize} />,
  Redux: <SiRedux size={iconSize} className='text-purple-500' />,
  Vite: <SiVite size={iconSize} className='text-purple-500' />,
  Webpack: <SiWebpack size={iconSize} className='text-blue-500' />,
  'Styled Components': (<SiStyledcomponents size={iconSize} className='text-pink-500' />),
  Prisma: <SiPrisma size={iconSize} className='text-emerald-500' />,
  Mongoose: <SiMongoose size={iconSize} className='text-[#880000]' />,
  GraphQL: <SiGraphql size={iconSize} className='text-pink-600' />,  
  Nginx: <SiNginx size={iconSize} className='text-green-500' />,
  Jest: <SiJest size={iconSize} className='text-red-600' />,
};

export const BACKEND_STACKS: stacksProps = {
  Java: <DiJava size={iconSize} className='text-red-500' />,
  SpringBoot: <SiSpring size={iconSize} className='text-green-500' />,
  MySQL: <SiMysql size={iconSize} className='text-[#4479A1]' />,
  MongoDB: <SiMongodb size={iconSize} className='text-[#47A248]' />,
  Docker: <SiDocker size={iconSize} className='text-[#2496ED]' />,
  Kubernetes: <SiKubernetes size={iconSize} className='text-[#326CE5]' />,
  Jenkins: <SiJenkins size={iconSize} className='text-[#D24939]' />,
  Harbor: <SiHarbor size={iconSize} className='text-[#60B932]' />,
  AwsAmplify: <SiAwsamplify size={iconSize} className='text-[#FF9900]' />,
  Vercel: <SiVercel size={iconSize} className='text-[#000000]' />,
  Lambada: <SiAwslambda size={iconSize} className='text-[#FF9900]' />,
  'Amazon S3': <SiAmazons3 size={iconSize} className='text-[#569A31]' />,
};

export const UI_STACKS: stacksProps = {
  TailwindCSS: <SiTailwindcss size={iconSize} className='text-cyan-300' />,
  Bootstrap: (
    <BsFillBootstrapFill size={iconSize} className='text-purple-500' />
  ),
  'shadcn/ui': (
    <SiShadcnui size={iconSize} />
  ),
  'Aceternity UI':(<img 
    src="/icons/aceternity.png" 
    alt="aceternity" 
    width={iconSize} 
    height={iconSize}
    style={{ display: 'inline' }}
  />),
  'Ant Design': (
    <img 
    src="/icons/antd.png" 
    alt="antd" 
    width={iconSize} 
    height={iconSize}
    style={{ display: 'inline' }}
  />
  ),
  'Element UI': (
    <LiaElementor size={iconSize} className='text-purple-500' />
  ),
  Echarts: (
    <SiApacheecharts size={iconSize} className='text-[#AA344D]' />
  ),

  'AntV|G6': (
    <img 
      src="/icons/g6.png" 
      alt="AntV" 
      width={iconSize} 
      height={iconSize}
      style={{ display: 'inline' }}
    />
  ),
};
