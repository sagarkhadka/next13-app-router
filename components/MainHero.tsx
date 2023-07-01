import Image from 'next/image'
import React from 'react'

const MainHero = () => {
  return (
    <>
      <section className='relative isolate overflow-hidden'>
        <div className='container flex items-center min-h-screen h-full'>
          <div className='space-y-8'>
            <div className='sm:max-w-[100ch]'>
              <h1 className='text-dark font-semibold text-6xl font-manrope leading-tight'>
                A frontend developer passionate about creating beautiful user friendly UI
              </h1>
            </div>
            <div className='sm:max-w-[75ch]'>
              <p className='text-xl text-light-gray'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus accusantium
                illo, doloribus, voluptatibus quod dolorum maiores vitae rerum, provident optio
                accusamus! Doloribus vel quia, impedit deserunt repellendus ea molestias similique.
              </p>
            </div>
          </div>
        </div>
        <div className='absolute'>
          <Image
            src='/assets/images/layer-blur.svg'
            alt=''
            height={200}
            width={200}
            className='object-contain'
          />
        </div>
        {/* <div className='absolute bg-[#ef778f] aspect-square h-56 rounded-full blur-3xl -z-10 top-[150px] right-[500px]' />
        <div className='absolute bg-[#aebfda] aspect-square h-72 rounded-full blur-3xl -z-10 top-[170px] right-[200px]' />
        <div className='absolute bg-[#b5b0e6] aspect-square h-96 rounded-full blur-3xl -z-20 top-[300px] right-[400px]' />
        <div className='absolute bg-[#f8c4ad] aspect-square h-80 rounded-full blur-3xl -z-20 top-[320px] right-[200px]' />
        <div className='absolute '></div> */}
      </section>
    </>
  )
}

export default MainHero
