const Story = () => {
  return (
    <div className='space-y-8'>
      <section
        className='space-y-4 leading-[1.8] text-neutral-800 dark:text-neutral-300 md:leading-loose'
      >

        <p>
          Hello! Thanks for stopping by my personal website.
        </p>
        <p>
          I'm Frank. I've been working in web development for over 4 years, doing both the frontend and the backend. But what really gets me excited is making websites and apps that are easy for everyone to use and look good too!
        </p>
        <p>
          I'm really into JavaScript and TypeScript, which are languages used to build websites. I also know a bunch of frameworks that make building websites even easier, like React, Vue, Node.js, and Java frameworks like SpringBoot. I love learning about new web tools and features.
        </p>
        <p>
        In my career, I’ve developed numerous frontend interfaces for monitoring tools, creating intuitive, responsive, and real-time dashboards. These interfaces empower operations teams to effectively track data changes and respond promptly to alerts, ensuring smoother system management and improved operational efficiency.
        </p>
        <p>
          I believe that good communication is super important in any job.
        </p>
        <p>
          I'm good at adapting to different situations, working efficiently, and always trying to do my best. My experience has taught me how to solve problems and drive projects forward effectively, I'm also happy to work with others to get things done. I'm excited about the chance to work together and make cool stuff!
        </p>
        <p>
          I'm looking forward to the possibility of working with you!
        </p>
      </section>

      <div className='space-y-4 flex flex-col'>
        <span>Best Regards,</span>
        <span>Frank Fan</span>
        {/* <Image
          src='/images/signature.png'
          width={150}
          height={150}
          alt='Aulianza'
        /> */}
      </div>
    </div>
  );
};

export default Story;
