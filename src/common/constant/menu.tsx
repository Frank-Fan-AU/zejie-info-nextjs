import { MenuItemProps } from '../types/menu';
import { BiRocket as ContactIcon } from 'react-icons/bi';

import {
  FiBookOpen as LearnIcon,
  FiCoffee as ProjectIcon,
  FiCpu as DashboardIcon,
  FiPocket as HomeIcon,
  FiRss as BlogIcon,
  FiUser as ProfileIcon,
} from 'react-icons/fi';
import { PiChatCircleDotsBold as ChatIcon } from 'react-icons/pi';
import { SiJavascript } from 'react-icons/si';

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
    {
      title: 'Learn',
      href: '/learn',
      icon: <LearnIcon size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Learn',
      type: 'Pages',
    },
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
    {
      title: 'JS Playground',
      href: '/playground',
      icon: <SiJavascript size={iconSize} />,
      isShow: true,
      isExternal: false,
      eventName: 'Pages: Playground',
      type: 'Pages',
    },
  ];