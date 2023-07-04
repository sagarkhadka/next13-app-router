import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <>
      <section className='container py-20'>
        <div className='flex gap-36'>
          <div className='relative max-w-[550px] flex-grow'>
            <Image
              src='https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
              alt=''
              fill
              className='rounded-3xl object-cover shadow-xl'
            />
          </div>
          <div className='max-w-[550px] flex-grow space-y-8 py-24'>
            <h2 className='mb-10 text-3xl font-semibold'>About Me</h2>
            <p>
              As a former UI designer who turned frontend developer, I possess a unique blend of
              skills that allows me to create clean and visually appealing UI designs and seamlessly
              translate them into code. With my experties in Next.js, I build high-performance and
              engaging web applications that deliver exceptional user experiences.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutMe
