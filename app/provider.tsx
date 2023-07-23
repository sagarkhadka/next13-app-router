'use client'

import React, { useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import { type ThemeProviderProps } from 'next-themes/dist/types'
import { gsap } from 'gsap'
import MouseFollower from 'mouse-follower'

MouseFollower.registerGSAP(gsap)

const Provider = ({ children, ...props }: ThemeProviderProps) => {
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

  useEffect(() => {
    const cursor = new MouseFollower()

    return () => cursor.destroy()
  }, [])

  useEffect(() => {
    const loco = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default
      const locomotiveScroll = new LocomotiveScroll()
    }

    loco()
  }, [])

  return <ThemeProvider {...props}>{children}</ThemeProvider>
}

export default Provider
