'use client'

import { useEffect } from 'react'
import AboutMe from '@components/AboutMe'
import MainHero from '@components/MainHero'
import MyWorks from '@components/MyWorks'

export const metadata = {
  title: 'Sagar Khadka',
  description: 'Frontend developer with experience in UI design as well'
}

//   when using lennis for smooth scroll
//   useEffect(() => {
//     const lenis = new Lenis({
//       duration: 1.2,
//       easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
//       direction: 'vertical',
//       mouseMultiplier: 1,
//       smoothTouch: false,
//       touchMultiplier: 2,
//       infinite: false
//     })
//
//     function raf(time: Number) {
//       lenis.raf(time)
//       requestAnimationFrame(raf)
//     }
//
//     requestAnimationFrame(raf)
//   }, [])

const page = () => {
  useEffect(() => {
    // ;(async () => {
    //   const LocomotiveScroll = (await import('locomotive-scroll')).default
    //   const locomotiveScroll = new LocomotiveScroll()
    // })()
    const loco = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    }

    loco()
  }, [])

  return (
    <>
      <MainHero />
      <AboutMe />
      <MyWorks />
    </>
  )
}

export default page
