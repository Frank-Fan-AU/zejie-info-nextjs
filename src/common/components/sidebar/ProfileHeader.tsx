import clsx from 'clsx';
import Link from 'next/link';

import Image from '../elements/Image';

interface ProfileHeaderProps {
  expandMenu: boolean;
  imageSize: number;
  isScrolled?: boolean;
}

const ProfileHeader = ({ expandMenu, imageSize }: ProfileHeaderProps) => {
  return (
    <div
      className={clsx(
        'flex w-full flex-grow items-center gap-4 lg:flex-col lg:items-start lg:gap-0.5 lg:px-2',
        expandMenu && 'flex-col !items-start',
      )}
    >
      <Image
        src='/images/avator.png'
        alt='Zejie Fan'
        width={expandMenu ? 80 : imageSize}
        height={expandMenu ? 80 : imageSize}
        rounded='rounded-full'
        className='rotate-3 dark:border-neutral-600 lg:hover:scale-105'
      />
      <>
      <div className='flex gap-2 items-center mt-1 lg:mt-4'>
        <Link href='/' passHref>
          <h2 className='flex-grow text-lg lg:text-xl font-sora font-medium'>
            ZeJie
          </h2>
        </Link>
          <img src="/images/awsDev.png" alt="aws Certified" width={18} height={18} />
    
      </div>
      <div className='hidden lg:flex text-xs font-sora text-neutral-600 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-400 transition-all duration-300'>
      AWS Certified Developer – Associate
      </div>
      </>
    </div>
  );
};

export default ProfileHeader;
