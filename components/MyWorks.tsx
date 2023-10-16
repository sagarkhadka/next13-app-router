import React from 'react'

import WorkCard from './WorkCard'
import { workData } from '@data/workData'

const MyWorks = () => {
  return (
    <>
      <section className='container py-20'>
        <h2 className='mb-10 text-3xl font-semibold'>My Works</h2>
        <div className='grid grid-cols-2 gap-20'>
          {workData.map((items, index) => (
            <React.Fragment key={items.id}>
              <div className={`${index % 2 === 0 ? 'mt-0' : 'mt-36'}`}>
                <WorkCard
                  imagePath={items.imgPath}
                  title={items.title}
                  link={items.link}
                  tag={items.tag}
                  pointerTitle={items.cursorTitle}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>
    </>
  )
}

export default MyWorks
