'use client'

import { useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import { useIsomorphicLayoutEffect } from '@utils/isomorphicLayout'

const AnimatedHeading = ({ children }: { children: React.ReactNode }) => {
  const elRef = useRef<HTMLDivElement>(null)

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      const children = elRef.current?.children

      if (children) {
        gsap.from(children, {
          autoAlpha: 0,
          y: 100,
          ease: 'power4.easeIn',
          duration: 0.5,
          skewY: 5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: elRef.current,
            start: 'top bottom-=150px',
            end: 'top bottom',
            toggleActions: 'play none none reverse',
            markers: false
            // onEnter: () => ScrollTrigger.refresh(true)
          }
        })
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      <div className='relative overflow-hidden'>
        <div ref={elRef}>{children}</div>
      </div>
    </>
  )
}

export default AnimatedHeading
