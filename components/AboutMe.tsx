'use client'

import React, { useRef } from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

import AnimatedHeading from './animations/AnimatedHeading'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  const paraRef = useRef<HTMLParagraphElement | null>(null)

  useGSAP(
    () => {
      if (paraRef.current) {
        const description = SplitType.create(paraRef.current, {
          types: 'words, chars',
          wordClass: 'desc-word'
        })

        const tl: GSAPTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: paraRef.current,
            start: 'top bottom-=100px',
            end: 'center top+=100px',
            toggleActions: 'play none none reverse',
            scrub: 2,
            markers: false
          }
        })

        tl.from(description.chars, {
          autoAlpha: 0,
          duration: 1,
          ease: 'back.out(1.7)',
          stagger: 0.01
        })
      }
    },
    { scope: '.para' }
  )

  return (
    <>
      <section className='container py-20'>
        <AnimatedHeading>
          <h2 className='section-heading'>About Me</h2>
        </AnimatedHeading>
        <p
          ref={paraRef}
          className='para mt-6 font-manrope text-5xl font-semibold leading-snug text-dark dark:text-light-gray md:text-6xl'
        >
          As a former UI designer who turned frontend developer, I possess a
          unique blend of skills that allows me to create clean and visually
          appealing UI designs and seamlessly translate them into code. With my
          experties in React.js and Next.js, I build high-performance and
          engaging web applications that deliver exceptional user experiences.
        </p>
      </section>
    </>
  )
}

export default AboutMe
