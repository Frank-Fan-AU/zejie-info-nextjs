
import { FaUnsplash } from "react-icons/fa";
import { LibraryProps } from "../types/library";
import Image from "next/image";
import { SiApacheecharts, SiShadcnui } from "react-icons/si";
const iconSize = 40;

export const Design_LIBRARY: LibraryProps[] = [
    {
        title: 'Iconscout',
        description: 'Get Logo here',
        link: 'https://iconscout.com/',
        image: <Image
        src="/icons/iconscout.png" 
        alt="iconscout" 
        width={iconSize} 
        height={iconSize}
        style={{ display: 'inline' }}
      />
    },
    
    {
        title: 'Unsplash',
        description: 'Get pictures here',
        link: 'https://unsplash.com/',
        image:  <FaUnsplash size={iconSize} className=' dark:text-white'/>
    },
    {
        title: 'React Icons',
        description: 'Get icons here',
        link: 'https://react-icons.github.io/react-icons/',
        image:  <Image
        src="/icons/reactIcons.png" 
        alt="react-icons" 
        width={iconSize} 
        height={iconSize}
        style={{ display: 'inline' }}
      />
    }
];

export const UI_LIBRARY: LibraryProps[] = [
    {
        title: 'Ant Design',
        description: 'Basic components',
        link: 'https://ant-design.antgroup.com/components/overview-cn/',
        image: <Image
        src="/icons/antd.png" 
        alt="antd" 
        width={iconSize} 
        height={iconSize}
        style={{ display: 'inline' }}
      />
    },
    {
        title: 'Element UI',
        description: 'Basic components',
        link: 'https://element.eleme.cn/#/zh-CN/component/installation',
        image: <Image
        src="/icons/ElementUI.png" 
        alt="ElementUI" 
        width={iconSize} 
        height={iconSize}
        style={{ display: 'inline' }}
      />
    },
    {
        title: 'Shadcn/UI',
        description: 'Basic components',
        link: 'https://ui.shadcn.com/docs/components/button',
        image: <SiShadcnui size={iconSize} />
    },
    {
        title: 'Echarts',
        description: 'Charts components',
        link: 'https://echarts.apache.org/examples/zh/',
        image: <SiApacheecharts size={iconSize} />
    },
];