import Image from 'next/image'
import React from 'react'

const MainHero = () => {
  return (
    <>
      <section className='relative isolate overflow-hidden'>
        <div className='container flex h-full min-h-screen items-center'>
          <div className='space-y-8'>
            <div className='sm:max-w-[75ch]'>
              <h1 className='font-manrope text-6xl font-semibold leading-tight text-dark'>
                A frontend developer passionate about creating beautiful user friendly UI
              </h1>
            </div>
            <div className='sm:max-w-[60ch]'>
              <p className='text-xl text-light-gray'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                illo, doloribus, voluptatibus quod dolorum maiores vitae rerum, provident optio
                accusamus! Doloribus vel quia, impedit deserunt repellendus ea molestias similique.
              </p>
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
