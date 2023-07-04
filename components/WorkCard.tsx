import React from 'react'
import Image from 'next/image'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'

interface cardProps {
  imagePath: string
  title: string
  link: string
  tag: string
}

const WorkCard = ({ imagePath, title, link, tag }: cardProps) => {
  return (
    <>
      <Link
        href={`${link}`}
        target='_blank'>
        <div
          data-cursor-text={title}
          className='group cursor-pointer space-y-10'>
          <div className='relative isolate h-[30rem] w-full overflow-hidden rounded-3xl p-4 shadow-xl'>
            <Image
              src={imagePath}
              alt=''
              fill
              className='-z-10 scale-105 object-cover duration-200 group-hover:scale-100'
            />
            <div className='z-10 w-fit rounded-full bg-white px-4 py-2 shadow-xl'>
              <p className='text-sm font-semibold'>{tag}</p>
            </div>
          </div>
          <div className='relative flex items-center justify-between'>
            <h2 className='text-2xl font-medium'>{title}</h2>
            <div className='absolute right-0 rotate-45 duration-200 group-hover:rotate-0'>
              <MoveUpRight size={32} />
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default WorkCard
