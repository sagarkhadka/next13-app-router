'use client'

import React, { useLayoutEffect, useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

// gsap types
import { GSAPTimeline } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const paraRef = useRef<HTMLParagraphElement | null>(null)

  useLayoutEffect(() => {
    if (paraRef.current) {
      const description = SplitType.create(paraRef.current, {
        types: 'words, chars'
      })
    }

    const ctx = gsap.context(() => {
      const tl: GSAPTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: paraRef.current,
          start: 'top bottom-=200px',
          end: 'bottom top+=300px',
          toggleActions: 'play none none reset',
          scrub: 1,
          markers: true
        }
      })

      tl.from(paraRef.current?.children, {
        x: -80,
        autoAlpha: 0,
        duration: 1,
        ease: 'power4',
        stagger: 0.01
      })
    }, paraRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      <section className='container py-20'>
        <h2 className='mb-6 text-3xl font-semibold text-light-gray'>About Me</h2>
        <p
          ref={paraRef}
          className='font-manrope text-5xl font-semibold leading-snug text-dark md:text-6xl'>
          As a former UI designer who turned frontend developer, I possess a unique blend of skills
          that allows me to create clean and visually appealing UI designs and seamlessly translate
          them into code. With my experties in React.js and Next.js, I build high-performance and
          engaging web applications that deliver exceptional user experiences.
        </p>
      </section>
    </>
  )
}

export default AboutMe
