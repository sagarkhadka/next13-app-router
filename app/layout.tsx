'use client'

import { useEffect } from 'react'
import { Manrope, Sora } from '@next/font/google'
import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'

import PageHeader from '@components/PageHeader'
import '@styles/global.scss'

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--manrope'
})

const sora = Sora({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--sora'
})

export const metadata = {
  title: 'Sagar Khadka',
  description: 'Frontend developer with experience in UI design as well'
}

interface RootLayoutProps {
  children: React.ReactNode
}

MouseFollower.registerGSAP(gsap)

const RootLayout = ({ children }: RootLayoutProps) => {
  useEffect(() => {
    const cursor = new MouseFollower()

    return () => cursor.destroy()
  }, [])

  return (
    <html
      lang='en'
      className={`${manrope.variable} ${sora.variable} font-sans`}>
      {/* <style
        jsx
        global>
        html{' '}
        {`
          --manrope: ${manrope.style.fontFamily};
          --sora: ${sora.style.fontFamily};
        `}
      </style> */}

      <body className='font-sora'>
        <PageHeader />
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout
