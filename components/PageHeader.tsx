import React from 'react'

import { Button } from './ui/button'
import { ThemeChanger } from './ThemeChanger'

const PageHeader = () => {
  return (
    <>
      <nav className='absolute z-50 mx-auto w-full py-5'>
        <div className='container flex justify-between'>
          <h3
            data-cursor='-inverse -md -exclusion'
            className='cursor-pointer text-2xl font-semibold tracking-tight dark:text-text'>
            Sagar
          </h3>
          <ul className='flex items-center gap-16 font-sora'>
            <li
              data-cursor='-inverse -md -exclusion'
              className='cursor-pointer mix-blend-multiply hover:text-dark hover:underline'>
              Dribbble
            </li>
            <li
              data-cursor='-inverse -md -exclusion'
              className='cursor-pointer hover:text-dark hover:underline'>
              LinkedIn
            </li>
            <li>
              <ThemeChanger />
            </li>
            <li>
              <Button
                data-cursor='-inverse -md -exclusion'
                variant='default'>
                Contact
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default PageHeader
