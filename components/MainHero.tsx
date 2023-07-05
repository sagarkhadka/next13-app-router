import Image from 'next/image'
import React from 'react'

const MainHero = () => {
  return (
    <>
      <section className='relative isolate overflow-hidden'>
        <div className='container pt-24'>
          <div className='flex min-h-screen flex-col items-center gap-16 md:h-full md:flex-row'>
            <div className='space-y-8'>
              <div className='sm:max-w-[75ch]'>
                <h1 className='font-manrope text-6xl font-semibold leading-tight text-dark'>
                  A frontend developer passionate about creating beautiful user friendly UI
                </h1>
              </div>
              <div className='sm:max-w-[60ch]'>
                <p className='text-xl text-light-gray'>
                  Hi, I'm Sagar Khadka, a passionate Front-End React Developer based in Nepal. With
                  my knowledge of UI design and frontend development I can create good looking,
                  responsive and user friendly sites.
                </p>
              </div>
            </div>
            <div className='flex w-full justify-center md:flex-grow md:items-center'>
              <div className='w-full space-y-6'>
                <h5>My Tech Stack</h5>
                <div className='grid grid-cols-3 place-items-center gap-10'>
                  <div
                    data-cursor-text='React Js'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/react.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Next Js'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/next-js.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Tailwind CSS'
                    className='relative aspect-video h-10 cursor-pointer'>
                    <Image
                      src='/assets/images/tailwindcss.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='GSAP'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/gsap-greensock.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Redux Toolkit'
                    className='relative aspect-video h-12 cursor-pointer'>
                    <Image
                      src='/assets/images/redux.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='SASS/ SCSS'
                    className='relative aspect-video h-12 cursor-pointer'>
                    <Image
                      src='/assets/images/sass.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='absolute right-0 top-10 -z-10'>
          <Image
            src='/assets/images/layer-blur.svg'
            alt=''
            height={550}
            width={550}
            className='object-contain'
          />
        </div>
        {/* <div className='absolute right-[500px] top-[150px] -z-10 aspect-square h-56 rounded-full bg-[#ef778f] blur-3xl' />
        <div className='absolute right-[200px] top-[170px] -z-10 aspect-square h-72 rounded-full bg-[#aebfda] blur-3xl' />
        <div className='absolute right-[400px] top-[300px] -z-20 aspect-square h-96 rounded-full bg-[#b5b0e6] blur-3xl' />
        <div className='absolute right-[200px] top-[320px] -z-20 aspect-square h-80 rounded-full bg-[#f8c4ad] blur-3xl' />
        <div className='absolute '></div> */}
      </section>
    </>
  )
}

export default MainHero
