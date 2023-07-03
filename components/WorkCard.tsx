import React from 'react'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'

const WorkCard = () => {
  return (
    <>
      <div
        data-cursor-text='ATEC'
        className='group cursor-pointer space-y-10'>
        <div className='relative h-[30rem] w-full'>
          <Image
            src='/assets/images/works/atec.webp'
            alt=''
            fill
            className='object-cover'
          />
        </div>
        <div className='flex items-center justify-between'>
          <h2 className='text-2xl font-medium'>ATEC</h2>
          <div className='relative rotate-45 duration-200 group-hover:rotate-0'>
            <MoveUpRight size={32} />
          </div>
        </div>
      </div>
    </>
  )
}

export default WorkCard
