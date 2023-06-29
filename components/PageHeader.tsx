import React from 'react'
import { Button } from './ui/button'

const PageHeader = () => {
  return (
    <>
      <nav className='py-5 absolute z-50 mx-auto w-full'>
        <div className='flex justify-between container'>
          <h3 className='text-2xl font-semibold tracking-tight'>Sagar</h3>
          <ul className='flex items-center gap-16 font-semibold'>
            <li className='cursor-pointer hover:text-dark hover:underline'>Dribbble</li>
            <li className='cursor-pointer hover:text-dark hover:underline'>LinkedIn</li>
            <li>
              <Button variant='default'>Contact</Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default PageHeader
