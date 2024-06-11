'use client'

import { useLayoutEffect, useRef } from 'react'
import React from 'react'
import SplitType from 'split-type'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

const MainHero = () => {
  let headingRef = useRef<HTMLHeadingElement | null>(null)
  let infoRef = useRef<HTMLHeadingElement | null>(null)

  useGSAP(
    () => {
      if (headingRef.current && infoRef.current) {
        const heading = SplitType.create(headingRef.current, {
          types: 'chars, words, lines',
          lineClass: 'banner_line'
        })

        const info = SplitType.create(infoRef.current, {
          types: 'chars, words, lines'
        })

        const tl: GSAPTimeline = gsap.timeline()

        tl.from(heading.words, {
          y: 80,
          autoALpha: 0,
          duration: 1,
          ease: 'power4',
          stagger: 0.05
        }).from(
          info.words,
          {
            y: 100,
            autoAlpha: 0,
            duration: 1,
            ease: 'power4',
            stagger: 0.01
          },
          '-=0.8'
        )
      }
    },
    {
      scope: '.wrapper'
    }
  )

  return (
    <>
      <section className='relative isolate overflow-hidden'>
        <div className='container pt-24 md:pt-0'>
          <div className='wrapper flex min-h-screen flex-col items-center gap-16 md:h-full md:flex-row'>
            <div className='space-y-8'>
              <div className='sm:max-w-[75ch]'>
                <h1
                  data-scroll
                  data-scroll-speed='0.05'
                  ref={headingRef}
                  className='head font-manrope text-6xl font-bold leading-tight text-dark dark:text-primary'
                >
                  A frontend developer passionate about creating beautiful user
                  friendly UI
                </h1>
              </div>
              <div className='sm:max-w-[60ch]'>
                <p
                  data-scroll
                  data-scroll-speed='0.1'
                  ref={infoRef}
                  className='relative text-xl text-light-gray'
                >
                  Hi, I&apos;m Sagar Khadka, a passionate Front-End React
                  Developer based in Nepal. With my knowledge of UI design and
                  frontend development I can create good looking, responsive and
                  user friendly sites.
                </p>
              </div>
            </div>
            {/* <div
              data-scroll
              data-scroll-speed='0.04'
              className='next absolute right-44 top-1/2 aspect-video h-14 cursor-pointer'>
              <Image
                src='/assets/images/next-js.svg'
                alt=''
                fill
                className='object-contain'
              />
            </div>
            <div
              data-scroll
              data-scroll-speed='0.1'
              className='absolute left-24 top-64 aspect-video h-16 cursor-pointer'>
              <Image
                src='/assets/images/react.svg'
                alt=''
                fill
                className='react object-contain'
              />
            </div>
            <div
              data-scroll
              data-scroll-speed='0.1'
              className='tailwind absolute left-1/3 top-24 aspect-video h-10 cursor-pointer'>
              <Image
                src='/assets/images/tailwindcss.svg'
                alt=''
                fill
                className='object-contain'
              />
            </div>
            <div
              data-scroll
              data-scroll-speed='0.3'
              className='gsap absolute bottom-28 right-64 aspect-video h-20 cursor-pointer'>
              <Image
                src='/assets/images/gsap-greensock.svg'
                alt=''
                fill
                className='object-contain'
              />
            </div>
            <div
              data-scroll
              data-scroll-speed='0.6'
              className='redux absolute bottom-16 left-72 aspect-video h-12 cursor-pointer'>
              <Image
                src='/assets/images/redux.svg'
                alt=''
                fill
                className='object-contain'
              />
            </div>
            <div
              data-scroll
              data-scroll-speed='0.2'
              className='sass absolute right-64 top-28 aspect-video h-12 cursor-pointer'>
              <Image
                src='/assets/images/sass.svg'
                alt=''
                fill
                className='object-contain'
              />
            </div> */}
            {/* <div className='flex w-full justify-center md:w-fit md:flex-grow md:items-center'>
              <div className='w-full space-y-6'>
                <h5>My Tech Stack</h5>
                <div className='grid grid-cols-3 place-items-center gap-10'>
                  <div
                    data-cursor-text='React Js'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/react.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Next Js'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/next-js.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Tailwind CSS'
                    className='relative aspect-video h-10 cursor-pointer'>
                    <Image
                      src='/assets/images/tailwindcss.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='GSAP'
                    className='relative aspect-video h-14 cursor-pointer'>
                    <Image
                      src='/assets/images/gsap-greensock.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='Redux Toolkit'
                    className='relative aspect-video h-12 cursor-pointer'>
                    <Image
                      src='/assets/images/redux.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                  <div
                    data-cursor-text='SASS/ SCSS'
                    className='relative aspect-video h-12 cursor-pointer'>
                    <Image
                      src='/assets/images/sass.svg'
                      alt=''
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className='absolute right-0 top-10 -z-10'>
          <Image
            src='/assets/images/layer-blur.svg'
            alt=''
            height={550}
            width={550}
            className='object-contain'
          />
        </div> */}
      </section>
    </>
  )
}

export default MainHero
