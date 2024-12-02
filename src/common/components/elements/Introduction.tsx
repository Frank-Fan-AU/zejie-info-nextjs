const Introduction = () => {
    return (
      <section className='bg-cover bg-no-repeat '>
        <div className='space-y-3'>
          <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
            <h1>Hi, I&apos;m ZeJie</h1>{' '}
            <div className='ml-1 animate-waving-hand'>👋</div>
          </div>
          <div className='space-y-4'>
            <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
              <li>
                Based in China, BeiJing <span className='ml-1'>🇨🇳</span>
              </li>
              <li>Working onsite</li>
            </ul>
          </div>
        </div>
  
        <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          Fullstack Software Engineer especially in Frontend side, with a passion for 
          working on interesting projects and exploring new technologies. I work with TypeScript and
          specialize in all-things web. I thrive on collaborating with teams to
          deliver efficient, scalable, and visually appealing web applications.
        </p>
      </section>
    );
  };
  
  export default Introduction;
  