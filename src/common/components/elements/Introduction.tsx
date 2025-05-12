const Introduction = () => {
    return (
      <section className='bg-cover bg-no-repeat '>
        <div className='space-y-3'>
          <div className='flex gap-2  text-2xl font-medium lg:text-3xl'>
            <h1>Hi, I&apos;m Frank</h1>{' '}
            <div className='ml-1 animate-waving-hand'>👋</div>
          </div>
          <div className='space-y-4'>
            <ul className='ml-5 flex list-disc flex-col gap-1 text-neutral-700 dark:text-neutral-400 lg:flex-row lg:gap-10'>
              <li>
                Based in Adelaide, Australia <span className='ml-1'>🇦🇺</span>
              </li>
              <li>Seeking new job opportunities</li>
            </ul>
          </div>
        </div>
  
        <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
          Fullstack Software Engineer especially in Frontend side, with a passion for 
          working on interesting projects and exploring new technologies. I work with TypeScript and
          specialize in all-things web. I thrive on collaborating with teams to
          deliver efficient, scalable, and visually appealing web applications.
          
        </p>
        <p className='mt-6 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>Work Rights: Australian temporary visa with no restrictions (e.g., doctoral student visa).</p>
        {/* <p className='mt-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'>
        I am currently learning Web3 technologies and aspire to pursue a career in Web3 development. If you have entry-level Web3 development opportunities, feel free to reach out to me.
        </p> */}
      </section>
    );
  };
  
  export default Introduction;
  