'use client'
import Link from 'next/link';
import { BsGithub as GithubIcon } from 'react-icons/bs';


import SectionHeading from '@/common/components/elements/SectionHeading';
import SectionSubHeading from '@/common/components/elements/SectionSubHeading';

import Calendar from './Calendar';
import Overview from './Overview';
import { useEffect, useState } from 'react';
import { fetchGithubData, getGithubUser } from '@/common/libs/github/github';
import { GITHUB_ACCOUNTS } from '@/common/constant/github';

type ContributionsProps = {
  username: string;
  type: string;
  endpoint: string;
};

type GitHubData = {
  contributionsCollection: {
    contributionCalendar: any; // 可以根据实际数据结构定义更具体的类型
  };
};

const Contributions = ({ username, endpoint }: ContributionsProps) => {

  const [data, setData] = useState<GitHubData | undefined>();
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
     let {data} = await getGithubUser('personal')
      setData(data);
    } catch (err) {
      setError((err as Error).message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const contributionCalendar =
    data?.contributionsCollection?.contributionCalendar;

  return (
    <section className='flex flex-col gap-y-2'>
      <SectionHeading
        title='Contributions'
        icon={<GithubIcon className='mr-1' />}
      />
      <SectionSubHeading>
        <p className='dark:text-neutral-400'>
          My contributions from last year on github.
        </p>
        <Link
          href={`https://github.com/${username}`}
          target='_blank'
          passHref
          className='font-code text-sm text-neutral-400 hover:text-neutral-700 dark:text-neutral-600 hover:dark:text-neutral-400'
        >
          @{username}
        </Link>
      </SectionSubHeading>

      {!data && <div className='dark:text-neutral-400'>No Data</div>}

      {data && (
        <div className='space-y-3'>
          <Overview data={contributionCalendar} />
          <Calendar data={contributionCalendar} />
        </div>
      )}
    </section>
  );
};

export default Contributions;
