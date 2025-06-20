'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Giscus from '@giscus/react';

interface GiscusProps {
  repo: `${string}/${string}`;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  strict: string;
  reactionsEnabled: string;
  emitMetadata: string;
  inputPosition: string;
  theme: string;
  lang: string;
}

const GiscusComments = ({
  repo,
  repoId,
  category,
  categoryId,
  mapping,
  strict,
  reactionsEnabled,
  emitMetadata,
  inputPosition,
  theme,
  lang,
}: GiscusProps) => {
  const giscusRef = useRef<HTMLDivElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // 当主题改变时重新加载 giscus
    const observer = new MutationObserver(() => {
      if (giscusRef.current) {
        const iframe = giscusRef.current.querySelector('iframe');
        if (iframe) {
          iframe.src = iframe.src;
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // 根据当前主题设置 giscus 主题
  const giscusTheme = resolvedTheme === 'dark' ? 'dark' : 'light';

  return (
    <div ref={giscusRef} className="mt-8">
      <Giscus
        repo={repo}
        repoId={repoId}
        category={category}
        categoryId={categoryId}
        mapping={mapping as any}
        strict={strict as any}
        reactionsEnabled={reactionsEnabled as any}
        emitMetadata={emitMetadata as any}
        inputPosition={inputPosition as any}
        theme={giscusTheme}
        lang={lang}
      />
    </div>
  );
};

export default GiscusComments; 