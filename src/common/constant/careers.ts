import { CareerProps } from '../types/careers';

export const CAREERS: CareerProps[] = [
  {
    position: 'Java Developer Intern',
    company: 'CSLC',
    company_legal_name: 'CHINA SPORTS LOTTERY TECHNOLOGY GROUP',
    logo: '/images/careers/cslcLogo.png',
    location: 'BeiJing, China 🇨🇳',
    location_type: 'onsite',
    type: 'Internship',
    start_date: '2020-10',
    end_date: '2021-1',
    industry: 'Tech',
    link: 'https://www.cslc.com.cn/html/index.html',
    responsibilities: [
      'Gained familiarity with the company’s platform and pipeline, including tools such as Kubernetes, Harbor, Jenkins, Nacos and so on.',
      'Developed a data conversion tool for a vendor’s monitoring software, converting text data collected by scripts and pushing it to an alert platform for front-end display (Java, Spring Boot).',
      'Maintained the backend of a pop-up tool, utilizing Java, Spring Boot, WebSocket, and Mosquitto.'
    ],
  },
  {
    position: 'Software Development Engineer',
    company: 'CSLC',
    company_legal_name: 'CHINA SPORTS LOTTERY TECHNOLOGY GROUP',
    logo: '/images/careers/cslcLogo.png',
    location: 'BeiJing, China 🇨🇳',
    location_type: 'onsite',
    type: 'Full-time',
    start_date: '2021-7',
    end_date: '2025-3',
    industry: 'Tech',
    link: 'https://www.cslc.com.cn/html/index.html',
    responsibilities: [
      'Developed intuitive and responsive front-end interfaces for monitoring tools, enabling operations teams to effectively track data changes and respond to alerts in real time.',
      'Managed the front-end build pipeline, overseeing the development-to-production workflow to ensure efficient and reliable deployment.',
      'On-call responsibilities, including monitoring production environments, analyzing issues, and delegating tasks for swift resolution of incidents.',
    ],
  }
];
