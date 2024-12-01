'use client'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import {Switch} from "@nextui-org/react";
import { LuMoon,LuSun  } from "react-icons/lu";
const ThemeSwitch = () => {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const toggleTheme = () =>
        setTheme(resolvedTheme === 'light' ? 'dark' : 'light');

    useEffect(() => setMounted(true), []);

  if (!mounted) return null;
  return (
    <div className='flex justify-start items-center ml-2'>
      
      <Switch
      defaultSelected
      size='sm'
      color="success"
      startContent={<LuSun />}
      endContent={<LuMoon />}
      onChange={toggleTheme}
    >
      switch mode
    </Switch>
    </div>
  )
};

export default ThemeSwitch;
