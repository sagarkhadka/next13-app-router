// import React, { useEffect, useRef } from 'react'
// import Image from 'next/image'
// import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
//
// gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  return (
    <>
      <section className='container py-20'>
        <h2 className='mb-6 text-3xl font-semibold text-light-gray'>About Me</h2>
        <p className='font-manrope text-5xl font-semibold leading-snug text-dark md:text-6xl'>
          As a former UI designer who turned frontend developer, I possess a unique blend of skills
          that allows me to create clean and visually appealing UI designs and seamlessly translate
          them into code. With my experties in React.js and Next.js, I build high-performance and
          engaging web applications that deliver exceptional user experiences.
        </p>
        {/* <div className='font-manrope text-6xl font-semibold leading-snug text-dark'>
          <p>As a former UI designer who turned frontend</p>
          <p>developer, I possess a unique blend of skills that</p>
          <p>allows me to create clean and visually appealing UI</p>
          <p>designs and seamlessly translate them into code.</p>
          <p>With my experties in React.js and Next.js, I build</p>
          <p>high-performance and engaging web applications</p>
          <p>that deliver exceptional user experiences.</p>
        </div> */}
        {/* <div className='flex gap-36'>
          <div className='relative max-w-[550px] flex-grow'>
            <Image
              src='https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
              alt=''
              fill
              className='rounded-3xl object-cover shadow-xl'
            />
          </div>
          <div className='max-w-[550px] flex-grow space-y-4 py-24'>
            <h2 className='mb-2 text-3xl font-semibold'>About Me</h2>
            <p>
              As a former UI designer who turned frontend developer, I possess a unique blend of
              skills that allows me to create clean and visually appealing UI designs and seamlessly
              translate them into code. With my experties in Next.js, I build high-performance and
              engaging web applications that deliver exceptional user experiences.
            </p>
          </div>
        </div> */}
      </section>
    </>
  )
}

export default AboutMe
