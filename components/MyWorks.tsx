import React from 'react'

import WorkCard from './WorkCard'

const MyWorks = () => {
  return (
    <>
      <section className='container'>
        <h2 className='mb-10 text-3xl font-semibold'>My Works</h2>
        <div className='grid grid-cols-2 gap-20'>
          <WorkCard />
          <WorkCard />
          <WorkCard />
          <WorkCard />
        </div>
      </section>
    </>
  )
}

export default MyWorks
