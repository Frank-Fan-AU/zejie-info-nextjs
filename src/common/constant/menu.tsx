import { MenuItemProps } from '../types/menu';
import { BiRocket as ContactIcon } from 'react-icons/bi';

import {
  BsEnvelopeAtFill as EmailIcon,
  BsGithub as GithubIcon,
  BsLinkedin as LinkedinIcon,
} from 'react-icons/bs';

import {
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { TbTools } from "react-icons/tb";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
    {
      title: 'Home',
      href: '/',
      icon: <HomeIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Home',
      type: 'Pages',
    },
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <DashboardIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Dashboard',
      type: 'Pages',
    },
    {
      title: 'Projects',
      href: '/projects',
      icon: <ProjectIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Projects',
      type: 'Pages',
    },
    {
      title: 'Blog',
      href: '/blog',
      icon: <BlogIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Blog',
      type: 'Pages',
    },
    // {
    //   title: 'Learn',
    //   href: '/learn',
    //   icon: <LearnIcon size={iconSize} />,
    //   isShow: true,
    //   isExternal: false,
    //   eventName: 'Pages: Learn',
    //   type: 'Pages',
    // },
    {
      title: 'About',
      href: '/about',
      icon: <ProfileIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: About',
      type: 'Pages',
    },
    {
      title: 'Contact',
      href: '/contact',
      icon: <ContactIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Contact',
      type: 'Pages',
    }
    // {
    //   title: 'Guestbook',
    //   href: '/guestbook',
    //   icon: <ChatIcon size={iconSize} />,
    //   isShow: true,
    //   isExternal: false,
    //   eventName: 'Pages: Chat',
    //   type: 'Pages',
    // },
  ];

export const MENU_APPS: MenuItemProps[] = [
    // {
    //   title: 'JS Playground',
    //   href: '/playground',
    //   icon: <SiJavascript size={iconSize} />,
    //   isShow: true,
    //   isExternal: false,
    //   eventName: 'Pages: Playground',
    //   type: 'Pages',
    // },
    {
      title: 'DevLibrary',
      href: '/deblibrary',
      icon: <TbTools size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: DevLibrary',
      type: 'Pages',
    },
  ];

  export const SOCIAL_MEDIA: MenuItemProps[] = [
    {
      title: 'Email',
      href: 'mailto:fanzejiea@gmail.com',
      icon: <EmailIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Contact: Email',
      className: '!bg-green-600 border border dark:border-neutral-700',
      type: 'Link',
    },
  
    {
      title: 'Linkedin',
      href: 'https://www.linkedin.com/in/frankfanau/',
      icon: <LinkedinIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Linkedin',
      className: '!bg-blue-500 border border dark:border-neutral-700',
      type: 'Link',
    },

    {
      title: 'Github',
      href: 'https://github.com/Frank-Fan-AU',
      icon: <GithubIcon size={iconSize} />,
      isShow: true,
      isExternal: true,
      eventName: 'Social: Github',
      className: '!bg-black border border dark:border-neutral-700',
      type: 'Link',
    },
  ];