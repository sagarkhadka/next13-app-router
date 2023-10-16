import React from 'react'

import { Button } from './ui/button'
import { ThemeChanger } from './ThemeChanger'
import Link from 'next/link'

const PageHeader = () => {
  return (
    <>
      <nav className='absolute z-50 mx-auto w-full py-5'>
        <div className='container flex justify-between'>
          <h3
            data-cursor='-inverse -md'
            className='cursor-pointer text-2xl font-semibold tracking-tight dark:text-text'>
            Sagar
          </h3>
          <ul className='flex items-center gap-16 font-sora'>
            <li
              data-cursor='-inverse -md'
              className='cursor-pointer hover:underline'>
              <Link href='https://dribbble.com/sagarkdk' target='_blank'>
                Dribbble
              </Link>
            </li>
            <li
              data-cursor='-inverse -md'
              className='cursor-pointer hover:underline'>
              <Link
                href='https://www.linkedin.com/in/sagar-khadka-1b636623a/'
                target='_blank'>
                LinkedIn
              </Link>
            </li>
            <li>
              <ThemeChanger />
            </li>
            <li>
              <Button data-cursor='-inverse -md' variant='default'>
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
