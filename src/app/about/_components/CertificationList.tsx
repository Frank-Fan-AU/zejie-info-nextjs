import { CERTIFICATION } from '@/common/constant/certification';

import CertificationCard from './CertificationCard';



const CertificationList = () => {
  return (
    <section className='space-y-6'>
      <div className='grid gap-4 md:grid-cols-1'>
        {CERTIFICATION?.map((item, index) => (
          <CertificationCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default CertificationList;
