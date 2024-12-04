'use client';

import styled from '@emotion/styled';
import { memo, ReactNode, useEffect, useState } from 'react';

import InfiniteLoopSlider from '@/common/components/elements/InfiniteLoopSlider';
import { STACKS, BACKEND_STACKS, UI_STACKS } from '@/common/constant/stacks';

const Tag = memo(({ icon, title }: { icon: ReactNode; title: string }) => (
  <div className='mr-3 flex w-max items-center gap-2 rounded-full border border-neutral-300 bg-neutral-50 px-5 py-2 text-[15px] shadow-sm dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-50'>
    {icon}
    <span>{title}</span>
  </div>
));
Tag.displayName = 'Tag';

const Skills = () => {
  const [stacksArray, setStacksArray] = useState<Array<[string, ReactNode]>>([]);
  const [backendStacksArray, setBackendStacksArray] = useState<Array<[string, ReactNode]>>([]);
  const [uiStacksArray, setUiStacksArray] = useState<Array<[string, ReactNode]>>([]);

  useEffect(() => {
    setStacksArray(Object.entries(STACKS));
    setBackendStacksArray(Object.entries(BACKEND_STACKS));
    setUiStacksArray(Object.entries(UI_STACKS));
  }, []);

  return (
    <div className='space-y-8'>
      <div className='flex w-full'>
        <div className='relative flex w-full flex-col justify-start gap-y-4 overflow-hidden py-2'>
          <InfiniteLoopSlider>
            {stacksArray.map(([title, icon], index) => (
              <Tag key={index} icon={icon} title={title} />
            ))}
          </InfiniteLoopSlider>
          
          <InfiniteLoopSlider isReverse={true}>
            {backendStacksArray.map(([title, icon], index) => (
              <Tag key={index} icon={icon} title={title} />
            ))}
          </InfiniteLoopSlider>
          
          <InfiniteLoopSlider>
            {uiStacksArray.map(([title, icon], index) => (
              <Tag key={index} icon={icon} title={title} />
            ))}
          </InfiniteLoopSlider>
          
          <StyledFade className='fade hidden dark:flex' />
        </div>
      </div>
    </div>
  );
};

export default Skills;

const StyledFade = styled.div`
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #121212,
    transparent 20%,
    transparent 80%,
    #121212
  );
  position: absolute;
  inset: 0;
`;
