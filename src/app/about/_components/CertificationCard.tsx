import { BsBuildings as CompanyIcon } from 'react-icons/bs';

import Card from '@/common/components/elements/Card';
import Image from '@/common/components/elements/Image';
import { CertificationProps } from '@/common/types/certification';

const EducationCard = ({

  major,
  logo,
  time,
  link,
}: CertificationProps) => {
  return (
    <Card className='flex items-center gap-5 border border-neutral-300 px-6 py-4 dark:border-neutral-900'>
      {logo ? (
        <Image src={logo} width={55} height={55} alt={major} />
      ) : (
        <CompanyIcon size={50} />
      )}

      <div className='space-y-1'>
        <a
          href={link || '#'}
          target='_blank'
          data-umami-event={`Click Education School: ${major}`}
        >
          <h6>{major}</h6>
        </a>
        <div className='space-y-2 text-sm text-neutral-600 dark:text-neutral-400'>
         
          <div className='flex flex-col gap-3 md:flex-row md:text-[13px]'>
            <div className='flex gap-1 text-neutral-500'>
              <span>Expires on {time}</span>
            </div>
           
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EducationCard;
